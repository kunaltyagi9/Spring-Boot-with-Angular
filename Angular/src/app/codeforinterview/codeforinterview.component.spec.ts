import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforinterviewComponent } from './codeforinterview.component';

describe('CodeforinterviewComponent', () => {
  let component: CodeforinterviewComponent;
  let fixture: ComponentFixture<CodeforinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeforinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
