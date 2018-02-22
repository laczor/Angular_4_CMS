import { Component, OnInit } from '@angular/core';               //To implement component
import { PageService } from './../../services/page.service';     //In order to make http requests


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(public pageService: PageService) { }            //inject service Object

    pages: any;
    user: string;

    get userLoggedIn() {
        if (localStorage.getItem("user")) {
            this.user = localStorage.getItem("user").replace(/\"/g, "");
            return true;
        }
        return false;
    }

// making the http request, than subscribing to the observable which we will get
// update the pagesBS (BehaviorSubject), to store centrally the pages
// Then we update thi component's pages
    ngOnInit() {
        this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
            this.pages = this.pageService.pagesBS;
        });
    }

}
