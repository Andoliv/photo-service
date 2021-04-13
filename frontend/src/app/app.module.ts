import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PhotoComponent} from './photo';
import {PhotoApprovalComponent} from './photo-approval';
import {PageNotFoundComponent} from './page-not-found';

@NgModule({
  declarations: [
    AppComponent,
    PhotoApprovalComponent,
    PhotoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
