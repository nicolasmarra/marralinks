const checked = document.getElementById('switch')


checked.addEventListener('change', () =>
{
    document.body.classList.toggle('dark')
})