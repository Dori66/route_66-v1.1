import { trigger,state,transition,style,animate } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{

  navigationState: any = 'home'

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.navigationState == 'home'? this.router.navigate(['home']): this.router.navigate(['menu'])
  }


}
