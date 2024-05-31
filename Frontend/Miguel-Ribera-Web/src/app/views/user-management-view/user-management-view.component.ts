import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnauthorizedComponent } from '../../unauthorized/unauthorized.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-management-view',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UnauthorizedComponent],
  templateUrl: './user-management-view.component.html',
  styleUrl: './user-management-view.component.css',
})
export class UserManagementViewComponent {
  constructor(private cookies: CookieService) {}

  user!: string;

  users!: Array<any>;
  editing!: string;
  ngOnInit(): void {
    this.user = this.cookies.get('user');

    if (this.user === 'admin') {
      fetch('https://miguel-ribera-backend-firebase.onrender.com/users/')
        .then((res) => res.json())
        .then((res) => {
          this.users = res;
        });
    }
  }

  saveUser(user: any) {
    this.editing = '';
    fetch(
      `https://miguel-ribera-backend-firebase.onrender.com/users/update/${user?.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    ).then((res) => {});
  }

  deleteUser(user: string) {
    this.editing = '';
    fetch(
      `https://miguel-ribera-backend-firebase.onrender.com/users/delete/${user}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.users = this.users.filter(
          (userChecking) => userChecking.id !== user
        );
      });
  }
}
