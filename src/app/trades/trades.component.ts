import { Component, OnInit } from '@angular/core';
import { TradeService } from '../trade.service';

@Component({
  moduleId: module.id,
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  // Tutorial
  trades;
  notifications;
  text;
  appState = 'default';
  oldText;
  errorMessage: string;

  // Added by me
  fieldIndex;
  stockSymbol;
  initialPrice;
  predictionPrice;
  stopPrice;
  predictionDate;

  constructor(private _tradeService: TradeService) { }

  ngOnInit() {
    this.notifications = this._tradeService.getNotifications();
    this.fieldIndex = 1;

    this.getTrades();
  }

  getTrades() {
    this._tradeService.getTrades()
      .subscribe(
        trades => this.trades = trades,
        error => this.errorMessage = <any>error
      );
  }

  addTrade() {
    const newTrade = {
      dateCreated: + new Date(),
      stockSymbol: this.stockSymbol,
      initialPrice: this.initialPrice,
      predictionPrice: this.predictionPrice,
      stopPrice: this.stopPrice,
      predictionDate: new Date(this.predictionDate).getTime(),
      tradeStatus: 'Pending'
    };

    console.log('New Trade is: ' + JSON.stringify(newTrade));
    console.log(newTrade.dateCreated);


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

  nextField(){
    this.fieldIndex = Math.min(5, this.fieldIndex + 1);
  }

  prevField(){
    this.fieldIndex = Math.max(1, this.fieldIndex - 1);
  }

}
