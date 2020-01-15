package com.example.demo.repository;


import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;



public interface UserRepository extends CrudRepository<User, Integer> {	
	
	public User findByUsername(String username);
	
	public Iterable<User> deleteByUsername(String username);


}
