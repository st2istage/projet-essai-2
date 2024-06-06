package com.Hamza.Hamza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hamza.Hamza.model.Etudiant;
@Repository
public interface etudiantrepo extends JpaRepository<Etudiant,Long>{
    
}
