import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-splash',
  templateUrl: './welcome-splash.component.html',
  styleUrls: ['./welcome-splash.component.css'],
})
export class WelcomeSplashComponent {
  setupComplete: boolean = Boolean(localStorage.getItem('setupComplete'));

  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      if (this.setupComplete == true) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/setup-wizard/start-setup']);
      }
    }, 5000);
  }
}
