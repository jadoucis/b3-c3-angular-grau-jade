import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  processRunning = false;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.processRunning = true;
      this.authenticationService.loginWithRole(
        this.form.get('userName').value,
        this.form.get('password').value,
        'ROLE_SUPER_ADMIN'
      ).subscribe(() => {
        if (AuthenticationService.isLoggedIn()) {
          this.processRunning = false;
          this.router.navigate([this.authenticationService.redirectUrl]);
        } else {
          throw new Error();
        }
      },
        (error: HttpErrorResponse) => {
          this.processRunning = false;
          this.snackBar.open('Login ou mot de passe invalide !', 'X');
        });
        }
        this.formSubmitAttempt = true;
    }
}
