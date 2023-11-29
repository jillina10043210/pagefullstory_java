var op_n = -1;
var somecase = false;
const op_ba = document.getElementById('io_m');
const op_ml = document.getElementById('io_m_log');
const op_lb = document.getElementById('io_m_log_btn');
const op_msg = document.getElementById('io_msg');
var loginUrl = document.getElementById('loginUrl').getAttribute('data-url');
var signinUrl = document.getElementById('signinUrl').getAttribute('data-url');
var signupUrl = document.getElementById('signupUrl').getAttribute('data-url');
let reqId, reqPwd;
let result = null;
op_lb.addEventListener('click', () => {
    reqId = jQ('#io_m_log_id').val();
    reqPwd = jQ('#io_m_log_pwd').val();
    if (result == null) {
        checkLogin(reqId, reqPwd)
    }
});
op_msg.addEventListener('click', () => {
    if (result != null) {
        switch (result) {
            case 0:
                jQ('#io_msg').removeClass('io_msg_0');
                requestSignUp(reqId, reqPwd);
                requestSignIn(reqId, reqPwd);
                op_ba.style.backgroundPosition = '0% 60%';
           		op_ml.style.display = `none`;
                break;
            case 1:
                break;
            case 2:
            case 3:
                jQ('#io_m_log_id').val("");
                jQ('#io_m_log_pwd').val("");
                jQ('#io_msg').removeClass('io_msg_2');
                break;
        }
        result = null;
        jQ('#io_msg').fadeOut(300);

    }
});
function requestSignUp(reqId, reqPwd) {
    jQ.ajax({
        url: signupUrl,
        type: 'POST',
        data: { reqId: reqId, reqPwd: reqPwd },
        success: function (data) {
            
        },
        error: function (errorThrown) {
            alert(errorThrown);
        }

    });
}
function requestSignIn(reqId, reqPwd) {
    jQ.ajax({
        url: signinUrl,
        type: 'POST',
        data: { reqId: reqId, reqPwd: reqPwd },
        success: function (data) {
            
        },
        error: function (errorThrown) {
            alert(errorThrown);
        }

    });
}
function checkLogin(reqId, reqPwd) {
    jQ.ajax({
        url: loginUrl,
        type: 'POST',
        data: { reqId: reqId, reqPwd: reqPwd },
        success: function (data) {
            result = parseInt(data);
            excuteLogin(result);
        },
        error: function (errorThrown) {
            alert(errorThrown);
        }

    });

};
function excuteLogin(result) {
    switch (result) {
        case 0:
            jQ('#io_msg').addClass('io_msg_0');
            jQ('#io_msg').fadeIn(300);
            break;
        case 1:
            requestSignIn(reqId, reqPwd);
            op_ba.style.backgroundPosition = '0% 60%';
            op_ml.style.display = `none`;
            break;
        case 2:
        case 3:
            jQ('#io_msg').addClass('io_msg_2');
            jQ('#io_msg').fadeIn(300);
            break;
    }

}
if (somecase) {
    op_lb.addEventListener('click', () => {
        //make op_n for each case

        switch (op_n) {
            case -1:
                op_ba.style.backgroundPosition = '0% 60%';
                op_ml.style.display = `none`;
                break;
            case 0:
                op_ba.style.backgroundPosition = '0% 0%';
                break;
            case 1:
                op_ba.style.backgroundPosition = '0% 28%';
                break;
            case 2:
                backgroundDiv.style.backgroundPosition = '0% 95%';
                number = -1;
                break;
        }
        op_n++;
        window.scrollTo({
            top: number > 0 ? 0 : document.body.scrollHeight,
            behavior: 'smooth'
        });
    })

}