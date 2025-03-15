let abrir_menu = document.getElementById('bt_abmenu')
let menu_cel = document.getElementById('opc_cel')
let over_cel = document.getElementById('overlay_cel')

abrir_menu.addEventListener('click', ()=> {
    menu_cel.classList.add('ab_menu')
})

menu_cel.addEventListener('click', ()=> {
    menu_cel.classList.remove('ab_menu')
})

over_cel.addEventListener('click', ()=> {
    menu_cel.classList.remove('ab_menu')
})