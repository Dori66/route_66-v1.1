import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {FoodService} from "../../../services/food-services/food.service";


interface BurgerI {
  burgerName?: string,
  burgerImg?: string,
  burgerPrice?: string,
  burgerDescription?: string
}


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit, OnChanges, OnDestroy {


  extraList: any[] = [
    {
      name: 'Onion Rings',
      price: '2.20€',
      img: '../../../../assets/extras/onion-rings.png',
      description: ''
    }, {
      name: 'Chicken Fingers',
      price: '4.20€',
      img: '../../../../assets/extras/chicken-fingers.png',
      description: ''
    }, {
      name: 'Bill Clinton',
      price: '4.50€',
      img: '../../../../assets/extras/bill-clinton.png',
      description: 'Mish Pule në petë'
    }, {
      name: 'Chilli Nachos',
      price: '3.90€',
      img: '../../../../assets/extras/nacho-chilli.png',
      description: ''
    }, {
      name: 'Chicken Nachos',
      price: '4.00€',
      img: '../../../../assets/extras/nacho-pule.png',
      description: ''
    },
  ]

  saladList: any[] = [
    {
      name: '66 Salad',
      price: '5.00€',
      img: '../../../../assets/salads/66-salad.png',
      description: 'Sallatë Pule'
    },
    {
      name: 'Cesar Salad',
      price: '4.30€',
      img: '../../../../assets/salads/cesar-salad.png',
      description: 'Sallatë pule me mish zgare'
    },
    {
      name: 'El Greco',
      price: '3.70€',
      img: '../../../../assets/salads/elgreko-salad.png',
      description: 'Sallatë Grekes'
    },
    {
      name: 'Tuna Salad',
      price: '4.00€',
      img: '../../../../assets/salads/tuna-salad.png',
      description: 'Tuna Salltë'
    },
  ]

  wrapsList: any[] = [
    {
      name: 'Steak Wraps',
      price: '3.90€',
      img: '../../../../assets/wraps/steak-wraps.png',
      description: 'Wraps viqi me salcë, sallata dhe pomfrit'
    },
    {
      name: 'Chicken Wraps',
      price: '3.80€',
      img: '../../../../assets/wraps/chicken-wraps.png',
      description: 'Wraps pule me salcë, sallata dhe pomfrit'
    },
    {
      name: 'Burger Wraps',
      price: '3.80€',
      img: '../../../../assets/wraps/burger-wraps.png',
      description: 'Wraps me pleskavicë, salcë, sallata dhe pomfrit'
    },
  ]

  hotDogList: any[] = [
    {
      name: '66 Dog',
      price: '3.70€',
      img: '../../../../assets/sandwiches/66dog-sandwich.png',
      description: 'Hot Dog me cheese, proshutë, salcë dhe senf'
    },
    {
      name: 'Hot Dog',
      price: '3.20€',
      img: '../../../../assets/sandwiches/hotdog-sandwich.png',
      description: 'Hot Dog me salcë dhe senf'
    },
    {
      name: 'DogFather',
      price: '3.90€',
      img: '../../../../assets/sandwiches/dogfather-sandwich.png',
      description: 'Hot Dog me suxhuk, cheese, chilli sos, speca të djegëst dhe qepë të fërguara'
    },
  ]

  tortillaList: any[] = [
    {
      name: 'Chilli Tortillas',
      price: '3.40€',
      img: '../../../../assets/tortillas/chilli-tortillas.png',
      description: 'Tortilla me proshutë, salcë dhe kashkavall të grier'
    },
    {
      name: 'Burger Tortillas',
      price: '3.80€',
      img: '../../../../assets/tortillas/burger-tortillas.png',
      description: 'Tortilla me pleskavic të grier, salcë dhe kashkavall të grier'
    },
    {
      name: 'Tortilla Con Polo',
      price: '3.90€',
      img: '../../../../assets/tortillas/conpollo-tortillas.png',
      description: 'Tortilla me mish pule të bluar, salcë dhe kashkavall të grier'
    },
    {
      name: 'Steak Tortillas',
      price: '4.20€',
      img: '../../../../assets/tortillas/steak-tortillas.png',
      description: 'Tortilla me mish viqi , salcë dhe kashkavall të grier'
    },
  ]
  sandwichList: any[] = [
    {
      name: 'Steak Sandwich',
      price: '4.50€',
      img: '../../../../assets/sandwiches/steak-sandwich.png',
      description: 'Sanduiq me mish viqi, sallatë të gjelbërt, domate dhe majonez'
    },
    {
      name: 'Chicken Royal',
      price: '4.20€',
      img: '../../../../assets/sandwiches/royal-sandwich.png',
      description: 'Sanduiq me mish pule, sallatë të gjelbërt, domate dhe majonez'
    },
    {
      name: 'Philadelphia Steak',
      price: '4.90€',
      img: '../../../../assets/sandwiches/philadelphia-sandwich.png',
      description: 'Sanduiq me mish viqi, cheese, speca të kuq dhe qepë të fërguara'
    },
    {
      name: 'Cheese Steak',
      price: '4.70€',
      img: '../../../../assets/sandwiches/cheeseSteak-sandwich.png',
      description: 'Sanduiq me mish viqi, cheese, sallatë të gjelbërt, domate dhe majonez\''
    },
    {
      name: 'Bonsteel',
      price: '3.40€',
      img: '../../../../assets/sandwiches/bonsteel-sandwich.png',
      description: 'Sanduiq me proshutë, kashkavallë të grier, sallatë të gjelbërt, domate dhe majonez'
    },
    {
      name: '66 Dog',
      price: '3.70€',
      img: '../../../../assets/sandwiches/66dog-sandwich.png',
      description: 'Hot Dog me cheese, proshutë, salcë dhe senf'
    },
    {
      name: 'Hot Dog',
      price: '3.20€',
      img: '../../../../assets/sandwiches/hotdog-sandwich.png',
      description: 'Hot Dog me salcë dhe senf'
    },
    {
      name: 'DogFather',
      price: '3.90€',
      img: '../../../../assets/sandwiches/dogfather-sandwich.png',
      description: 'Hot Dog me suxhuk, cheese, chilli sos, speca të djegëst dhe qepë të fërguara'
    },
  ]


  burgerList: any[] = [
    {
      name: 'Classic Burger',
      price: '3.50€',
      img: '../../../../assets/burger/hamburger.png',
      description: 'Hamburger me sallatë të gjelbërt, domate, tranguj turshi, keqap, majonez, senf dhe pomfrit'
    },
    {
      name: 'Cheese Burger',
      price: '3.80€',
      img: '../../../../assets/burger/cheese-burger.png',
      description: 'Hamburger me extra Cheese'
    }, {
      name: '66 Burger',
      price: '3.90€',
      img: '../../../../assets/burger/66-burger.png',
      description: 'Hamburger me extra Cheese dhe Proshutë'
    }, {
      name: 'Egg Burger',
      price: '3.80€',
      img: '../../../../assets//burger/egg-burger.png',
      description: 'Hamburger me extra Vezë'
    }, {
      name: 'Cheese\'n Egg',
      price: '3.90€',
      img: '../../../../assets/burger/cheesen-egg-burger.png',
      description: 'Hamburger me extra Cheese dhe Vezë'
    },
    {
      name: '66\'Egg',
      price: '4.20€',
      img: '../../../../assets/burger/66egg-burger.png',
      description: 'Hamburger me extra Vezë, Cheese, Proshutë'
    },
    {
      name: 'Mega Double',
      price: '4.70€',
      img: '../../../../assets/burger/mega-double.png',
      description: 'Hamburger 2-katësh'
    },
    {
      name: 'Patriot Burger',
      price: '4.00€',
      img: '../../../../assets/burger/patriot-burger.png',
      description: 'Hamburger i djegëst me cheese, chilli sos, majonez, suxhuk, qepë të fërguara, speca'
    },
    {
      name: '66 Chicken',
      price: '4.00€',
      img: '../../../../assets/burger/66chicken-burger.png',
      description: 'Hamburger i pulës me proshutë, cheese, sallatë të gjelbërt, domate, majonez '
    },
    {
      name: 'Chicken Burger',
      price: '3.80€',
      img: '../../../../assets/burger/chicken-burger.png',
      description: 'Hamburger i pulës me sallatë të gjelbërt, domate, majonez '
    },
    {
      name: 'Pizza Burger',
      price: '3.90€',
      img: '../../../../assets/burger/pizza-burger.png',
      description: 'Hamburger me emmental cheese, pizza sos, suxhuk, proshutë e parmesan'
    },
    {
      name: 'New York',
      price: '3.90€',
      img: '../../../../assets/burger/newyork-burger.png',
      description: 'Hamburger me emmental cheese, proshutë, coleslaw salltë amerikane'
    },
    {
      name: 'Swiss Burger',
      price: '3.90€',
      img: '../../../../assets//burger/swiss-burger.png',
      description: 'Hamburger me emmental cheese kërpurdha, qepë të fërguara e chilli sos'
    }, {
      name: 'October Fest',
      price: '3.90€',
      img: '../../../../assets/burger/october-burger.png',
      description: 'Hamburger me cheese, salqiqe, lakër amerikane, chilli sos dhe majonez'
    },
    {
      name: 'Tuna Melt',
      price: '3.20€',
      img: '../../../../assets/burger/tuna-burger.png',
      description: 'Hamburger me tuna dhe majonez në bukë të reshkur'
    }

  ]

  @Input() foodCategory = '';
  @ViewChild('menuContainer') menuContainer: ElementRef<HTMLElement> | undefined;
  selectedBurger: BurgerI;

  choosenList: any;


  constructor(private route: Router, private foodService: FoodService) {
    this.selectedBurger = {};
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.menuContainer?.nativeElement.classList.remove('animate__animated', 'animate__slideInUp');
    setTimeout((x: any) => {
      this.menuContainer?.nativeElement.classList.add('animate__animated', 'animate__slideInUp');
      let storageCategory = localStorage.getItem('selected-category' || '')
      storageCategory ? this.foodCategory = storageCategory : this.foodCategory = 'Burgers'
      if (this.foodCategory == 'Burgers') {
        this.choosenList = this.burgerList;
      } else if (this.foodCategory == 'Tortillas') {
        this.choosenList = this.tortillaList
      } else if (this.foodCategory == 'Sandwiches') {
        this.choosenList = this.sandwichList
      } else if (this.foodCategory == 'Hot-Dogs') {
        this.choosenList = this.hotDogList
      } else if (this.foodCategory == 'Wraps') {
        this.choosenList = this.wrapsList;
      } else if (this.foodCategory == 'Salads') {
        this.choosenList = this.saladList;
      } else if (this.foodCategory == 'Extras') {
        this.choosenList = this.extraList;
      }
    }, 1)

  }

  openSelectedBurger(food: any) {
    this.foodService.selectedFood.next(food);
    this.route.navigate(['selected-food'])
  }

  ngOnDestroy(): void {
  }

}
