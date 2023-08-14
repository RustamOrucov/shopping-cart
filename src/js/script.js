const card=document.getElementsByClassName('card');
const btn=document.getElementsByClassName('btn-info');
const btnCard=document.querySelector('.btn-cart');
const cardList=document.querySelector('.shopping-cart-list')
console.log(btnCard);

class Shopping{
    constructor(img,title,price){
        this.img=img;
        this.title=title;
        this.price=price;
    }
}

class UI{
    addToCart(shopping){
      const listItem=document.createElement('div')
      listItem.classList='list-item mt-3'

      listItem.innerHTML=`
      <div class="row align-items-center text-white-50">
                  <div class="col-md-3">
                    <img
                      src="${shopping.img}"
                      alt="product"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-5">
                    <div class="title">${shopping.title}</div>
                  </div>
                  <div class="col-md-2">
                    <div class="price">${shopping.price}</div>
                  </div>
                  <div class="col-md-2">
                    <button class="btn btn-delete">
                      <i class="fas fa-trash-alt text-danger"></i>
                    </button>
                  </div>
                </div>`

                cardList.appendChild(listItem)
    }
    removeCart(){
        let btnRemove=document.getElementsByClassName('btn-delete')
        let self=this;

        for(let i=0;i<btnRemove.length;i++){
           btnRemove[i].addEventListener('click',function(){
            console.log('test');
            this.parentElement.parentElement.parentElement.remove()
            self.cartCount()
           })
        }
    }
    cartCount(){
        let cartListItem=cardList.getElementsByClassName('list-item')
        let itemCount=document.getElementById('item-count')
        itemCount.innerHTML=cartListItem.length
    }
    cartToggle(){
        btnCard.addEventListener('click',function(){
            console.log('test');
            cardList.classList.toggle('d-none')
        })
    }
}





for(let i=0;i<card.length;i++){
    btn[i].addEventListener('click',function(e){
         let title=card[i].getElementsByClassName('cart-title')[0].textContent;
         let price=card[i].getElementsByClassName('price')[0].textContent;
         let img=card[i].getElementsByClassName('card-img-top')[0].src;

         btn[i].classList.add('disabled')
         btn[i].textContent=('in cart')
         let shopping=new Shopping(img,title,price);
         let ui=new UI()
         ui.addToCart(shopping)
         ui.removeCart()
         ui.cartCount()

        e.preventDefault();
    })
}


document.addEventListener('DOMContentLoaded',()=>{
    let ui=new UI();

    ui.cartToggle()
})