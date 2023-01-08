
 function fiterByBrand() {

   let selected =event.target.innerText;

   let filteredBrand=[];
    async function getTechProducts(){
        let response = await fetch('../jsondata/Skincare _ bluemercury.json')
        //let response = await fetch("../jsondata/pro");
        SkinCare = await response.json();

        SkinCare.forEach(function(ele){
            ele.qty = 1;
          })
        if(selected == 'All Brands'){
            HandleByFilter(SkinCare);
        }
        else{
             filteredBrand = SkinCare.filter(function(ele){
                // console.log(ele.brand, selected)
                return ele.brand == selected;
            })
            HandleByFilter(filteredBrand);
        }       
        console.log(filteredBrand); 
    }   
        
    getTechProducts();  
}
// console.log(SkinCare);

// function  FilterByPrice() {

//     let selected =event.target.innerText;
   
//      async function getTechProducts(){
//          let response = await fetch('../jsondata/Skincare _ bluemercury.json')
//          //let response = await fetch("../jsondata/pro");
//          SkinCare = await response.json();
//         SkinCare.forEach(function(ele){
//           ele.qty = 1;
//       })
//          if(selected == '$500+' || selected == "All Products"){
//             HandleByFilter(SkinCare);
//          }
//          else{
//              if(selected == '$0 To $50'){
//                 let filteredPrice = SkinCare.filter(function(ele){
//                     return ele.price>0 && ele.price<=50;
//                 })
//                 console.log(filteredPrice);
//              HandleByFilter(filteredPrice);
//              }
//              else if(selected == '$50 To $100'){
//                 let filteredPrice = SkinCare.filter(function(ele){
//                     return ele.price>50 && ele.price<=100;
//                 })
//                 console.log(filteredPrice);
//              HandleByFilter(filteredPrice);
//              }
//              else if(selected == '$100 To $200'){
//                 let filteredPrice = SkinCare.filter(function(ele){
//                     return ele.price>100 && ele.price<=200;
//                 })
//                 console.log(filteredPrice);
//              HandleByFilter(filteredPrice);
//              }
//              else if(selected == '$200 To $ 500'){
//                 let filteredPrice = SkinCare.filter(function(ele){
//                     return ele.price>200 && ele.price<=500;
//                 })
//                 console.log(filteredPrice);
//              HandleByFilter(filteredPrice);
//              }
             
//          }       
//      }   
       
//      getTechProducts();  
//  }

   
function HandleByFilter(data){
    document.querySelector('#container').innerHTML="";
    data.map(function(ele){
        
        let div = document.createElement('div');
        div.setAttribute('id',"card");

        let wishList = document.createElement('div');
        wishList.setAttribute('id',"wishlist");

        let button = document.createElement('div');
        button.innerHTML=`<i class="fa-solid fa-2x fa-heart onclick='style.backgroundColor="#12284c"' ></i>`;
        button.style.cursor='pointer';
        button.addEventListener('click',function(){
            addToWishList(ele);                     //WISHLIST EventListener
        });

        let box = document.createElement('div');
        let edition = document.createElement('p');
        edition.innerText = ele.edition;

        let category = document.createElement('p');
        category.innerText = ele.category;

        let div1 = document.createElement('div');
        div1.setAttribute('id',"card");

        let quickView = document.createElement('button');
        quickView.innerText ='QUICK VIEW';
        quickView.setAttribute('id','quick-view');

        let img = document.createElement('img');
        img.setAttribute('src',ele.Image_URL);
        img.style.cursor='pointer';
        img.addEventListener('mouseover',function(){
            document.getElementById('quick-view').style.curser='pointer';
            document.getElementById('quick-view').style.display = 'block';
            document.getElementById('quick-view').addEventListener('click',function(){
                document.getElementById('quick-view').style.display = 'none';
                displayAddToCartPage(ele);                                 //display add To card module event
            })
        })

        let brand = document.createElement('p');
        brand.innerText = ele.brand;

        let name = document.createElement('p');
        name.innerText= ele.name;
        name.style.cursor='pointer';
        name.addEventListener('click',function(){
            displayDetailsOfProducts(ele);                             //display products detail event
            
        });


        let price = document.createElement('p');
        price.innerText= '$ '+ele.price;

       box.append(edition,category);
       wishList.append(button,box);
        div.append(wishList,quickView,img,brand,name,price);

        document.querySelector('#container').append(div);
        //console.log(div);
    })
}
// //**************SORTING FUNCTION ************************* */

