import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
  accounts = [
    {
      id: 5,
      username: "JimmyJohns64",
      password: "johnlennin",
      publicName: "Jimmy",
      email: "macarthy@yahoo.com",
      phoneNumber: "256-658-5314",
      aboutYou: "Im a pizzaria owner"
    },
    {
      id: 3,
      username: "JackAnderson",
      password: "jackRocx",
      publicName: "JackAnderson",
      email: "jackAnderson@gmail.com",
      phoneNumber: "588-698-2547",
      aboutYou:
        "He loves collecting niche items to expand his collection of souvenirs and knickknacks"
    },
    {
      id: 43,
      username: "DwightSchrute",
      password: "bearsBeatsBattleStarGalactica",
      publicName: "nightHawlk",
      email: "weirdFargmer@bing.com",
      phoneNumber: "584-698-2654",
      aboutYou:
        "He would like to downsize his collection, and make sure that he gets not only what the item is worth but also ensure that the items end up with someone who appreciates them"
    },
    {
      id: 54,
      username: "JohnnyGuitar",
      password: "electricSkado",
      publicName: "Johnny Guitar",
      email: "johnnyMcgee@alabama.com",
      phoneNumber: "658-624-2547",
      aboutYou:
        "He has inherited hundreds of collectable Hummel figurines and Venton glassware from his late mothers' estate. He would like to liquidate these materials and has found difficulty in finding the right place to market his items to interested buyers. "
    }
  ];

  addAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    if (this.uniqueUsernameChecker(username)) {
      this.accounts.push({
        id: this.uniqueIdGenerator(),
        username: username,
        password: this.passwordHasher(password),
        publicName: publicName,
        email: email,
        phoneNumber: phoneNumber,
        aboutYou: aboutYou
      });
      return true;
    }
    return false;
  }

  private passwordHasher(password: string) {
    return password;
  }

  private uniqueIdGenerator() {
    var num = 1;
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id >= num) {
        num = this.accounts[i].id;
      }
    }
    return ++num;
  }

  private uniqueUsernameChecker(username: string) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username == username) {
        return false;
      }
      return true;
    }
  }

  editAccount(
    id: number,
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    for (var i = 0; i < this.accounts.length; i++) {
      if ((this.accounts[i].id = id)) {
        this.accounts[i] = {
          id: id,
          username: username,
          password: this.passwordHasher(password),
          publicName: publicName,
          email: email,
          phoneNumber: phoneNumber,
          aboutYou: aboutYou
        };
      }
    }
  }

  login(username: string, password: string) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username == username) {
        if (this.accounts[i].password == this.passwordHasher(password)) {
          return this.accounts[i];
        }
        return {
          id: 0,
          username: "FailedLogin",
          password: "FailedLogin",
          publicName: "FailedLogin",
          email: "FailedLogin",
          phoneNumber: "FailedLogin",
          aboutYou: "FailedLogin"
        };
      }
    }
  }

  constructor() {}
}
