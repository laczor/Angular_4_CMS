import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
//Display the admin navbar + modifying [class.space]	
    get front() {
        if (localStorage.getItem("user") === "\"admin\"") {
            return false;
        }
        return true;
    }
}
