import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  incorrect: boolean = false;

  attemptLogin(user: string, password: string) {
    this.incorrect = !this.acctService.login(user, password);
  }

  switchToCAccount() {
    this.routService.onShowCreateAccount();
  }

  constructor(
    private acctService: AccountService,
    public routService: RoutingService
  ) {}

  ngOnInit() {}
}
