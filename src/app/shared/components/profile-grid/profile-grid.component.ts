import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss']
})
export class ProfileGridComponent implements OnInit {
  profile$: Observable<any> = new Observable()

  constructor(
    private store:Store<any>,) { }

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)
  }

}
