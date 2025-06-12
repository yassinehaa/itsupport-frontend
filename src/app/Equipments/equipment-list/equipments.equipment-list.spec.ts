import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsEquipmentList } from './equipments.equipment-list';

describe('EquipmentsEquipmentList', () => {
  let component: EquipmentsEquipmentList;
  let fixture: ComponentFixture<EquipmentsEquipmentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentsEquipmentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsEquipmentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
