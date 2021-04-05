import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"]
})
export class CreateAccountComponent implements OnInit {
  failedCreation: boolean = false;
  @Output() outputEvent: EventEmitter<string> = new EventEmitter();

  createAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    this.failedCreation = !this.acctService.addAccount(
      username,
      password,
      publicName,
      email,
      phoneNumber,
      aboutYou
    );
    if (this.failedCreation != false) {
      //user successfully created an account and should be routed to home page
      //we will implement this latter
      //output an event for the app component to recive and act upon
      this.outputEvent.emit(username);
    }
  }

  constructor(private acctService: AccountService) {}

  ngOnInit() {}
}
