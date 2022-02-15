// const img = document.querySelectorAll('.hidden');
// const iconsContainer = document.querySelectorAll('div i');

// iconsContainer.forEach((item, idx) =>{
//   item.addEventListner('click', ()=>{
//       hideAllContents();
//       hideAllItems();

//       item.classList.add('active');
//   })
// })

// function hideAllContents(){
//     img.forEach(content =>{
//         content.classList.remove('hidden');
//     })
// }

// function hideAllItems(){
//     iconsContainer.forEach(item =>{
//         item.classList.remove('active');
//     })
// }

// 


const contents = document.querySelectorAll('.content');
const nav  = document.querySelectorAll('nav ul li');


nav.forEach((item, idx)=>{
    item.addEventListener('click',() =>{
        removecontentItem();
        removenavItem();

        item.classList.add('active');
        contents[idx].classList.add('show');
    })
})

function  removecontentItem(){
    contents.forEach(content =>{
        content.classList.remove('show');
    })
}

function  removenavItem(){
    nav.forEach(item=>{
        item.classList.remove('active');
    })
}
