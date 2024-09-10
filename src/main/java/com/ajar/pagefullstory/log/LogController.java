package com.ajar.pagefullstory.log;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/lg")
public class LogController {
	
	@Autowired
	private LogService lsv;
	
	@RequestMapping(value="/rcin", method = {RequestMethod.GET, RequestMethod.POST})
	public void recordIn(LogVO loginfo) {
		String test = loginfo.getP_name();
		if(test != null && test != "") {
			
			lsv.recordIn(loginfo);
		}
	}
	@RequestMapping(value="/rcout", method = {RequestMethod.GET, RequestMethod.POST})
	public void recordOut(LogVO loginfo) {
		String test = loginfo.getP_name();
		if(test != null && test != "") {			
			lsv.recordOut(loginfo);
		}
	}
}
