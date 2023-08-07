import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDayTemplateData } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { Subscription } from 'rxjs';
import { onboardingMenuItems } from './menu';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit, OnDestroy, AfterViewInit {
  loading: boolean = true;
  data: any;
  checkedItems: any = [];
  checkAllState = false;
  bgOrdID: any;
  isSuperUser: any;
  searchText: any;
  searchCount: number = 0;
  dataBackup: any;
  bussinessEdit: any;
  bussinessAdd: any;
  bussinessDelete: any;
  onBoardingMenu: any;
  urlSettings!: string;


  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
  ) {
  }
  ngOnDestroy(): void {
  }
  ngOnInit() {
    this.getOrgBgId();
    this.checkPermission();
    this.onBoardingMenu = onboardingMenuItems;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.cdRef.detectChanges();
    }, 100);
  }
  fetchBgList() {

  }
  fetchBgListByBGId(bgId: any, orgId: any) {

  }
  deleteBG(id: string) {

  }
  navigateTo(bg: string, module: string) {
    this.router.navigate([`dashboard/settings/onboarding/${module}`]);
  }

  getOrgBgId() {

  }

  search() {
    this.searchCount++;
    if (this.searchCount == 1) {
      this.dataBackup = this.data;
    }
    this.data = this.dataBackup;
    let dataFiltered = this.data.filter((x: any) => {
      return x._id.toLowerCase().includes(this.searchText.toLowerCase()) || x.name.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.firstName.toLowerCase().includes(this.searchText.toLowerCase())
        || x.contactPerson.lastName.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.phone.number.toLowerCase().includes(this.searchText.toLowerCase())
        || x.createdAt.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
        (x.contactPerson.firstName.toLowerCase().concat(" ").concat(x.contactPerson.lastName.toLowerCase())).includes(this.searchText.toLowerCase())
        ;
    });
    this.data = dataFiltered;
  }
  checkPermission() {
  }

  editBussinessGroup(ID: any) {
  }

}
