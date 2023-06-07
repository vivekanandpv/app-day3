import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    // const f = this.ar.snapshot.fragment;
    // console.log('snapshot fragment', f);

    this.ar.queryParams.subscribe({
      next: (p) => console.log('query', p),
    });

    this.ar.fragment.subscribe({
      next: (p) => console.log('fragment', p),
    });
  }
}
