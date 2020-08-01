package com.costtracker.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.costtracker.model.Cost;
import com.costtracker.repository.CostRepository;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/cost")
public class CostController {

	@Autowired
	private CostRepository costRepository;

	public CostController(CostRepository costRepository) {
		super();
		this.costRepository = costRepository;
	}
	
	@GetMapping("/total")
	List<Cost> displayCosts() {
		return costRepository.findAll();
	}
	
	@GetMapping("/show/{id}")
	ResponseEntity<?> showCostInstance(@PathVariable Long id) {
		Optional<Cost> cost = costRepository.findById(id);
		return cost.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/add")
	ResponseEntity<Cost> pushNewCost(@Valid @RequestBody Cost cost) throws URISyntaxException {
		Cost newCostInstance = costRepository.save(cost);
		return ResponseEntity.created(new URI("/cost/show/" + newCostInstance.getId())).body(newCostInstance);
	}
	
	@DeleteMapping("/remove/{id}")
	ResponseEntity<?> removeInstance(@PathVariable Long id) {
		costRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}	
}
