import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { VerticalLayoutModule } from './vertical-layout/vertical-layout.module';
import { HorizontalLayoutModule } from './horizontal-layout/horizontal-layout.module';



@NgModule({
  declarations: [
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    VerticalLayoutModule,
    HorizontalLayoutModule
  ],
  exports: [
    LayoutContainerComponent
    // PublicLayoutComponent
  ],
})
export class LayoutModule { }
