import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildConLenChaComponent } from './child-con-len-cha/child-con-len-cha.component';
import { ChildChaXuongConComponent } from './child-cha-xuong-con/child-cha-xuong-con.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestChild2Component } from './test-child2/test-child2.component';
import { AnyToAnyComponent } from './any-to-any/any-to-any.component';
import { AnyToAny2Component } from './any-to-any2/any-to-any2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildConLenChaComponent,
    ChildChaXuongConComponent,
    TestChildComponent,
    TestChild2Component,
    AnyToAnyComponent,
    AnyToAny2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
