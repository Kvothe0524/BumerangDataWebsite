import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
        email: ['', [Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
        message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(400)]],    
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
      get email() { return this.form.get('email'); }
      get phone() { return this.form.get('phone'); }
      get message() { return this.form.get('message'); }
    }


    

