import { Injectable } from "@angular/core";

@Injectable()
export class RoutingService {
  showLogin: boolean = false;
  showCreateAccount: boolean = false;
  showDashboard: boolean = true;
  showSignOut: boolean = false;
  showItems: boolean = false;
  showItem: boolean = true;
  showSignedInUserInfo: boolean = false;
  showCreateOrEditItem: boolean = false;

  onLogin() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = true;
    this.showItems = true;
    this.showItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateOrEditItem = false;
  }

  onShowCreateAccount() {
    this.showLogin = false;
    this.showCreateAccount = true;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateOrEditItem = false;
  }

  constructor() {}
}
