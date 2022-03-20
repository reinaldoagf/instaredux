import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileFormComponent } from '../../forms/profile-form/profile-form.component';

@Component({
  selector: 'app-profile-form-modal',
  templateUrl: './profile-form-modal.component.html',
  styleUrls: ['./profile-form-modal.component.scss']
})
export class ProfileFormModalComponent implements OnInit {
  @ViewChild('profileFormRef') private profileFormRef: ProfileFormComponent;

  constructor(
    public modal: NgbActiveModal,) { }

  ngOnInit(): void {
  }
  save(): void {
    const profileForm =this.profileFormRef.onSubmit();
    if (profileForm?.valid) {
      const data = { ...profileForm.data };
      console.log('data:', data)
      this.modal.close();
    }
  }
}
