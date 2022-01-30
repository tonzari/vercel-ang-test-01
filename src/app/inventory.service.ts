import { Injectable } from '@angular/core';
import { MusicGearItem } from './music-gear-item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  allGearItems: MusicGearItem[] = [
    {name: "Nord Piano 4", category: "Keyboard", description: "Bought used. Good condition. A6 action is faulty.", quantity: 1},
    {name: "Moog One 8-voice", category: "Synthesizer", description: "Bought new from Sweetwater. Has tuning instability in lower register.", quantity: 1},
    {name: "Shure SM57", category: "Microphone", description: "All in good shape. One is used, the rest were bought new.", quantity: 3}
  ];

  getAllGearItems() { return this.allGearItems; }

  constructor() { }
}
