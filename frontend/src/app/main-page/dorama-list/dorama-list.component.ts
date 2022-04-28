import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { dorama } from '../../models';

@Component({
  selector: 'app-dorama-list',
  templateUrl: './dorama-list.component.html',
  styleUrls: ['./dorama-list.component.css']
})
export class doramaListComponent implements OnInit {
  constructor(
    private filterService: FilterService,
  ) { }

  get doramaList(): dorama[] {
    return this.filterService.getdoramaList();
  }
  ngOnInit(): void {
  }

}
