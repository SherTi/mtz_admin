document.addEventListener("DOMContentLoaded", () =>{
    let x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("select_model");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);


    let menu = document.querySelector('.nav_menu_item')
    let bnt_menu = document.querySelector('.nav_icon_block')
    let icon_menu = document.querySelector('.nav_menu_icon')
    if (menu) {
        bnt_menu.addEventListener('click' , () => {
            menu.classList.toggle('nav_onclick_active')
            if (menu.classList.contains('nav_onclick_active')){
                bnt_menu.innerHTML = "<svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"nav_menu_icon\" ><path d=\"M1.1709 11.3083C1.02507 11.1624 0.952148 10.9898 0.952148 10.7903C0.952148 10.5911 1.02507 10.4187 1.1709 10.2728L5.44382 5.99992L1.15632 1.71242C1.0202 1.57631 0.952148 1.40617 0.952148 1.202C0.952148 0.997835 1.02507 0.822835 1.1709 0.677002C1.31673 0.531169 1.4894 0.458252 1.6889 0.458252C1.88801 0.458252 2.06048 0.531169 2.20632 0.677002L7.10632 5.59159C7.16465 5.64992 7.20607 5.71311 7.23057 5.78117C7.25468 5.84922 7.26673 5.92214 7.26673 5.99992C7.26673 6.0777 7.25468 6.15061 7.23057 6.21867C7.20607 6.28672 7.16465 6.34992 7.10632 6.40825L2.19173 11.3228C2.05562 11.4589 1.88801 11.527 1.6889 11.527C1.4894 11.527 1.31673 11.4541 1.1709 11.3083Z\" fill=\"#0a1f3d\"/></svg>"
            }else {
                bnt_menu.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"nav_menu_icon\"><path d=\"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z\" fill=\"#0a1f3d\"/></svg>"
            }
        })
    }

})