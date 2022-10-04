import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildConLenChaComponent } from './child-con-len-cha/child-con-len-cha.component';
import { ChildChaXuongConComponent } from './child-cha-xuong-con/child-cha-xuong-con.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildConLenChaComponent,
    ChildChaXuongConComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
