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
	
	public List<Trade> getAllTrades(String stockId) {
		System.out.println("Right before get All query");
		
		List<Trade> trades = new ArrayList<>();
		tradeRepository.findByStockId(stockId)
		.forEach(trades::add);
		
		return trades;
	}
	
	public Trade getTrade(String id){
		//return trades.stream().filter(t -> t.getId().equals(id)).findFirst().get();
		//tradeRepository.findByName(name);
		return tradeRepository.findOne(id);
	}
	
	public void addTrade(Trade trade){
		tradeRepository.save(trade);
	}
	
	public void updateTrade(Trade trade){
		tradeRepository.save(trade);
	}
	
	public void deleteTrade(String id){
		//trades.removeIf(t -> t.getId().equals(id));
		tradeRepository.delete(id);
	}
}
