// global
var waltzGlobalObj = {};

(function(){

  var gb = waltzGlobalObj;

  $(function(){
    init();
  })

  function init() {
    windowManager.init();
    checkBrowser.init();

    menu.init();
    changeView.init();
    $("body").fadeIn(800);

  }


  var scrollManager = {
    init: function() {
      // スクロール量の監視
      gb.scrollAmount = $(window).scrollTop();
      $(window).scroll(function(){
        gb.scrollAmount = $(this).scrollTop();
      })
    }
  }

  var windowManager = {
    init: function() {
      // ウィンドウサイズの監視
      gb.winWidth = $(window).width();
      gb.winHeight = $(window).height();
      $(window).resize(function(){
        gb.winWidth = $(this).width();
        gb.winHeight = $(this).height();
      })
    }
  }


  var menu = {
    $menuWrap: $(".header_menu"),

    init: function() {
      var me = this;
      $(".menu_btn").on("click", function() {
        if (me.$menuWrap.hasClass("menu-open")) {
          me.close();
        } else {
          me.$menuWrap.addClass("menu-open");
          $(".menu").fadeIn();
        }
      })
    },
    close: function() {
      var me = this;
      me.$menuWrap.removeClass("menu-open");
      $(".menu").fadeOut();
    }
  }

  var changeView = {
    init: function() {
      var me = this;
      $('a[href ^= "#"]').on("click", function(){
        var view = $(this).attr("href").replace("#", "");
        var currentView =$("body").attr("class");
        me.change(view);
      })
    },
    change: function(nextViewClass) {
      $("body").removeClass().addClass(nextViewClass);
      $("body").data("scroll", 0);

      setTimeout(function(){
        $("body").data("scrollready", "true");
      }, 1.0 * 1000)


      if (isSP()) {
        setTimeout(function(){
          menu.close();
        }, 0.5 * 1000)
      }
    },
    changeNext: function() {
      var current = $("body").attr("class");
      var next = $("#"+current).next().attr("id");
      if (next) {
        this.change(next);
      } else {
        $("body").data("scrollready", "true");
      }
    },
    changePrev: function() {
      var current = $("body").attr("class");
      var prev = $("#"+current).prev().attr("id");
      if (prev) {
        this.change(prev);
      } else {
        $("body").data("scrollready", "true");
      }
    }
  }


  var checkBrowser = {
    userAgent: window.navigator.userAgent.toLowerCase(),
    $body: $('body'),
    init: function() {
      this.checkEdge();
    },
    checkEdge: function() {
      if (this.userAgent.indexOf('edge') != -1) {
        this.$body.addClass('edge');
      }
      return;
    }
  }

  var isSP = function() {
    if (window.matchMedia('screen and (max-width:767px)').matches) {
      return true;
    }
    return false
  }




})()