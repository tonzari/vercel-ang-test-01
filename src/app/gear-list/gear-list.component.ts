import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { MusicGearItem } from '../music-gear-item';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {

  items: MusicGearItem[] = this.inventoryService.allGearItems;

  constructor(private inventoryService: InventoryService) { 
    this.items = this.inventoryService.allGearItems;
  }

  ngOnInit(): void {
  }

}
