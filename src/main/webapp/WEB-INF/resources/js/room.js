import * as ld from "./load.js";
import * as fc from "./functions.js";
import * as bd from "./board.js";

var cUrl = document.getElementById('clientUrl').getAttribute('data-url');
var gUrl = document.getElementById('gameUrl').getAttribute('data-url');
var bUrl = document.getElementById('boardUrl').getAttribute('data-url');
var jsUrl = document.getElementById('jsUrl').getAttribute('data-url');
var rootUrl = document.getElementById('rootUrl').getAttribute('data-url');

var cssUrl = document.getElementById('cssUrl').getAttribute('data-url');
const err = document.getElementById('error');

jQ(document).ready(function () {    
	ld.loadWell(jQ('#globalLoad'));
	if (ld.checkLoged(rootUrl, jQ('#sessionId'), err, jQ('#error_button'))) {
		console.log(jQ('#sessionNew').val());
	
	}//last
})//lastss


jQ(document).on("click", '.btn_back',function(){
	let tempSource = {
        "l_room" : jQ('#sessionLoc').val(),        
        "p_name" : jQ("#sessionId").val(),
        "b_type" : jQ('#sessionTyp').val(),
    };
	function leaveRRSP(callback){
	ld.leaveRoom(callback, gUrl, tempSource);
	}
	leaveRRSP(data =>{
		window.location.href = cUrl + `index`;
	});	
});

