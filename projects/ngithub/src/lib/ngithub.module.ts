import { NgModule } from '@angular/core';
import { NGithubComponent } from './ngithub.component';
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
      CommonModule,
      MatTabsModule,
      MatMenuModule,
      MatIconModule
  ],
  declarations: [NGithubComponent],
  exports: [NGithubComponent]
})
export class NGithubModule { }
