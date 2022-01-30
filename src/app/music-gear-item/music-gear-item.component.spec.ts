import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGearItemComponent } from './music-gear-item.component';

describe('MusicGearItemComponent', () => {
  let component: MusicGearItemComponent;
  let fixture: ComponentFixture<MusicGearItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicGearItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicGearItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
