import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  pageTitle = 'Products'
  buyOnline = true;
  productAH = [
    {
      imageLink: '../../../assets/img/desktop/ah-product/business-travel.png',
      category: 'Accident & Health',
      title: 'Chubb Travel First Insurance',
      description: 'A comprehensive travel insurance product that provides coverage for trip cancellation, medical expenses, emergency medical transportation, and baggage loss or delay. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/ah-product/group-personal.png',
      category: 'Accident & Health',
      title: 'Group Personal Accident Insurance',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/ah-product/group-personal-max.png',
      category: 'Accident & Health',
      title: 'Group Personal Accident Maximum',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/ah-product/fr-hosp.png',
      category: 'Accident & Health',
      title: 'Foreign Workers Hospitalisation',
      description: 'A type of insurance coverage that is mandatory for foreign workers employed in Singapore. ',
      actionLink: '/'
    },
  ]

  productCasualty = [
    {
      imageLink: '../../../assets/img/desktop/casualty-product/flexiguard.png',
      category: 'Property & casualty',
      title: 'Chubb FlexiGuard Plus Business Insurance',
      description: 'A comprehensive travel insurance product that provides coverage for trip cancellation, medical expenses, emergency medical transportation, and baggage loss or delay. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/casualty-product/misc.png',
      category: 'Property & casualty',
      title: 'Chubb Miscellaneous Class Insurance',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/casualty-product/com-fire.png',
      category: 'Property & casualty',
      title: 'Chubb Commercial Fire Insurance',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/casualty-product/liability.png',
      category: 'Property & casualty',
      title: 'Chubb Broadform Liability Insurance',
      description: 'A type of insurance coverage that is mandatory for foreign workers employed in Singapore. ',
      actionLink: '/'
    },
  ]
  productConstruction = [
    {
      imageLink: '../../../assets/img/desktop/construction-product/construction-product1.png',
      category: 'Construction',
      title: 'Construction Insurance Product 1',
      description: 'A comprehensive travel insurance product that provides coverage for trip cancellation, medical expenses, emergency medical transportation, and baggage loss or delay. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/construction-product/construction-product2.png',
      category: 'Construction',
      title: 'Construction Insurance Product 2',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/construction-product/construction-product3.png',
      category: 'Construction',
      title: 'Construction Insurance Product 3',
      description: 'An insurance product designed to provide financial compensation in the event of an accident resulting in injury, disability, or death. ',
      actionLink: '/'
    },
    {
      imageLink: '../../../assets/img/desktop/construction-product/construction-product4.png',
      category: 'Construction',
      title: 'Construction Insurance Product 4',
      description: 'A type of insurance coverage that is mandatory for foreign workers employed in Singapore. ',
      actionLink: '/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
