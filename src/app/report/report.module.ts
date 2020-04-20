import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './component/report/report.component';
import { ReportRoutingModule } from './report-routing.module';



@NgModule({
  declarations: [ ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
