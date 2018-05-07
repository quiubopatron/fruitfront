import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsUpdateComponent } from './fruits-update.component';

describe('FruitsUpdateComponent', () => {
  let component: FruitsUpdateComponent;
  let fixture: ComponentFixture<FruitsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
