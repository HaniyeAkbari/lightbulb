document.getElementsByClassName('off')[0].addEventListener('click',(e)=>{
    e.target.style.transform='rotateY(0deg)'
    e.target.style.boxShadow='none'
    document.getElementsByClassName('on')[0].style.transform='perspective(400px) rotateY(-30deg)'
    document.getElementsByClassName('on')[0].style.boxShadow='5px 0 15px  black'
    document.querySelector('#lamp>i>i').style.opacity='0'
    document.querySelector('#lamp>i>svg').style.opacity='0'
    document.querySelector('#lamp>i>.inside').style.opacity='0'
    document.getElementsByTagName('main')[0].style.background='#2d2d2d'
})

document.getElementsByClassName('on')[0].addEventListener('click',(e)=>{
    e.target.style.transform='rotateY(0deg)'
    e.target.style.boxShadow='none'
    document.getElementsByClassName('off')[0].style.transform='perspective(400px) rotateY(30deg)'
    document.getElementsByClassName('off')[0].style.boxShadow='-5px 0 15px  black'
    document.querySelector('#lamp>i>i').style.opacity='1'
    document.querySelector('#lamp>i>svg').style.opacity='1'
    document.querySelector('#lamp>i>.inside').style.opacity='1'
    document.getElementsByTagName('main')[0].style.background='#f8fa79a8'
})