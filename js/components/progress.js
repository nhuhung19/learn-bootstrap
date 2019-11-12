function initProgressBar(){
    // let progressBars = document.querySelector('.skillset__progress-bar')
    // progressBar.addEventListener('mouseenter', onMouseEnter)

    // function onMouseEnter(event){
    //     let el = event.currentTarget
    //     let valueBar = el.querySelector('.progress-bar__value')
    //     let width = valueBar.dataset.width
    //     valueBar.style.width = width
    // }

    let progressBars = document.querySelectorAll('.progress-bar__value')
    window.addEventListener('scroll', onWindownScroll)

    // function onWindownScroll() {
    //     if (timer) {
    //         clearTimeout(timer)
    //     }
    //     timer = setTimeout(() => {
    //         console.log(++i)
    //         for(let elBar of progressBars){
    //             if(isInViewport(elBar)){
    //                 setProgressValue(elBar)
    //             }
    //         }
    //     }, DEBOUNCE)
    // }

    let setValCount = 0 // Number of prog. bars with value
    const DEBOUNCE = 500 // ms
    let timer // undefined
    // 3 bước tối ưu
    function onWindownScroll() {
        // Tối ưu 1: Deboucing
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            for(let elBar of progressBars){
                // Tối ưu 2: Kiểm tra hasValue
                if(isInViewport(elBar) && !hasValue(elBar)){
                    setProgressValue(elBar)
                    
                    //// Remove sự kiện sau khi set value cho tất cả progressbar
                    // offWindowScroll()
                    setValCount++
                    console.log({setValCount})
                    if(setValCount === progressBars.length){
                        // Tối ưu 3: removeEventListener
                        window.removeEventListener('scroll', onWindownScroll)
                    }
                }
            }
        }, DEBOUNCE)
    }
    
    // C.3
    const hasValue = (el) => !el.hasAttribute('data-width')

    // C.2
    // function hasValue(el){
    //     return !el.hasAttribute('data-width')
    // }

    // C.1
    //function hasValue(el){
        //// if(el.hasAttribute('data-width')){
        ////     return false
        //// }
        //// return true
    //}

    function setProgressValue(el) {
        let width = el.dataset.width
        el.style.width = width
        el.removeAttribute('data-width')
    }

}
let timeout
const DEBOUNCE = 500
let value = 0
function initProgressTitle(){
    // 1. query tat ca skillset__number
    let skillNumbers = document.querySelectorAll('.skillset__number')
    // 2. kiem tra window scroll 
    window.addEventListener('scroll', onScroll)
    
    const NUM_START = 1
    const NUM_STEP = 4
    const NUM_SPEED = 100 // ms
    function onScroll (){
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            for(let elNumber of skillNumbers ){
                // 3. khi 1 element lo dien thi reset value=1, roi sau do' chay len value cu~
                if(isInViewport(elNumber) && !alreadyRun(elNumber)){
                    let origNumb = Number(elNumber.innerHTML)
                    // let i = 1 // Magic number
                    let i = NUM_START
                    let timer = setInterval(()=>{
                        if(i >= origNumb){
                            clearInterval(timer)
                            elNumber.setAttribute('data-run', 'true')
                        }
                        elNumber.innerHTML = i
                        i = Math.min(origNumb, i + NUM_STEP)
                    }, NUM_SPEED)
                    value++
                    console.log({value})
                    if(value === skillNumbers.length){
                        window.removeEventListener('scroll', onScroll)
                    }
                }
            }
        }, DEBOUNCE)
        
    }

    const alreadyRun = (el) => el.hasAttribute('data-run')

    // 1. Debounce ham onScroll
    // 2. Tach logic run 1 number ra ham rieng
    // 3. Tach logic run TAT CA numbers ra ham rieng
    // 4. window.removeEventListener
}


function isInViewport(el){
    let rect = el.getBoundingClientRect() // lấy hình chữ nhật bao quanh element
    let top = rect.top // khoảng cách từ đỉnh element đến cạnh trên của trình duyệt
    let bot = rect.bottom // khoảng cách từ đáy element đến cạnh dưới của trình duyệt

    return (
        top > 0 &&
        bot <= window.innerHeight //chiều cao phần nhìn thấy được của trình duyệt
    )
}

