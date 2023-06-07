import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.paramMap.subscribe({
      next: (pm) => console.log('id', pm.get('id')),
    });
  }
}
