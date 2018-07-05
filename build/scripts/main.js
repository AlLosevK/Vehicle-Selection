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
  if ($(this).hasClass('a__menu-open')) {
    $(".sidebar").fadeOut(400);
    $(this).removeClass('a__menu-open');
  } else {
    $(this).addClass('a__menu-open');
    $(".sidebar").fadeIn(400);
  };
})
