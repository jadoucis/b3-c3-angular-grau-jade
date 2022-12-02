import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'user/list', component: LdapListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
