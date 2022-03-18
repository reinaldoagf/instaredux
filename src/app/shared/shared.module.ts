import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileGridComponent } from './components/profile-grid/profile-grid.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProfileTopComponent,
    ProfileGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ProfileTopComponent,
    ProfileGridComponent
  ]
})
export class SharedModule { }
