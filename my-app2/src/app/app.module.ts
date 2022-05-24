import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './products/cockpit/cockpit.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHightlightDirective } from './BasicHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ProductComponent,
    ProductsComponent,
    NumbersComponent,
    BasicHightlightDirective,
    AccountsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
