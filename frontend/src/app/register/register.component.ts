import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms"
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  constructor(private  authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.minLength(2)]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      phone: new FormControl("", [Validators.required, Validators.minLength(7)])
    })
  }

  register(): void{
    this.authService.register(this.registerForm.value).subscribe((msg) => {
      console.log(msg);
      if (msg != undefined){
        this.router.navigate(["login"]);
      }
      else{
        alert("Invalid user credentials")
      }
    });
  }
}
