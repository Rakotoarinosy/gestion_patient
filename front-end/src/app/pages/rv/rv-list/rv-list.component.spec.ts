import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvListComponent } from './rv-list.component';

describe('RvListComponent', () => {
  let component: RvListComponent;
  let fixture: ComponentFixture<RvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
