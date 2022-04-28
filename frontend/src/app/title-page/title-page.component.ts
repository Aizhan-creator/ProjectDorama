import {Component, Input, OnInit} from '@angular/core';
import { dorama } from '../models';
import { doramaService } from '../services/dorama.service';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../services/user.service';
import {element} from 'protractor';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  dorama: dorama | undefined;
  nums: number[] = [];
  rating = 0;
  visitor: any;
  visitorLoaded = false;
  text = '';

  constructor(
    private route: ActivatedRoute,
    private doramaService: doramaService,
    // tslint:disable-next-line:variable-name
    private _userService: UserService
  ) {
  }
  ngOnInit(): void {
    this.nums = Array(10).fill(0).map((x, i) => i + 1);
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      this.getdoramaByName(name);
      this.rating = 0;
      // this.getdoramaByName('DemonSlayer');
    });
    this._userService.getUser().subscribe((user) => {
      this.visitor = user;
    } ,error => {});
    this.visitorLoaded = true;
  }

  getdoramaById(id: string | null): void {
    this.doramaService.getdoramaById(id).subscribe((doramaData) => {
      this.dorama = doramaData;
    });
  }
  getdoramaByName(name: string | null): void {
    this.doramaService.getdoramaByName(name).subscribe((doramaData) => {
      this.dorama = doramaData;
    });
  }

  goToPlayer(): void {
    const bodyPos = document.body.getBoundingClientRect().top;
    const playPos = document.body.getElementsByClassName('player')[0].getBoundingClientRect().top;
    const offset = playPos - bodyPos;
    window.scrollTo({top: offset, behavior: 'smooth'});
  }
  rate(rating: number): void {
    this.rating = rating;
    console.log(this.rating);
  }

  public confirm(doramaId: number, body: string): void {
    this._userService.confirmCom(doramaId, body).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert('Вы не авторизованы');
    });
    window.location.reload();
  }

  addToList(doramaId: number): void {
    this._userService.addToUserList(doramaId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
  removeFromList(doramaId: number): void {
    this._userService.removeFromUserList(doramaId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
  get isAdded(): boolean {
    if (this.visitor) {
      for (const ent of this.visitor.liked_doramas) {
        if (ent.name === this.dorama?.name) {
          return true;
        }
      }
    }
    return false;
  }
}

