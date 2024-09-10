package com.ajar.pagefullstory.log;

import java.sql.Timestamp;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import java.time.Duration;
import java.time.Instant;

@Component
public class LogDAO {
	@Autowired
	JdbcTemplate jdbcTemplate;
	@Autowired
	private SqlSession sqlSession;
	public void recordIn(LogVO loginfo) {		
		try {
			sqlSession.insert("mapper.logMap.recordIn",loginfo);
		}catch (Exception e) {
			
		}
	}
	public String checkRecent(LogVO sources) {
		
		int cf = sqlSession.selectOne("mapper.logMap.checkRecentN",sources);		
		String result = "";
		if(cf>0) {
			String cs =  sqlSession.selectOne("mapper.logMap.checkRecent",sources);			
			if(cs.equals("EXIT")) {
				result = "Y";
			}else if(cs.equals("ENTER")) {				
				LogVO temps = sqlSession.selectOne("mapper.logMap.checkTRecent",sources);
				Timestamp ct = (Timestamp) temps.getL_createdat();
				int cn = (int) temps.getL_id();
				 Instant loggedInstant = ct.toInstant();
				 Instant currentInstant = Instant.now();
				 Duration duration = Duration.between(loggedInstant, currentInstant);
				 System.out.println("du" + duration);
				 if (duration.toHours() > 1) {
					 sqlSession.update("mapper.logMap.updateType", cn);
					 result = "Y";
			        } else {
			        	result = "S";   
			        }
				
			}else {
				result = "E";
			}
			
		}else {
			result = "Y";
		}
		return result;
	}

}
