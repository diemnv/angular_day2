import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NameCartComponent } from './name-cart/name-cart.component';

@NgModule({
  declarations: [UserProfileComponent, NameCartComponent],
  imports: [
    CommonModule
  ],
  exports: [UserProfileComponent, NameCartComponent]
})
export class UserModule { }
