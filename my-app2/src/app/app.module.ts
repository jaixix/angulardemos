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
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './users/userview/userview.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ProductComponent,
    ProductsComponent,
    NumbersComponent,
    BasicHightlightDirective,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    UsersComponent,
    UserviewComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
