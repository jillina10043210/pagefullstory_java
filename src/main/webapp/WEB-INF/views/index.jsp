<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>pagefullstory</title>
<link href="<c:url value='/resources/css/main.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/opening.css'/>" rel="stylesheet" type="text/css"/>
</head>
<body>
	<div id="loginUrl" data-url="<c:url value='/client/login' />"></div>
	<div id="signinUrl" data-url="<c:url value='/client/signin' />"></div>
	<div id="signupUrl" data-url="<c:url value='/client/signup' />"></div>
	<div id="io_back">
        <div class="io_back_front"></div>
        <div class="io_back_front"></div>
        <div class="io_back_front"></div>
        <div class="io_back_front"></div>
        <div id="io_b_tit">
            <div class="co_b_tit_in co_b_tit_i_l"></div>
            <div class="co_b_tit_in co_b_tit_i_r"></div>
        </div>
    </div>
    <div id="io_m">
        <div id="io_m_log">
            <input type="text" name="io_m_log_id" id="io_m_log_id" class="co_m_log"/>
            <input type="password" name="io_m_log_pwd" id="io_m_log_pwd" class="co_m_log"/>
            <input type="button" id="io_m_log_btn" value="" class="co_m_log"/>
        </div>
        <div id="io_msg">
            <div id="io_msg_i"></div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script>
    $.noConflict();
	var jQ = jQuery;
	</script>
    <script src="<c:url value='/resources/js/main.js'/>"></script>
    <script src="<c:url value='/resources/js/opening.js'/>"></script>
</body>
</html>