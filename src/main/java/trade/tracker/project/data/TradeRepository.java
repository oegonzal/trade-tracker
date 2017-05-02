package trade.tracker.project.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import trade.tracker.project.model.Trade;

@RepositoryRestResource
public interface TradeRepository extends CrudRepository<Trade, Integer> {
	
	List<Trade> findByStockSymbol(@Param("symbol") String stockSymbol);
	List<Trade> findByTradeStatus(@Param("status") String tradeStatus);

}
