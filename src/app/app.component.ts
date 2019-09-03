import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectx-frontend';
  router: Router;

  logOut() {
    sessionStorage.removeItem('kullanici_adi');
    this.router.navigate(['/login']);
  }
}



