package com.hcl.shareride.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.hcl.shareride.entity.Owner;
import com.hcl.shareride.service.IOwnerService;


@RestController  //It is used for making restful web services
@RequestMapping("/owner")  //used to map web requests
@CrossOrigin(origins="http://localhost:3000")


/*
 * @Author-HarshavardhanReddy ,TarakeshwariPooja and UshaSri
 */
public class OwnerController {
		
	
	@Autowired  //used to inject the object dependency implicitly
	IOwnerService ownerServices;
	
	
	@PostMapping("/ownerRegistration")
    public ResponseEntity<String> registerOwner(@RequestBody Owner owner) {

 

        return ownerServices.registerOwner(owner);

    }

 

    @GetMapping("/ownerLogin/{ownerName}/{ownerPassword}")

    public ResponseEntity<String> login(@PathVariable String ownerName, @PathVariable String ownerPassword,
            HttpSession session) {
        Owner owner = ownerServices.getOwnerByOwnerName(ownerName);
        ResponseEntity<String> response = null;
        if (owner.getOwnerName().equals(ownerName) && (owner.getOwnerPassword().equals(ownerPassword))) {
            session.setAttribute("ownerName", ownerName);
            session.setAttribute("ownerPassword", ownerPassword);

            response = new ResponseEntity<String>("Owner Login Success!", HttpStatus.OK);
        } else {
            response = new ResponseEntity<String>("Login Failed!", HttpStatus.BAD_REQUEST);
        }
        return response;
    }

 

    @GetMapping("/ownerLogout") // owner logout
    public String logout(HttpSession session) {

 

        String msg = "Owner Still Login";
        if (session.getAttribute("ownerName") == null) {
            msg = "Owner Logout Success";
        }
        return msg;
    }
	
    @PostMapping("/insert") //to insert data into database
	public String AddOwner(@RequestBody Owner owner)
	{
		ownerServices.addOwner(owner);
if(owner.getOwnerId()>0) {
			
			return "owner added ";
		}
		
		else {
			return"invalid owner id input"; //input validations for owner
			
		}
		
		
	}
	@GetMapping("/owners") //to retrieve the data from database
	public List<Owner> getOwners()
	{
		return ownerServices.getOwners();
	}
	@PutMapping("/update/{id}")   //to update the data in database
	public String updateOwner(@PathVariable (value="id") Integer id,@RequestBody Owner owner)
	{
		ownerServices.updateOwner(id,owner);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}") //to delete the data from database
	public String deleteOwner(@PathVariable (value="id") Integer id)
	{
		ownerServices.deleteOwner(id);
		return "deleted successfully";
	}
	

}
