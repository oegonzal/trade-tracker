import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Init } from './init-trades';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class TradeService extends Init {

  private _url = '/stocks';

  constructor(private _http: Http) {
    super();
    console.log('TradeService Initialized...');
    this.load();
  }

  addTrade(newTrade) {
    const trades = JSON.parse(localStorage.getItem('trades'));

    trades.push(newTrade);
    localStorage.setItem('trades', JSON.stringify(trades));
  }

  getTrades() {
    const trades = JSON.parse(localStorage.getItem('trades'));
    return trades;
  }

  deleteTrade(tradeText) {
    const trades = JSON.parse(localStorage.getItem('trades'));

    for (let i = 0; i < trades.length; i++) {
      if (trades[i].text === tradeText) {
        trades.splice(i, 1);
      }
    }

    localStorage.setItem('trades', JSON.stringify(trades));
  }

  updateTrade(oldText, newText) {
    const trades = JSON.parse(localStorage.getItem('trades'));

    for (let i = 0; i < trades.length; i++) {
      if (trades[i].text === oldText) {
        trades[i].text = newText;
      }
    }

    localStorage.setItem('trades', JSON.stringify(trades));
  }

  getStocks() {
    return this._http.get(this._url)
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
