import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { RouteModule } from '../route/route.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouteModule,
    MaterialModule
  ],
  bootstrap: [
    HomeComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
