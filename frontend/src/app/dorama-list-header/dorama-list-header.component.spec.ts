import { ComponentFixture, TestBed } from '@angular/core/testing';

import { doramaListHeaderComponent } from './dorama-list-header.component';

describe('doramaListHeaderComponent', () => {
  let component: doramaListHeaderComponent;
  let fixture: ComponentFixture<doramaListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ doramaListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(doramaListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
