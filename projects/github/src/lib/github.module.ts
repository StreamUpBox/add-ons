import { NgModule } from '@angular/core';
import { GithubComponent } from './github.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from "@angular/common";
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  imports: [
      CommonModule,
      MatTabsModule,
      MatMenuModule,
      MatIconModule
  ],
  declarations: [GithubComponent],
  exports: [GithubComponent],
})
export class GithubModule { }
