import { Injectable } from '@angular/core';
import { IDepartment } from './idepartment';
import { RoleService } from '../role/role.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: IDepartment[];
  private department: IDepartment;
  constructor(private roleService: RoleService, private http: HttpClient) { }

  getDepartments(): IDepartment[] {
    this.departments =
      [{ 'name': 'Engenharia', 'roles': this.roleService.getRolesEng(), 'id': 1 },
      { 'name': 'Administração', 'roles': this.roleService.getRolesAdm(), 'id': 2 }];
    return this.departments;
  }

  getDepartmentsHttp(): Observable<string> {
    return this.http.get<string>("");
  }


  getDepartmentIdByName(name: string): number {
    //Requisição http by name
    if (name == "Engenharia") {
      this.department = { 'name': 'Engenharia', 'roles': this.roleService.getRolesEng(), 'id': 1 };
    } else {
      this.department = { 'name': 'Administração', 'roles': this.roleService.getRolesAdm(), 'id': 2 };
    }
    return this.department.id;
  }


}
