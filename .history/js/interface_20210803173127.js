$(function () {
    //#### Focus on #CreateBy input
    $('#CreateBy').focus();
    // Focus function
    $('#CreateBy').focus(function() {
        $(this).select();
    });

    //#### Toggle menu action on click the aside
    $(document).click(function(e) {
        if ($(e.target).closest('.menu, .menu--toggle').length) return;
        $('.menu').removeClass('menu--display-flex');
        $('.menu--toggle').removeClass('menu--toggle-active');

        e.stopPropagation();
    });

    //#### Toggle the #overlayModal and #modalReport
    $('#Report').click(function() {
        $('#overlayModal').show();
        $('#modalReport').show();
    });
    $('#overlayModal').click(function() {
        $(this).hide();
        $('.modalWindow').hide();
    });

     //#### Toggle the #overlayModal and #modalReport
     $('#Save').click(function() {
        $('#overlayModal').show();
        $('#createSave').show();
    });

    $('#Save').on('click', function () {
        
        if ($('#createSave').css('display') == "block") {
            $('#Save').addClass('item-feedback__save--active');
        };
        if ($('#createSave').css('display') == "none") {
            $('#Save').removeClass('item-feedback__save--active');
        };
        
    });

    //#### Toggle for header menu
    $('.menu--toggle').on('click', function() {
        $('.menu').toggleClass('menu--display-flex');
        $('.menu--toggle').toggleClass('menu--toggle-active');
    });
    //#### Toggle for search input line
    $('.option__toggle').on('click', function() {
        $('.option__toggle').toggleClass('hidden');

        if ($('.option__toggle[data-search="name"]').hasClass('hidden')) {
            $('#CreateBy').attr('placeholder', 'https://www.youtube.com/watch?v=kdmBTTAFlk0');
        }
        else if ($('.option__toggle[data-search="link"]').hasClass('hidden')) {
            $('#CreateBy').attr('placeholder', 'James Brown - The Boss');
        }
        $('#CreateBy').val('');
    });
    //#### Submit the form and Launch loading on checker
    $('#CreateForm ').submit(function(e) {
        e.preventDefault();

        var search_by = $('#CreateBy');
        if (search_by.val()) {
            if ((search_by.val().indexOf('http') == 0)) {
                if ((search_by.val().indexOf('https://www.youtube.com/') == -1) && (search_by.val().indexOf('https://youtu.be/') == -1) && (search_by.val().indexOf('https://m.youtube.com/') == -1) && (search_by.val().indexOf('https://music.youtube.com/') == -1) && (search_by.val().indexOf('https://youtube.com/') == -1)) {
                    if (GetLanguage('en')) {
                        search_by.val('').attr('placeholder', 'we only check from youtube');
                    }
                    else if (GetLanguage('ru')) {
                        search_by.val('').attr('placeholder', 'проверяем только с youtube');
                    }
                    else if (GetLanguage('uk')) {
                        search_by.val('').attr('placeholder', 'перевіряємо лише з youtube');
                    }

                    return false;
                }
            }

            $('.result-editor').removeClass('hidden');
            $('.search__animation').css('display', 'block');
            // $('#CreateForm ').unbind('submit').submit();

            if (GetLanguage('en')) {
                $('#CreateSubmit').val('CHECKING').css('cursor', 'not-allowed').attr('disabled', 'disabled');
            }
            else if (GetLanguage('ru')) {
                $('#CreateSubmit').val('ПРОВЕРЯЕМ').css('cursor', 'not-allowed').attr('disabled', 'disabled');
            }
            else if (GetLanguage('uk')) {
                $('#CreateSubmit').val('ПЕРЕВІРЯЄМО').css('cursor', 'not-allowed').attr('disabled', 'disabled');
            }

            $('.first').removeClass('active-block');
            $('.wait').addClass('active-block');

            // Scroll to the #SearchTitle after click to check
            var destination = $('#SearchTitle').offset().top - 30;
            $('html').animate({ scrollTop: destination }, 1000);

            if ($('.result-editor').length) {
                $('.result-editor').remove();                
            }
            else {
                $('.result-editor').append('<div class="result-editor"><div class="search__animation"><img src="images/icons/Cube-1s-200px.gif" alt="loading animation"><h2 class="search__title" id="SearchTitle"><span class="search__title--shadow"><span class="first active-block">Создается превью...</span></span></h2></div></div>');                
            }
            $('.result--hidden').hide();

        }
        else {
            if (GetLanguage('en')) {
                search_by.attr('placeholder', 'enter the title of the song');
            }
            else if (GetLanguage('ru')) {
                search_by.attr('placeholder', 'укажите название ролика');
            }
            else if (GetLanguage('uk')) {
                search_by.attr('placeholder', 'вкажіть назву пісні');
            }
        }
    });
    

    // #### Control editor
    //toggle option = effect/font/background
        $('.things-toggle__item button').on('click', function() {
            $('.things-toggle__item .item-things__btn--active').removeClass('item-things__btn--active');
            $(this).addClass('item-things__btn--active');
           let tab = $(this).attr('href');
            $('.slider-things--hidden').not(tab).hide();
            $(tab).css('display', 'flex');
        });

        if($('.item-things__font').hasClass('item-things__btn--active')) {
            $('#font-slider').css('display', 'flex')
        } else {
            $('#font-slider').css('display', 'none')
        };

        //  toggle button = style
        $('.style-toggle__item button').on('click', function() {
            $('.style-toggle__item .item-style__btn--active').removeClass('item-style__btn--active');
            $(this).addClass('item-style__btn--active');
            let tabMain = $(this).attr('href');
            $('.style-slider__item--hidden').not(tabMain).hide();
            $(tabMain).css('display', 'flex');
        });

        if($('.item-style__color').hasClass('item-style__btn--active')) {
            $('#color-slider').css('display', 'flex')
        } else {
            $('#color-slider').css('display', 'none')
        };

        //  toggle button = things/style
        $('.toggle-slider_item button').on('click', function() {
            $('.toggle-slider_item .item-toggle__btn--active').removeClass('item-toggle__btn--active');
            $(this).addClass('item-toggle__btn--active');
            let tabMain = $(this).attr('href');
            $('.sliders--hidden').not(tabMain).css('max-height', '0');
            $(tabMain).css('max-height', '100%');
        });

        if($('.control__button_things').hasClass('item-toggle__btn--active')) {
            $('.control-editor__things').css('max-height', '100%')
        };
        
        if($('.control__button_style').hasClass('item-toggle__btn--active')) {
            $('.slider-editor__style').css('max-height', '100%')
        };
    // #### Control editor
        // edit preview

        // style
        

     // #### Slider editor

        

        $('.control__button_style').on('click', function() {

        });
  
    // УКРОК Js
    
    // конец строки
    //#### Change language
    $('.scroll-to-language').on('click', function() {
        var destination = $('.language').offset().top;
        $('html').animate({ scrollTop: destination }, 1000);
    });
    //Modal window
    $('.cancel-form').on('click', function() {
        $('.modal-language').hide();
    });

    //#### Notification hide / show
    $('.notification__hide').on('click', function() {
        $('.notification').addClass('notification-hide');
    });
    $(document).on('click', '.notification-hide .notification__icon', function() {
        $('.notification-hide').removeClass('notification-hide');
    });

    //#### Get the language settings
    function GetLanguage(lang) {
        return lang == $('.lang--current a').attr('data-lang');
    }

    //#### Setup the language cookies
    var preflang = 'en';
    $('.language a, .form-question > *').on('click', function() {
        preflang = $(this).attr('data-lang');
        document.cookie = 'preflang='+preflang+'; path=/; max-age='+(60*60*24*365*5)
    });

    //#### Choose the price plan
    $('.price--choose').on('click', function() {
        $('input[type=hidden]').val($(this).attr('data-price'));
        $('.notification').removeClass('notification-hide');
    });
    //#### Calc the revenue of YouTube ads
    $('#CalcRevenue').on('click', function(e) {
        e.preventDefault();

        var views = $('.calc__input_views');
        var revenue = (views.val() / 1000) * views.attr('data-scale');
        $('.calc__result').css('display', 'block');
        $('.calc__title--revenue').text(revenue/2 +'-'+ revenue +'$');
    });

    //#### Get Adaptive items for the .music__list block
    var setOrder = 1;
    $('.music__list_item').each(function() {
        $(this).css('order', setOrder);

        setOrder++;
    });

    AdaptiveCards();
    $( window ).resize(function() {
        AdaptiveCards();
    });

    var rowWidth;
    var rowItems;
    
    function AdaptiveCards() {
        rowWidth = $(".music__list").width();
        rowItems = Math.floor(rowWidth / 270);
    }

    $('.music__list_item').on('click', function() {
        // refresh all iframe blocks
        $('.youtube__code').remove();
        // check for the similar
        if ($(this).hasClass('active-item')) {
            $('.active-item').removeClass('active-item');
            return false;
        }
        
        // set up the styles
        $('.active-item').removeClass('active-item');
        $(this).addClass('active-item');
        // set up the parameters
        var youtubeID = $(this).attr('data-youtube-id');
        var orderItem = $(this).css('order');
        var youtubeOrder = Math.ceil(orderItem / rowItems) * rowItems;

        // add the iframe block
        $('.music__list').append('<div class="youtube__code" style="order:'+youtubeOrder+'"><iframe width="100%" height="300" src="https://www.youtube.com/embed/'+youtubeID+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
    });

    //#### Swiper effects
    // initialization
    let swiper = new Swiper('.things-slider__effect', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
    });

    //#### Swiper font
        // initialization
        new Swiper ('.things-slider__font', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            grabCursor: true,
        });

        // //#### Swiper background
        // // initialization
        // new Swiper ('.things-slider__background', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 10,
        //     grabCursor: true,
        // });

        //#### Swiper preview color
        // initialization
        new Swiper ('.style-slider__color', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            grabCursor: true,
        });

        //#### Swiper2
        // initialization
        new Swiper ('.response-slider__blog', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            grabCursor: true,
        });
});