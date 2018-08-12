import { Injectable } from '@angular/core';
import { Ilogin } from './ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login: Ilogin = {email:null,password:null};

  constructor() { }

  public tryToLogin(login:Ilogin){
      console.log(login);
  }
  
  public getDefaultLogin(){
    return this.login;
  }

  

}


