package com.ssafy.persona.storage.model.dto;

import com.ssafy.persona.storage.model.entity.Storage;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class StorageListResponse {
	private String storageName;
	
	public StorageListResponse(Storage storage) {
		super();
		this.storageName = storage.getStorageName();
	}

}
