import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparisonTableComponent,
    SearchFilterComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MultiselectDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
