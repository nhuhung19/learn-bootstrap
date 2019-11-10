function initAppbar(){
    let navItems = document.querySelectorAll('.nav-item')

    // for(let i = 0; i < navItems.length; i++) {
    for(let item of navItems){
        item.addEventListener('mouseenter', onMouseEnterItem)
        item.addEventListener('mouseleave', onMouseLeaveItem)
        
    }
    
    function onMouseEnterItem(event){
        let item = event.currentTarget
        let menu = item.querySelector('.dropdown-menu')
        if(menu !== null){
            menu.classList.add('dropdown-menu--visible')
        }
        
    }

    function onMouseLeaveItem(evt){
        let item = evt.currentTarget
        let menu = item.querySelector('.dropdown-menu')
        if(menu !== null){
            menu.classList.remove('dropdown-menu--visible')
        }
       

    }

}