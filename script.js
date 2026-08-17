
//ハンバーガーメニュー
$('.site-header-navbn').on('click', () => {
  $('body').toggleClass('is-nav-open');
});

// slick　スライドショー
$('.works-container').slick({
  autoplay: true,
  dots: true,
  slideToShow: 3,
  speed: 500,
  arrows: true
});

$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000');

/*======================
共通　Plug in
======================*/
/* ====inView==== */
// クラスセレクタとしてを取得
const $mottoList = $('.motto-list'); 

// スクロールに合わせて要素が画面にはいったかを判定
$(window).on('scroll', () => {
const isInView = $mottoList.inView('topOnly',150);
// 要素の上辺が150px入ったら
if(isInView && !$mottoList.hasClass('in-view')) {
  $mottoList.addClass('in-view');
 // viewportの判定→指定のｸﾗｽが無い→クラスの追加　が行われた
}
});

// === Topへ戻るボタン【修正】＝＝＝
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

