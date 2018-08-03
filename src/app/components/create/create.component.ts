import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      first: ['', Validators.required],
      last: '',
      telephone: ''
    });
   }

   addUser(first, last, telephone) {
     this.usersService.addUser(first, last, telephone).subscribe(() => {
        this.router.navigate(['/list']);
     });
   }


  ngOnInit() {
  }

}
