const check = document.getElementById('switch')

const checkCouleurMode = JSON.parse(localStorage.getItem('couleur-mode'))

if(checkCouleurMode)
{
    check.checked = checkCouleurMode
    document.body.classList.toggle('dark')
}

check.addEventListener('change', ({target}) =>
{
    document.body.classList.toggle('dark')

    localStorage.setItem('couleur-mode',target.checked)
})