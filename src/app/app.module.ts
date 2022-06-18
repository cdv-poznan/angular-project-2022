import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersfileComponent } from './component/usersfile/usersfile.component';
import { MoreinfosComponent } from './component/moreinfos/moreinfos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersfileComponent,
    MoreinfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
