import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephusInteractiveComponent } from './josephus-interactive.component';

describe('JosephusInteractiveComponent', () => {
  let component: JosephusInteractiveComponent;
  let fixture: ComponentFixture<JosephusInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JosephusInteractiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JosephusInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
