let sled = document.getElementById('sled')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color4 = document.getElementById('color4')
let click1 = document.getElementById('click1')
let click2 = document.getElementById('click2')


click11.onclick = fast
click12.onclick = low

function fast() {
    click11.style.backgroundColor = 'black'
    click11.style.boxShadow = '2px 2px 10px 10px red'
    click12.style.backgroundColor = 'white'
    click12.style.boxShadow = '0px 0px 0px 0px'
    click2.onmousemove = f1
    let a = 0
    function f1() {
        a += 15
        let b = String(a) + 'px'
        sled.style.width = b
    }
}
    function low() {
        click12.style.backgroundColor = 'black'
        click11.style.backgroundColor = 'white'
        click12.style.boxShadow = '2px 2px 10px 10px blue'
        click11.style.boxShadow = '0px 0px 0px 0px'
        click2.onmousemove = f1
        a = 0
        function f1() {
            a += 5
            let b = String(a) + 'px'
            sled.style.width = b
        }
    }
    color1.onclick = fcolor1
    color2.onclick = fcolor2
    color3.onclick = fcolor3
    color4.onclick = fcolor4
    function fcolor1() {
        sled.style.backgroundColor = 'red'
        color1.style.boxShadow = '2px 2px 10px 10px white'
        color2.style.boxShadow = '0px 0px 0px 0px'
        color3.style.boxShadow = '0px 0px 0px 0px'
        color4.style.boxShadow = '0px 0px 0px 0px'
    }
    function fcolor2() {
        sled.style.backgroundColor = 'blue'
        color2.style.boxShadow = '2px 2px 10px 10px white'
        color1.style.boxShadow = '0px 0px 0px 0px'
        color3.style.boxShadow = '0px 0px 0px 0px'
        color4.style.boxShadow = '0px 0px 0px 0px'
    }
    function fcolor3() {
        sled.style.backgroundColor = 'yellow'
        color3.style.boxShadow = '2px 2px 10px 10px white'
        color1.style.boxShadow = '0px 0px 0px 0px'
        color2.style.boxShadow = '0px 0px 0px 0px'
        color4.style.boxShadow = '0px 0px 0px 0px'
    }
    function fcolor4() {
        sled.style.backgroundColor = 'black'
        color4.style.boxShadow = '2px 2px 10px 10px white'
        color1.style.boxShadow = '0px 0px 0px 0px'
        color3.style.boxShadow = '0px 0px 0px 0px'
        color2.style.boxShadow = '0px 0px 0px 0px'
    }

