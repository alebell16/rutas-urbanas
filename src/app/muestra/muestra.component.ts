import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  
  goBack(): void {
    this.location.back();
  }
}
  
  