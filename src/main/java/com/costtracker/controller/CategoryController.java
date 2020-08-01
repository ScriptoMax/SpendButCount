package com.costtracker.controller;

import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableLoadTimeWeaving;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.costtracker.model.Category;
import com.costtracker.repository.CategoryRepository;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/cat")
public class CategoryController {
	
	private CategoryRepository categoryRepository;
	
	public CategoryController(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}

	@GetMapping("/total")
	Collection<Category> findAllCategories() {
		return categoryRepository.findAll();
	}
	
	@GetMapping("/get/{id}")
	ResponseEntity<?> getCategoryInfo(@PathVariable Long id) {
		Optional<Category> category = categoryRepository.findById(id);
		return category.map(response -> ResponseEntity.ok().body(response))
				                                            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/add")
	ResponseEntity<Category> addCategory(@Valid @RequestBody Category category) throws URISyntaxException {
		Category newCategory = categoryRepository.save(category);
		return ResponseEntity.created(new URI("/cat/get/" + newCategory.getId())).body(newCategory);
	}
	
	@PutMapping("/update/{id}")
	ResponseEntity<Category> modifyCategory(@Valid @RequestBody Category category) throws URISyntaxException {
		Category modifiedCategory = categoryRepository.save(category);
		return ResponseEntity.ok().body(modifiedCategory);
    }
	
	@DeleteMapping("/remove/{id}")
	ResponseEntity<?> removeCategory(@PathVariable Long id) {
		categoryRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
