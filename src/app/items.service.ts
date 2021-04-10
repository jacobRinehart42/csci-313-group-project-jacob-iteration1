import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService {
  selectedItem = {
    itemId: 0,
    owningUserId: 1,
    name: "",
    askingPrice: "",
    underNegotiation: "",
    seller: "",
    nicheMarket: "",
    tags: "",
    description: "",
    dimensions: "",
    conditionAndAge: "",
    otherInfo: ""
  };

  thisUsersItems;

  items = [
    {
      itemId: 1,
      owningUserId: 1,
      name: "",
      askingPrice: "",
      underNegotiation: "",
      seller: "",
      nicheMarket: "",
      tags: "",
      description: "",
      dimensions: "",
      conditionAndAge: "",
      otherInfo: ""
    },
    {
      itemId: 1,
      owningUserId: 1,
      name: "",
      askingPrice: "",
      underNegotiation: "",
      seller: "",
      nicheMarket: "",
      tags: "",
      description: "",
      dimensions: "",
      conditionAndAge: "",
      otherInfo: ""
    },
    {
      itemId: 1,
      owningUserId: 1,
      name: "",
      askingPrice: "",
      underNegotiation: "",
      seller: "",
      nicheMarket: "",
      tags: "",
      description: "",
      dimensions: "",
      conditionAndAge: "",
      otherInfo: ""
    }
  ];

  getAllItemsForUser(id: number) {
    var theirItems;
    for (var i = 0; i < this.items.length; i++) {
      if ((this.items[i].owningUserId = id)) {
        theirItems.push(this.items[i]);
      }
    }
    this.thisUsersItems = theirItems;
  }

  createItem(
    userId: number,
    name: string,
    askingPrice: string,
    underNegotiation: string,
    seller: string,
    nicheMarket: string,
    tags: string,
    description: string,
    dimensions: string,
    conditionAndAge: string,
    otherInfo: string
  ) {
    this.items.push({
      itemId: this.getUniqueItemId(),
      owningUserId: userId,
      name: name,
      askingPrice: askingPrice,
      underNegotiation: underNegotiation,
      seller: seller,
      nicheMarket: nicheMarket,
      tags: tags,
      description: description,
      dimensions: dimensions,
      conditionAndAge: conditionAndAge,
      otherInfo: otherInfo
    });
  }

  getUniqueItemId() {
    var id = 1;
    for (var i = 0; i < this.items.length; i++) {
      if (id == this.items[i].itemId) {
        id = this.items[i].itemId;
      }
    }
    return ++id;
  }

  editItem(
    itemId: number,
    userId: number,
    name: string,
    askingPrice: string,
    underNegotiation: string,
    seller: string,
    nicheMarket: string,
    tags: string,
    description: string,
    dimensions: string,
    conditionAndAge: string,
    otherInfo: string
  ) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId == itemId) {
        this.items[i].name = name;
        this.items[i].askingPrice = askingPrice;
        this.items[i].underNegotiation = underNegotiation;
        this.items[i].seller = seller;
        this.items[i].nicheMarket = nicheMarket;
        this.items[i].tags = tags;
        this.items[i].description = description;
        this.items[i].dimensions = dimensions;
        this.items[i].conditionAndAge = conditionAndAge;
      }
    }
  }

  constructor() {}
}
