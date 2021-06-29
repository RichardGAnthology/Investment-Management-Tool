package com.example.SpringReact.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.SpringReact.Exception.ResourceNotFoundException;
import com.example.SpringReact.model.Investment;
import com.example.SpringReact.respository.InvestmentRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class InvestmentController {
	
	@Autowired
	private InvestmentRepository investRepo;
	
	@GetMapping("/investments")
	public List<Investment> getAllInvestments(){
		return investRepo.findAll();
	}
	
	@PostMapping("/addinvestment")
	public Investment newInvestment(@RequestBody Investment newInv) {
		return investRepo.save(newInv);
	}
	
	@GetMapping("investments/{id}")
	public ResponseEntity<Investment> getInvestmentById(@PathVariable int id){
		Investment newInv = investRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Investment not found"));
		return ResponseEntity.ok(newInv);
	}
		
	@GetMapping("/investment/{stock}")
	public List<Investment> getInvestmentByStock(@PathVariable String stock){
		return investRepo.findByStock(stock); //maybe here
	}
	
	@DeleteMapping("/deleteinvestment/{id}")
	public String deleteInvestment(@PathVariable int id)
	{
		investRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Investment not found"));
		investRepo.deleteById(id);
		return "The investment with id " + id + " has been removed from the database.";
	}
	
	@PutMapping("updateinvestment/{id}")
	//maybe here
	public ResponseEntity<Investment> updateInvestment(@PathVariable int id, @RequestBody Investment investment){
		Investment newInv = investRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Investment not found"));
		newInv.setStock(investment.getStock());
		newInv.setNumber_purchased(investment.getNumber_purchased());
		newInv.setPurchase_date(investment.getPurchase_date());
		newInv.setAccount(investment.getAccount());
		Investment updatedInvestment = investRepo.save(newInv);
		return ResponseEntity.ok(updatedInvestment);
	}
	
}