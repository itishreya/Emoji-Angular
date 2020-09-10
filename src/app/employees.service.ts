import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Emp } from './emp';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS"
    })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  private employeesUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  private employeeUrl='http://dummy.restapiexample.com/api/v1/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return this.http.get(proxyurl+this.employeesUrl, httpOptions);
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
    return this.http.get(proxyurl+this.employeeUrl+'/'+id, httpOptions);
  }


}
