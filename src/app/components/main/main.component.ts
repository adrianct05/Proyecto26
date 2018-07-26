import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() cadena: string;
  rgb: string;


  constructor() { }

  ngOnInit() {
  }

  miColor(): string {
    const primero = Math.floor(Math.random() * 100);
    const segundo = Math.floor(Math.random() * 100);
    const tercero = Math.floor(Math.random() * 100);

    this.rgb = String(`rgb(${primero},${segundo},${tercero})`);
    return this.rgb;
  }

}
