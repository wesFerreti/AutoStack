import { Injectable } from '@angular/core';
import { Ilogin } from './ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: Ilogin = {name:'wesferret',password:'padrao'};
  constructor() { }

  tryToLogin(login:Ilogin){
      console.log(login);
  }

  

}


