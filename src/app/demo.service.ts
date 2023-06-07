import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  message = 'good afternoon';

  constructor() {
    console.log('DemoService constructed');
  }
}
