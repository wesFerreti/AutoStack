import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../../department/department.service';
import { IDepartment } from '../../department/idepartment';
import { IRole } from '../../role/irole';
import { IEmployee } from '../Iemployee';
import { RoleService } from '../../role/role.service';
import { Iaddress } from '../../address/iaddress';
import { addressService } from '../../address/address.service';


@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  employee: IEmployee;
  address: Iaddress;

  roles: IRole[];
  departments: IDepartment[];

  selectedDepartmentName: string;
  selectedRoleName: string;

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService, private roleService: RoleService, private addressService: addressService) {

  }
  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
    this.employee = this.employeeService.getDefaultEmployee();
    this.address = this.addressService.getDefaultAddress();
  }


  updateRoles() {
    this.roles = this.roleService.getRolesByDepartmentName(this.selectedDepartmentName);
  }


  public getAddress() {
    this.addressService.getAddressByPostCode(this.checkPostCode(this.address.postCode)).subscribe(
      next => this.viaCepToAddress(next));

  }

  public checkPostCode(pc) {
    return pc
  }

  public viaCepToAddress(ad) {
    this.address.city = ad.localidade;
    this.address.street = ad.logradouro;
    this.address.uf = ad.uf;
    this.address.block = ad.bairoo;
  }


  public newEmployee() {
    console.log(this.employee);
    this.employee.departmentID = this.departmentService.getDepartmentIdByName(this.selectedDepartmentName);
    this.employee.roleID = this.roleService.getRoleIdByName(this.selectedRoleName);
    this.employeeService.postEmployee(this.employee).subscribe(emp => console.log(emp));
    console.log(this.employee);

  }

}
