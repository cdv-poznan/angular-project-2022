import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ColorsComponent} from './colors/colors.component';
import {HomeComponent} from './home/home.component';
import {ReminderComponent} from './reminder/reminder.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ColorsComponent, ReminderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
