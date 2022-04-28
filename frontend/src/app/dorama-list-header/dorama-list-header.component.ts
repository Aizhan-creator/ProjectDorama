import { Component, OnInit } from '@angular/core';
import {dorama} from 'src/dorama';
import {AppComponent} from '../app.component';
import {LoginPageComponent} from '../login-page/login-page.component';
@Component({
  selector: 'app-dorama-list-header',
  templateUrl: './dorama-list-header.component.html',
  styleUrls: ['./dorama-list-header.component.css']
})
export class doramaListHeaderComponent extends LoginPageComponent implements OnInit {
  dorama = dorama;
  name = '';
  LogOut(): void {
    this.get_userService().logout();
    alert('If you want, just log in again');
  }
  ngOnInit(): void {
  }
}
