require('jquery.scrollex');

var app = {

  $banner: null,
  $body: null,
  $header: null,

  init: function() {

    // Search Bar Animation on hold
  //     $('.searchform__box__input').click(function() {
  //     $('.searchform__box__input').addClass('active');
  //     $('.searchform__box').css({
  //         'transform': 'rotate(45deg)',
  //         'top': '-10px',
  //         'left': '0px'
  //     });
  //     $('.searchform__box-2').css({
  //         'height':'20px',
  //         'opacity':'1'
  //     });
  // });
  // $('.searchform__box, .searchform__box-2').click(function() {
  //     $('.searchform__box__input').removeClass('active').val('');
  //     $('.searchform__box').css({
  //         'transform': 'rotate(-45deg)',
  //         'top': '-10px',
  //         'left': '15px'
  //     });
  //     $('.searchform__box-2').css({
  //         'height':'20px',
  //         'opacity':'0'
  //     });

  // });

    console.log('init');

    // Je cible un element que je dépose dans ma variable
    app.$body = $('body');
    app.$banner = $('.banner');
    app.$header = $('.header');

    // Méthode qui met en place scrollex sur ma banner
    app.enableScrollex();

    // Je cible tout les types a dont le href est #quelquechose
    // SAUF ceux dont le href est juste #
    $('a[href*="#"]:not([href="#"])').on('click', app.handleSmoothScroll);

  },
  
  enableScrollex: function() {

    app.$banner.scrollex({
      bottom: app.$header.height(),
      leave: app.setHeaderFixed,
      enter: app.setHeaderUnfixed
    });
  },


  handleSmoothScroll: function(event) {

    console.log('handleSmoothScroll');

    var elementClicked = event.target;

    // elementClicked.hash => La cible du lien cliqué (ex: #posts)
    var $elementTarget = $(elementClicked.hash);

    // Je vérifie l'existence de l'element dans mon DOM
    if ($elementTarget.length) {

      var targetPosition = $elementTarget.offset().top;

      $('html, body').animate({
        scrollTop: targetPosition - app.$header.height()
      }, 1500);
    }
  }
};

$(app.init);