// let sorting = document.querySelector('#Select');
// sorting.addEventListener('change', sortByprice);
// //console.log(sorting);

// //*****************  CREATING DUPLICATE ARRAY TO MAINTAIN SEQUENCE OF ORIGINAL ARRAY  ************** */
// let arrSort = [];
// for(let i=0; i<SkinCare.length; i++){
//     arrSort[i]= SkinCare[i];
// }
// function sortByprice(){
//     document.querySelector('#container').innerHTML = null;
//     let selected = document.querySelector('#Select').value;
   
//      if(selected == 'low-to-high'){
//          arrSort.sort(function(a,b){
//              return a.price - b.price;
//          });
//          displaySkinCare(arrSort);
//      }
//      else if(selected == 'high-to-low'){
//          arrSort.sort(function(a,b){
//              return b.price - a.price;
//          });
//          displaySkinCare(arrSort);
//      }
//      else {
//          displaySkinCare(SkinCare);
//      }  
         
//  }

//  /*************************addtoWishList******************* */

//  let wishListArray = JSON.parse(localStorage.getItem("wish-list")) || [];
//  function addToWishList(ele){
 
//      if(wishListArray.includes(ele)){
//          alert('not added');        
//      }
//      else{
//          alert('added');
//          wishListArray.push(ele);
//          localStorage.setItem("wish-list",JSON.stringify(wishListArray));
//      }
//      //console.log(wishListArray);
//  }
 
//  // ******************** function displayAddToCartPage module ************\\

// function displayAddToCartPage(ele){


//  document.getElementById('quick-view').style.display = 'none';
// let div =  document.createElement('div');
//  div.setAttribute('id', 'product-desc')

//  let div1 = document.createElement('div'); 
//  let img = document.createElement('img');
//  img.setAttribute('src',ele.Image_URL);

//  let div2 = document.createElement('div');
//  div2.setAttribute('id','checkoutBox');
//  let icon = document.createElement('p');
//  icon.innerHTML = `<span id="span"  onclick="document.querySelector('#add-to-cart-modal').style.display='none';"> <i class="fa fa-close" style="font-size:24px"></i></span>`;
//  icon.style.cursor='pointer';


         
//  let brand = document.createElement('h4');
//  brand.innerText = ele.brand;

//  let name = document.createElement('p');
//  name.innerText= ele.name;

//  let box = document.createElement('div');
//  box.style.display="flex";
 
//  let edition = document.createElement('h5');
//   edition.innerText = ele.edition;
//   edition.style.marginRight="30px";

//  let category = document.createElement('h5');
//  category.innerText = ele.category;

 
//  let priceBox = document.createElement('div');
//  let price = document.createElement('p');
//  price.innerText= '$ '+ele.price;

//  let cartlistBox = document.createElement('div');
//  cartlistBox.setAttribute('id','cartListBox');

//  let quantityBox = document.createElement('div');
//  quantityBox.setAttribute('id','quantityBox');

//  let qty = document.createElement('button');
//  qty.innerText = ele.qty;
//  qty.setAttribute('id','qty');

//  let dec = document.createElement('button');
//  dec.innerText = ' - ';
//  dec.style.cursor='pointer';


//  // ****************** Decrement Quantity of products********************\\

//  dec.addEventListener('click', function(){
//      let qty = document.getElementById('qty').innerText;
//     if(Number(qty)>1){
//      qty = Number(qty)-1;
//     }
//     ele.qty=qty;
//       console.log(ele);
//      document.getElementById('qty').innerText = qty;
//  })

//  let inc = document.createElement('button');
//  inc.innerText = ' + ';
//  inc.style.cursor='pointer';

//   // ****************** Increament Quantity of products********************\\

