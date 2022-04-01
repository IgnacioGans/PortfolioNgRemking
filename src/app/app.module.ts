import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WpRestApiService } from './wp-rest-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WpBlogComponent } from './WpComponent/wp-blog/wp-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WpBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [WpRestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
