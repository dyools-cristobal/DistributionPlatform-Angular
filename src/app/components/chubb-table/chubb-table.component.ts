import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chubb-table',
  templateUrl: './chubb-table.component.html',
  styleUrls: ['./chubb-table.component.scss']
})
export class ChubbTableComponent implements OnInit {
  @Input() tableData: any;


  constructor() { }

  ngOnInit(): void {
  }

  showColumn(item: any): boolean {
    if (item) {
      return true;
    } else {
      return false
    }
  }

  checkValue(val: any, i: any) {
    if (val) {
      if (this.tableData.quoteList[i][val]) {
        const data = this.tableData.quoteList[i][val]
        return data
      } else
        return ''
    }
  }

  checkRowId(id: any) {
    switch (id) {
      case (id !== 'status'):
        return true
      case (id === 'status'):
        return true
      case (id !== 'status' && (id === 'policyNo' || id === 'quoteRefNoNo')):
        return true
      default:
        return true
    }
  }
}
