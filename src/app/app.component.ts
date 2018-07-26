import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cumpleanos: string;

  pasarCumpleanos() {
    this.cumpleanos = String(Math.floor(Math.random() * 100));
    return this.cumpleanos;
  }


}


