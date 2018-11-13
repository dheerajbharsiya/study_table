import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent extends MainContainerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
