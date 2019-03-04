import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilesUploadComponent} from './components/files-upload/files-upload.component';

const routes: Routes = [
  {path: 'upload', component: FilesUploadComponent}
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
