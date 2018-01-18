import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { NgClass } from '@angular/common';
import { KegListComponent } from './keg-list/keg-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
