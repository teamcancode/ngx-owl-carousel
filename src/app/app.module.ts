import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TccOwlCarouselDirective } from './tcc-owl-carousel.directive';

@NgModule({
  declarations: [
    TccOwlCarouselDirective,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
