import { ComponentFixture, TestBed } from '@angular/core/testing';

import { doramaListComponent } from './dorama-list.component';

describe('doramaListComponent', () => {
  let component: doramaListComponent;
  let fixture: ComponentFixture<doramaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ doramaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(doramaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
