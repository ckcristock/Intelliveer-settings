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
import { OnboardingService } from "src/app/services/onboarding.service";
import { log } from 'console';

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
  selectedItem: string = "BG";


  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private onboarServ: OnboardingService,
  ) {
  }
  ngOnDestroy(): void {
  }
  ngOnInit() {
    this.getOrgBgId();
    this.checkPermission();
    this.onBoardingMenu = onboardingMenuItems;
    this.onboarServ.getBGnLE().subscribe((resp: any) => {
      this.data = resp.results.slice(0, 15);
      console.log("data:", this.data);
    });
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

  selectItem(id: string) {
    this.data = [];
    this.selectedItem = id;

    switch (id) {
      case 'BG':
        this.onboarServ.getBGnLE().subscribe((resp: any) => {
          this.data = resp.results.slice(0, 15);
          console.log("data:", this.data);
        });
        break;
      case 'LE':
        this.onboarServ.getBGnLE().subscribe((resp: any) => {
          this.data = resp.results.slice(8, 22);
          console.log("data:", this.data);
        });
        break;
      case 'LC':
        this.onboarServ.getLCnPR().subscribe((resp: any) => {
          this.data = resp.results.slice(0, 15);
          for (let i = 0; i < this.data.length; i++) {
            if (!this.data[i]['location']) {
              this.data[i]['location'] = {}; // Crea un objeto 'location' vacío si no existe
              this.data[i]['origin'] = {};
            }
            this.data[i]['location'].name = this.data[i].dimension;
            this.data[i]['origin'].name = this.data[i].type;

          }
          console.log("data:", this.data);
        });
        break;
      case 'PR':
        this.onboarServ.getLCnPR().subscribe((resp: any) => {
          this.data = resp.results.slice(8, 22);
          for (let i = 0; i < this.data.length; i++) {
            if (!this.data[i]['location']) {
              this.data[i]['location'] = {}; // Crea un objeto 'location' vacío si no existe
              this.data[i]['origin'] = {};
            }
            this.data[i]['location'].name = this.data[i].dimension;
            this.data[i]['origin'].name = this.data[i].type;

          }
          console.log("data:", this.data);
        });
        break;
      default:
        // Acción por defecto si ninguna opción coincide
        console.log('Opción no reconocida');
        break;
    }
  }

}
