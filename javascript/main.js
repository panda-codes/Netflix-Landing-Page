const tabItems = document.querySelectorAll('.card');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //  add border to current tab
    this.classList.add('cancel');
    //grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add show class
    tabContentItem.classList.add('show');

    
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('cancel'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
};

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));