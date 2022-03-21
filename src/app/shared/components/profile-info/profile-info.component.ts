import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileFormModalComponent } from '../modals/profile-form-modal/profile-form-modal.component';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
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
