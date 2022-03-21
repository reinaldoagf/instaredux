import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';

@Component({
  selector: 'app-profile-stories',
  templateUrl: './profile-stories.component.html',
  styleUrls: ['./profile-stories.component.scss']
})
export class ProfileStoriesComponent implements OnInit {
  profile$: Observable<any> = new Observable();
  @Input()
  set search(val: any) {
    this.searchTable=val;
  }
  searchTable:string='';

  constructor(
    private store: Store<any>) { }

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)
  }

}
