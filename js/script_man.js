$(document).ready(function(){
    const body = $('body');
    const popupMenu = `<div class="popupMenu"></div>`;

    //add popup-left-menu and left-menu
    $('#fa-bars').click(function(){
        body.append(popupMenu);
        $('.menu').css({"left"  : "0%"});
    });

    //remove popup-left-menu and left-menu
    $('body').on('click','.popupMenu',function(){
        $(this).remove();
        $(".menu").css({"left":"-100%"});
    });

    //add popup-notification
    $('.notification').click(function(){
        $('.notifition-popup').css({'display':'block'});
    });
    //exit popup-notification
    $('#exit').click(function(){
        $('.notifition-popup').css({'display':'none'});
    });

    //add man list
    const  manList = [
        {
            'img':'img/m-1.jpg',
            'price'  :'11.59',
            'title'  :'Tank Top With Print',    
        },
        {
            'img':'img/m-2.jpg',
            'price'  :'17.59',
            'title'  :'T-Shirt with Print',    
        },
        {
            'img':'img/m-3.jpg',
            'price'  :'22.59',
            'title'  :'Nylon Overshirt With Pockets',    
        },
        {
            'img':'img/m-4.jpg',
            'price'  :'27.59',
            'title'  :'High Neck Jackets',    
        },
        {
            'img':'img/m-5.jpg',
            'price'  :'14.59',
            'title'  :'T-shirt With Print',    
        },
        {
            'img':'img/m-6.jpg',
            'price'  :'13.59',
            'title'  :'Basic Unisex T-shirts',    
        },
        {
            'img':'img/m-7.jpg',
            'price'  :'15.59',
            'title'  :'Basic Unisex T-shirts',    
        },
        {
            'img':'img/m-8.jpg',
            'price'  :'21.95',
            'title'  :'Distressed Jeans',    
        },
        {
            'img':'img/m-9.jpg',
            'price'  :'19.59',
            'title'  :'All Over Printed Shirt',    
        },
        {
            'img':'img/m-10.jpg',
            'price'  :'26.59',
            'title'  :'Loose Fit Trouser',    
        },
        {
            'img':'img/m-11.jpg',
            'price'  :'28.95',
            'title'  :'Sweatshirt With Print',    
        },
        {
            'img':'img/m-12.jpg',
            'price'  :'23.59',
            'title'  :'Joggers With Embroidery',    
        },
        {
            'img':'img/m-13.jpg',
            'price'  :'65.59',
            'title'  :'Slim Fit Blazer',    
        },
        {
            'img':'img/m-14.jpg',
            'price'  :'22.95',
            'title'  :'Sweatshirt With Print',    
        },
        {
            'img':'img/m-15.jpg',
            'price'  :'32.95',
            'title'  :'Hooded Jacket With Print',    
        },
        {
            'img':'img/m-16.jpg',
            'price'  :'29.59',
            'title'  :'Hoodie With Printed',    
        },
        {
            'img':'img/m-17.jpg',
            'price'  :'34.59',
            'title'  :'Varsity Bomber Jacket',    
        },
        {
            'img':'img/m-18.jpg',
            'price'  :'24.59',
            'title'  :'Knit Cardigan',    
        },
        {
            'img':'img/m-19.jpg',
            'price'  :'7.59',
            'title'  :'Packable Bucket Hat With String',    
        },
        {
            'img':'img/m-20.jpg',
            'price'  :'26.95',
            'title'  :'Loose Fit Shirt With Pockets',    
        },
        {
            'img':'img/m-21.jpg',
            'price'  :'29.95',
            'title'  :'Wide Leg Cargo Trousers',    
        },
        {
            'img':'img/m-22.jpg',
            'price'  :'19.95',
            'title'  :'Nylon Vest With Cargo Pockets',    
        },
        {
            'img':'img/m-23.jpg',
            'price'  :'15.59',
            'title'  :'T-shirt With Print',    
        },
    ];
    var txt=`<h6>
        Man Cellection (${manList.length} items)
    </h6>`;
    $('#lengthItem').html(txt);

    const getManList = () =>{
        var txt = '';
        manList.map(e => {
            txt +=`<div class="item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                        <div class="img-box">
                            <img src="${e['img']}" alt="">
                        </div>
                        <div class="txt-box">
                            <div class="txt-price">
                                <h6>$${e['price']}</h6>
                            </div>
                            <div class="txt-title">
                                <p>${e['title']}</p>
                            </div>
                        </div>
                    </div>`;
        });
        $('#manList').html(txt);
    } 
    getManList();

});