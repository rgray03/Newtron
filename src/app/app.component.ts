import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule ({
  imports: [MatSliderModule]
})
export class AppComponent {
  title = 'newtron';
}
