import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  metro: boolean = false
  camion: boolean = false
  metrobus: boolean = false
  combi: boolean = false
  taxi: boolean = false

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  
  goBack(): void {
    this.location.back();
  }
  
  cambiaSeccion (section: string) {
  console.log(section)
  this.metro = false
  this.camion = false
  this.metrobus = false
  this.combi = false
  this.taxi = false

  if( section === 'metro')
        this.metro = true
  if( section === 'camion')
        this.camion = true
  if( section === 'metrobus')
        this.metrobus = true
  if( section === 'combi')
        this.combi = true
  if( section === 'taxi')
        this.taxi = true
  }
}

function cambia_manecilla() {
  var currentdate = new Date(); 
  var horas = currentdate.getHours();
  var minutos = currentdate.getMinutes();
  var segundos = currentdate.getSeconds();
  horas = (horas > 12)? horas -12 : horas;
  // horas = (horas == '00')? 12 : horas;
  var segundero = document.getElementById("segundos");
  var minutero = document.getElementById("minutos");
  var horero = document.getElementById("horas");
  var rotateS =  "rotate("+segundos * 6+"deg)";
  var rotateM =  "rotate("+minutos * 6+"deg)";
  var rotateH =  "rotate("+((horas * 30) + (minutos / 2))+"deg)";
  if(segundero) segundero.style.webkitTransform = rotateS;
  if(minutero) minutero.style.webkitTransform = rotateM;  
  if(horero) horero.style.webkitTransform = rotateH;
  // segundero.style.MozTransform = rotateS;
  // minutero.style.MozTransform = rotateM;  
  // horero.style.MozTransform = rotateH;
}
setInterval(function() {cambia_manecilla()}, 1000);
  
  