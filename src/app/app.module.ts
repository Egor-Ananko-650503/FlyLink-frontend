import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ngfModule} from 'angular-file';
import {FilesUploadComponent} from './components/files-upload/files-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatInputModule, MatTableModule} from '@angular/material';
import {FilesDownloadComponent} from './components/files-download/files-download.component';
import { FilesListAllComponent } from './components/files-list-all/files-list-all.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    FilesDownloadComponent,
    FilesListAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ngfModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
