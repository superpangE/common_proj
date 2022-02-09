package com.ssafy.persona.storage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.storage.mapper.StorageMapper;
import com.ssafy.persona.storage.model.dto.ContentStoreListResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreRequest;
import com.ssafy.persona.storage.model.dto.StorageContentListRequest;
import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

@Service
public class StorageServiceImpl implements StorageService {
	@Autowired
	StorageMapper storageMapper;
	
	@Override
	public boolean storageCreate(StorageCreateRequest storageCreateRequest) {
		return storageMapper.storageCreate(storageCreateRequest) == 1;
	}

	@Override
	public boolean storageModify(StorageModifyRequest storageModifyRequest) {
		return storageMapper.storageModify(storageModifyRequest) == 1;
	}

	@Override
	public boolean storageDelete(int storageSeq) {
		return storageMapper.storageDelete(storageSeq) == 1;
	}

	@Override
	public List<StorageListResponse> storageList(int characterSeq) {
		return storageMapper.storageList(characterSeq);
	}

	@Override
	public boolean contentStore(ContentStoreRequest contentStoreRequest) {
		return storageMapper.contentStore(contentStoreRequest) == 1;
	}

	@Override
	public void contentStoreUpdate(int contentSeq) {
		storageMapper.contentStoreUpdate(contentSeq);
		
	}

	@Override
	public boolean contentUnstore(int characterSeq, int contentSeq) {
		return storageMapper.contentUnstore(characterSeq, contentSeq) == 1;
	}

	@Override
	public void contentUnstoreUpdate(int contentSeq) {
		storageMapper.contentUnstoreUpdate(contentSeq);
	}

	@Override
	public List<ContentStoreListResponse> contentStoreList(int contentSeq) {
		return storageMapper.contentStoreList(contentSeq);
	}

	@Override
	public List<ContentGetResponse> storageContentList(StorageContentListRequest storageContentListRequeset) {
		return storageMapper.storageContentList(storageContentListRequeset);
	}

}