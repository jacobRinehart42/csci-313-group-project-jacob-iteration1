import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-signed-in-user-info",
  templateUrl: "./signed-in-user-info.component.html",
  styleUrls: ["./signed-in-user-info.component.css"]
})
export class SignedInUserInfoComponent  {
  // disableSave: boolean = true;
  // disableEdit: boolean = false;

  // newIndex: number = 0;
  // signedInUser = this.acctService.signedInUser;

  // acnt: any = [];

  // constructor(
  //   private acctService: AccountService,
  //   public routService: RoutingService
  // ) {}

  // ngOnInit() {
  //   // this.acc.giveIndex.subscribe(
  //   //   (value: number) => this.newIndex = value,
  //   //   console.log(this.newIndex + " This is newIndex in the subscribe")
  //   // );

  //   // this.tempAccount = this.acnt[this.newIndex];

  //   // this.tempAccount = this.acc.accounts[this.newIndex];
  //   // console.log(this.newIndex + " This is the passed newIndex");

  //   //this.tempAccount = this.acnt[this.newIndex];

  //   //console.log(this.tempAccount.id);
  // }

  // unDisable(): void {
  //   this.disableSave = false;
  //   this.disableEdit = true;
  // }

  // save(pname: string, mail: string, phone: string, about: string): void {
  //   this.disableSave = true;
  //   this.disableEdit = false;

  //   this.acctService.editAccount(this.signedInUser.username , this.signedInUser.password, pname, mail, phone, about);
  // }

  // showPassPlease: boolean = false;
  // showCItemPlease: boolean = false;
  // showMyItemsPlease: boolean = false;

  // switchToPass() {
  //   this.routService.handleShowUserPage();

  //   this.showPassPlease = true;
  // }

  // switchToCItem() {
  //   this.routService.handleShowCreateItemPage();

  //   this.showCItemPlease = true;
  // }

  // switchToMyItems() {
  //   this.routService.handleShowMyItemsPage();

  //   this.showMyItemsPlease = true;
  // }
}
