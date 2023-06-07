import { Component } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent {
  constructor(demoService: DemoService) {
    console.log(demoService.message);
  }
}
