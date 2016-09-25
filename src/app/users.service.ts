import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Users} from './users'
@Injectable()
export class UserService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';  
    
    constructor(private _http: Http) { }
   
    getUsers():Observable<any[]>{
      return this._http
       .get(this.usersUrl)
       .map((res:Response) => res.json());
    }


    

  }

