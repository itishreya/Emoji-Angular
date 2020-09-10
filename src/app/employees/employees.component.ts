import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Emp } from '../emp';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  arrEmps:Emp[]=[];
  selectedEmployeeId: number = null;


  constructor(private user: UserService,  private router: Router, private employeesService: EmployeesService) { }

  ngOnInit() {
  	this.getEmployees();
  }

  getEmployees(): void {
    this.employeesService.getEmployees()
      .subscribe(
        data => this.arrEmps = data.data);
  }

  onSelect(emp) {
        this.selectedEmployeeId = emp.id;
    }

}
