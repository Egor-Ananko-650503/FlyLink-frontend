import {Component} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-files-download',
  templateUrl: './files-download.component.html',
  styleUrls: ['./files-download.component.css']
})
export class FilesDownloadComponent {
  fileName: String = '';
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) {
  }

  downloadFile(): void {
    if (this.fileName == null) {
      return;
    }

    const url = this.baseUrl + '/downloadFile/' + this.fileName;
    const blobResponse = this.httpClient.get(url, {
      responseType: 'blob'
    });

    blobResponse.subscribe(data => {
      const blob = new Blob([data]);

      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }

      // For other browsers:
      // Create a link pointing to the ObjectURL containing the blob.
      const dataObject = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = dataObject;
      link.download = this.fileName.toString();
      // this is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(dataObject);
        link.remove();
      }, 100);
    });
  }
}
