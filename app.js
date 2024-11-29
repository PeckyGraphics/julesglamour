let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if(darkmode=='active') enableDarkmode()
themeSwitch.addEventListener("click",()=>{
    // darkmode !=="active" ? enableDarkmode() : disableDarkmode()
    darkmode = localStorage.getItem('darkmode')
    if(darkmode!== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})

const btn = document.querySelector('.hideboxicon');
const nav = document.querySelector('nav');

btn.onclick=()=>{
    if(nav.classList.contains('active')){
        nav.classList.add('hide');
        nav.classList.remove('active');
        btn.setAttribute('box-icon')
    }else{
        nav.classList.add('active');
        nav.classList.remove('hide');
        btn.setAttribute('box-icon')
    }
    
}

