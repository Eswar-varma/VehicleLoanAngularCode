import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user/User';
import { UserhomeService } from '../userhome.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  title = "For User Operations";
  userdetails : User= {} as any;
  userdetails2 : User= {} as any;
  user = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    full_Name:new FormControl(''),
    gender: new FormControl('') ,
    age : new FormControl(''),
    phoneno:new FormControl('',[Validators.required]),
    addr : new FormControl(''),
    state : new FormControl(''),
    city : new FormControl(''),
    pin : new FormControl(''),
    emp_type: new FormControl(''),
    salary: new FormControl(''),
    aadhar : new FormControl('',[Validators.required]),
    pan: new FormControl('',[Validators.required])

  })
  constructor(private uservice:UserhomeService,private tokenStorageService: TokenStorageService) { }
  
  // @Output() sendToParent = new EventEmitter();

  formVisible = false;
  popupVisible = false;
  editbutton = true;
  email : any;

  ngOnInit(): void {
    console.log("Eswar");
    this.userdetails2 = this.tokenStorageService.getUser();
    //this.userdetails = this.tokenStorageService.getUser();
    console.log(this.userdetails2.user_email);
    this.onEdit();
    this.email=this.userdetails.user_email;
  }
  onSubmit(){
    this.uservice.update(this.userdetails);
    this.formVisible = false;
    this.popupVisible = true;
    this.editbutton = false;
  }
  onEdit(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
    this.formVisible = true;
    console.log("onEdit");
    return this.uservice.getByEmail().subscribe(((data: any) => {
      this.userdetails = data;
      console.log(this.userdetails);
    }));
  }
}
