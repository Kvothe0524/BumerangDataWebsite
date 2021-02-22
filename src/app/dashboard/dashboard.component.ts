import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import CURRENT_USER_QUERY from '../graphql/queries/currentUser.query';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: any;
  currentUserName = "";
  loading = true;
  error: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: CURRENT_USER_QUERY,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.currentUser = data.me;
        //this.currentUserName = this.currentUser.name + " " + this.currentUser.surname;
        console.log(this.currentUser);
      });
    if(localStorage.getItem('item') != null){
      console.log("token", JSON.stringify(localStorage.getItem('token')));
    }
    else {
      this.router.navigate(['/usuarios']);
    } 
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
