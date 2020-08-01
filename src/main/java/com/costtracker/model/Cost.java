package com.costtracker.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "costs")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Cost {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "payment_time")
	private Instant paymentTime;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "place")
	private String place;
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	@JsonIgnore
	private User user;
	
}
