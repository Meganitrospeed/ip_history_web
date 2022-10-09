import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {  rows = [
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' }
];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
