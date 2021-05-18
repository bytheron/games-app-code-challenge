import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/deals/main/main.component';
import { DealDetailComponent } from './pages/deals/deal-detail/deal-detail.component';
import { StoresComponent } from './pages/deals/stores/stores.component';
import { HeaderComponent } from './layout/header/header.component';
import { MobileMenuComponent } from './layout/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DealCardComponent } from './pages/deals/components/deal-card/deal-card.component';
import { SidebarComponent } from './pages/deals/components/sidebar/sidebar.component';
import { SidebarCardsComponent } from './pages/deals/components/sidebar-cards/sidebar-cards.component';
import { StoreCardComponent } from './pages/deals/components/store-card/store-card.component';
import { FormComponent } from './pages/deals/components/form/form.component';
import { MaterialModule } from './layout/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MainComponent,
    DealDetailComponent,
    StoresComponent,
    HeaderComponent,
    MobileMenuComponent,
    DealCardComponent,
    SidebarComponent,
    SidebarCardsComponent,
    StoreCardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
