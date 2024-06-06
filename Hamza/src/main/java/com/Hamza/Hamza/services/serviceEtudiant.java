package com.Hamza.Hamza.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Hamza.Hamza.model.Etudiant;
import com.Hamza.Hamza.repository.etudiantrepo;
@Service
public class serviceEtudiant implements IserviceEtudient{
	
	
    @Autowired
    private etudiantrepo repo;
    
    
    
    public ResponseEntity <?> ajouterEtudiant(Etudiant e){
    	repo.save(e);
        return ResponseEntity.ok("ajouter");

    }
}
