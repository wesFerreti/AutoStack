import { Injectable } from '@angular/core';
import { IDepartment } from './idepartment';
import { RoleService } from '../role/role.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:IDepartment[];
  private department:IDepartment;
  constructor(private roleService: RoleService,private http: HttpClient) { }

  getDepartments():IDepartment[]{ 
    this.departments = 
    [{'name':'Engenharia','roles':this.roleService.getRolesEng(),'id':1},
    {'name':'Administração','roles':this.roleService.getRolesAdm(),'id':2}]; 
    console.log(JSON.stringify(this.departments));     
     return this.departments;
  }

  getDepartmentsHttp():Observable<string>{
      console.log(this.http.get<string>("192.168.1.37:50891/api/department"));
      return this.http.get<string>("");
  }


  getDepartmentIdByName(name:string):number{ 
    //Requisição http by name
    if (name=="Engenharia") {
      this.department = {'name':'Engenharia','roles':this.roleService.getRolesEng(),'id':1};  
    }else{
      this.department = {'name':'Administração','roles':this.roleService.getRolesAdm(),'id':2};
    }  
    return this.department.id;
  }
  

}
