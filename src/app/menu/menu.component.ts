import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [fadeAnimation]

})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
