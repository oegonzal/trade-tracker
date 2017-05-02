package trade.tracker.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import trade.tracker.project.data.TradeRepository;
import trade.tracker.project.model.Trade;

//stereotype annotation, marks class as spring business service
//when app starts it will check class paths and detect this as service

@Service
public class TradeService {
	
	@Autowired
	private TradeRepository tradeRepository;
	
	public List<Trade> getAllTradeRecords(){
		List<Trade> trades = new ArrayList<>();
		tradeRepository.findAll()
		.forEach(trades::add);
		
		return trades;
	}

	public void addTrade(Trade trade){
		tradeRepository.save(trade);
	}
}
