import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileFormModalComponent } from '../modals/profile-form-modal/profile-form-modal.component';
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';


@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.scss']
})
export class ProfileTopComponent implements OnInit {
  profile$: Observable<any> = new Observable();
  closeResult = '';
  modalRef: any = null;
  constructor(
    private modalService: NgbModal,
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)

  }
  openModalForm() {
    this.modalRef = this.modalService.open(ProfileFormModalComponent, { size: 'lg', ariaLabelledBy: 'modal-basic-title', backdropClass: 'light-blue-backdrop' }).result.then((result) => {
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
  
}
