import { Injectable } from '@angular/core';
import { IEmployee } from './Iemployee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  private employeeUrl = 'www.mywebserveice.com/api/products'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private employee: IEmployee = {
    "name" : null,
    "lastName":null,
    "email":null,
    "departmentID": null,
    "roleID":null,
    "id": null,
    "loginID":null,
    "cpf":null,
    "addressID":null
  };
   
  constructor(private http: HttpClient) {

  }


  public postEmployee(employee: IEmployee):Observable<IEmployee>{
    console.log(employee.email);
    return this.http.post<IEmployee>(this.employeeUrl, employee, this.httpOptions)
  }

  public updateEmployee(employee: IEmployee){
    
  }


  public getDefaultEmployee():IEmployee{
    return this.employee;
  }

  public getEmployeeByCPF(cpf:string):IEmployee{
    //http to get employee
    return this.employee;

  }
  
  public getAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  } 




}
