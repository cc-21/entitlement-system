import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [
    CommonModule, NzLayoutModule, NzDropDownModule
  ],
  declarations: [LayoutComponent,HeaderComponent,FooterComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
