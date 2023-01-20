import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../../model/user-ldap";
import {MatPaginator} from "@angular/material/paginator";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UsersService} from "../../service/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit{
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private usersService: UsersService, private router:Router) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.filterPredicate = (data: UserLdap, filter:string) => this.filterPredicate(data, filter);
    this.getUsers();
  }

  filterPredicate(data, filter): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  unactiveSelected = false;

  private getUsers(): void {
    this.usersService.getUsers().subscribe(
      users => {
        if (this.unactiveSelected) {
          this.dataSource.data = users.filter( user =>
            user.active === false
          );
        } else {
          this.dataSource.data = users
        }
      });
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers()
  }

  edit(id: number) {
    this.router.navigate(['/user', id]).then( (e) => {
      if (! e) {
        console.log("Navigation has failed")
      }
    })
  }

  addUser() {
    this.router.navigate(['/user/add']).then( (e) => {
      if (! e) {
        console.log("Navigation has failed")
      }
    });
  }

}
