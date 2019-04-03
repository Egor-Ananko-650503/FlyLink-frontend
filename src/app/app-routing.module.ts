import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilesUploadComponent} from './components/files-upload/files-upload.component';
import {FilesDownloadComponent} from './components/files-download/files-download.component';
import {FilesListAllComponent} from './components/files-list-all/files-list-all.component';

const routes: Routes = [
  {path: 'upload', component: FilesUploadComponent},
  {path: 'download', component: FilesDownloadComponent},
  {path: 'listAll', component: FilesListAllComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
