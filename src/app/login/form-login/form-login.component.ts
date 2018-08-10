import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Ilogin } from '../ilogin';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  login: Ilogin;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.login = this.loginService.getDefaultLogin();
  }

  public tryToLogin(){
    console.log(this.login);
}

}
