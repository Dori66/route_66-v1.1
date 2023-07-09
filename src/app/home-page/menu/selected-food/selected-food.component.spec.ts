import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFoodComponent } from './selected-food.component';

describe('SelectedFoodComponent', () => {
  let component: SelectedFoodComponent;
  let fixture: ComponentFixture<SelectedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
