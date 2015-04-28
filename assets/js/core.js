$(function () {
  var contactPage = $('.contact');
  var body = $('body');
  var openClass = 'contact-open';

  var hideContactPage = function () {
    body.removeClass(openClass);
    contactPage.hide();
  };

  $('.contact-link').click(function (e) {
    e.preventDefault();
    body.addClass(openClass);
    contactPage.show();
  });

  $('.contact-close').click(hideContactPage);

  $(document).keyup(function(e) {
    if (e.keyCode == 27 && body.hasClass(openClass))
      $('.contact-close').trigger('click');
  });
});
