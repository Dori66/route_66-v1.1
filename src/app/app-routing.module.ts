import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './home-page/dashboard.component';
import {HomeComponent} from './home-page/home/home/home.component';
import {MenuComponent} from './home-page/menu/menu/menu.component';
import {SelectedFoodComponent} from "./home-page/menu/selected-food/selected-food.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [

      {path: 'home', component: HomeComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'selected-food', component: SelectedFoodComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
