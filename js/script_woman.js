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
    const  womanList = [
        {
            'img':'img/w-1.jpg',
            'price'  :'23.95',
            'title'  :'All Over Printed Mini Dress',    
        },
        {
            'img':'img/w-2.jpg',
            'price'  :'20.59',
            'title'  :'Cropped Denim Jacket',    
        },
        {
            'img':'img/w-3.jpg',
            'price'  :'26.59',
            'title'  :'Midi Dress',    
        },
        {
            'img':'img/w-4.jpg',
            'price'  :'12.95',
            'title'  :'Cropped T-Shirt With Print',    
        },
        {
            'img':'img/w-5.jpg',
            'price'  :'8.95',
            'title'  :'Basic V-neck T-shirt',    
        },
        {
            'img':'img/w-6.jpg',
            'price'  :'16.59',
            'title'  :'Cargo Sweatshorts',    
        },
        {
            'img':'img/w-7.jpg',
            'price'  :'8.59',
            'title'  :'Cropped Rib T-Shirt',    
        },
        {
            'img':'img/w-8.jpg',
            'price'  :'9.95',
            'title'  :'Tank Top With Print',    
        },
        {
            'img':'img/w-9.jpg',
            'price'  :'17.21',
            'title'  :'Printed Mini Dress',    
        },
        {
            'img':'img/w-10.jpg',
            'price'  :'21.95',
            'title'  :'Cropped Shirt',    
        },
        {
            'img':'img/w-11.jpg',
            'price'  :'21.95',
            'title'  :'Knitted cardigan With Zipper',    
        },
        {
            'img':'img/w-12.jpg',
            'price'  :'21.59',
            'title'  :'Parachute Trousers With Adjustable Drawstring Waistband and Hems',    
        },
        {
            'img':'img/w-13.jpg',
            'price'  :'13.59',
            'title'  :'Open-Back Top',    
        },
        {
            'img':'img/w-14.jpg',
            'price'  :'27.59',
            'title'  :'Denim Jumpsuit',    
        },
        {
            'img':'img/w-15.jpg',
            'price'  :'16.59',
            'title'  :'Oversized T-Shirt With Print',    
        },
        {
            'img':'img/w-16.jpg',
            'price'  :'10.21',
            'title'  :'Strapped Crop Top',    
        },
        {
            'img':'img/w-17.jpg',
            'price'  :'5.99',
            'title'  :'Midi Dress',    
        },
        {
            'img':'img/w-18.jpg',
            'price'  :'6.29',
            'title'  :'Backless Mini Dress',    
        },
        {
            'img':'img/w-19.jpg',
            'price'  :'11.59',
            'title'  :'Printed Cropped T-shirt',    
        },
        {
            'img':'img/w-20.jpg',
            'price'  :'25.59',
            'title'  :'Cargo Jean With Print',    
        },
        {
            'img':'img/w-21.jpg',
            'price'  :'25.59',
            'title'  :'Cropped Shirt',    
        },
        {
            'img':'img/w-22.jpg',
            'price'  :'12.59',
            'title'  :'Cropped Rib Cardigan',    
        },
        {
            'img':'img/w-23.jpg',
            'price'  :'22.59',
            'title'  :'Straight Trousers',    
        },
        {
            'img':'img/w-24.jpg',
            'price'  :'10.91',
            'title'  :'Ribbed Top With Poplin Sleeves',    
        },
        {
            'img':'img/w-25.jpg',
            'price'  :'6.80',
            'title'  :'Ribbed Open-Shoulder Crop Top',    
        },
        {
            'img':'img/w-26.jpg',
            'price'  :'11.59',
            'title'  :'Crop Top',    
        },
        {
            'img':'img/w-27.jpg',
            'price'  :'15.11',
            'title'  :'Knit Mini Dress',    
        },
        {
            'img':'img/w-28.jpg',
            'price'  :'13.71',
            'title'  :'Loose Fit Satin Shirt',    
        },
        {
            'img':'img/w-29.jpg',
            'price'  :'17.95',
            'title'  :'T-shirt With Cut Out Sleeves And Print',    
        },
        {
            'img':'img/w-30.jpg',
            'price'  :'11.61',
            'title'  :'Knit Crop Top',    
        },
        {
            'img':'img/w-31.jpg',
            'price'  :'15.11',
            'title'  :'Cropped Jacket',    
        },

    ];
    var txt=`<h6>
        Woman Cellection (${womanList.length} items)
    </h6>`;
    $('#lengthItem').html(txt);

    const getWomanList = () =>{
        var txt = '';
        womanList.map(e => {
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
        $('#womanList').html(txt);
    } 
    getWomanList();

});