import { Component, AfterViewChecked, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewChecked, OnInit {
  showNavbar = true;
  isOpen: boolean = false;
  isAdmin = false;
  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2,
    private readonly tokenService: TokenService
  ) {
    // hide navbar on login/register
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe((evt: any) => {
      const url = evt.urlAfterRedirects || evt.url;
      this.showNavbar = !(url === '/login' || url === '/register');
    });
  }
  ngOnInit(): void {
    this.updateAdminFlag();
    // update admin flag on navigation (in case user changed)
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => this.updateAdminFlag());
  }
  ngAfterViewChecked() {
    this.movePointer(); // Überprüft das DOM nach jeder Änderung
  }

  logout(){
    // clear token when logging out
    this.tokenService.clear();
    this.router.navigateByUrl('/login');
  }

  movePointer() {
   
      const activeLink = document.querySelector('.link.active a'); // Korrekt für Angular
      const pointer = document.getElementById('pointer');

      if (activeLink && pointer) {
        const linkRect = activeLink.getBoundingClientRect();
        const parentRect = document.getElementById('itemsBox')?.getBoundingClientRect();


        if (parentRect) {
          const leftOffset = linkRect.left - parentRect.left;
          const centerOffset = linkRect.width / 2 - 15; // 30px ist die Pointer-Breite
          this.renderer.setStyle(pointer, 'left', `${leftOffset + centerOffset}px`);
          this.renderer.setStyle(pointer, 'top', `calc(100% - 5px)`); // Positionierung unter der Navbar
        }
      }
  
  }


  menuOpen(){
   this.isOpen = !this.isOpen;
  }

  private updateAdminFlag() {
    const role = this.tokenService.getRole();
    if (role === 3) {
      this.isAdmin = true;
    }
  }

}
