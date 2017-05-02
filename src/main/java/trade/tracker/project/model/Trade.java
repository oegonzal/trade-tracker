package trade.tracker.project.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="predictions")
public class Trade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private int id;
	
	@Column(name="stock_symbol")
	private String stockSymbol;
	
	@Column(name="date_created")
	@JsonFormat(pattern = "MM-dd-yyyy")
	private Date dateCreated;
	
	@Column(name="initial_price")
	private float initialPrice;
	
	@Column(name="prediction_price")
	private float predictionPrice;

	@Column(name="stop_price")
	private float stopPrice;
	
	@Column(name="prediction_date")
	private Date predictionDate;
	
	@Column(name="status")
	private String tradeStatus;
	
	
	public Trade(String stockSymbol, Date dateCreated, float initialPrice, String tradeStatus,
					float predictionPrice, float stopPrice, Date predictionDate){
		
		System.out.println("First Constructor=========");
		
		this.stockSymbol = stockSymbol;
		this.dateCreated = dateCreated;
		this.initialPrice = initialPrice;
		this.tradeStatus = tradeStatus;
		this.predictionDate = predictionDate;
		this.stopPrice = stopPrice;
		this.predictionDate = predictionDate;
	}
	
	public Trade(){
		System.out.println("Second Constructor=========");
	}
	
	//Getter and Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public float getInitialPrice() {
		return initialPrice;
	}

	public void setInitialPrice(float initialPrice) {
		this.initialPrice = initialPrice;
	}

	public float getPredictionPrice() {
		return predictionPrice;
	}

	public void setPredictionPrice(float predictionPrice) {
		this.predictionPrice = predictionPrice;
	}

	public float getStopPrice() {
		return stopPrice;
	}

	public void setStopPrice(float stopPrice) {
		this.stopPrice = stopPrice;
	}

	public Date getPredictionDate() {
		return predictionDate;
	}

	public void setPredictionDate(Date predictionDate) {
		this.predictionDate = predictionDate;
	}

	public String getTradeStatus() {
		return tradeStatus;
	}

	public void setTradeStatus(String status) {
		this.tradeStatus = status;
	}
	
	@Override
	public String toString(){
		return  "Trade: [id= "  + id + 
				"] | stock symbol= "  + stockSymbol +
				"] | date created= "  + dateCreated +
				"] | prediction date= "  + predictionDate +
				"] | initial price= " + initialPrice +
				"] | prediction price= " + predictionPrice +
				"] | stop price= " + stopPrice +
				"] | status= " + tradeStatus;
	}
}
