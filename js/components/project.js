async function initProject(){   
   let response = await axios.get('/data/projects.json')
   let IDs = response.data.projects.map(
      p => p.name.toLowerCase().replace(/\s/g, '-')
   )

   buildProjectButtons(response.data.categories, IDs)
   buildProjectList(response.data.projects, IDs)
   initProjectBehavior()
}

function buildProjectButtons(categories, IDs) {
   let buttonElements = categories.map(cate => {
      let button = document.createElement('a')
      button.textContent = cate.name
      button.classList.add('project__menu__item')
      button.setAttribute('id', `btn${cate.name}`)
      button.setAttribute('href', '#')

      let projectIDs = cate.projects.map(idx => IDs[idx])
      button.setAttribute('data-show', projectIDs.join())
      return button
   })
   document.querySelector('.project__menu').append(...buttonElements)
}

function buildProjectList(projects, IDs){
   // let projects = respone.data.projects
   let source = document.querySelector('#tplProject').innerHTML
   let template = Handlebars.compile(source)
   let html = ''
   for(let i = 0; i < projects.length; i++){
      html += template({
         id: IDs[i],
         ...projects[i],
      })
   }
    let elProject = document.querySelector('.project__showcase .row')
    elProject.innerHTML = html
}

function initProjectBehavior(){

   let projectButtons = document.querySelectorAll(".project__menu__item")
   let projectBlocks = document.querySelectorAll(".project__showcase__block")

   for( let btn of projectButtons){
      btn.addEventListener('click', onBtnClick)
   }

   function onBtnClick(event) {
      event.preventDefault()
      let dataIDs = event.target.dataset.show
      toggleProjects(dataIDs)
   } 

   function toggleProjects(stringIDs) {
      if (stringIDs === '*') {
         showAll()
         return
      }
      // From: "helmet,vinyl,embosed"
      // To: ["helmet", "vinyl", "embosed"]
      let arrIDs = stringIDs.split(',')
      showWithIDs(arrIDs)
   }

   function showAll() {
      for( let proj of projectBlocks) {
         show(proj)
      }
   }

   function showWithIDs(IDs) {
      for( let proj of projectBlocks) {
         if (IDs.includes(proj.id)) {
            show(proj)
         }
         else {
            hide(proj)
         }
      }
   }

   function show(project){
      project.classList.remove('d-none')
   }

   function hide(project){
      project.classList.add('d-none')
   }

   /*
   let btnAll = document.querySelector("#btnall")
   let btnprojectector = document.querySelector("#btnvector")
   let btnRaster = document.querySelector("#btnraster")
   let btnUI = document.querySelector("#btnui")
   let btnPrint = document.querySelector("#btnprint")
   let projectHelmet = document.querySelector("#helmet")
   let projectVinyl = document.querySelector("#vinyl")
   let projectPoster = document.querySelector("#poster")
   let projectEmbosed = document.querySelector("#embosed")
   let projectDisposable = document.querySelector("#disposable")
   let projectLogo = document.querySelector("#logo")



   showAll()
   function showAll(){
      //   showhelmet.classList.remove('d-none')
      //   showvinyl.classList.remove('d-none')
      //   showposter.classList.remove('d-none')
      //   showembosed.classList.remove('d-none')
      //   showdisposable.classList.remove('d-none')
      //   showlogo.classList.remove('d-none')
      show(projectHelmet)
      show(projectVinyl)
      show(projectPoster)
      show(projectEmbosed)
      show(projectDisposable)
      show(projectLogo)

   }

   function showVector(){
      hide(projectPoster)
      show(projectHelmet)
      show(projectVinyl)
      show(projectEmbosed)
      show(projectDisposable)
      show(projectLogo)
      //   projectPoster.classList.add('d-none')
      //   projectHelmet.classList.remove('d-none')
      //   projectVinyl.classList.remove('d-none')
      //   projectEmbosed.classList.remove('d-none')
      //   projectDisposable.classList.remove('d-none')
      //   projectLogo.classList.remove('d-none')
   }

   function showRaster(){
      show(projectHelmet)
      show(projectVinyl)
      show(projectPoster)
      show(projectDisposable)
      hide(projectLogo)
      hide(projectEmbosed)

      //   projectHelmet.classList.remove('d-none')
      //   projectVinyl.classList.remove('d-none')
      //   projectPoster.classList.remove('d-none')
      //   projectDisposable.classList.remove('d-none')
      //   projectEmbosed.classList.add('d-none')
      //   projectLogo.classList.add('d-none')
   }

   function showUI(){
      hide(projectHelmet)
      hide(projectDisposable)
      show(projectVinyl)
      show(projectPoster)
      show(projectEmbosed)
      show(projectLogo)

      //   projectHelmet.classList.add('d-none')
      //   projectDisposable.classList.add('d-none')
      //   projectVinyl.classList.remove('d-none')
      //   projectPoster.classList.remove('d-none')
      //   projectEmbosed.classList.remove('d-none')
      //   projectLogo.classList.remove('d-none')
   }

   function showPrint(){
      show(projectHelmet)
      show(projectDisposable)
      show(projectPoster)
      hide(projectVinyl)
      hide(projectEmbosed)
      hide(projectLogo)

      //   projectHelmet.classList.remove('d-none')
      //   projectPoster.classList.remove('d-none')
      //   projectDisposable.classList.remove('d-none')
      //   projectVinyl.classList.add('d-none')
      //   projectEmbosed.classList.add('d-none')
      //   projectLogo.classList.add('d-none')
   }

   btnAll.addEventListener('click', (event) => {
      event.preventDefault()
      // event.target.dataset.show
      showAll()
   })
   
   // <a href="javascript: void(0)">
   btnprojectector.addEventListener('click', showVector)
   
   btnRaster.addEventListener('click', (event) => {
      event.preventDefault()
      showRaster()
   })
   
   btnUI.addEventListener('click', (event) => {
      event.preventDefault()
      showUI()
   })
   
   btnPrint.addEventListener('click', (event) => {
      event.preventDefault()
      showPrint()
   })
   */
}