import { Injectable } from '@angular/core';
import { IEmployee } from './Iemployee';
import { IRole } from './irole';
import { IDepartment } from './idepartment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  
  private employee: IEmployee = {
    "name" : 'wesley',
    "lastName":'ferreti',
    "email":'wesley.ferreti@hotmail.com',
    "departmentID": 0,
    "roleID":0,
    "id": 0
  };
   
  constructor() {

  }

  public postEmployee(employee: IEmployee){
    console.log(employee);
    console.log(JSON.stringify(employee));
  }

  public updateEmployee(employee: IEmployee){

  }


  public getDefaultEmployee(){
    console.log(JSON.stringify(this.employee));
    return this.employee;
  }

  public getEmployeeByCPF(cpf:number):IEmployee{
    //http to get employee
    return this.employee;

  }



}
