package com.ajar.pagefullstory.game;


import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ajar.pagefullstory.client.*;
import com.ajar.pagefullstory.board.*;
import com.ajar.pagefullstory.log.*;

@Controller
@RequestMapping("/game")
public class GameController {
	
	@Autowired
	private LogService lsv;
	
	@Autowired
	private GameService gsv;
	
	@RequestMapping(value="/getScoreRSP", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public List<GameVO> getScoreRSP(HttpSession session) {
		List<GameVO> mav = new ArrayList<>();
		try {
			if(session.getAttribute("joinedName")!=null){
				String lId = (String) session.getAttribute("joinedName");
				mav = gsv.getScoreRSP(lId);
				
			}
	    } catch (Exception e) {
	        
	    	e.printStackTrace();
	    	
	    }
		return mav;
		
	};
	
	@RequestMapping(value="/tryRoom", method={RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public String tryRoom(@RequestBody LogVO sources, HttpSession session) {
		String result="";
		try {			
	       result = lsv.checkRecent(sources);
	       if(result.equals("Y")) {
	    	   session.setAttribute("newbie", "a");
	       }else if(result.equals("S")) {
	    	   session.setAttribute("newbie", "b");
	       }
	    } catch (Exception e) {
	        
	        e.printStackTrace();
	        
	        
	    }
		return result;
	};
	
	@RequestMapping(value="/enterRoom", method={RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public String enterRoom(@RequestBody LogVO sources, HttpSession session) {
		
		String result ="n";
		
		try {
		   session.setAttribute("loc", sources.getL_room());
		   session.setAttribute("typ", sources.getB_type());
	       lsv.recordIn(sources);
	       result ="w";
	    } catch (Exception e) {
	        
	        e.printStackTrace();
	        
	        
	    }
		return result;
	}
	@RequestMapping(value="/leaveRoom", method={RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public void leaveRoom(@RequestBody LogVO sources, HttpSession session) {
		try {
			
			lsv.recordOut(sources);
		}catch (Exception e) {
	        
	        e.printStackTrace();
	        
	        
	    }
	}
	
}
