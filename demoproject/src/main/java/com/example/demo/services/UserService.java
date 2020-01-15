package com.example.demo.services;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;


@Service
@Transactional
public class UserService {
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	
	public void saveMyUser(User user ) {
		userRepository.save(user);
	}
	
	public Iterable<User> showAllUsers(){
		return userRepository.findAll();
	}
	
	public Iterable<User> deleteUserByUsername(String username) {
		userRepository.deleteByUsername(username);
		return userRepository.findAll();
	}
	
	public Optional<User> editUser(int id) {
		return userRepository.findById(id);
	}
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	}

	