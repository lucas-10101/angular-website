import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import DEFAULT_ROUTES from './routes/default_routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(DEFAULT_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
