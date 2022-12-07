import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getExpandedFromLeftMenu(msg: boolean) {
    console.log(msg);

    this.expanded = msg;
  }

}
