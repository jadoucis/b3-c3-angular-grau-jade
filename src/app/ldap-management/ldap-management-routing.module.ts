import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapAddComponent} from "./ldap-add/ldap-add.component";
import {LdapEditComponent} from "./ldap-edit/ldap-edit.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {AuthGuard} from "../security/auth.guard";

const adminRoutes: Routes = [(
  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: PageNotFoundComponent},
      {path: 'list', component: LdapListComponent},
      {path: 'add', component: LdapAddComponent},
      {path: ':id', component: LdapEditComponent},
    ]
  }
)];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class LdapManagementRoutingModule { }
