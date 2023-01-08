let SkinCare = [];
    async function getTechProducts() {
      let response = await fetch("../jsondata/products.json");
      data = await response.json();
      SkinCare.push(data);
      console.log(SkinCare[0].length);
      displaySkinCare(SkinCare[0]);
    }
    //console.log(global[0].length);
      getTechProducts();

 
    //********************** DISPLAY PRODUCT FUNCTION*********************** */

    displaySkinCare(SkinCare);
    function displaySkinCare(data){
        data.map(function(ele){
            console.log(ele);

            let card = document.createElement('div');
            card.setAttribute('class', 'card');

            let img = document.createElement('img');
            img.setAttribute('src',ele.Image_URL);

            let brand = document.createElement('p');
            brand.innerText = ele.brand;

            let name = document.createElement('p');
            name.innerText= ele.name;


            // let category = document.createElement('h2');
            // category.innerText= ele.category;

            // let edition = document.createElement('h2');
            // edition.innerText= ele.edition;

            let price = document.createElement('p');
            price.innerText= '$ ' +ele.price;

            // let desc = document.createElement('h2');
            // desc.innerText= ele.desc;

            card.append(img,brand,name,price);

            document.querySelector('#container').append(card);
        })
    }


    
    //**************SORTING FUNCTION ************************* */

    let sorting = document.querySelector('#Select');
    sorting.addEventListener('change', sortByprice);
    console.log(sorting);

    //*****************  CREATING DUPLICATE ARRAY TO MAINTAIN SEQUENCE OF ORIGINAL ARRAY  ************** */
    let arrSort = [];
    for(let i=0; i<SkinCare.length; i++){
        arrSort[i]= SkinCare[i];
    }
    function sortByprice(){
       document.querySelector('#container').innerHTML = null;
       let selected = document.querySelector('#Select').value;
      
        if(selected == 'low-to-high'){
            arrSort.sort(function(a,b){
               // console.log(a.price,b.price);
                return a.price - b.price;
            });
            displaySkinCare(arrSort);
        }
        else if(selected == 'high-to-low'){
            arrSort.sort(function(a,b){
                return b.price - a.price;
            });
            displaySkinCare(arrSort);
        }
        else {
            displaySkinCare(SkinCare);
        }  
            
    }
