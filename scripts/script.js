const ar = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o']
//console.log(typeof (ar));
let n = 0;
function box(id) {
    if (document.getElementById(id).innerText == '') {
        document.getElementById(id).innerHTML = `<h3>${ar[n]}</h3>`
        n++;
        if (n == 9) {
            const main = document.getElementById('main')
            const btn1 = document.createElement('button')
            btn1.innerHTML = `<h2 onclick='check()'>Check</h2>`
            main.appendChild(btn1)
            const btn2 = document.createElement('button')
            btn2.innerHTML = `<h2 onclick='restart()'>Restart</h2>`
            main.appendChild(btn2)
        }
    }
    else (
        alert('You can\'t do this.')
    )
    //console.log(id, document.getElementById(id).innerText);
}

function check() {
    const box1 = document.getElementById('bx-1').innerText
    const box2 = document.getElementById('bx-2').innerText
    const box3 = document.getElementById('bx-3').innerText
    const box4 = document.getElementById('bx-4').innerText
    const box5 = document.getElementById('bx-5').innerText
    const box6 = document.getElementById('bx-6').innerText
    const box7 = document.getElementById('bx-7').innerText
    const box8 = document.getElementById('bx-8').innerText
    const box9 = document.getElementById('bx-9').innerText
    if ((box1 == box2 && box2 == box3) || (box1 == box4 && box4 == box7) || (box1 == box5 && box5 == box9)) {
        //alert(box1+' win')
        if (box1 == 'x') {
            document.getElementById('x-box').innerText = 1
        } else {
            document.getElementById('o-box').innerText = 1
        }
    }
    if ((box3 == box6 && box6 == box9) || (box3 == box5 && box5 == box7)) {
        //alert(box3+' win')
        if (box3 == 'x') {
            document.getElementById('x-box').innerText = 1
        } else {
            document.getElementById('o-box').innerText = 1
        }
    }
    if ((box2 == box5 && box8 == box5) || (box4 = box5 && box5 == box6)) {
        //alert(box5+' win')
        if (box5 == 'x') {
            document.getElementById('x-box').innerText = 1
        } else {
            document.getElementById('o-box').innerText = 1
        }
    }
}

function restart() {
    location.href = "index.html"
}