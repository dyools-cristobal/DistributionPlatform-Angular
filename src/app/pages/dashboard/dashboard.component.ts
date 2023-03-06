import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataFetchService } from 'src/app/services/data-fetch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myQuotes = {
    //shows table column if set to true
    tableColConfig: [
      { show: true, headerLabel: 'Status', headerId: 'status' },
      { show: true, headerLabel: 'Policy No', headerId: 'policyNo' },
      { show: true, headerLabel: 'Product', headerId: 'productId' },
      { show: true, headerLabel: 'Insured Name', headerId: 'insuredName' },
      { show: true, headerLabel: 'Policy eff', headerId: 'transactionEffectiveDate' },
      { show: true, headerLabel: 'Quotation Status', headerId: 'statusTo' },
      { show: true, headerLabel: 'Action', headerId: 'action' }
    ],
    quoteList: []
  };

  chartOption: EChartsOption = {
    title: {
      text: 'My Sales - GWP'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1000, 932, 4000, 1200, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  constructor(private datafetchService: DataFetchService) { }

  ngOnInit(): void {
    this.getQuotesData();
  }

  getQuotesData(): void {
    this.datafetchService.getData()
      .subscribe(data => {
        this.myQuotes.quoteList = data;
      });

  }

}
