import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RootComponent } from '../../root.component';
import { MaterialModule } from '../material/material.module';
import { RoutesModule } from '../route/RouteModule';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutesModule,
    MaterialModule,
    PagesModule
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
