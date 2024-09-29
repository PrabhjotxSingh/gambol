import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-entry',
  templateUrl: './color-entry.component.html',
  styleUrls: ['./color-entry.component.css'],
})
export class ColorEntryComponent {
  userColor: string = '';
  selectedColor = '#000000';

  constructor(private router: Router) {}

  setColor() {
    localStorage.setItem('userColor', this.selectedColor);
    this.router.navigate(['/setup-wizard/end-setup']);
  }
}
