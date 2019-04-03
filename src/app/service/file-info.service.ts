import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileInfo} from '../model/file-info';

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {
  baseUrl = 'api/listAll';

  constructor(private http: HttpClient) {
  }

  getAllFiles(): Observable<FileInfo[]> {
    return this.http.get<FileInfo[]>(this.baseUrl);
  }
}
