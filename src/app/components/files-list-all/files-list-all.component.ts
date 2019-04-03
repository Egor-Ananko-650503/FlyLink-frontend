import {Component, OnInit} from '@angular/core';
import {FileInfo} from '../../model/file-info';
import {FileInfoService} from '../../service/file-info.service';

@Component({
  selector: 'app-files-list-all',
  templateUrl: './files-list-all.component.html',
  styleUrls: ['./files-list-all.component.css']
})
export class FilesListAllComponent implements OnInit {
  fileInfoList: FileInfo[] = [];
  tableColumns = ['pos', 'name', 'size', 'up_date'];

  constructor(private fileInfoService: FileInfoService) {
  }

  ngOnInit() {
    this.fileInfoService.getAllFiles()
      .subscribe(value => {
        this.fileInfoList = value;
      });
  }

}
