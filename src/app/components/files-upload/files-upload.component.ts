import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {MatTable} from '@angular/material';

class Message {
  fileName: String;
  fileDownloadUri: String;
  fileType: String;
  size: number;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent {
  files: File[] = [];
  lastUploadedFile: File;
  lastInvalids: { file: File, errorType: string }[] = [];
  accept: String = '*';
  validDrag: boolean;
  invalidDrag: boolean;
  formData: FormData;
  progress: number;
  messageMultiple: Message[] = [];
  messageSingle: Message;
  httpEvent: HttpEvent<{}>;
  displayedColumns = ['position', 'name', 'type', 'size', 'action'];
  @ViewChild(MatTable) table: MatTable<File>;
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) {
  }

  uploadFile(file: File): void {
    if (file == null) {
      return;
    }

    const fd = new FormData();
    fd.append('file', file);

    const uploadReq = new HttpRequest('POST', this.baseUrl + '/uploadFile', fd, {
      reportProgress: true
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.messageSingle = event.body as Message;
      }
    });
  }

  uploadAll(): void {
    if (this.files.length === 0) {
      return;
    }

    const uploadReq = new HttpRequest('POST', this.baseUrl + '/uploadMultipleFiles', this.formData, {
      reportProgress: true
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.messageMultiple = event.body as Message[];
      }
    });
  }

  deleteItem(index: number): void {
    this.files.splice(index, 1);
    this.table.renderRows();
  }

  deleteAllItems(): void {
    this.files.splice(0, this.files.length);
    this.table.renderRows();
  }
}
