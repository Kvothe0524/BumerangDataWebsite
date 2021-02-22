import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setContext } from '@apollo/client/link/context';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import ADMIN_QUERY from '../../graphql/queries/Admin.query';
import LOGIN_MUTATION from '../../graphql/mutations/Login.mutation';
import { VersionIdMarker } from 'aws-sdk/clients/s3';
import { AuthService }from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  admins: any[];
  token: any;
  loading = true;
  error: any;
  form: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private formBuilder: FormBuilder, private authService: AuthService) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(this.emailPattern),
          Validators.minLength(5),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.authService.login(this.form.get('email').value, this.form.get('password').value);
    this.form.reset();
  }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: ADMIN_QUERY,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.admins = data.admin;
        console.log(this.admins);
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  onClick() {
    this.form.reset();
  }
}
