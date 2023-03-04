$(function () {
  $('#form').submit(function (event) {
    $('.submit-overlay').addClass('overlay-open');
    $('body').addClass('no-scroll');
    $.ajax({
      url: $('#form').attr('action'),
      data: $('#form').serialize(),
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          setTimeout(function () {
            $('.submit-bf').css({ display: 'none' });
            $('.submit-af-thanks')
              .css({ display: 'inline-block' })
              .addClass('submit-animation');
            $('.btn--form')
              .removeClass('btn--form')
              .addClass('btn--submit')
              .prop('disabled', true);
            $('body').removeClass('no-scroll');
            $('.submit-overlay').removeClass('overlay-open');
          }, 500);
        },
        200: function () {
          setTimeout(function () {
            $('.submit-bf').css({ display: 'none' });
            $('.submit-af-error')
              .css({ display: 'block' })
              .addClass('submit-animation');
            $('.btn--form')
              .removeClass('btn--form')
              .addClass('btn--submit')
              .prop('disabled', true);
          }, 500);
        },
      },
    });
    event.preventDefault();
  });
});
