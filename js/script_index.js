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

    //add slide
    const slideList = ['slide/1.jpg','slide/2.jpg','slide/3.jpg','slide/4.jpg','slide/5.jpg'];
    const getSlide = () =>{
        var txt=``;
        var txt2=``;
        slideList.map(e => { 
                txt+=`<div class="slide">
                         <img src="${e}" alt="">
                    </div>`;
                txt2 += `<li></li>`;
                
            });
        $('.container-slide').append(txt);
        $('.container-slide').find('.pagination ul').html(txt2);   
    }
    getSlide();
    const slide = $('.slide');
    var slideInd = 0;
    var numSilde = slide.length;

    slide.hide();
    slide.eq(slideInd).show();

    //pagination
    $('.pagination').find('ul li').eq(slideInd).addClass('active');
    
    //auto slide
    const nextSlide = () =>{
        slide.eq(slideInd).hide();
        $('.pagination').find('ul li').eq(slideInd).removeClass('active');
        slideInd ++;
        if(slideInd == numSilde){
            slideInd = 0;
        }
        slide.eq(slideInd).show();
        $('.pagination').find('ul li').eq(slideInd).addClass('active');
    }
    var autoSlide = setInterval( nextSlide , 3000);

    //add highlightsList
    const highlightsList = [
        {
            'img':'img/h1.jpg',
            'price'  :'13.59',
            'title'  :'Open-Back Top',    
        },
        {
            'img':'img/h2.jpg',
            'price'  :'5.99',
            'title'  :'Midi Dress',    
        },
        {
            'img':'img/h3.jpg',
            'price'  :'18.95',
            'title'  :'High-Waist Trousers',    
        },
        {
            'img':'img/h4.jpg',
            'price'  :'21.59',
            'title'  :'Mini Dress',    
        },
        {
            'img':'img/h5.jpg',
            'price'  :'25.59',
            'title'  :'Knit Cardigan',    
        },
        {
            'img':'img/h6.jpg',
            'price'  :'35.59',
            'title'  :'Abstract Jaquard Sweater',    
        },
        {
            'img':'img/h7.jpg',
            'price'  :'20.59',
            'title'  :'Bomber Jackets',    
        },
        {
            'img':'img/h8.jpg',
            'price'  :'24.59',
            'title'  :'Knitted Vest',    
        },
        
    ];
    var txt=``;
    const getHighlights = () =>{
        highlightsList.map(e => {
            txt +=`<div class="highlights col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
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
                    </div>   `;
        });
        $('#item-highlights').html(txt);
    }
    getHighlights();
    
});