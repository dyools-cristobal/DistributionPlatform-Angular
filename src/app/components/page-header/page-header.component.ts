import { Component, Input, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  title = 'Broker DP';
  menuList = [
    {
      label: 'Home',
      route: '/dashboard',
    },
    {
      label: 'Products',
      route: '/products',
    },
    {
      label: 'Quotations',
      route: '/quotations',
    },
    {
      label: 'Policies',
      route: '/policies',
    },
    {
      label: 'Endorsements',
      route: '/endorsements',
    },
    {
      label: 'Support',
      route: '/support',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
