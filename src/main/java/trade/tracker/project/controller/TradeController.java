package trade.tracker.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;

import trade.tracker.project.model.Trade;
import trade.tracker.project.service.TradeService;

@RestController
public class TradeController {
	
	@Autowired
	private TradeService tradeService;
	
	@RequestMapping("/api/trades")
	public List<Trade> getAllTradeRecords(){
		return tradeService.getAllTradeRecords();
	}
	
	//@JsonFormat(pattern = "MM-dd-yyyy")
	//@DateTimeFormat(pattern="MM-dd-yyyy")
	@RequestMapping(method=RequestMethod.POST, value="/api/trades")
	public void addTrade(@RequestBody Trade trade){
		System.out.println(trade);
		tradeService.addTrade(trade);
	}
}
