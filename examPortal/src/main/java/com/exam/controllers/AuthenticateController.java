package com.exam.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.config.JwtUtil;
import com.exam.entities.JwtRequest;
import com.exam.entities.JwtResponse;
import com.exam.entities.User;
import com.exam.helper.UserNotFoundException;
import com.exam.service.impl.UserDetailsServiceImpl;

@RestController
@CrossOrigin("*")
public class AuthenticateController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	//generate token
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		System.out.println("START generate-token");
		try {
			
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
			
		} catch (UserNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User not found !!");
		}
		
		// authenticate
		
		UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	
	
	private void authenticate(String username, String password) throws Exception {
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {
			
			throw new Exception("USER DISABLED "+e.getMessage());
		} catch (BadCredentialsException e) {
			
			throw new Exception("Invalid Credentials "+e.getMessage());
		}
	}
	
	
	// returns the details of current login user
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		System.out.println("Current user method");
		User loadUserByUsername =(User) this.userDetailsServiceImpl.loadUserByUsername(principal.getName());
		System.out.println("Current-User : "+loadUserByUsername);
		return (User) this.userDetailsServiceImpl.loadUserByUsername(principal.getName());
	}

}
