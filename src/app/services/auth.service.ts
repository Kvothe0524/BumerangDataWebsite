import { Injectable } from '@angular/core';
import LOGIN_MUTATION from '../graphql/mutations/Login.mutation';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

  constructor(private apollo: Apollo, private router: Router) { }


  login(email, password){
    this.apollo
    .mutate<any>({
      mutation: LOGIN_MUTATION,
      variables: {
        email: email,
        password: password,
      },
    })
    .subscribe(
      ({ data }) => {
        console.log('got data', data);
        localStorage.setItem('token', JSON.stringify(data.login.token))
        this.token = JSON.parse(localStorage.getItem('token'));
        console.log('Auth', this.token);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
    console.log();
  }

  logout() {
    if(localStorage.getItem('token') != null){
      localStorage.removeItem('token');
    }
    this.router.navigate(['/usuarios']);
  }
}
