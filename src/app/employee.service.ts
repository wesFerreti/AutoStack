import { Injectable } from '@angular/core';
import { IEmployee } from './Iemployee';
import { DepartmentService } from './department.service';
import { IRole } from './irole';
import { IDepartment } from './idepartment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  
  public employee: IEmployee = {
    "name" : 'wesley',
    "lastName":'ferreti',
    "email":'wesley.ferreti@hotmail.com',
    "department": {'name':'Engenharia', 'roles':[{'name':'Analista de sistemas'}]},
    "role":{'name':'Analista de sistemas'}
  };
   
  constructor() {

  }

  public getRole():IRole{
    return this.employee.role;
  }
  public getName():string{
    return this.employee.name;
  }
  public getLastName():string{
    return this.employee.lastName;
  }
  public getDepartment():IDepartment{
    return this.employee.department;
  }

  public setEmployeeName(name:string){
    this.employee.name = name;
  }

  public setEmployeeLastName(lastName:string){
    this.employee.lastName = lastName;
  }

  public setEmployeeEmail(email:string){
    this.employee.email = email;
  }

  public getEmployee(){
    console.log(this.employee);
    console.log(JSON.stringify(this.employee));
  }



}
