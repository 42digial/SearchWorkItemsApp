import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkitemGetComponent } from './workitem-get/workitem-get.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { WorkitemsService } from './workitems.service';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WorkitemGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [WorkitemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
