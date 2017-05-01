import { Component } from '@angular/core';
import { TradesComponent } from './trades/trades.component';
import { TradeService } from './trade.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [TradesComponent],
  providers: [TradeService]
})
export class AppComponent {
  title = 'app works!!!!';
}
