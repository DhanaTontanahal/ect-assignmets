import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { CustomSortPipe } from './custom-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepeaterComponent,
    CustomSortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
