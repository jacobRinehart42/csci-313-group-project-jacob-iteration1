import { Component, VERSION } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  accounts = this.acctService.accounts;
  userHasSignedIn: boolean = false;
  signedInUserAccount = {
    id: 0,
    username: "null",
    password: "null",
    publicName: "null",
    email: "null",
    phoneNumber: "null",
    aboutYou: "null"
  };

  onCreateAccountSuccessfull(username: string) {
    this.userHasSignedIn = true;
  }

  constructor(private acctService: AccountService) {}

  ngOnInit() {}
}
