$(".a__menu").click(function (e) {
  e.preventDefault();
  if ($(".sidebar").hasClass('d-none')) {
    $(".sidebar").removeClass('d-none');
    $(".sidebar").addClass('d-block');
  } else {
    $(".sidebar").removeClass('d-block');
    $(".sidebar").addClass('d-none');
  };
})
