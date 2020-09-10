import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeesService } from '../employees.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  emp:Emp;
  images=["../../assets/emos/emo1.png","../../assets/emos/emo2.png","../../assets/emos/emo3.png","../../assets/emo/emo4.png","../../assets/emos/emo5.png","../../assets/emos/emo6.png","../../assets/emos/emo7.png","../../assets/emos/emo8.png","../../assets/emos/emo9.png","../../assets/emos/emo10.png","../../assets/emos/emo11.png","../../assets/emos/emo12.png","../../assets/emos/emo13.png","../../assets/emos/emo14.png","../../assets/emos/emo15.png","../../assets/emos/emo16.png","../../assets/emos/emo17.png","../../assets/emos/emo18.png","../../assets/emos/emo19.png","../../assets/emos/emo20.png","../../assets/emos/emo21.png","../../assets/emos/emo22.png","../../assets/emos/emo23.png","../../assets/emos/emo24.png"]

  constructor( private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private location: Location) { }

  ngOnInit(): void {
  	this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeesService.getEmp(id)
      .subscribe(data => this.emp = data.data);
  }

  goBack(): void {
    this.location.back();
  }

}
