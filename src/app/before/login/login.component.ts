import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,ReactiveFormsModule, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  firstName: any;
  password: any;
  loginForm: any;

  constructor(private formBuilder:FormBuilder,private router:Router,private toolbars : ToolbarService) {
    this.toolbars.setshowToolBar(false);
   }

  ngOnInit(): void {
    
    this.email=new FormControl('',[Validators.required]);
    this.password=new FormControl('',[Validators.required]);
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  });
  }
  loginuser() {
    this.email = this.loginForm.get('email').value;
    this.password = this.loginForm.get('password').value;
    console.log(this.password);
    localStorage.setItem('connected', 'true');
    this.toolbars.setshowToolBar(true);
    this.router.navigate(["index"]);
  }

}
