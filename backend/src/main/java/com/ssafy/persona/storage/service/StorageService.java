package com.ssafy.persona.storage.service;

import java.util.List;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageDeleteRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

public interface StorageService {
	boolean storageCreate(StorageCreateRequest storageCreateRequest);
	boolean storageModify(StorageModifyRequest storageModifyRequest);
	boolean storageDelete(StorageDeleteRequest storageDeleteRequest);
	
	List<StorageListResponse> storageList(int characterSeq);
	
}
