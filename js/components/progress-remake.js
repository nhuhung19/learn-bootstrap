function initProgressBar(){
    let progressBars = document.querySelectorAll('.progress-bar__value')
    
    window.addEventListener('scroll', onWindowScroll)
    // let i = 0
    let timer
    const DEBOUNCE = 500
    let valuecount = 0
    function onWindowScroll(){    
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(runValue, DEBOUNCE)     
    }

    function runValue(){
        // console.log(i++)
        for(let elBar of progressBars){
            if(isInViewPort(elBar) && !hasValue(elBar)){
                setValueProgress(elBar)
                offWindowScroll()
            }
        }
    }
    
    function offWindowScroll(){
        valuecount++
        if(valuecount === progressBars.length){
            window.removeEventListener('scroll', onWindowScroll)
        }
    }
    const hasValue = (el) =>{
        !el.hasAttribute('data-width')
    }

    function setValueProgress(el){
        let width = el.dataset.width
        el.style.width = width
        el.removeAttribute('data-width')
    }
}
function isInViewPort(el){
    let rect = el.getBoundingClientRect()
    let top = rect.top
    let bot = rect.bottom

    return(
        top > 0 &&
        bot <= window.innerHeight
    )
}

function initProgressTitle(){
    let skillNumbers = document.querySelectorAll('.skillset__number')

    window.addEventListener('scroll', onScroll)
    const NUM_START = 1
    const NUM_STEP = 4
    const NUM_SPEED = 100
    let timeout 
    const DEBOUNCE = 500
    let valNum = 0
    function onScroll(){
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(runNumberSkill, DEBOUNCE)
    }
    function runNumberSkill(){
        for(let number of skillNumbers){
            if(isInViewPort(number) && !alreadyRun(number)){
                setNumberSkill(number)
                offScroll()
                console.log(valNum++)
            }
        
        }
    }
    const alreadyRun = (el) => el.hasAttribute('data-run')
    function offScroll(){
        valNum++
        if(valNum === skillNumbers.length){
            window.removeEventListener('scroll', onScroll)
        }
    }
    function setNumberSkill(nub){
        let origNumber = Number(nub.innerHTML)
        let i = NUM_START
       
        let timer = setInterval(() => {
            if(i >= origNumber){
                clearInterval(timer)
            }
            nub.innerHTML = i
            i = Math.min(origNumber, i + NUM_STEP)
        }, NUM_SPEED)
        nub.setAttribute('data-run', 'true')
    }
}