function initStar(){
    /*
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
   
    function addStarHollow(starfar){
        starfar.classList.add('far')
    }
    function removeStarHollow(starfar){
        starfar.classList.remove('far')
    }
    function addStarSolid(starfas){
        starfas.classList.add('fas')
    }
    function removeStarSolid(starfas){
        starfas.classList.remove('fas')
    }
    btn1_1.addEventListener('click', function(){
        addStarHollow(star1_2)
        addStarHollow(star1_3)
        addStarHollow(star1_4)
        addStarHollow(star1_5)
        removeStarSolid(star1_2)
        removeStarSolid(star1_3)
        removeStarSolid(star1_4)
        removeStarSolid(star1_5)
    })
    btn1_2.addEventListener('click', function(){
        removeStarHollow(star1_2)
        addStarHollow(star1_3)
        addStarHollow(star1_4)
        addStarHollow(star1_5)
        addStarSolid(star1_2)
        removeStarSolid(star1_3)
        removeStarSolid(star1_4)
        removeStarSolid(star1_5)
    })
    btn1_3.addEventListener('click', function(){
        removeStarHollow(star1_2)
        addStarSolid(star1_2)
        removeStarHollow(star1_3)
        addStarSolid(star1_3)
        addStarHollow(star1_4)
        removeStarSolid(star1_4)
        addStarHollow(star1_5)
        removeStarSolid(star1_5)
    })
    btn1_4.addEventListener('click', function(){
        removeStarHollow(star1_2)
        addStarSolid(star1_2)
        removeStarHollow(star1_3)
        addStarSolid(star1_3)
        removeStarHollow(star1_4)
        addStarSolid(star1_4)
        addStarHollow(star1_5)
        removeStarSolid(star1_5)
    })
    btn1_5.addEventListener('click', function(){
        removeStarHollow(star1_2)
        addStarSolid(star1_2)
        removeStarHollow(star1_3)
        addStarSolid(star1_3)
        removeStarHollow(star1_4)
        addStarSolid(star1_4)
        removeStarHollow(star1_5)
        addStarSolid(star1_5)
    })
    */
   let testiItems = document.querySelectorAll(".testi-list__item")
   for(let i = 0; i < testiItems.length; i++){
       initRating(testiItems[i].id)
   }

   function initRating(testiId){
        let buttons = document.querySelectorAll(`#${testiId} .btn-star`)
        let stars = document.querySelectorAll(`#${testiId} .fa-star`)

        for(let btn of buttons){
            btn.addEventListener('click', (evt) => ratingStar(evt, stars))
            // btn.addEventListener('click', ratingStar)
        }
        // function ratingStar(event){
        //     event.preventDefault()
        //     let index = Number(event.currentTarget.dataset.index) // "4"
        //     for(let i = index; i >= 0; i--){
        //         addStarSolid(stars[i])
        //     }
        //     for(let i = index + 1; i < stars.length; i++){
        //         addStarHollow(stars[i])
        //     }
        // }
    }

    function ratingStar(event, btnStars){
        event.preventDefault()
        let index = Number(event.currentTarget.dataset.index) // "4"
        for(let i = index; i >= 0; i--){
            addStarSolid(btnStars[i])
        }
        for(let i = index + 1; i < btnStars.length; i++){
            addStarHollow(btnStars[i])
        }
    }

    function addStarHollow(star){
        star.classList.add('far')
        star.classList.remove('fas')
    }
    function addStarSolid(star){
        star.classList.add('fas')
        star.classList.remove('far')
    }
}

