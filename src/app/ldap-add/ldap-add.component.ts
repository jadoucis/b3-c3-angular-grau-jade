import {Component, OnInit} from '@angular/core';
import {LdapDetailComponent} from "../ldap-detail/ldap-detail.component";
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ldap-add',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.css']
})
export class LdapAddComponent extends LdapDetailComponent implements OnInit{
  constructor(private usersService: UsersService,
              fb: FormBuilder,
              router: Router,
              private snackBar: MatSnackBar) {
    super(true, fb, router);
  }

  ngOnInit(): void {
    super.onInit();
  }

  validateForm(): void {
    console.log('LdapAddComponent - validateForm');
    this.processValidateRunning = true;
    this.usersService.addUser(this.getUserFromFormControl()).subscribe(
      data => {
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Utilisateur ajouté !', 'X');
      },
      error => {
        this.processValidateRunning = false;
        this.errorMessage = 'L\'utilisateur n\'a pas pu être ajouté ! !';
        this.snackBar.open('Erreur dans l\'ajout de l\'utilisateur ! ', 'X');
      }
    );
  }
}
