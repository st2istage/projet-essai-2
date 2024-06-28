package com.Hamza.Hamza.controller;


import com.Hamza.Hamza.services.ICryptoService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class CryptoController {

    @Autowired
    private ICryptoService cryptoService;
    
    
	// Endpoint pour chiffrer un fichier avec AES
    @PostMapping("/encrypt")
    public ResponseEntity<byte[]> encryptFile(@RequestParam("file") MultipartFile file) {
        try {
            byte[] encryptedFile = cryptoService.encryptFile(file.getBytes());
            // Retourne le fichier chiffré en tant que réponse
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=encrypted_file")
                    .body(encryptedFile);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Endpoint pour déchiffrer un fichier avec AES
    @PostMapping("/decrypt")
    public ResponseEntity<byte[]> decryptFile(@RequestParam("file") MultipartFile file) {
        try {
            byte[] decryptedFile = cryptoService.decryptFile(file.getBytes());
            // Retourne le fichier déchiffré en tant que réponse
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=decrypted_file")
                    .body(decryptedFile);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}



