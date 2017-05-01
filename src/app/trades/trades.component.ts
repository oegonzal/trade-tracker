import { Component, OnInit } from '@angular/core';
import { TradeService } from '../trade.service';

@Component({
  moduleId: module.id,
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {
  trades;
  text;
  appState = 'default';
  oldText;
  errorMessage: string;

  constructor(private _tradeService: TradeService) { }

  ngOnInit() {
    this.trades = this._tradeService.getTrades();
  }

  addTrade() {
    const newTrade = {
      text: this.text
    };

    this.trades.push(newTrade);

    this._tradeService.addTrade(newTrade);
  }

  deleteTrade(tradeText) {
    for (let i = 0; i < this.trades.length; i++) {
      if (this.trades[i].text === tradeText) {
        this.trades.splice(i, 1);
      }
    }

    this._tradeService.deleteTrade(tradeText);
  }

  editTrade(trade) {
    this.appState = 'edit';
    this.oldText = trade.text;
    this.text = trade.text;
  }

  updateTrade() {
    for (let i = 0; i < this.trades.length; i++) {
      if (this.trades[i].text === this.oldText) {
        this.trades[i].text = this.text;
      }
    }

    this._tradeService.updateTrade(this.oldText, this.text);
  }

  getStocks() {
    this._tradeService.getStocks()
      .subscribe(
        stocks => console.log(stocks),
        error => this.errorMessage = <any>error
      );
  }

}