//  inc.addEventListener('click', function(){
//      let qty = document.getElementById('qty').innerText;
//      qty = Number(qty)+1;
//     ele.qty=qty;
//      // console.log(typeof(qty));
//      document.getElementById('qty').innerText = qty;
//  })


 

//  let wishlistBox = document.createElement('div');
//  wishlistBox.setAttribute('id','wishlistBox');

//  let button = document.createElement('div');
//  button.innerHTML=`<i class="fa-solid fa-2x fa-heart"></i>`;
//  button.style.cursor='pointer';
//  button.addEventListener('click',function(){
//              addToWishList(ele);                            // &**************add to WishList ***************\\
//  });

//  let p = document.createElement('p');
//  p.innerText = 'WISHLIST';


//  let viewDetail = document.createElement('button');
//  viewDetail.innerText = 'VIEW FULL DETAIL';
 

//  let description = document.createElement('p');
//  description.innerText= ele.description;

//  let AddToCartBtn = document.createElement('button');
//  AddToCartBtn.setAttribute('id','addToCartBtn');
//  AddToCartBtn.innerHTML = `<i class="fa-sharp fa-solid fa-cart-plus"></i> <span> ADD TO CART</span>`

//  div1.append(img);
//  box.append(edition,category);
//  //priceBox.append(price,span);
//  cartlistBox.append(quantityBox,wishlistBox)
//  div2.append(icon,brand,price,name,box,description,cartlistBox,AddToCartBtn);

//  quantityBox.append(dec,qty,inc);
//  wishlistBox.append(button,p);


//  div.append(div1,div2);
//  document.querySelector('#add-to-cart-modal').append(div);
//  document.getElementById('add-to-cart-modal').style.display='block';
// }





// //********************FUNCTION DISPLAY DETAILS OD PRODUCTS ******************** */

// function displayDetailsOfProducts(ele){
//  // document.getElementById('outer').innerHTML = "";

//  let parent =  document.createElement('div');
//  parent.style.display="flex";
 
// let Viewimg = document.createElement('div');
// Viewimg.setAttribute('id','ViewImage');
//  let div =  document.createElement('div');
 
//    div.setAttribute('id', 'setImage')
   
//    let div3 = document.createElement('div');
//    div3.setAttribute('id','imgWidth');

//    let section = document.createElement('div');
//     let section1 = document.createElement('div');
 
//   let div1 = document.createElement('div');
  
  

//   let img = document.createElement('img');
//   img.setAttribute('src',ele.Image_URL);
//   img.addEventListener('click',function(){
//      // document.getElementById('ViewImage').innerHTML="";
//      // document.getElementById('ViewImage').append(img);  
//   });



//   let img1 = document.createElement('img');
//   img1.setAttribute('src',ele.Image_URL1);
//   img1.addEventListener('click',function(){
//  //     document.getElementById('setImage').innerHTML="";
//  // document.getElementById('ViewImage').append(img);  
//   });

//   //document.querySelector('#ViewImage').append(img);   
//   let brand = document.createElement('h4');
//   brand.innerText = ele.brand;

//   let name = document.createElement('p');
//   name.innerText= ele.name;

//   let box = document.createElement('div');
//   box.setAttribute('id','box');
//   box.style.display="flex";
  
//   let edition = document.createElement('h5');
//    edition.innerText = ele.edition;
//    edition.style.marginRight="30px";

//   let category = document.createElement('h5');
//   category.innerText = ele.category;

  
//   let priceBox = document.createElement('div');
//   let price = document.createElement('p');
//   price.innerText= '$ '+ele.price;

//   let span = document.createElement('span');

//   let anchor = document.createElement('a');
//   anchor.innerText = 'Learn More';
//   anchor.setAttribute('href',ele.link);

//   let more = document.createElement('span');
//   more.innerText=`4 interest-free payments of $81.25 with Klarna.`;

//   let giftVoucher = document.createElement('div');
//   giftVoucher.setAttribute('id','giftVoucher');
  
//  let giftVoucherImage = document.createElement('img');
//  giftVoucherImage.setAttribute('src','https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850026597295-1.jpg?v=1671736674');


//  let giftCard = document.createElement('div');
//  let p = document.createElement('p');
//  p.innerText ='Free Gift with purchase' ;

