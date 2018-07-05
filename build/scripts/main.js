(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  IhKj: function (n, s, o) {
    "use strict";
    o.r(s);
    o("WMMs")
  },
  WMMs: function (n, s, o) {}
}, [["IhKj", 0]]]);

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
