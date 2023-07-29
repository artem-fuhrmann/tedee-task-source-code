import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinManagerHeaderComponent } from './pin-manager-header/pin-manager-header.component';
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinComponent } from './pin/pin.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    PinManagerHeaderComponent,
    CustomButtonComponent,
    PinListComponent,
    PinComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