//   let gift = document.createElement('p');
//    gift.innerText = ele.gift;
//    gift.style.marginRight="30px";

//   let offer = document.createElement('h5');
//   offer.innerText = ele.offer;




//   let description = document.createElement('p');
//   description.innerText= ele.description;

//   let AddToCartBtn = document.createElement('button');
//   AddToCartBtn.setAttribute('id','addToBagBtn');

//   let bagIcon = document.createElement('p');
//   bagIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

//   let AddToCart = document.createElement('p');
//   AddToCart.innerText = 'ADD TO BAG';

//   let ItemPrice = document.createElement('p');
//   ItemPrice.innerText=ele.price;


//   let CartBox = document.createElement('div');
//   CartBox.setAttribute('id','CartBox');

//  let cartlistBox = document.createElement('div');
//   cartlistBox.setAttribute('id','cartListBox');

//   let quantityBox = document.createElement('div');
//   quantityBox.setAttribute('id','quantityBox');

//   let qty = document.createElement('button');
//   qty.innerText = ele.qty;
//   qty.setAttribute('id','qty');

//   let dec = document.createElement('button');
//   dec.innerText = ' - ';
//   dec.style.cursor='pointer';
//   dec.addEventListener('click', function(){
//       let qty = document.getElementById('qty').innerText;
//      if(Number(qty)>1){
//       qty = Number(qty)-1;
//      }
//      ele.qty=qty;
//        console.log(ele);
//       document.getElementById('qty').innerText = qty;
//   })

//   let inc = document.createElement('button');
//   inc.innerText = ' + ';
//   inc.style.cursor='pointer';
//   inc.addEventListener('click', function(){
//       let qty = document.getElementById('qty').innerText;
//       qty = Number(qty)+1;
//      ele.qty=qty;
//       // console.log(typeof(qty));
//       document.getElementById('qty').innerText = qty;
//   })

//    let wishlistBox = document.createElement('div');
//   wishlistBox.setAttribute('id','wishlistBox');

//   let button = document.createElement('div');
//   button.innerHTML=`<i class="fa-solid fa-2x fa-heart"></i>`;
//   button.style.cursor='pointer';
//   button.addEventListener('click',function(){
//               addToWishList(ele);
//   });

 
 
//   div3.append(img);
//   div.append(img,img1,div3);
//   box.append(edition,category);
//   priceBox.append(price,span);
//   giftCard.append(p,gift,offer);
//   giftVoucher.append(giftVoucherImage,giftCard);
//   AddToCartBtn.append(bagIcon,AddToCart,ItemPrice);  
//   quantityBox.append(dec,qty,inc);
//   wishlistBox.append(button);
//   cartlistBox.append(quantityBox,wishlistBox) 
//   CartBox.append(AddToCartBtn,cartlistBox) 
//   div1.append(brand,name,price,box,priceBox,description,giftVoucher,CartBox);


//   let infoDiv = document.createElement('div');
//   infoDiv.setAttribute('id','productInfo');
//   let info = document.createElement('h3');
//   info.innerText = 'Product Information';
//  let para = document.createElement('p');
//  para.innerText ='Uniquely designed to firm, hydrate, and smooth, this cult-classic duo is the perfect way to treat yourself or introduce a loved one to these amazing products. These two creams are all you need to keep your skin smooth and radiant. '
  
//  infoDiv.append(info,para);
//  //div.append(div1,div2);
//  parent.append(div,div1);
//   document.querySelector('#products-details').append(parent);
//  document.querySelector('#products-details').append(infoDiv);
//   //document.getElementById('add-to-cart-modal').style.display='block';
//   console.log(document.querySelector('#products-details'));
// }



// // "concern":"Anti-Aging"  
// // "concern":"Brighting"
// // "concern":"Anti Pollution"
// async function getTechProducts(){
//     let response = await fetch('../jsondata/Skincare _ bluemercury.json')
//     //let response = await fetch("../jsondata/pro");
//     SkinCare = await response.json();

//     let filteredBrand = SkinCare.filter(function(ele){
//         // console.log(ele.brand, selected)
//         return ele.brand == selected;
//     })
// }        
// getTechProducts(); 