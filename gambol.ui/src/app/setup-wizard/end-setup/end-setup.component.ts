import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-setup',
  templateUrl: './end-setup.component.html',
  styleUrls: ['./end-setup.component.css'],
})
export class EndSetupComponent {
  setupComplete = false;

  constructor(private router: Router) {}

  finishSetup() {
    this.setupComplete = true;
    localStorage.setItem('setupComplete', String(this.setupComplete));
    this.router.navigate(['/']);
  }
}
