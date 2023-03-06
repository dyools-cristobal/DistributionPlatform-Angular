import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';


// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ProductsComponent } from './pages/products/products.component';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { EndorsementsComponent } from './pages/endorsements/endorsements.component';
import { SupportComponent } from './pages/support/support.component';
//Components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ChubbTableComponent } from './components/chubb-table/chubb-table.component';
import { StatusChipComponent } from './components/status-chip/status-chip.component';
import { StatCardsComponent } from './components/stat-cards/stat-cards.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UserListingComponent } from './pages/admin-pages/user-listing/user-listing.component';
import { AddUserComponent } from './pages/admin-pages/add-user/add-user.component';
//Libraries

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageHeaderComponent,
    ChubbTableComponent,
    StatusChipComponent,
    StatCardsComponent,
    ProductsComponent,
    QuotationsComponent,
    PoliciesComponent,
    EndorsementsComponent,
    SupportComponent,
    PageFooterComponent,
    PageBannerComponent,
    ProductCardComponent,
    UserListingComponent,
    AddUserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    HighlightModule,
    MatChipsModule,
    MatExpansionModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    })
  ],
  exports: [
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
