
function initTimeline(){

    // RW
    // let btnExp = document.querySelector('#btnExp')   
    // let btnEdu = document.querySelector('#btnEdu')
    let buttons = document.querySelectorAll('.experiences__button')

    // RW
    let timelines = document.querySelectorAll('.timeline')
    // let timelineExp = document.querySelector('#timelineExp')   
    // let timelineEdu = document.querySelector('#timelineEdu')
    let btnActive
   
    // RW
    // highlight(btnEdu, btnExp)
    let firstBtn = buttons[0]
    highlight(null, firstBtn)

    // RW
    // hideTree(timelineEdu)

    // RW
    let firstTimeline = timelines[0]
    showTree(firstTimeline)
    
    // RW
    // btnExp.addEventListener('click', () => {
    //     highlight(btnEdu,btnExp)
    //     hideTree(timelineEdu)
    //     showTree(timelineExp)
    // })
    // btnEdu.addEventListener('click', () => {
    //     highlight(btnExp,btnEdu)
    //     hideTree(timelineExp)
    //     showTree(timelineEdu)
    // })
    
    for( let btn of buttons){
        btn.addEventListener('click', onClick)
    }
    function onClick(){
        let btnNew = event.target
        // highlight(btnActive, btnNew) // Run incorrectly
        
        let strIDActive = btnActive.dataset.show
        let timelineActive = document.querySelector(`#${strIDActive}`)
        hideTree(timelineActive)
        
        let strIDNew = btnNew.dataset.show
        let timelineNew = document.querySelector(`#${strIDNew}`)
        showTree(timelineNew)

        highlight(btnActive, btnNew)
    }
    
    function activate(btn) {
        btn.classList.add('experiences__button--active')
    }
    function inactivate(btn) {
        btn.classList.remove('experiences__button--active')
    }
    function highlight(btnOld, btnNew){
        if (btnOld != null) {
            inactivate(btnOld)
        }
        activate(btnNew)

        // ghi nhat ky
        btnActive = btnNew
    }
    
    function hideTree(timeline){
        timeline.classList.add('d-none')
    }
    function showTree(timeline){
        timeline.classList.remove('d-none')
    }


    // B
    // let btnExp = document.querySelector('#btnExp')   
    // let btnEdu = document.querySelector('#btnEdu')
    // let timelineExp = document.querySelector('#timelineExp')   
    // let timelineEdu = document.querySelector('#timelineEdu')


    // // B
    // highlight(btnEdu, btnExp)

    // // B
    // hideTree(timelineEdu)

    // // B
    // showTree(timelineExp)
    
    // // B
    // btnExp.addEventListener('click', () => {
    //     highlight(btnEdu,btnExp)
    //     hideTree(timelineEdu)
    //     showTree(timelineExp)
    // })

    // // B
    // btnEdu.addEventListener('click', () => {
    //     highlight(btnExp,btnEdu)
    //     hideTree(timelineExp)
    //     showTree(timelineEdu)

    // })

}
    