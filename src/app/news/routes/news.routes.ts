import { Routes } from '@angular/router';
import { GlobalComponent } from '../global/global.component';
import { NationalComponent } from '../national/national.component';
import { ScienceComponent } from '../science/science.component';
import { SportsComponent } from '../sports/sports.component';

export const newsRoutes: Routes = [
  {
    path: 'national',
    component: NationalComponent,
  },
  {
    path: 'global',
    children: [
      {
        path: '',
        component: GlobalComponent,
      },
      {
        path: ':year',
        component: GlobalComponent,
      },
    ],
  },

  {
    path: 'sports',
    component: SportsComponent,
  },
  {
    path: 'science',
    component: ScienceComponent,
  },
];
