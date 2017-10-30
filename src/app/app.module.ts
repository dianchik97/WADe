import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
declarations: [ AppComponent, FooterComponent, HeaderComponent ],

  imports: [
    BrowserModule, MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
