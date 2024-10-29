import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharracterComponent } from './components/add-charracter/add-charracter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharracterComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
