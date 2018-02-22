import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';           //To enable programatic routing
import { Title } from '@angular/platform-browser';                  //This is to change the title in the chrome tab
import { PageService } from './../../services/page.service';
import { SidebarService } from './../../services/sidebar.service';  //Fetch sidebar if necessary

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
// it will fetch the data for the pageBody + the sidebar from the database
// and response will be the innerHTMl in the html template
export class PagesComponent implements OnInit {

    private param: any;                     //for parameters    
    public pageBody: any;                   //PageBody    
    public pages: any;                      //storing the set of pages
    public sidebar: string;                 //Sidebar data
    public hasSidebar: boolean;             //has sidebar? does it need to show it?

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sidebarService: SidebarService,
        private pageService: PageService,
        private title: Title
    ) { }
// Get all of the recieved pages from the server
    ngOnInit() {
        this.pageService.getPages().subscribe(pages => {
            this.pages = pages;
        });
// Subscribing to the route parameters
        this.route.params.subscribe(params => {
            this.param = params['page'];
//if the param is not defined, the title will be CMS
//else the title will be converted using regex
// every "-"will be replaced with a space + every word will be converted to Uppercase
// so in the navbar it will be visible
            if (this.param === undefined) {
                this.param = 'home';
                this.title.setTitle('CMS');
            } else {
                this.title.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
            }
//make an http request using a service, if nothing recieved it will navigate to the home
// else we recieved a pageBody, a full data from the database
            this.pageService.getPage(this.param).subscribe(pageBody => {
                if (pageBody == null) {
                    this.router.navigateByUrl('');
                }
                this.pageBody = pageBody;
//if the page has sidebar, it will fetch it from the database, which is always with the same id
                if (pageBody["sidebar"] === "yes") {
                    this.hasSidebar = true;
                    this.sidebarService.getSidebar().subscribe(sidebar => {
                        this.sidebar = sidebar.content;
                    });
                } else {
                    this.hasSidebar = false;
                }
            });
        })
    }

}
