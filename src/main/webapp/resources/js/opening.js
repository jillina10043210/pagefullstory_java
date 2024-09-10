// opening.js
import * as ld from "./load.js";
import * as fc from "./functions.js";


var op_n = -1;
var somecase = false;
const op_ba = document.getElementById('io_m');
const op_ml = document.getElementById('io_m_log');
const op_lb = document.getElementById('io_m_log_btn');
const op_msg = document.getElementById('io_msg');
const op_wrl = document.getElementById('io_world');
const op_wrl_b = document.getElementById('io_world_0');
const op_chars = document.getElementById('io_chars');
const op_mak = document.getElementById('io_making');
var loginUrl = document.getElementById('loginUrl').getAttribute('data-url');
var signinUrl = document.getElementById('signinUrl').getAttribute('data-url');
var signupUrl = document.getElementById('signupUrl').getAttribute('data-url');
var tocharUrl = document.getElementById('tocharUrl').getAttribute('data-url');
var cUrl = document.getElementById('clientUrl').getAttribute('data-url');
var hUrl = document.getElementById('hUrl').getAttribute('data-url');
var fUrl = document.getElementById('fUrl').getAttribute('data-url');
var cssUrl = document.getElementById('cssUrl').getAttribute('data-url');

var hairMapSize = 0, faceMapSize = 0, hairMap, faceMap, hairList, faceList, currentHair = 1, currentFace = 1, dice_max = 27, dice_run = false;
var id_check = false, id_temp = "", id_moveOut = false;
const l_url = fUrl
let facejson;
const l_url2 = hUrl
let hairjson;


ld.jsonData((data1) => {
    facejson = data1;
    ld.jsonData((data2) => {
        hairjson = data2;
        const uniqueFaceNames = new Set();
        const uniqueHairNames = new Set();
        const uniqueFaceMaps = new Map();
        const uniqueHairMaps = new Map();
        facejson.forEach((item) => {
            let { face_name } = item;
            if (!uniqueFaceNames.has(face_name)) {
                uniqueFaceNames.add(face_name);
                uniqueFaceMaps.set(face_name, item);
            }
        })
        hairjson.forEach((item) => {
            let { hair_name } = item;
            if (!uniqueHairNames.has(hair_name)) {
                uniqueHairNames.add(hair_name);
                uniqueHairMaps.set(hair_name, item);
            }
        })
        hairMapSize += uniqueHairMaps.size;
        faceMapSize += uniqueFaceMaps.size;
        jQ('#io_making_right_hair').val([...uniqueHairNames][0])
        jQ('#io_making_right_face').val([...uniqueFaceNames][0])
        jQ('#io_making_right_hair').data("hairSize", hairMapSize);
        jQ('#io_making_right_face').data("faceSize", faceMapSize);
        hairMap = uniqueHairMaps;
        faceMap = uniqueFaceMaps;
        hairList = uniqueHairNames;
        faceList = uniqueFaceNames;
        console.log(hairMap)
        console.log(hairList)
    }, l_url2)
}, l_url)

