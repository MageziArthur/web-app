import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounting } from 'app/core/utils/accounting';

@Component({
  selector: 'mifosx-share-product-general-tab',
  templateUrl: './share-product-general-tab.component.html',
  styleUrls: ['./share-product-general-tab.component.scss']
})
export class ShareProductGeneralTabComponent implements OnInit {

  shareProduct: any;

  marketPriceDisplayedColumns: string[] = ['fromDate', 'shareValue'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];

  constructor(private route: ActivatedRoute,
      private accounting: Accounting) {
    this.route.data.subscribe((data: { shareProduct: any }) => {
      this.shareProduct = data.shareProduct;
    });
  }

  ngOnInit(): void {
  }

  getAccountingRuleName(value: string): string {
    return this.accounting.getAccountRuleName(value.toUpperCase());
  }

}
