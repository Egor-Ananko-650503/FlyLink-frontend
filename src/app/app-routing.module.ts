import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilesUploadComponent} from './components/files-upload/files-upload.component';
import {FilesDownloadComponent} from './components/files-download/files-download.component';

const routes: Routes = [
  {path: 'upload', component: FilesUploadComponent},
  {path: 'download', component: FilesDownloadComponent}
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
