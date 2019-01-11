import { Component,Input, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Coin} from '../coin';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css']
})
export class ComparisonTableComponent implements OnInit {
	coins: Coin[];
	noDataMsg: string;
	fiat: string;

  constructor(private appService: AppService) {
	this.noDataMsg = 'Select currency to get started';

    this.appService.filteredCoinsSubject.subscribe({
      next: (v) => this.updateCoins(v),
    });
    
    this.appService.apiSubject.subscribe({
		next: (msg) => this.noDataMsg = msg,
	});

    this.appService.fiatSubject.subscribe({
      next: (newValue) => this.fiat = newValue,
    });
  }

  updateCoins(coins: Coin[]) {
    this.coins = [];
    coins.forEach((coin) => this.coins.push(coin));
  }
  ngOnInit() {
  }

}
