
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root', 
})
export class FormserviceService {

    constructor(
        private http: HttpClient
        ) { }

    getIntialValues(): Observable<any> {
        return this.http.get('https://cs251-outlab-6.herokuapp.com/initial_values/');
    }

    postForm(formData): Observable<any> {
        return this.http.post('https://cs251-outlab-6.herokuapp.com/add_new_feedback/', formData);
    }
}