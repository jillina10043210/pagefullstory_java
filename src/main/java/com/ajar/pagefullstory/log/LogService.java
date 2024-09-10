package com.ajar.pagefullstory.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogService {
	
	@Autowired
	private LogDAO ldao;
		
	public void recordIn(LogVO loginfo) {
		loginfo.setL_type(CustomType.ENTER);
		ldao.recordIn(loginfo);
	}

	public String checkRecent(LogVO sources) {
		return ldao.checkRecent(sources);
	}

	public void recordOut(LogVO loginfo) {
		loginfo.setL_type(CustomType.EXIT);
		ldao.recordIn(loginfo);
	}
	
	
}
