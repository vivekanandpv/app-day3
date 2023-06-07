import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

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
