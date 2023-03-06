import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './pages/admin-pages/user-listing/user-listing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EndorsementsComponent } from './pages/endorsements/endorsements.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { ProductsComponent } from './pages/products/products.component';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { SupportComponent } from './pages/support/support.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'quotations', component: QuotationsComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'endorsements', component: EndorsementsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'user-listing', component: UserListingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
