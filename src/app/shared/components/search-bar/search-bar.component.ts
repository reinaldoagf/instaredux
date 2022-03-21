import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearchEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp($event){
    this.onSearchEvent.emit($event.target.value);
  }

}
