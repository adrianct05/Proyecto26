import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() cadena: string;
  rgb: object;

  constructor() { }

  ngOnInit() {
  }

  miColor(): string {
    const primero = Math.floor(Math.random() * 100);
    const segundo = Math.floor(Math.random() * 100);
    const tercero = Math.floor(Math.random() * 100);

    return String(`rgb(${primero},${segundo},${tercero})`);
  }

}
