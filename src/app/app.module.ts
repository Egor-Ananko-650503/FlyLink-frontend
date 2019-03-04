import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ngfModule} from 'angular-file';
import {FilesUploadComponent} from './components/files-upload/files-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButton, MatButtonBase, MatButtonModule, MatIconModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
