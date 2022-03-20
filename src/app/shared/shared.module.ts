import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileGridComponent } from './components/profile-grid/profile-grid.component';
import { ProfilePostComponent } from './components/profile-post/profile-post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProfileTopComponent,
    ProfileGridComponent,
    ProfilePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ProfileTopComponent,
    ProfileGridComponent,
    ProfilePostComponent
  ]
})
export class SharedModule { }
