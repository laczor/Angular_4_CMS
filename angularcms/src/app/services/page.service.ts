// i have left the old angular 2 http methods
// import { Http } from '@angular/http'; using the old http module.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  //some kind of observable subject https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
// import 'rxjs/add/operator/map';
import nodeServerURL from '../nodeServerURL'; //storing the nodeServerURL information in a seperate namespace

import { Injectable } from '@angular/core';
// This whole module, is just to make the htttp requests.
@Injectable()
export class PageService {

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }

    // public pagesBS = new BehaviorSubject<string>(null);
    public pagesBS = new BehaviorSubject<Object>(null);

    getPages() {
        // return this.http.get(nodeServerURL+'/pages')
        //     .map(res => res.json());
        return this.http.get(nodeServerURL+'/pages');
    }

    getPage(slug) {
        // return this.http.get(nodeServerURL+'/pages/' + slug)
        //     .map(res => res.json());
        return this.http.get(nodeServerURL+'/pages/' + slug);
    }

    postAddPage(value) {
        // return this.http.post(nodeServerURL+'/pages/add-page', value)
        //     .map(res => res.json());
        return this.http.post(nodeServerURL+'/pages/add-page', value);
    }

    getEditPage(id) {
        // return this.http.get(nodeServerURL+'/pages/edit-page/' + id)
        //     .map(res => res.json());
        return this.http.get(nodeServerURL+'/pages/edit-page/' + id);
    }

    postEditPage(value) {
        // return this.http.post(nodeServerURL+'/pages/edit-page/'+value.id, value)
        //     .map(res => res.json());
        return this.http.post(nodeServerURL+'/pages/edit-page/'+value.id, value);
    }

    deletePage(id) {
        // return this.http.get(nodeServerURL+'/pages/delete-page/' + id)
        //     .map(res => res.json());
        return this.http.get(nodeServerURL+'/pages/delete-page/' + id);
    }

}
