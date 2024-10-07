import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RoutingUrls } from './constant/routing-url';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' 
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgcCookieConsentModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('called')
  }

  addProduct() {
    this.router.navigateByUrl(RoutingUrls.PRODUCT);
  }

  addUser() {
    this.router.navigateByUrl(RoutingUrls.USER);
  }

}
