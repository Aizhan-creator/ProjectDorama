import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {MainPageComponent} from './main-page/main-page.component';
import {UserService} from './services/user.service';
import {LoginPageComponent} from './login-page/login-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WebDev-Project';
  ngOnInit(): void {
  }
}
