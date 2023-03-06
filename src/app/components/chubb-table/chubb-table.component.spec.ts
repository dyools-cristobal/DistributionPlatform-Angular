import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChubbTableComponent } from './chubb-table.component';

describe('ChubbTableComponent', () => {
  let component: ChubbTableComponent;
  let fixture: ComponentFixture<ChubbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChubbTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChubbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
