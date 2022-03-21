import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileFormComponent } from '../../forms/profile-form/profile-form.component';
import { updateProfile } from 'src/app/state/actions/profile.actions';

@Component({
  selector: 'app-profile-form-modal',
  templateUrl: './profile-form-modal.component.html',
  styleUrls: ['./profile-form-modal.component.scss']
})
export class ProfileFormModalComponent implements OnInit {
  @ViewChild('profileFormRef') private profileFormRef: ProfileFormComponent;

  constructor(
    private store: Store,
    public modal: NgbActiveModal,) { }

  ngOnInit(): void {
  }
  save(): void {
    const profileForm = this.profileFormRef.onSubmit();
    if (profileForm?.valid) {
      const data = { ...profileForm.data };
      this.store.dispatch(updateProfile(data));
      this.modal.close();
    }
  }
}
