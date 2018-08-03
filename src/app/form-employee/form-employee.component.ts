import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  name:string;

  constructor(private employeeService: EmployeeService) { 
    this.name = ';s';
  }
   





  ngOnInit() {
    this.name = this.employeeService.getEmployee();
  }

}
