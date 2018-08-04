import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { IDepartment } from '../idepartment';
import { IRole } from '../irole';
@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  name:string;
  lastName:string;
  departments: IDepartment[];
  roles: IRole[];
  departmentSelected:boolean = false;
  constructor(private employeeService: EmployeeService,private departmentService: DepartmentService) { 

  }


  ngOnInit() {
    this.name = this.employeeService.getName();
    this.lastName = this.employeeService.getLastName();
    this.departments = this.departmentService.getDepartments();
  }

  updateRoles(selected){
    console.log(selected);
    this.departmentSelected=true;
    this.departments.forEach(element => {
      if (element.name==selected) {
        this.roles = element.roles
      }
    });


  }


}
