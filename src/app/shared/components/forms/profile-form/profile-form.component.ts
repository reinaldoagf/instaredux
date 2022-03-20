import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';
import { ProfileInterface } from 'src/app/core/models/profile.interface';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profile$: Observable<any> = new Observable();
  profileForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) {
    this.profileForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3), (control: AbstractControl) => {
        return ((control.value as string).indexOf(' ') >= 0) ? { containSpace: true } : null;
      }]],
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required, Validators.minLength(5)]],
    });
  }
  get formGroupControls() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)
    this.profile$.subscribe((current: ProfileInterface) => {
      if (current) {
        this.profileForm.patchValue({
          name: current.name,
          username: current.username,
          email: current.email,
          id: current.id
        });
      }
    })
  }

  onSubmit(): any {
    this.submitted = true;
    if ( this.profileForm.valid ) {
    return { data: this.profileForm.value, valid: true };
    }
}
}
