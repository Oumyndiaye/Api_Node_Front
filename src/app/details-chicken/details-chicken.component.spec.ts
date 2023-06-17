import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChickenComponent } from './details-chicken.component';

describe('DetailsChickenComponent', () => {
  let component: DetailsChickenComponent;
  let fixture: ComponentFixture<DetailsChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsChickenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
