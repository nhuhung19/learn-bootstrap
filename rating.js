function initStar(){
    let btn1_1 = document.querySelector("#star1-1")
    let btn1_2 = document.querySelector("#star1-2")
    let btn1_3 = document.querySelector("#star1-3")
    let btn1_4 = document.querySelector("#star1-4")
    let btn1_5 = document.querySelector("#star1-5")
    let star1_1 = document.querySelector("#rating1-1")
    let star1_2 = document.querySelector("#rating1-2")
    let star1_3 = document.querySelector("#rating1-3")
    let star1_4 = document.querySelector("#rating1-4")
    let star1_5 = document.querySelector("#rating1-5")
    
    
    function addStarfar(starfar){
        starfar.classList.add('far fa-star')
    }
    function addStarfas(starfas){
        starfas.classList.add('fas fa-star')
    }
    function moveStarfar(starfar){
        starfar.classList.move('far fa-star')
    }
    function moveStarfas(starfas){
        starfas.classList.remove('fas fa-star')
    }
    btn1_1.addEventListener('click', function(){
        addStarfar(star1_2)
        addStarfar(star1_3)
        addStarfar(star1_4)
        addStarfar(star1_5)
        moveStarfas(star1_2)
        moveStarfas(star1_3)
        moveStarfas(star1_4)
        moveStarfas(star1_5)
    })
    btn1_2.addEventListener('click'), function(){
        addStarfar(star1_3)
        addStarfar(star1_4)
        addStarfar(star1_5)
        addStarfas(star1_2)
        moveStarfar(star1_2)
        moveStarfas(star1_3)
        moveStarfas(star1_4)
        moveStarfas(star1_5)
    }
}