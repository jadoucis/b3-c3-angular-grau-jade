import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {UsersService} from "../service/users.service";
import {UserLdap} from "../model/user-ldap";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.css']
})
export class LdapDetailComponent implements OnInit {
  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;

  userForm = this.fb.group({
    login: [''],
    nom: [''],
    prenom: [''],
    passwordGroup: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
    mail: {value: '', disabled: true},
  });
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');

    console.log("getUser= " + login)
    // this.usersService.getUsers(login).subscribe(
    //   user => { this.user = user; console.log("LdapDetail getUser ="); console.log(user); }
    // );
  }

  private formGetValue(name:string): any {
    return this.userForm.get(name).value;
  }

  goToLdap(): void {
    this.router.navigate(['/users/list']);
  }

  onSubmitForm(): void {
    // See later
  }

  updateLogin(): void {
    this.userForm.get('login').setValue((this.formGetValue('prenom')
        + '.' + this.formGetValue('nom')).toLowerCase());
    this.updateMail()
  }

  updateMail(): void {
    this.userForm.get('mail').setValue(this.formGetValue('login').toLowerCase()
        + '@epsi.lan');
  }

  isFormValid(): boolean { return false; }

}
