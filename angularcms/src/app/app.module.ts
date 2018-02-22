import { BrowserModule } from '@angular/platform-browser';      //for animations
import { NgModule } from '@angular/core';                       //to use modules
import {HttpModule} from '@angular/http';                       //in order to use http requests
import {HttpClientModule} from '@angular/common/http';          //in order to use http requests
import {FormsModule} from '@angular/forms';                     //in order to use tempateDriven FOrms
import {RouterModule, Routes} from '@angular/router';           //for routing

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';

import { Title } from '@angular/platform-browser';              //This is to modify the name in the chrome tab
import { PageService } from './services/page.service';          //Make http request to communicate with the Database for page informations
import { SidebarService } from './services/sidebar.service';    //Make http request to communicate with the Database for sidebar informations
import { UserService } from './services/user.service';          //Make http request to communicate with the Database for user informations
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'admin/pages', component: AdminPagesComponent},
    {path: 'admin/add-page', component: AdminAddPageComponent},
    {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
    {path: 'admin/sidebar', component: AdminSidebarComponent},
    {path: ':page', component: PagesComponent},
    {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminNavbarComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      PageService,
      Title,
      UserService,
      SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
