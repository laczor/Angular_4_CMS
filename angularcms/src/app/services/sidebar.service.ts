import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sidebar } from '../models/Sidebar';
import nodeServerURL from '../nodeServerURL'; //storing the nodeServerURL information in a seperate namespace


@Injectable()
export class SidebarService {

    constructor(
        private http: HttpClient
    ) { }

    getSidebar() {
        return this.http.get<Sidebar>(nodeServerURL+'/sidebar/edit-sidebar');
    }

    postSidebar(value) {
        return this.http.post(nodeServerURL+'/sidebar/edit-sidebar', value)
    }

}
