import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {

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
    name2: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
    message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],



  });
}

ngOnInit() {
  this.url = "localhost:80/sendEmail.php";
}
  /*createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.pattern(this.emailPattern)]),
  
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      name2: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('',[Validators.required, Validators.minLength(9)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(100)])
    });
  }
  */

formulario(){

  let user = {
    name: this.name.value,
    email: this.email.value,
    name2: this.name2.value,
    phone: this.phone.value,
    message: this.message.value
  }

  if(this.form.valid){
    const asd = this.form.value;
    console.log(asd)
  }else {
    this.form.markAllAsTouched();
  }
  alert(JSON.stringify(user)); 
  this.http.post(this.url, user)
  .subscribe(
      response => console.log(response)
  )
  
  }
// Acortando el llamado para html
  get name() { return this.form.get('name'); }
  get name2() { return this.form.get('name2'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }
}
