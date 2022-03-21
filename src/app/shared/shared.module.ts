import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileGridComponent } from './components/profile-grid/profile-grid.component';
import { ProfilePostComponent } from './components/profile-post/profile-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileFormComponent } from './components/forms/profile-form/profile-form.component';
import { ProfileFormModalComponent } from './components/modals/profile-form-modal/profile-form-modal.component';

//directives
import { BrokenPictureDirective } from './directives/broken-picture.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    ProfileTopComponent,
    ProfileGridComponent,
    ProfilePostComponent,
    FooterComponent,
    ProfileFormComponent,
    ProfileFormModalComponent,
    BrokenPictureDirective
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
    ProfilePostComponent,
    FooterComponent,
    ProfileFormComponent,
    ProfileFormModalComponent,
    BrokenPictureDirective
  ]
})
export class SharedModule { }
