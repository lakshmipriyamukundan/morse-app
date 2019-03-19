import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseTextComponent } from './morse-text/morse-text.component';
import { MorseOutputComponent } from './morse-output/morse-output.component';

@NgModule({
  declarations: [
    AppComponent,
    MorseTextComponent,
    MorseOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
