import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChickenComponent } from './list-chicken.component';

describe('ListChickenComponent', () => {
  let component: ListChickenComponent;
  let fixture: ComponentFixture<ListChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChickenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
