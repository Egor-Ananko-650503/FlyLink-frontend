import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDownloadComponent } from './files-download.component';

describe('FilesDownloadComponent', () => {
  let component: FilesDownloadComponent;
  let fixture: ComponentFixture<FilesDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
