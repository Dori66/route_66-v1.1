import {Component, ViewChild} from '@angular/core';
import {Slide} from "../../carousel/catousel.interface";
import {AnimationType} from "../../carousel/carousel.animations";
import {CarouselComponent} from "../../carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(CarouselComponent)
  carousel!: CarouselComponent;

  animationType = AnimationType.JackInTheBox;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "../../../../assets/best.jpg"
    },
    {
      headline: "Miouw",
      src:
        "../../../../assets/burger-1.jpg"
    },
    {
      headline: "In The Wilderness",
      src:
      "../../../../assets/shije.jpg"
    },
    {
      headline: "Focus On The Writing",
      src:
        "../../../../assets/home-pictures/burger-1.jpg"
    }
  ];

  constructor() {}




}
