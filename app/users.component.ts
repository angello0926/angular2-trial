import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { UserService} from './users.service';


@Component ({
  selector: 'users',
  template: `
     <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.company.name}}</td>
          <td><span class="glyphicon glyphicon-edit"></span></td>
          <td><span class="glyphicon glyphicon-remove"></span></td>
        </tr>
  `,
  styles:[`
     table{
       margin-left: 50px;
     }

     td{
       width:300px;
     }
  `],
  providers: [UserService]
})


export class UsersComponent implements OnInit {
  users:string[];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe( res => this.users=res);
  };
  
  

}