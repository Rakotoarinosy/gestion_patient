import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvEditComponent } from './rv-edit.component';

describe('RvEditComponent', () => {
  let component: RvEditComponent;
  let fixture: ComponentFixture<RvEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RvEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
