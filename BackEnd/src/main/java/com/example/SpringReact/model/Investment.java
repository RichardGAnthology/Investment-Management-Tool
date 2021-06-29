package com.example.SpringReact.model;

import java.sql.Date;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="investments")
public class Investment {
	@Id
	
	private int id; 
	private String stock;
	private int number_purchased;
	private Date purchase_date;
	private String account;
	
public Investment() {
		
	}
	

	public Investment( int id, String stock, int number_purchased, Date purchase_date, String account) {
		super();
		this.id=id;
		this.stock = stock;
		this.number_purchased=number_purchased;
		this.purchase_date=purchase_date;
		this.account=account;
	}
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStock() {
		return stock;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	public int getNumber_purchased() {
		return number_purchased;
	}
	public void setNumber_purchased(int number_purchased) {
		this.number_purchased = number_purchased;
	}
	public Date getPurchase_date() {
		return purchase_date;
	}
	public void setPurchase_date(Date purchase_date) {
		this.purchase_date = purchase_date;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}

	
	
}
