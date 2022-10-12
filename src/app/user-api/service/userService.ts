import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, pipe } from "rxjs";
import { User } from "../model/user";

@Injectable()
export class UserService {
    constructor(private http: HttpClient){

    }    

    getUser(): Observable<User> {
        return  this.http.get('https://dummyjson.com/products/1')
        .pipe(
            map((response: any) => response),
        )
    }
}