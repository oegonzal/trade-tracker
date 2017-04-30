package trade.tracker.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/*
 * 
 * With the @Entity and @Id annotation
 * we can now make models into relational object and vice verca
 * ORM : Object Relational Mapping.
 */

@Entity
public class Trade {
	
	@Id
	private String id;
	private String name;
	private String description;
	
	//First thing we need to do is establish relationship which establishes the dependency
	//Many Trades for a stock
	@ManyToOne
	private Stock stock;
	
	public Trade(){
		
	}
	
	public Trade(String id, String name, String description, String stockId){
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.stock = new Stock(stockId, "", "");
	}
	
	
	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
