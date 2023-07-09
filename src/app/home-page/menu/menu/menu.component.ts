import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  foodCategorySelected: any = '';

  constructor(){

  }
  categories = ['Burgers', 'Sandwiches', 'Tortillas','Hot-Dogs','Wraps','Salads','Extras'];


  ngOnInit(){
    let storageCategory = localStorage.getItem('selected-category' || '')
    storageCategory? this.foodCategorySelected = storageCategory: this.foodCategorySelected = 'Burgers'
  }

  setActiveCategory(category: string) {
    localStorage.setItem('selected-category',category)
    this.foodCategorySelected = category;
  }
}
