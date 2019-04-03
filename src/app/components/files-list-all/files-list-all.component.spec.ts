import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListAllComponent } from './files-list-all.component';

describe('FilesListAllComponent', () => {
  let component: FilesListAllComponent;
  let fixture: ComponentFixture<FilesListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
