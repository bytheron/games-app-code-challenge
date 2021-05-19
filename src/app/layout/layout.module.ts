import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-template/main-template.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent,
    MaterialModule
  ],  
  imports: [
    MaterialModule
  ],
  providers: [],
})
export class PageLayoutModule { }
