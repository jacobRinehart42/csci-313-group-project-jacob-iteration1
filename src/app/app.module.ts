import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountService } from './account.service';
import { RoutingService } from './routing.service';
import { ItemsService } from './items.service';
import { LoginComponent } from './login/login.component';
import { SignedInUserInfoComponent } from './signed-in-user-info/signed-in-user-info.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreateAccountComponent, LoginComponent, SignedInUserInfoComponent, ItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AccountService, RoutingService, ItemsService]
})
export class AppModule { }
