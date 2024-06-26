package com.Hamza.Hamza.services;

import com.Hamza.Hamza.sec.RSAKeyPairGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;

@Service
public class CryptoService implements ICryptoService {

    @Autowired
    private RSAKeyPairGenerator rsaKeyPairGenerator;

    @Override
    public byte[] encryptFile(byte[] fileBytes) {
        try {
            // Génération d'une clé AES
            KeyGenerator keyGen = KeyGenerator.getInstance("AES");
            keyGen.init(256); // Taille de la clé AES, peut être ajustée selon les besoins
            SecretKey secretKey = keyGen.generateKey();

            // Chiffrement du fichier avec AES
            Cipher aesCipher = Cipher.getInstance("AES");
            aesCipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encryptedFile = aesCipher.doFinal(fileBytes);

            // Chiffrement de la clé AES avec RSA
            Cipher rsaCipher = Cipher.getInstance("RSA");
            rsaCipher.init(Cipher.ENCRYPT_MODE, rsaKeyPairGenerator.getPublicKey());
            byte[] encryptedAESKey = rsaCipher.doFinal(secretKey.getEncoded());

            // Concaténation de la clé AES chiffrée et du fichier chiffré
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            outputStream.write(encryptedAESKey);
            outputStream.write(encryptedFile);
            return outputStream.toByteArray();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Erreur lors du chiffrement du fichier", e);
        }
    }

    @Override
    public byte[] decryptFile(byte[] encryptedBytes) {
        try {
            // Récupération de la clé AES chiffrée et du fichier chiffré
            ByteBuffer buffer = ByteBuffer.wrap(encryptedBytes);
            byte[] encryptedAESKey = new byte[256]; // Taille de la clé AES
            buffer.get(encryptedAESKey);
            byte[] encryptedFile = new byte[buffer.remaining()];
            buffer.get(encryptedFile);

            // Déchiffrement de la clé AES avec RSA
            Cipher rsaCipher = Cipher.getInstance("RSA");
            rsaCipher.init(Cipher.DECRYPT_MODE, rsaKeyPairGenerator.getPrivateKey());
            byte[] decryptedAESKey = rsaCipher.doFinal(encryptedAESKey);

            // Déchiffrement du fichier avec AES
            SecretKey originalAESKey = new SecretKeySpec(decryptedAESKey, "AES");
            Cipher aesCipher = Cipher.getInstance("AES");
            aesCipher.init(Cipher.DECRYPT_MODE, originalAESKey);
            byte[] decryptedFile = aesCipher.doFinal(encryptedFile);
            return decryptedFile;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Erreur lors du déchiffrement du fichier", e);
        }
    }
}
	