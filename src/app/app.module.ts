import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DrawComponent } from './draw/draw.component';
import { AboutComponent } from './about/about.component';
import { EmojisComponent } from './emojis/emojis.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [AppComponent, DrawComponent, AboutComponent, EmojisComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule, MatIconModule, MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
