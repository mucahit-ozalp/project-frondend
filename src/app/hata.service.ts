import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Hata} from './hata'
import {User} from './user'


@Injectable({
  providedIn: 'root'
})
export class HataService {
  private hataUpdateUrl : string;

  constructor(private http: HttpClient) {

    this.hataUpdateUrl='http://localhost:8080/login/update';
   }


   public update(hata:Hata) {
    console.log(hata);
    return this.http.post<Hata>(this.hataUpdateUrl, hata);
  }


}
