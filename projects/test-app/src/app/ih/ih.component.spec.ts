import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhComponent } from './ih.component';

describe('IhComponent', () => {
  let component: IhComponent;
  let fixture: ComponentFixture<IhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
