import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Output() expanded = new EventEmitter<boolean>();
  expandedOnLeftMenu: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToSetting() {
    this.router.navigate(['/dashboard/settings']);
  }

  sentExpandedToDashboard() {
    this.expandedOnLeftMenu = !this.expandedOnLeftMenu;
    this.expanded.emit(this.expandedOnLeftMenu);
  }

}
