package trade.tracker.project.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import trade.tracker.project.model.TradeData;

@RepositoryRestResource
public interface TradeRecordRepository extends CrudRepository<TradeData, Integer> {
	
	List<TradeData> findByStockSymbol(@Param("symbol") String stockSymbol);
	List<TradeData> findByTradeStatus(@Param("status") String tradeStatus);

}
