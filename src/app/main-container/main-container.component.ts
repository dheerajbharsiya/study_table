import { Component, OnInit } from '@angular/core';
import { MainContainer } from './main-container.interface';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  private component: MainContainer;
  constructor() {
    this.component = {
      heading: 'Main Container',
      subHeading: 'Subheading'
    }
  }

  ngOnInit() {
  }

  onFollow() {
    console.log('inside parent');
  }
}
