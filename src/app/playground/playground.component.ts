import { Component, OnDestroy, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  providers: [DemoService],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  constructor(demoService: DemoService) {
    console.log(demoService.message);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
