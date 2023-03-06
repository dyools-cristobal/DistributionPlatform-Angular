import { Component, OnInit } from '@angular/core';
import { IsNavItemType } from 'src/interfaces/nav-interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menuList : IsNavItemType = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'dashboard'
    },
    {
      label: 'Quotes',
      route: '/quotesListing/myQuotes',
      icon: 'description'
    },
    {
      label: 'Referrals',
      route: '/referralsListing',
      icon: 'fast_forward'
    },
    {
      label: 'Policies',
      route: '/policiesListing',
      icon: 'policy'
    },
    {
      label: 'Renewals',
      route: '/renewalsListing',
      icon: 'autorenew'
    },
    {
      label: 'Notifications',
      route: '/notifications',
      icon: 'notifications'
    },
    {
      label: 'Search',
      route: '/search',
      icon: 'search'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
