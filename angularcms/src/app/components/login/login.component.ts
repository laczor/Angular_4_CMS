import { Router } from '@angular/router';                       //for programatically routing away
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';    //simply just put userdata

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
// simply template driven from + validation, which will call the login function on submit

export class LoginComponent implements OnInit {

    public loginFailed: boolean = false;            //to notify user
    public userRegistered: boolean = false;         //to notify user by changing html

    constructor(
        private router: Router,
        private userService: UserService
    ) { }
// check if the userRegistered or not
    ngOnInit() {
        if (localStorage.getItem("user")) this.router.navigateByUrl('');

        if (localStorage.getItem("userRegistered")) {
            this.userRegistered = true;
            localStorage.removeItem("userRegistered");
        }
    }
// make the http request, if the rsponse no login, -> loginFailed = false, error message display
    login({ value, valid }) {
        if (valid) {
            this.userService.login(value).subscribe(res => {
                if (res == 'invalidLogin') {
                    this.loginFailed = true;
                    setTimeout(function () {
                        this.loginFailed = false;
                    }.bind(this), 2000);
                } else {
//Else, it will set the user in the localStorage and navigate away
                    localStorage.setItem("user", JSON.stringify(res));
                    if (localStorage.getItem("user") === "\"admin\"") {
                        this.router.navigateByUrl('admin/pages');
                    } else {
                        this.router.navigateByUrl('');
                    }
                }
            });
        } else {
            console.log('Form is not valid.');
        }
    }


}
