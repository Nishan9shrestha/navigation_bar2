const togglebtn = document.querySelector('.toggle_btn')
const togglebtnicon = document.querySelector('.toggle_btn i')
const dropdownbtn = document.querySelector('.dropdown')
togglebtn.onclick = function() {
    dropdownbtn.classList.toggle('open')
    const isopen = dropdownbtn.classList.contains('open')

    togglebtnicon.classList = isopen ? 'fa-solid fa-xmark' :
        'fa-sharp fa-solid fa-bars'
}