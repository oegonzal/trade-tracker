package trade.tracker.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import trade.tracker.project.model.Stock;
import trade.tracker.project.model.Trade;
import trade.tracker.project.service.TradeService;

/*
 * 
 * Annotation means anything returned will be a json object
 */
@RestController
public class TradeController {
	
	/*
	 * Here are the dependencies to the services
	 * They are injections and Spring checks them to make
	 * the injection. Services are singleton.
	 * You must use annotation Autowired
	 */
	
	@Autowired
	private TradeService tradeService;
	
	@RequestMapping("/stocks/{id}/trades")
	public List<Trade> getAllTrades(@PathVariable String id){
		
		System.out.println("Get all function being called");
		
		return tradeService.getAllTrades(id);
	}
	
	/*
	 * Use Annotation @PathVariable to tell spring that
	 * the {id} param in the url is the id in the argument
	 * getTrade method. Argument and param must be the same
	 * OR @PathVariable("foo") to tell specifically what to map to
	 */
	
	@RequestMapping("/stocks/{stockId}/trades/{id}")
	public Trade getTrade(@PathVariable String id){
		System.out.println("Get with id function being called");
		return tradeService.getTrade(id);
	}
	
	/*
	 * @RequestBody tells springmvc to make an instance of
	 * the model from the incoming payload
	 */
	
	@RequestMapping(method=RequestMethod.POST, value="/stocks/{stockId}/trades")
	public void addTrade(@RequestBody Trade trade, @PathVariable String stockId){
		trade.setStock(new Stock(stockId, "", ""));
		tradeService.addTrade(trade);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/stocks/{stockId}/trades/{id}")
	public void updateTrade(@RequestBody Trade trade, @PathVariable String id, @PathVariable String stockId){
		trade.setStock(new Stock(stockId, "", ""));
		tradeService.updateTrade(trade);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/stocks/{stockId}/trades/{id}")
	public void deleteTrade(@PathVariable String id){
		System.out.println("delete function being called");
		tradeService.deleteTrade(id);
	}
}
