import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { newsRoutes } from './routes/news.routes';

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
