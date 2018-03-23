import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterHomeComponent } from './shelter-home.component';

describe('ShelterHomeComponent', () => {
  let component: ShelterHomeComponent;
  let fixture: ComponentFixture<ShelterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
