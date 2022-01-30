import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicGearItemComponent } from './music-gear-item/music-gear-item.component';
import { GearListComponent } from './gear-list/gear-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicGearItemComponent,
    GearListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
