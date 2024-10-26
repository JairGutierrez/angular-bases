import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
