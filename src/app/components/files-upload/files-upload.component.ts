import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpEvent} from '@angular/common/http';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent implements OnInit {
  files: File[] = [];
  lastUploadedFile: File;
  lastInvalids: { file: File, errorType: string }[] = [];
  accept: String = '*';
  validDrag: boolean;
  invalidDrag: boolean;
  formData: FormData;
  progress: number;
  httpEvent: HttpEvent<{}>;
  displayedColumns = ['position', 'name', 'type', 'size', 'action'];
  @ViewChild(MatTable) table: MatTable<File>;

  ngOnInit(): void {
  }

  deleteitem(index: number): void {
    this.files.splice(index, 1);
    this.table.renderRows();
  }

  deleteAllItems(): void {
    this.files.splice(0, this.files.length);
    this.table.renderRows();
  }
}
