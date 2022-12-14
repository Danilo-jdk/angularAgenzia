import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaRicettaComponent } from './nuova-ricetta.component';

describe('NuovaRicettaComponent', () => {
  let component: NuovaRicettaComponent;
  let fixture: ComponentFixture<NuovaRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaRicettaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
