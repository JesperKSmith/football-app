import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysPipeComponent } from './keys-pipe.component';

describe('KeysPipeComponent', () => {
  let component: KeysPipeComponent;
  let fixture: ComponentFixture<KeysPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
