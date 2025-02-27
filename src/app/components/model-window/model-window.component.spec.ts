import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelWindowComponent } from './model-window.component';

describe('ModelWindowComponent', () => {
  let component: ModelWindowComponent;
  let fixture: ComponentFixture<ModelWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
