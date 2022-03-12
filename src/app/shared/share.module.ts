import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.componect';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class ShareModule { }
