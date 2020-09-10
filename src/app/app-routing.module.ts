import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{ path: '', component: NavbarComponent}, { path: '', component: LoginComponent }, { path: 'employees', canActivate: [AuthGuard],component: EmployeesComponent }, { path: 'employee/:id', canActivate: [AuthGuard], component: EmployeeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
