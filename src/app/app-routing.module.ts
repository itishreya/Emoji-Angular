import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{ path: '', component: NavbarComponent}, { path: '', component: LoginComponent }, { path: 'employees', canActivate: [AuthGuard], runGuardsAndResolvers: 'always', component: EmployeesComponent }, { path: 'employee/:id', canActivate: [AuthGuard], runGuardsAndResolvers: 'always', component: EmployeeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
