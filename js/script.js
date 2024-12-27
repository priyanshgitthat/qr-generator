let inp = document.querySelector('#input')
let btn = document.querySelector('.btn')
let img = document.querySelector('#qr-image')

btn.addEventListener('click', () => {
    if (inp.value.length > 0)
    {   
        document.querySelector('.qr').classList.add('show')
        let link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inp.value
        img.setAttribute('src', link)
        return ;
    }
    else{
        alert("please enter the link first ! ")
    }

})