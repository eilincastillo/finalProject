import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReposComponent } from './info-repos.component';

describe('InfoReposComponent', () => {
  let component: InfoReposComponent;
  let fixture: ComponentFixture<InfoReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
