import { Component, AfterViewChecked, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewChecked {
  constructor(private router: Router, private renderer: Renderer2) {}
   isOpen: boolean = false;
  ngAfterViewChecked() {
    this.movePointer(); // Überprüft das DOM nach jeder Änderung
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
}
