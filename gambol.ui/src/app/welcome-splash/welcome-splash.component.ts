import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-splash',
  templateUrl: './welcome-splash.component.html',
  styleUrls: ['./welcome-splash.component.css'],
})
export class WelcomeSplashComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/setup-wizard/start-setup']);
    }, 5000);
  }
}
