import { Component, OnInit } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"]
})
export class CreateAccountComponent implements OnInit {
  successfullCreation: boolean = true;

  createAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    this.successfullCreation = this.acctService.addAccount(
      username,
      password,
      publicName,
      email,
      phoneNumber,
      aboutYou
    );
    if (this.successfullCreation) {
    }
  }

  constructor(private acctService: AccountService) {}

  ngOnInit() {}
}
