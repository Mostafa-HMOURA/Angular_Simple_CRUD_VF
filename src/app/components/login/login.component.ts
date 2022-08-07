import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm  = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
  })
  

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res))
    //console.log(this.loginForm.value);
  }

  handleResponse(res:any){
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/address");
  }

}
