import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DemoService],
})
export class HomeComponent {
  constructor(private router: Router, demoService: DemoService) {
    console.log(demoService.message);
  }

  handleClick() {
    this.router.navigate(['contact'], {
      queryParams: {
        lang: 'en',
        year: 2023,
      },
      fragment: 'middle-of-the-page',
    });
    // this.router.navigateByUrl('contact');
  }
}
