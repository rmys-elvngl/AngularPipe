import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';

let isProd:boolean = false
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:HelperService,useClass:isProd ? HelperService : Helper2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
