package trade.tracker.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import trade.tracker.project.data.StockRepository;
import trade.tracker.project.model.Stock;

//stereotype annotation, marks class as spring business service
//when app starts it will check class paths and detect this as service

@Service
public class StockService {
	
	@Autowired
	private StockRepository stockRepository;
	
	public List<Stock> getAllStocks() {
		System.out.println("Right before get All query");
		
		List<Stock> stocks = new ArrayList<>();
		stockRepository.findAll()
		.forEach(stocks::add);
		
		return stocks;
	}
	
	public Stock getStock(String id){
		//return stocks.stream().filter(t -> t.getId().equals(id)).findFirst().get();
		return stockRepository.findOne(id);
	}
	
	public void addStock(Stock stock){
		stockRepository.save(stock);
	}
	
	public void updateStock(String id, Stock stock){
		stockRepository.save(stock);
	}
	
	public void deleteStock(String id){
		//stocks.removeIf(t -> t.getId().equals(id));
		stockRepository.delete(id);
	}
}
