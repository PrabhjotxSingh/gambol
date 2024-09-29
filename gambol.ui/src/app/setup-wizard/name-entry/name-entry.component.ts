import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-entry',
  templateUrl: './name-entry.component.html',
  styleUrls: ['./name-entry.component.css'],
})
export class NameEntryComponent {
  userName: string = '';

  constructor(private router: Router) {}

  submitName() {
    if (this.userName.trim() == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Looks like your username was not set!',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#000',
      });
    } else {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['setup-wizard/color-entry/']);
    }
  }
}
