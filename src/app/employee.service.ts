import { Injectable } from '@angular/core';
import { IEmployee } from './Iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  public employee: IEmployee = {
    "name" : 'nome',
    "lastName":'sobrenome',
    "login":'login',
    "email":'senha',
    "password":'pass'
  };
  
  constructor() {
  }

  public setEmployeeName(name:string){
    this.employee.name = name;
  }
  public getEmployee(){
    return this.employee.name;
  }

}
