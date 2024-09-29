import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string | null = localStorage.getItem('userName');
  userColor: string | null = localStorage.getItem('userColor');
}
