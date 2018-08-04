import { Injectable } from '@angular/core';
import { IDepartment } from './idepartment';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:IDepartment[];
  private department:IDepartment;
  constructor(private role: RoleService) { }

  getDepartments():IDepartment[]{ 
    this.departments = 
    [{'name':'Engenharia','roles':this.role.getRolesEng()},
    {'name':'Administração','roles':this.role.getRolesAdm()}];      
     return this.departments;
  }
  getDepartment(ID:number):IDepartment{ 
    this.department = {'name':'Engenharia','roles':this.role.getRolesEng()};      
    return this.department;
  }

}
