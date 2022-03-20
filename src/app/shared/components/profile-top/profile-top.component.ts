import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';


@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.scss']
})
export class ProfileTopComponent implements OnInit {
  profile$: Observable<any> = new Observable()
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private store:Store<any>
  ) {}

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)
  }
  open(content:any) {
    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title',backdropClass: 'light-blue-backdrop'}).result.then((result) => {
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
