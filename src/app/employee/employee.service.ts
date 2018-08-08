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
    console.log(JSON.stringify(employee));
    return this.http.post<IEmployee>(this.employeeUrl, employee, this.httpOptions)
  }

  public updateEmployee(employee: IEmployee){
    
  }


  public getDefaultEmployee():IEmployee{
    console.log(JSON.stringify(this.employee));
    return this.employee;
  }

  public getEmployeeByCPF(cpf:string):IEmployee{
    //http to get employee
    return this.employee;

  }
  
  public getAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  } 



  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



}
