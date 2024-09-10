package com.ajar.pagefullstory.log;

import java.sql.Timestamp;



public class LogVO {
	private Integer l_id;
	private Integer b_type;
	private Integer l_room;
	private String p_name;
	private CustomType l_type;
	private Timestamp l_createdat;
	public Integer getL_id() {
		return l_id;
	}
	public void setL_id(Integer l_id) {
		this.l_id = l_id;
	}
	public Integer getB_type() {
		return b_type;
	}
	public void setB_type(Integer b_type) {
		this.b_type = b_type;
	}
	public Integer getL_room() {
		return l_room;
	}
	public void setL_room(Integer l_room) {
		this.l_room = l_room;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public CustomType getL_type() {
		return l_type;
	}
	public void setL_type(CustomType l_type) {
		this.l_type = l_type;
	}
	public Timestamp getL_createdat() {
		return l_createdat;
	}
	public void setL_createdat(Timestamp l_createdat) {
		this.l_createdat = l_createdat;
	}
	
	
}
