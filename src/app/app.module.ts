import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home-page/dashboard.component';
import { MenuComponent } from './home-page/menu/menu/menu.component';
import { HomeComponent } from './home-page/home/home/home.component';
import { FoodsComponent } from './home-page/menu/foods/foods.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { SelectedFoodComponent } from './home-page/menu/selected-food/selected-food.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    HomeComponent,
    FoodsComponent,
    CarouselComponent,
    SelectedFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
