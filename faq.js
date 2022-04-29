const accordionItems = document.querySelectorAll('.faq .items .container')

accordionItems.forEach(item => {
    item.querySelector('.item .icon-img').addEventListener('click', event => {
        const activeItem = document.querySelector('.faq .items .active')
        if (activeItem && activeItem !== item.querySelector('.item-content')) {
            activeItem.classList.remove('active')
            activeItem.style.maxHeight = '0'
        }

        if (!item.querySelector('.item-content').classList.contains('active')) {
            item.querySelector('.item-content').classList.add('active')
        }

        if (item.querySelector('.item-content').classList.contains('active')) {
            item.querySelector('.item-content').style.maxHeight = (item.querySelector('.item-content').scrollHeight - 1) + "px"
        } else {
            item.querySelector('.item-content').style.maxHeight = "0"
        }
    })

    item.querySelector('.item-content .icon-img').addEventListener('click', event => {
        item.querySelector('.item-content').classList.remove('active')
        item.querySelector('.item-content').style.maxHeight = "0"
    })
})