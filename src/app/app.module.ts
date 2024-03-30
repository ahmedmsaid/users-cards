import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Components/material.module';
import { AppHeaderComponent } from './Components/header/app-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsContainerComponent } from './Components/cards-container/cards-container.component';
import { CardComponent } from './Components/card/card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CardsContainerComponent,
    CardComponent,
    CardDetailsComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
