import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
// The HTML helds a template driven form with validation, which will call register function on submit
export class RegisterComponent implements OnInit {

    userExists: boolean = false;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }
//if userdata can be found in the localstorage, navigate to the main page
    ngOnInit() {
        if (localStorage.getItem("user")) this.router.navigateByUrl('');
    }
//the templatedriven form, will call on submit this register function
//Will check the database, and if the user is registered, it will display a message
//else it will store that userRegistered in the localStorage, and navigate to the login
    register({ value, valid }) {
        if (valid) {
            this.userService.register(value).subscribe(res => {
                if (res == 'userExists') {
                    this.userExists = true;
                    setTimeout(function() {
                        this.userExists = false;
                    }.bind(this),2000);
                } else {
                    localStorage.setItem("userRegistered", "true");
                    this.router.navigateByUrl('login');
                }
            });
        } else {
            console.log('Form is not valid.');
        }
    }

}
