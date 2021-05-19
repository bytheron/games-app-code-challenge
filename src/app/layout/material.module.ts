import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
})
export class MaterialModule { }
