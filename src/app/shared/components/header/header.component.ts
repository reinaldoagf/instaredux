import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { profileSelector } from 'src/app/state/selectors/profile.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>
    ) { }

  ngOnInit(): void {
    this.profile$ = this.store.select(profileSelector)
  }

}
