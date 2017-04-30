package trade.tracker.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import trade.tracker.project.model.Stock;
import trade.tracker.project.service.StockService;

/*
 * 
 * Annotation means anything returned will be a json object
 */
@RestController
public class StockController {
	
	/*
	 * Here are the dependencies to the services
	 * They are injections and Spring checks them to make
	 * the injection. Services are singleton.
	 * You must use annotation Autowired
	 */
	
	@Autowired
	private StockService stockService;
	
	@RequestMapping("/stocks")
	public List<Stock> getAllStocks(){
		
		System.out.println("Get all function being called");
		
		return stockService.getAllStocks();
	}
	
	/*
	 * Use Annotation @PathVariable to tell spring that
	 * the {id} param in the url is the id in the argument
	 * getStock method. Argument and param must be the same
	 * OR @PathVariable("foo") to tell specifically what to map to
	 */
	
	@RequestMapping("/stocks/{id}")
	public Stock getStock(@PathVariable String id){
		System.out.println("Get with id function being called");
		return stockService.getStock(id);
	}
	
	/*
	 * @RequestBody tells springmvc to make an instance of
	 * the model from the incoming payload
	 */
	
	@RequestMapping(method=RequestMethod.POST, value="/stocks")
	public void addStock(@RequestBody Stock stock){
		stockService.addStock(stock);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/stocks/{id}")
	public void updateStock(@RequestBody Stock stock, @PathVariable String id){
		stockService.updateStock(id, stock);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/stocks/{id}")
	public void deleteStock(@PathVariable String id){
		System.out.println("delete function being called");
		stockService.deleteStock(id);
	}
}
