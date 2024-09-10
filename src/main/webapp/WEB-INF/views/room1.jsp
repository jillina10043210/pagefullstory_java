<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROOM01</title>
    <link href="<c:url value='/resources/css/main.css'/>" rel="stylesheet" type="text/css" />
    <link href="<c:url value='/resources/css/room.css'/>" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="clientUrl" data-url="<c:url value='/client/' />"></div>
<div id="gameUrl" data-url="<c:url value='/game/' />"></div>
<div id="boardUrl" data-url="<c:url value='/board/' />"></div>                        
<div id="cssUrl" data-url="${pageContext.request.contextPath}/resources/css/"></div>
<div id="jsUrl" data-url="${pageContext.request.contextPath}/resources/js/"></div>
<div id="rootUrl" data-url="${pageContext.request.contextPath}/"></div>
<input id="sessionId" value="${sessionScope.joinedName}" type="hidden"/>
<input id="sessionNew" value="${sessionScope.newbie}" type="hidden"/>
<input id="sessionLoc" value="${sessionScope.loc}" type="hidden"/>
<input id="sessionTyp" value="${sessionScope.typ}" type="hidden"/>
    <div id="globalLoad">
        <div id="globalLoad_context"></div>
    </div>
    <div id="error">
        <div id="error_button"></div>
    </div>
    <div id="im_back">
        <div class="im_back_front"></div>
        <div class="im_back_front"></div>
        <div class="im_back_front"></div>
        <div class="im_back_front"></div>
        <div class="im_back_front"></div>
        <div id="im_b_tit">
            <div class="cm_b_tit_in cm_b_tit_i_l"></div>
            <div class="cm_b_tit_in cm_b_tit_i_r"></div>
        </div>
    </div>
    <div id="im_m">
        <div id="rsp">
            <div id="rsp_main">
                <div id="rsp_msg">
                    <div id="rsp_msg_time"></div>
                </div>
                <div id="rsp_sc_l"></div>
                <div id="rsp_sc_r"></div>
                <div id="rsp_ch_l">
                    <div id="rsp_chars_head_0" class="rsp_chars_head_def">
                        <div id="rsp_chars_hair_0" class="rsp_chars_hair_def"></div>
                        <div id="rsp_chars_face_0" class="rsp_chars_face_def"></div>
                    </div>
                </div>
                <div id="rsp_ch_r">
                    <div id="rsp_chars_head_1" class="rsp_chars_head_def">
                        <div id="rsp_chars_hair_1" class="rsp_chars_hair_def"></div>
                        <div id="rsp_chars_face_1" class="rsp_chars_face_def"></div>
                    </div>
                </div>
                <div id="rsp_select">
                    <div id="rsp_select_r" class="rsp_selectes"></div>
                    <div id="rsp_select_s" class="rsp_selectes"></div>
                    <div id="rsp_select_p" class="rsp_selectes"></div>
                </div>
                <div id="rsp_btn_back" class="btn_back"></div>                
                <div id="rsp_btn_confirm"></div>
            </div>
        </div>


    </div>
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
            <script>
                $.noConflict();
                var jQ = jQuery;
            </script>

            <script type="module" src="${pageContext.request.contextPath}/resources/js/main.js"></script>
            <script type="module" src="${pageContext.request.contextPath}/resources/js/room.js"></script>
            <script type="module" src="${pageContext.request.contextPath}/resources/js/board.js"></script>
</body>

</html>