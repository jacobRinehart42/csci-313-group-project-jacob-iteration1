import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
  accounts = [
    {
      username: "JimmyJohns64",
      password: "johnlennin",
      publicName: "Jimmy",
      email: "macarthy@yahoo.com",
      phoneNumber: "256-658-5314",
      aboutYou: "Im a pizzaria owner"
    },
    {
      username: "JackAnderson",
      password: "jackRocx",
      publicName: "JackAnderson",
      email: "jackAnderson@gmail.com",
      phoneNumber: "588-698-2547",
      aboutYou:
        "He loves collecting niche items to expand his collection of souvenirs and knickknacks"
    },
    {
      username: "DwightSchrute",
      password: "bearsBeatsBattleStarGalactica",
      publicName: "nightHawlk",
      email: "weirdFargmer@bing.com",
      phoneNumber: "584-698-2654",
      aboutYou:
        "He would like to downsize his collection, and make sure that he gets not only what the item is worth but also ensure that the items end up with someone who appreciates them"
    },
    {
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
    this.accounts.push({
      username: username,
      password: password,
      publicName: publicName,
      email: email,
      phoneNumber: phoneNumber,
      aboutYou: aboutYou
    });
  }

  constructor() {}
}
