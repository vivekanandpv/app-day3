import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, of, catchError } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    const subject = new Subject<number>();

    subject
      .pipe(
        catchError((e) => {
          console.log('catchError', e.message);
          return of(-1);
        })
      )
      .subscribe({
        next: (n) => console.log('next', n),
        error: (e) => console.log('error', e.message),
        complete: () => console.log('completed'),
      });

    subject.next(2);
    subject.next(4);
    subject.next(5);
    subject.next(1);

    subject.error(new Error('oops!'));
    subject.next(8);
    subject.next(8);
    subject.next(8);

    subject.complete();

    subject.next(8);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
function cathError(): import('rxjs').OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}
