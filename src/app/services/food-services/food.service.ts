import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  selectedFood: BehaviorSubject<any> = new BehaviorSubject<any>({})
}
