import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephusWebWorkerComponent } from './josephus-web-worker.component';

describe('JosephusWebWorkerComponent', () => {
  let component: JosephusWebWorkerComponent;
  let fixture: ComponentFixture<JosephusWebWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JosephusWebWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JosephusWebWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
