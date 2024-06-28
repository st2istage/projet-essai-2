package com.Hamza.Hamza.sec;

import org.springframework.stereotype.Component;
import java.security.*;

@Component
public class RSAKeyPairGenerator {

    private KeyPair keyPair;

    public RSAKeyPairGenerator() {
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(2048); // Taille de la clé RSA, peut être ajustée selon les besoins
            this.keyPair = keyPairGenerator.generateKeyPair();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    public PublicKey getPublicKey() {
        return keyPair.getPublic();
    }

    public PrivateKey getPrivateKey() {
        return keyPair.getPrivate();
    }
}
