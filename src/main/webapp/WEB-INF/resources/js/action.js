

export function g_pressed(e, obj, char) {
   
    console.log("tteat")
    switch (e.which) {
        case 37: //left
        g_movedBackground("l", obj)
        // g_movedCharacter("l",obj, char)
        break;
        case 38: //up
        g_movedBackground("u", obj)
        break;
        case 39: //right
        g_movedBackground("r", obj)
        break;
        case 40: //down
        g_movedBackground("d", obj)
        break;
    }
    e.preventDefault();
}
export function g_movedBackground(direction, objcect){
    let g_speed = objcect.g_speed, g_bc = objcect.g_bc, g_sc = objcect.g_sc, g_bc_w = objcect.g_bc_w, g_bc_h = objcect.g_bc_h;
    var currentLeft = parseFloat(g_bc.style.left) || 0;
    console.log(currentLeft)
    var currentTop = parseFloat(g_bc.style.top) || 0;
    console.log((parseFloat($(g_sc).width())))
    if(direction=="l"){
        (currentLeft + g_speed <= 0) ? g_bc.style.left=`${currentLeft + g_speed}px` : g_bc.style.left=`${currentLeft}px`
    }else if (direction=="r"){
        (currentLeft - g_speed >= (g_bc_w - parseFloat($(g_sc).width()))*-1) ? g_bc.style.left=`${currentLeft - g_speed}px` : g_bc.style.left=`${currentLeft}px`
    }else if (direction=="u"){
        (currentTop + g_speed <= 0) ? g_bc.style.top=`${currentTop + g_speed}px` : g_bc.style.top=`${currentTop}px`
    }else if (direction=="d"){
        (currentTop + g_speed >= ( g_bc_h - g_speed*2 - parseFloat($(g_sc).height()))*-1) ? g_bc.style.top=`${currentTop - g_speed}px` : g_bc.style.top=`${currentTop}px`
    }
}
