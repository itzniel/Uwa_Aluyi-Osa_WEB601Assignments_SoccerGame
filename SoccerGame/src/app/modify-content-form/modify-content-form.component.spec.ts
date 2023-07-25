import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContentFormComponent } from './modify-content-form.component';

describe('ModifyContentFormComponent', () => {
  let component: ModifyContentFormComponent;
  let fixture: ComponentFixture<ModifyContentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyContentFormComponent]
    });
    fixture = TestBed.createComponent(ModifyContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
