package com.Hamza.Hamza.services;

public interface ICryptoService {
	 byte[] encryptFile(byte[] fileBytes);

	    byte[] decryptFile(byte[] encryptedBytes);
	

}
