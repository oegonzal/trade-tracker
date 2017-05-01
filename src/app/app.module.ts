import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TradesComponent } from './trades/trades.component';
import { TradeslsComponent } from './tradesls/tradesls.component';

@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    TradeslsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
