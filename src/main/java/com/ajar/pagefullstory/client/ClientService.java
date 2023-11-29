package com.ajar.pagefullstory.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
	
	@Autowired
	private ClientDAO cdao;
	
	public String checkId(String reqId, String reqPwd) {
		
		return cdao.checkId(reqId, reqPwd);
	}

	
	public void signUp(String reqId, String reqPwd) {
		cdao.signUp(reqId,reqPwd);
		
	}

}
