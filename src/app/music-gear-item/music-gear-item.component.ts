import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { MusicGearItem } from '../music-gear-item';

@Component({
  selector: 'app-music-gear-item',
  templateUrl: './music-gear-item.component.html',
  styleUrls: ['./music-gear-item.component.css']
})
export class MusicGearItemComponent implements OnInit {

  @Input() theItem: MusicGearItem = {name: "test", category: "test", description: "test", quantity: -1}; 

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

}
