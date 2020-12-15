import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      private phonePattern: any = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
      form: FormGroup;
      url: string;
    
      constructor(
        private formBuilder: FormBuilder,
        public http: HttpClient) { 
          this.buildForm();    
      }
    
      private buildForm(){
      this.form = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(5)]],
 
      });
    }

    
    ngOnInit() {
      this.url = "https://bumerangdata.cl/sendEmail.php";
    }
  
    formulario(){    
      if(this.form.valid){
        this.http.post(this.url, this.form.value)
        .subscribe(            
        )
        alert('Gracias por contactarnos!');
        setTimeout(function () {
          window.location.href = " ";
        }, 890);
      }else {
        this.form.markAllAsTouched();
      }  
      }
    // Acortando el llamado para html
      get name() { return this.form.get('name'); }
      get password() { return this.form.get('password'); }

    }


    
