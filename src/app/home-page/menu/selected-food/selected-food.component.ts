import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../../../services/food-services/food.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-selected-food',
  templateUrl: './selected-food.component.html',
  styleUrls: ['./selected-food.component.scss']
})
export class SelectedFoodComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('container') container: any = {};
  sub: Subscription = new Subscription()

  selectedFood: {
    img?: string,
    name?:string,
    description?: string,
    price?: string
  } = {};

  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
    this.sub.add(
      this.foodService.selectedFood.subscribe((food: any) => {
        this.selectedFood = food;
      })
    )
  }
  ngAfterViewInit(){
    this.container.nativeElement.scrollIntoView();
  }
  test() {
    console.log('dori')

  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }

}
