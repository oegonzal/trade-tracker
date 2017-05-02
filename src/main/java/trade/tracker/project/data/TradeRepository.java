package trade.tracker.project.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import trade.tracker.project.model.Trade;

public interface TradeRepository extends CrudRepository<Trade, String>{
	
	//JPA implements this for you! Has to be in format: findBy(property)
	//propterty has to be a property in the model being looked for
	public List<Trade> findByName(String name);
	public List<Trade> findByDescription(String desc);
	public List<Trade> findByStockId(String stockId);
	//This has to be camelCase! When looking in an object 
	//we look through their properties too with the camel case! JPA does this!
	
	
}
