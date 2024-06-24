import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvCreateComponent } from './rv-create.component';

describe('RvCreateComponent', () => {
  let component: RvCreateComponent;
  let fixture: ComponentFixture<RvCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
