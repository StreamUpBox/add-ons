import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BucketModule} from 'Bucket';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NGithubModule} from 'NGithub';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BucketModule,
    NGithubModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
