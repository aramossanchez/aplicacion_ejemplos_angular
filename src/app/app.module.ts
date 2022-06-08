import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HighlightDirective } from './highlight.directive';
import { Kata3Component } from './components/kata3/kata3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProductFormComponent } from './components/product-form/product-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CounterComponent,
    SpinnerComponent,
    HeroesComponent,
    HighlightDirective,
    Kata3Component,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
