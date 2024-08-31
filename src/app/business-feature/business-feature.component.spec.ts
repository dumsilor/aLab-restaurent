import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFeatureComponent } from './business-feature.component';

describe('BusinessFeatureComponent', () => {
  let component: BusinessFeatureComponent;
  let fixture: ComponentFixture<BusinessFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
