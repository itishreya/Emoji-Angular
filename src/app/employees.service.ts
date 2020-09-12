import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Emp } from './emp';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: `Bearer ${this.user.currentUser()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS"
    })
};
  
  private employeesUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  private employeeUrl='http://dummy.restapiexample.com/api/v1/employee';

  constructor(private http: HttpClient, private user: UserService) { }

  getEmployees(): Observable<any> {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return this.http.get(proxyurl+this.employeesUrl, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmp(id: number): Observable<any> {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return this.http.get(proxyurl+this.employeeUrl+'/'+id, this.httpOptions);
  }


}
