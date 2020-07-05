import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionModalComponent } from './inclusion-modal.component';

describe('InclusionModalComponent', () => {
  let component: InclusionModalComponent;
  let fixture: ComponentFixture<InclusionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
