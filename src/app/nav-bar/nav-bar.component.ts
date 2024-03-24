import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
[x: string]: any;
  lan = "EN";

  constructor(public appComponent: AppComponent) { }

  setLanguage(newLan: string) {
    this.lan = newLan;
  }
}
