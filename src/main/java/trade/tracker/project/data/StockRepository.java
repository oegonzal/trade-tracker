package trade.tracker.project.data;

import org.springframework.data.repository.CrudRepository;

import trade.tracker.project.model.Stock;

public interface StockRepository extends CrudRepository<Stock, String>{
	
	 
}
