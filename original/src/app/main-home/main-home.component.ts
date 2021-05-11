import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  image1 = './assets/customer.jpg';
  image3 = './assets/image3.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
