import './scss/styles.scss'

const dialogButton = document.getElementById('dialog-bt')
const closeDialogButton = document.getElementById('close-modal-btn')
const dialog = document.getElementById('back-dialog')
const successDialog = document.getElementById('success-dialog')
const radioButtons = document.querySelectorAll('.radio')
const nav = document.querySelector('nav')

const resetRadio = () => {
    radioButtons.forEach( btn => {
        btn.checked = false
    })
}

dialogButton.addEventListener('click', (e)=> {
    dialog.showModal();
})

closeDialogButton.addEventListener('click', (e)=> {
    resetRadio()
    dialog.close()
})

document.addEventListener("click", e => {

    const pledgeBtn = e.target.closest(".btn-pledge")
    if(pledgeBtn){
        e.preventDefault()
    } 

    const actionBtn = e.target.closest('.pledge-action')
    if(actionBtn){
        // console.log('Got it')
        e.preventDefault()
        resetRadio()
        dialog.close()
        window.scrollTo({ top: 0, behavior: 'smooth' });
        successDialog.showModal()
    }

    const bookmarkButton =  e.target.closest('.btn-bookmark')
    if(bookmarkButton){
        const isTrueSet = (bookmarkButton.dataset.pressed === 'true')
        bookmarkButton.dataset.pressed = !isTrueSet
    }

    const mobileIcon = e.target.closest('.mobile-icon-wrapper')
    if(mobileIcon) {
        // console.log(nav.dataset)
        const isMenuOpened = (nav.dataset.menuOpened === 'true')
        nav.dataset.menuOpened = !isMenuOpened
    }

})

