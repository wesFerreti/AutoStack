import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';
import { IDepartment } from '../department/idepartment';
import { IRole } from '../role/irole';
import { IEmployee } from '../employee/Iemployee';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  employee:IEmployee;
  employeeName:string;
  employeeLastName:string;
  employeeEmail: string;
  employeeRoleID:number;
  employeeDepartmentID:number;
  employeeCep;
  endereco;
  roles: IRole[];
  departments: IDepartment[];
  selectedDepartmentName:string;
  selectedRoleName:string;
  dep;

  constructor(private employeeService: EmployeeService,private departmentService: DepartmentService, private roleService: RoleService) { 

  }
  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
    this.employee = this.employeeService.getDefaultEmployee();
    this.departmentService.getDepartmentsHttp().subscribe(blabla=>{
      this.dep = JSON.stringify(blabla);
      console.log(this.dep);
      console.log(this.endereco);
    });
    
  }

  updateRoles(departmentSelected:string){
    console.log(departmentSelected);
    this.roles = this.roleService.getRolesByDepartmentName(this.selectedDepartmentName);
    
  }

  getEndereco(){

    this.employeeService.getEndViaCep(this.employeeCep).subscribe(endereco=>{
      this.endereco = JSON.stringify(endereco);
      console.log(this.employeeCep);
      console.log(this.endereco);

    });

  }
  newEmployee(){
    this.employee.name = this.employeeName;
    this.employee.lastName = this.employeeLastName;
    this.employee.email = this.employeeEmail;
    this.employee.departmentID = this.departmentService.getDepartmentIdByName(this.selectedDepartmentName);
    this.employee.roleID = this.roleService.getRoleIdByName(this.selectedRoleName);
    this.employeeService.postEmployee(this.employee).subscribe();

    }

}
