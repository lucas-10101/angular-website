import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import ALL_ROUTES from './routes/all_routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ALL_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {
}
