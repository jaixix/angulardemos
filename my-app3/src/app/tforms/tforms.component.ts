import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {
  genders = ['Male', 'Female'];
  defaultQuestion = 'pet';
  submitted = false;

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.user.userName = form.value.userData.userName;
    this.user.email = form.value.userData.email;
    this.user.secret = form.value.userData.secret;
    this.user.gender = form.value.userData.gender;
    this.submitted = true;
  }

  user = {
    userName : '',
    email : '',
    secret : '',
    gender : '',
  }
}
