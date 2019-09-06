import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import {Hata} from '../hata';
import {HataService} from '../hata.service';
 

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {  
  user:User;
  hata:Hata;
  kullanici_adi;
  parola;
  deger:Boolean;
  hatali_sayisi=0;
  hatali_giris=0;
  
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,private hataService:HataService) {
    //this.departmant = new Departmant();

  }
  onSubmit() {
  
    this.user = new User(this.kullanici_adi,this.parola,this.hatali_giris);
    
   
    console.log(this.user);
  
    this.userService.login(this.user).subscribe(data => {this.user = data;
      

      console.log(this.user);
      this.hatali_sayisi=this.user.hatali_giris;
    
      if(this.kullanici_adi == this.user.kullanici_adi ){
        sessionStorage.setItem('kullanici_adi', this.user.kullanici_adi)
        this.deger=true;       
         this.router.navigate(["departmant"]);
         this.hatali_sayisi=0;
         this.hata= new Hata(this.hatali_sayisi,this.kullanici_adi)
         this.hataService.update(this.hata).subscribe(data =>{this.hata=data;
         
         })


    

       }else {
         this.deger=false;
        
         this.hatali_sayisi++;
         this.hata= new Hata(this.hatali_sayisi,this.kullanici_adi)
         this.hataService.update(this.hata).subscribe(data =>{this.hata=data;
                 
         console.log(this.hatali_sayisi);
         alert("hatalı giris");
         })
    
      };
    });
      return this.deger;
    }
  isUserLoggedIn() {
    let kullanici_adi = sessionStorage.getItem('kullanici_adi')
    console.log(!(this.kullanici_adi == null));
    return !(kullanici_adi == null);
  }
  
  
  
  gotoUserList() {
    this.router.navigate(['/']);
  }

  

  

}
