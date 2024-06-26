package com.Hamza.Hamza.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Hamza.Hamza.model.Etudiant;
import com.Hamza.Hamza.services.serviceEtudiant;


@RestController
public class crudEtudiant {
    @Autowired
    private serviceEtudiant services ;
    
   
    @PostMapping("/ajouter")
    public ResponseEntity<?> ajouterEtudiant(@RequestBody Etudiant e){
        return services.ajouterEtudiant(e);
    }
    
    @GetMapping("/aaa")
    public String getMethodName() {
        return new String("hello !");
    }
    
    
}
