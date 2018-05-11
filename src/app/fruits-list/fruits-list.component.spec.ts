import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitList } from './fruits-list.component';

describe('FruitList', () => {
  let component: FruitList;
  let fixture: ComponentFixture<FruitList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
