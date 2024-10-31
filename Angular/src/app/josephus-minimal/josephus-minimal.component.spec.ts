import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephusMinimalComponent } from './josephus-minimal.component';

describe('JosephusMinimalComponent', () => {
  let component: JosephusMinimalComponent;
  let fixture: ComponentFixture<JosephusMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JosephusMinimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JosephusMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
