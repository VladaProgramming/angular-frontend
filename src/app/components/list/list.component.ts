import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  displayedColumns = ['first_name', 'last_name', 'Telephone', 'actions'];

  constructor(private usersService: UsersService, private router: Router) {  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('Data requested...');
      console.log(this.users);
    });
  }

  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    });
  }

}
