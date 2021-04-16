import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items.service";
import { RoutingService } from "../routing.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  currentItem = {
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

  constructor(
    private itmService: ItemsService,
    private routService: RoutingService
  ) {}

  ngOnInit() {
    this.currentItem = this.itmService.selectedItem;
  }

  onBackToItemsPage() {
    this.routService.onShowItems();
  }
}
