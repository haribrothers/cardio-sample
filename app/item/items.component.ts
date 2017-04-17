import { Component, OnInit } from "@angular/core";
import { FileStack } from "nativescript-filestack";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { 
        
    }

    ngOnInit(){
        console.log("Helloooooo");
    }

    scanCard(event){
        console.log("Hellooo");
        let fileStack = new FileStack('AXvRbfR7UTDi7iCe6lA1Xz');
        alert("Hellooo");
    }
}
