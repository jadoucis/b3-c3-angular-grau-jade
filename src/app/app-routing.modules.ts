import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {LdapListComponent} from "./ldap-management/ldap-list/ldap-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LdapDetailComponent} from "./ldap-management/ldap-detail/ldap-detail.component";
import {LdapEditComponent} from "./ldap-management/ldap-edit/ldap-edit.component";
import {LdapAddComponent} from "./ldap-management/ldap-add/ldap-add.component";
import {LoginComponent} from "./security/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'users/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
