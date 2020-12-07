import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    url = 'https://bumerangdata.cl/sendEmail.php';
    constructor(private http: HttpClient) { }
  
  
    sendPostRequest(user: any): Observable<any> {
      return this.http.post<any>(this.url, user);
    }
  
  }

