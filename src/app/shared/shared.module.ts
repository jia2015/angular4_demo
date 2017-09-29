import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [CommonModule, DropDownDirective],
  declarations: [DropDownDirective],
  providers: [],
})
export class SharedModule { }
