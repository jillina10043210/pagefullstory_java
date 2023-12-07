package com.ajar.pagefullstory.board;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class BoardDAO {
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	
	@Autowired
	private SqlSession sqlSession;



	public List<BoardVO> getBoard(int reqN) {
		return sqlSession.selectList("mapper.boardMap.getBoard",reqN);
	}



	public void updateBoard(BoardVO sources) {
		sqlSession.insert("mapper.boardMap.updateBoard", sources);
		
	}
}
