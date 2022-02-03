package com.ssafy.persona.storage.model.dto;

import com.ssafy.persona.storage.model.entity.StoredContent;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentStoreRequest {
	private int storageSeq;
	private int contentSeq;
	
	public StoredContent toStoredContent() {
		return StoredContent.builder()
							.storageSeq(storageSeq)
							.contentSeq(contentSeq)
							.build();
	}
	
}
