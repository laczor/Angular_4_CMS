import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SidebarService } from './../../services/sidebar.service';

declare var CKEDITOR: any;

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

    content: string;                    //to store the created content as string
    successMsg: boolean = false;        // to display error if any in the html

    constructor(
        private router: Router,
        private sidebarService: SidebarService
    ) { }

    ngOnInit() {
// check if the user logged in or not, if yes go to the CKEDITOR
        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        } else {
            CKEDITOR.replace('content');
        }
// + fetch the sidebar
        this.sidebarService.getSidebar().subscribe(res => {
            this.content = res.content;
        });

    }
// get the CKEDITOR data 
    editSidebar({ value }) {
        value.content = CKEDITOR.instances.content.getData();
// Save the sidebar saving
        this.sidebarService.postSidebar(value).subscribe(res => {
            this.successMsg = true;
            setTimeout(function () {
                this.successMsg = false;
            }.bind(this), 2000);
        });
    }

}
