import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { LeftMenuComponent } from './modules/left-menu/left-menu.component';
import { RightMenuComponent } from './modules/right-menu/right-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateComponent } from './modules/create-update/create-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LeftMenuComponent,
    RightMenuComponent,
    CreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
