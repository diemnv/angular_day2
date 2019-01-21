import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaculatorComponent } from './caculator/caculator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CaculatorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CaculatorComponent]
})
export class CaculatorModule { }
