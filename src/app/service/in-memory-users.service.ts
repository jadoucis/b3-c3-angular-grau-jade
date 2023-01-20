import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {UserLdap} from "../model/user-ldap";
import {LDAP_USERS} from "../model/ldap-mock-data";

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService implements InMemoryDbService {
  createDb() {
    console.log('InMemoruUsersService.createDb');
    const users: UserLdap[] = LDAP_USERS;
    return {users};
  }

  genId(users: UserLdap[]): number {
    console.log('InMemoryUsersService.genId');
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 4;
  }
}