let reqId, reqPwd;
let result = null;
op_lb.addEventListener('click', () => {
    reqId = jQ('#io_m_log_id').val();
    reqPwd = jQ('#io_m_log_pwd').val();
    if (
        reqId !== "" || reqId !== null ||
        reqPwd !== "" || reqPwd !== null) {
        if (result == null) {
            checkLogin(reqId, reqPwd)
        }

    }
    else {
        jQ('#io_m_log_id').focus();
    }

});
op_msg.addEventListener('click', () => {
    if (result != null && id_moveOut == false) {
        switch (result) {
            case 0:
                jQ('#io_msg').removeClass('io_msg_0');
                requestSignUp(reqId, reqPwd);
                requestSignIn(reqId, reqPwd);
                op_ba.style.backgroundPosition = '0% 60%';
                op_ml.style.display = `none`;
                op_wrl.style.display = `block`;
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

    } else if (id_moveOut) {
        jQ('#io_msg').removeClass('io_msg_0');
        jQ('#io_msg').removeClass('io_msg_1');
        jQ('#io_msg').removeClass('io_msg_2');
        jQ('#io_msg').fadeOut(300);
    }
});
op_wrl_b.addEventListener('click', () => {
    jQ.ajax({
        url: tocharUrl,
        type: 'GET',

        success: function (data) {
            op_ba.style.backgroundPosition = '0% 31%';
            op_wrl.style.display = `none`;
            op_chars.style.display = `block`;
            let lists = data;
            console.log(lists)
            if (lists.length > 0) {
                for (let i = 0; i < lists.length; i++) {
                    let hairSource = fc.findAndMakeMap("hair_original", lists[i].p_hair, hairMap);
                    let faceSource = fc.findAndMakeMap("face_original", lists[i].p_face, faceMap);
                    console.log(hairSource);
                    console.log(faceSource);
                    jQ(`#io_chars_${i}`).removeClass('co_chars_em');
                    jQ(`#io_chars_${i}`).css({
                        aspectRatio: `59/78`,
                        backgroundImage: `url('${cssUrl}msg/body.gif')`,
                    });
                    jQ(`#io_chars_head_${i}`).css({
                        backgroundImage: `url('${cssUrl}msg/head.png')`,
                    });
                    jQ(`#io_chars_hair_${i}`).css({
                        width: `calc(100% * (${hairSource[1].hair_w} / 57))`,
                        aspectRatio: `${hairSource[1].hair_w} / ${hairSource[1].hair_h}`,
                        top: `calc(100% * (${hairSource[1].hair_y} / 50))`,
                        left: `calc(100% * (${hairSource[1].hair_x} / 57))`,
                        backgroundImage: `url('${cssUrl}hair/${hairSource[1].hair_number}.png')`
                    });
                    jQ(`#io_chars_face_${i}`).css({

                        aspectRatio: `${faceSource[1].face_x} / ${faceSource[1].face_y}`,
                        backgroundImage: `url('${cssUrl}face/${faceSource[1].face_number}.png')`
                    });

                }
            } else {

            }
        },
        error: function (errorThrown) {
            op_ba.style.backgroundPosition = '0% 95%';
            op_wrl.style.display = `none`;
            id_moveOut = false;
        }

    });
})
jQ(document).on("click", '.co_chars_def', function () {
    if (jQ(this).hasClass('co_chars_em')) {
        op_chars.style.display = `none`;
        op_ba.style.backgroundPosition = '0% -1%';
        op_mak.style.display = `block`;
        id_moveOut = true;
    } else {

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
            op_wrl.style.display = `block`;
            break;
        case 2:
        case 3:
            jQ('#io_msg').addClass('io_msg_2');
            jQ('#io_msg').fadeIn(300);
            break;
    }

}

jQ(document).on('click', '.io_making_right_input', function () {
    let tempId = jQ(this).attr('id');
    let tempData = 0;
    switch (tempId) {
        case 'io_making_right_hair':
            tempData = jQ('#io_making_right_hair').data('hairSize');
            if (currentHair < tempData) {
                jQ('#io_making_right_hair').val([...hairList][currentHair]);
                jQ('#io_making_middle_hair').css({
                    width: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_w} / 57))`,
                    aspectRatio: `${(hairMap.get([...hairList][currentHair])).hair_w} / ${(hairMap.get([...hairList][currentHair])).hair_h}`,
                    top: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_y} / 50))`,
                    left: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_x} / 57))`,
                    backgroundImage: `url('${cssUrl}hair/${(hairMap.get([...hairList][currentHair])).hair_number}.png')`
                })
                currentHair++;
            } else if (currentHair == tempData) {
                jQ('#io_making_right_hair').val([...hairList][0]);
                currentHair = 0;
                jQ('#io_making_middle_hair').css({
                    width: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_w} / 57))`,
                    aspectRatio: `${(hairMap.get([...hairList][currentHair])).hair_w} / ${(hairMap.get([...hairList][currentHair])).hair_h}`,
                    top: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_y} / 50))`,
                    left: `calc(100% * (${(hairMap.get([...hairList][currentHair])).hair_x} / 57))`,
                    backgroundImage: `url('${cssUrl}hair/${(hairMap.get([...hairList][currentHair])).hair_number}.png')`
                })
            }
            break;
        case 'io_making_right_face':
            tempData = jQ('#io_making_right_face').data('faceSize');
            if (currentFace < tempData) {
                jQ('#io_making_right_face').val([...faceList][currentFace]);
                jQ('#io_making_middle_face').css({

                    aspectRatio: `${(faceMap.get([...faceList][currentFace])).face_x} / ${(faceMap.get([...faceList][currentFace])).face_y}`,
                    backgroundImage: `url('${cssUrl}face/${(faceMap.get([...faceList][currentFace])).face_number}.png')`
                })
                currentFace++;
            } else if (currentFace == tempData) {
                jQ('#io_making_right_face').val([...faceList][0]);
                currentFace = 0;
                jQ('#io_making_middle_face').css({

                    aspectRatio: `${(faceMap.get([...faceList][currentFace])).face_x} / ${(faceMap.get([...faceList][currentFace])).face_y}`,
                    backgroundImage: `url('${cssUrl}face/${(faceMap.get([...faceList][currentFace])).face_number}.png')`
                })
            }
            break;
        case 'io_making_right_weapon':
            break;
        default:
            break;

    }
})



jQ(document).on('click', '#io_making_left_dice', function () {
    if (dice_run) {

        setTimeout(function () {
            dice_run = false;
        }, 100)
    } else {
        jQ(this).css({
            backgroundImage: `url('${cssUrl}msg/dice.gif')`,
            aspectRatio: `37 / 56`
        });
        let randN1, randN2, randN3, randN4;
        randN1 = fc.functions_RandomStartEndSize(4, 12, 100);
        if (randN1 == 4) {
            randN2 = fc.functions_RandomStartEndSize(4, 12, 100);
        } else {
            randN2 = fc.functions_RandomStartEndSize(4, dice_max - randN1 - 8, 100);
        }
        randN3 = fc.functions_RandomStartEndSize(4, dice_max - randN1 - randN2 - 4, 100);
        randN4 = fc.functions_RandomStartEndSize(4, dice_max - randN1 - randN2 - randN3, 100);
        let tempList = [];
        tempList.push(randN1)
        tempList.push(randN2)
        tempList.push(randN3)
        tempList.push(randN4)
        fc.shuffleArray(tempList)
        jQ('#io_making_left_str').val(tempList[0]);
        jQ('#io_making_left_dex').val(tempList[1]);
        jQ('#io_making_left_int').val(tempList[2]);
        jQ('#io_making_left_luk').val(tempList[3]);
        setTimeout(function () {
            console.log("why?")
            dice_run = true;
            jQ('#io_making_left_dice').css({
                backgroundImage: `url('${cssUrl}msg/dice.png')`,
                aspectRatio: `37 / 26`
            });
        }, 800)
    }


})

jQ(document).on("click", '#io_making_right_check', function () {
    let tempS = jQ('#io_making_right_name').val();
    if (tempS != "" && tempS != null) {
        jQ.ajax({
            url: cUrl + "checkName",
            type: 'POST',
            data: { reqName: tempS },
            success: function (data) {
                if (data == "1") {
                    id_check = false;
                    jQ('#io_msg').addClass('io_msg_1');
                    jQ('#io_msg').fadeIn(300);
                } else if (data == "0") {
                    jQ('#io_msg').addClass('io_msg_0');
                    jQ('#io_msg').fadeIn(300);
                    id_check = true;
                    id_temp = tempS;
                }
            },
            error: function (errorThrown) {
                jQ('#io_msg').addClass('io_msg_1');
                jQ('#io_msg').fadeIn(300);
                id_check = false;
            }

        });
    } else {
        id_check = false;
        jQ('#io_msg').addClass('io_msg_1');
        jQ('#io_msg').fadeIn(300);
    }
})

jQ(document).on("click", '#io_making_right_cancel', function () {
    op_ba.style.backgroundPosition = '0% 95%';
    op_mak.style.display = `none`;
    op_msg.style.display = `none`;
    op_ml.style.display = `block`;
    jQ('#io_m_log_id').val("");
    jQ('#io_m_log_pwd').val("");
    jQ('#io_making_right_name').val("");
    id_moveOut = false;
    result = null;
    sessionStorage.clear();
})
jQ(document).on("click", '#io_making_right_confirm', function () {
    let tempS = jQ('#io_making_right_name').val();
    if (tempS != id_temp) {
        jQ('#io_msg').addClass('io_msg_1');
        jQ('#io_msg').fadeIn(300);
    } else if (id_check && tempS == id_temp) {
        if (currentFace != 0) {
            currentFace--;
        }
        if (currentHair != 0) {
            currentHair--;
        }
        let datas = {
            p_name: jQ('#io_making_right_name').val(),
            p_face: faceMap.get([...faceList][currentFace]).face_original,
            p_hair: hairMap.get([...hairList][currentHair]).hair_original,
            p_str: jQ('#io_making_left_str').val(),
            p_dex: jQ('#io_making_left_dex').val(),
            p_int: jQ('#io_making_left_int').val(),
            p_luk: jQ('#io_making_left_luk').val()
        }
        jQ.ajax({
            url: cUrl + "postPlayer",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(datas),
            success: function (data) {
                console.log("good");
                op_ba.style.backgroundPosition = '0% 95%';
                op_mak.style.display = `none`;
                op_msg.style.display = `none`;
                op_ml.style.display = `block`;
                jQ('#io_m_log_id').val("");
                jQ('#io_m_log_pwd').val("");
                jQ('#io_making_right_name').val("");
                id_moveOut = false;
                result = null;
                sessionStorage.clear();
            },
            error: function (errorThrown) {
                jQ('#io_msg').addClass('io_msg_1');
                jQ('#io_msg').fadeIn(300);
            }

        })
    }
})






























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
                op_ba.style.backgroundPosition = '0% 31%';
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