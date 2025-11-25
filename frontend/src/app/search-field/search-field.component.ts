import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Output() searchChanged = new EventEmitter<{ key: string; value: string }>();

  onChange() {
    const select = document.querySelector('#custom-select') as HTMLSelectElement;
    const input = document.querySelector('#searchInput') as HTMLInputElement;

    this.searchChanged.emit({
      key: select.value,
      value: input.value
    });
  }
}
