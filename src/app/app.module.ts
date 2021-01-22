import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
      { path:'',component:ParentComponent , pathMatch: 'full' 

      }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
