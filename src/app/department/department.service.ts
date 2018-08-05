import { Injectable } from '@angular/core';
import { IDepartment } from './idepartment';
import { RoleService } from '../role/role.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:IDepartment[];
  private department:IDepartment;
  constructor(private roleService: RoleService) { }

  getDepartments():IDepartment[]{ 
    this.departments = 
    [{'name':'Engenharia','roles':this.roleService.getRolesEng(),'id':1},
    {'name':'Administração','roles':this.roleService.getRolesAdm(),'id':2}];      
     return this.departments;
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
