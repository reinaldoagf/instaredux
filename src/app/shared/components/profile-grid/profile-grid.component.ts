import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss']
})
export class ProfileGridComponent implements OnInit {
  @Input() profile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
