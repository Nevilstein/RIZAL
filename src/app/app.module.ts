import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovelsComponent } from './novels/novels.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    NovelsComponent,
    HomeComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
