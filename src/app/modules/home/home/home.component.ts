import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
/* import { ProfileInterface } from 'src/app/core/models/profile.interface'; */
import { 
  /* loadedProfile,  */
  loadProfile 
} from 'src/app/state/actions/profile.actions';
/* import { ProfileService } from 'src/app/core/services/profile.service'; */
import { Observable } from 'rxjs';
import { loadingSelector } from 'src/app/state/selectors/profile.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()

  constructor(
    private store:Store<any>,
    /* private profileService: ProfileService */
    ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(loadingSelector)
    /* this.profileService.getData().subscribe((response:ProfileInterface) =>{
      this.store.dispatch(loadedProfile({profile:response}))
    }) */
    this.store.dispatch(loadProfile())
  }

}
