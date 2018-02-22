import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import nodeServerURL from '../nodeServerURL'; //storing the nodeServerURL information in a seperate namespace


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    register(user) {
        return this.http.post(nodeServerURL+'/users/register', user);
    }

    login(user) {
        return this.http.post(nodeServerURL+'/users/login', user);
    }

}
