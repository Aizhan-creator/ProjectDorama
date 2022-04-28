import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import {dorama} from '../models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: any;
  doramaList: dorama[] = [];
  // likeddorama = [];
  constructor(
    private userService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.doramaList = user.liked_doramas;
    }, error => {
      this.route.navigate(['']);
    });
  }
  remotedorama(doramaId: number): void {
    this.userService.removeFromUserList(doramaId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
}
