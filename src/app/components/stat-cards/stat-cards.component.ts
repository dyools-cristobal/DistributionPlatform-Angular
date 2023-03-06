import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.scss']
})
export class StatCardsComponent implements OnInit {

  stats = [
    {
      icon: 'trending_up',
      title: '$3,937',
      subTitle: 'GWP',
      progress: 78,
    },
    {
      icon: 'attach_money',
      title: '$14,126',
      subTitle: 'Commission',
      progress: 80
    },
    {
      icon: 'description',
      title: 7,
      subTitle: 'Policies Bound',
      progress: 70
    },
    {
      icon: 'note_add',
      title: 23,
      subTitle: 'GWP',
      progress: 20
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  progressColor(progress: number) {

    if (progress <= 50) {
      return 'warn';
    } else if (progress > 50 && progress <= 75) {
      return 'accent';
    }
    else if (progress > 75) {
      return 'primary'
    }
    else {
      return 'primary'
    }
  }
}
