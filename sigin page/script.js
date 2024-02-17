document.getElementById('out').addEventListener('click', flip)
document.getElementById('in').addEventListener('click', flip)


function flip() {
    document.querySelector('.container').classList.toggle('hide')
    document.querySelector('.container-1').classList.toggle('show')
    
}