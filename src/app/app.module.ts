import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountService } from './account.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreateAccountComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AccountService]
})
export class AppModule { }
