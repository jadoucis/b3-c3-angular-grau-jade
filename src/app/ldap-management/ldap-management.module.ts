import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapAddComponent} from "./ldap-add/ldap-add.component";
import {LdapEditComponent} from "./ldap-edit/ldap-edit.component";
import {AlertComponent} from "../share/alert/alert.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppMaterialModule} from "../app-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryUsersService} from "../service/in-memory-users.service";


@NgModule({
  declarations: [
    LdapListComponent,
    LdapAddComponent,
    LdapEditComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LdapManagementRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUsersService, {dataEncapsulation: false}
    )
  ]
})
export class LdapManagementModule { }
