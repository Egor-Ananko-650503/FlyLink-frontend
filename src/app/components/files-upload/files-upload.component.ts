import {Component, OnInit} from '@angular/core';
import {HttpEvent} from '@angular/common/http';

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

  ngOnInit(): void {
  }
}
