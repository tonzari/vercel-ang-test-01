import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicGearItemComponent } from './music-gear-item/music-gear-item.component';
import { GearListComponent } from './gear-list/gear-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MusicGearItemComponent,
    GearListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
