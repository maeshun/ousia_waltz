(function(){

  var gb = waltzGlobalObj;

  $(function() {

    init();

    function init() {

      mainVisual.init();
      gMap.init();
    }


  });

  var mainVisual = {
    $carousel: $(".carousel_wrapper"),
    init: function() {
      var me = this;
      me.setHeight();
      me.settingCarousel();

      $(window).resize(function(){
        me.setHeight();
      });

      // me.nextSlide();
      // me.prevSlide();
      me.playCarousel();
      me.stopCarousel();

      me.beforeChange();
    },
    setHeight: function() {
      if (!isPC()) {
        $(".main_carousel, carousel_image").height(200);
        return;
      }
      $(".main_carousel, carousel_image").height(gb.winHeight);
      // if (!$("body").hasClass("edge")) {
      //   $("#concept").css("margin-top", gb.winHeight);
      // }
    },
    settingCarousel: function() {
      var me = this;
      console.log("settingCarousel");
      me.$carousel.slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        useTransform: true
      // }).slick('slickPause');
      }).slick('slickPlay');
    },
    nextSlide: function() {
      var me = this;
      $(".cassette_btn-next").on("click", function(){
        me.$carousel.slick('slickNext');
      })
    },
    prevSlide: function() {
      var me = this;
      $(".cassette_btn-back").on("click", function(){
        me.$carousel.slick('slickPrev');
      })
    },
    playCarousel: function() {
      var me = this;
      $(".cassette_btn-next").on("click", function(){
        me.$carousel.slick('slickPlay');
        $(".cassette_btnText").removeClass("state-stop");
      })
    },
    stopCarousel: function() {
      var me = this;
        console.log("stop");
      $(".cassette_btn-back").on("click", function(){
        console.log("stop");
        me.$carousel.slick('slickPause');
        $(".cassette_btnText").addClass("state-stop");
      })

    },
    beforeChange: function() {
      var me = this;
      // var me = this;
      // me.$carousel.slick('slickPlay')

      me.$carousel.on("beforeChange", function(event, slick, currentSlide, nextSlide){
        $(".carousel_image").eq(nextSlide).css('left', '-25px');
        // console.log(currentSlide);
        // console.log($(".carousel_image").eq(currentSlide));
        $(".carousel_image").eq(nextSlide).animate({
          'left':'0'
        }, 500);
      });
      // me.$carousel.on("afterChange", function(event, slick, currentSlide, nextSlide){

      // }


    }
  }

  var gMap = {
    latitude:  35.637937,   // 緯度
    longitude: 139.702313,  // 経度
    init: function() {
      var latLng = new google.maps.LatLng(this.latitude, this.longitude);
      map = new google.maps.Map(
        document.getElementById("gMap"),
        {
          zoom: 15,
          center: latLng,
          scrollwheel: false
        }
      );

      this.setMarker(latLng, map);

      var mapStyle = this.setMapStyle();

      var mapType = new google.maps.StyledMapType(mapStyle);
      map.mapTypes.set('myMapType', mapType);
      map.setMapTypeId('myMapType');
    },
    setMarker: function(latLng, map) {
      var markerImg = {
        url: '/assets/img/top/pin.png'
      };
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: markerImg
      });
    },
    setMapStyle: function() {
      return [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    }
  }

  function isPC() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      return true
    }
  }


})()

