
function initTimeline(){
    let btnExp = document.querySelector('#btnExp')   
    let btnEdu = document.querySelector('#btnEdu')
    let timelineExp = document.querySelector('#timelineExp')   
    let timelineEdu = document.querySelector('#timelineEdu')

    
    
    function activate(btn) {
        btn.classList.add('experiences__button--active')
    }
    function inactivate(btn) {
        btn.classList.remove('experiences__button--active')
    }
    function highlight(btnOld, btnNew){
        inactivate(btnOld)
        activate(btnNew)
    }
    
    function hideTree(timeline){
        timeline.classList.add('d-none')
    }
    function showTree(timeline){
        timeline.classList.remove('d-none')
    }

    highlight(btnEdu,btnExp)
    hideTree(timelineEdu)
    showTree(timelineExp)
    btnExp.addEventListener('click', () => {
        highlight(btnEdu,btnExp)
        hideTree(timelineEdu)
        showTree(timelineExp)
    })

    btnEdu.addEventListener('click', () => {
        highlight(btnExp,btnEdu)
        hideTree(timelineExp)
        showTree(timelineEdu)

    })

}
    