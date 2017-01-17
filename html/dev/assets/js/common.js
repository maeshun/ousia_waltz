// global
var waltzGlobalObj = {};

(function(){

  var gb = waltzGlobalObj;

  $(function(){
    init();
  })

  function init() {
    // variableDefine.init();
    // scrollManager.init();
    windowManager.init();
    checkBrowser.init();
    // mouseWheelManager.init();
    // touchEventInit();

    menu.init();
    changeView.init();
    // anchor.init();
    $("body").fadeIn(800);

    // $('.wrapper').animate({opacity : 1}, 2000, function(){console.log("hogehoge");});

  }

  // var variableDefine = {
  //   init: function() {
  //     var contentsJsonPath = "/contents/json/";
  //     var contentsImagePath = "/contents/image/"
  //     var dataInfoFileName = "info.json";
  //     var dataListFileName = "list.json";

  //     gb.infoJsonPath = contentsJsonPath + dataInfoFileName;
  //     gb.listJsonPath = contentsJsonPath + dataListFileName;
  //     gb.contentsImagePath = contentsImagePath;

  //   }
  // }

  // var scrollManager = {
  //   init: function() {
  //     // スクロール量の監視
  //     gb.scrollAmount = $(window).scrollTop();
  //     $(window).scroll(function(){
  //       gb.scrollAmount = $(this).scrollTop();
  //     })
  //   }
  // }

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

  var mouseWheelManager = {
    init: function() {
      var save  = 0; // タイムスタンプ保存用
      var clock = 0; // タイムスタンプ比較用
      $(document).on("mousewheel", function(e) {

        if ($("body").data("scrollready") == "false") return;

        clock = e.timeStamp - save;
        save  = e.timeStamp;
        if(clock < 60) return false; // 比較結果が50msより少ない場合はキャンセル

        var scrollAmount = event.deltaY;

// console.log(event.deltaX, event.deltaY, event.deltaFactor);
        $("body").data("scrollready", "false");

        if (scrollAmount < 0) {
          console.log("うえ");
          changeView.changePrev();
        } else if (scrollAmount > 0) {
          console.log("した")
          changeView.changeNext();
        }

      });


      // var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
      // $(document).on(mousewheelevent,function(e){

      //   if ($("body").data("scrollReady") === "false") return;

      //   // var num = parseInt($('.wheel').text());
      //   var num = parseInt($('body').data("scroll"));

      //   e.preventDefault();
      //   var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
      //   if (delta < 0){
      //     // マウスホイールを下にスクロールしたときの処理
      //     var dNum = num - 1;
      //     if ($("body").hasClass("map")) {
      //       dNum = 0;
      //     }

      //     // $('.wheel').html(dNum)
      //     $('body').data("scroll", dNum);

      //     console.log("した"+dNum);
      //     if (dNum < -2) {
      //       $("body").data("scrollready", "false")
      //       changeView.changeNext();
      //     }
      //   } else {
      //     // マウスホイールを上にスクロールしたときの処理を記載
      //     var uNum = num + 1;
      //     if ($("body").hasClass("top")) {
      //       uNum = 0;
      //     }
      //     $('body').data("scroll", uNum);

      //     if (uNum > 2) {
      //       $("body").data("scrollready", "false")
      //       changeView.changePrev();
      //     }
      //   }
      // });
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
        console.log($(this).attr("href"));
        var view = $(this).attr("href").replace("#", "");
        var currentView =$("body").attr("class");
        // me.change(currentView, view);
        me.change(view);
      })
    },
    change: function(nextViewClass) {
      // $("body").removeClass(currentViewClass).addClass(nextViewClass);
      $("body").removeClass().addClass(nextViewClass);
      $("body").data("scroll", 0);

      setTimeout(function(){
        $("body").data("scrollready", "true");
      }, 1.0 * 1000)


      // SPのときのみ実行する
      // console.log()
      if (isSP()) {
        setTimeout(function(){
          menu.close();
        }, 0.5 * 1000)
      }
    },
    changeNext: function() {
      // ひとつうしろのviewに移動
      var current = $("body").attr("class");
      // console.log(current);
      // console.log($("#"+current).next());
      var next = $("#"+current).next().attr("id");
      // console.log(next);
      if (next) {
        this.change(next);
      } else {
        $("body").data("scrollready", "true");
      }
    },
    changePrev: function() {
      // ひとつまえのviewに移動
      var current = $("body").attr("class");
      var prev = $("#"+current).prev().attr("id");
      if (prev) {
        this.change(prev);
      } else {
        $("body").data("scrollready", "true");
      }
    }
  }

  // var anchor = {
  //   init: function() {
  //     var me = this;
  //     $('a[href ^= "#"]').on("click", function(){
  //       var $target = $($(this).attr("href"));
  //       me.scroll($target);
  //     });
  //   },
  //   scroll: function($target) {
  //     $('html, body').animate(
  //       {scrollTop: $target.offset().top},
  //       1000,
  //       'easeOutCubic',
  //       function() {
  //         menu.close();
  //       }
  //     );
  //     return;
  //   }
  // }

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

  function touchEventInit() {
    var isTouch = ('ontouchstart' in window);
    var touchBaginPosition = 0;
    $(document).on({
      'touchstart': function(e){
        console.log("touchstart");
        this.chaged = false;
        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
        console.log(this.pageY);

        this.touchBaginPosition = this.pageY;
        this.touched = true;
      },
      'touchmove': function(e){
        console.log(this.touchBaginPosition);
        if (this.chaged) return;
        if(!this.touched){return;}
        console.log("touchmove");
        e.preventDefault();
        this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY));
        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);

        if (this.touchBaginPosition - this.pageY < -50) {
          console.log("あっぷ");
          this.chaged = true;
          changeView.changePrev();
        } else if (this.touchBaginPosition - this.pageY > 50) {
          console.log("だうん");
          this.chaged = true;
          changeView.changeNext();
        }
      },
      'touchend': function(e){
        console.log("touchend");
        if (!this.touched) {return;}
        this.touched = false;
      }
    });
  }



})()