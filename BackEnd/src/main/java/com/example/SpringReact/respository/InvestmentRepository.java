package com.example.SpringReact.respository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.SpringReact.model.Investment;

@Repository
public interface InvestmentRepository extends JpaRepository<Investment, Integer> {

	List<Investment> findByStock(String stock);
}
