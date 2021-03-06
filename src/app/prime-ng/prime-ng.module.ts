import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg 
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenubarModule} from 'primeng/menubar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SharedModule} from 'primeng/api';
import {SkeletonModule} from 'primeng/skeleton';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CalendarModule,
    CascadeSelectModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    SelectButtonModule,
    SharedModule,
    SkeletonModule
  ]
})
export class PrimeNgModule { }
