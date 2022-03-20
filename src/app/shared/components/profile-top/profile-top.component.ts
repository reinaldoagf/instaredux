import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { profileSelector } from 'src/app/state/selectors/profile.selectors';
import { ProfileInterface } from 'src/app/core/models/profile.interface';


@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.scss']
})
export class ProfileTopComponent implements OnInit {
  profile$: Observable<any> = new Observable();
  profileForm: FormGroup;
  closeResult = '';
  submitted: boolean = false;

  constructor(
    private modalService: NgbModal,
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
  open(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title', backdropClass: 'light-blue-backdrop' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  save() {
    this.submitted = true;
    console.log('this.formGroupControls["username"].errors:', this.formGroupControls["username"].errors?.required)
    console.log(this.profileForm.value)
  }
}
