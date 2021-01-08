(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_fields_aside', {
  props: ['fields', 'field_label'],
  data: function data() {
    return {
      fields: {}
    };
  },
  template: "\n        <div class=\"wpcfto-field-aside\">\n            <label v-html=\"field_label\" class=\"wpcfto-field-aside__label\"></label>\n            \n            <div\n            v-if=\"fields.preview\"\n            class=\"wpcfto_preview\"><span class=\"wpcfto_preview__text\">Preview</span><span\n            class=\"wpcfto_preview__popup\"><img\n            :src=\"fields.preview\" /></span></div>\n            \n            <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"wpcfto-field-description wpcfto-field-description__before description\"></span>\n            \n            <div v-if=\"fields.hint\" class=\"wpcfto_field_hint text\">\n                <i class=\"fa fa-info-circle\"></i><div v-html=\"fields.hint\" class=\"hint\"></div>\n            </div>                \n        </div>\n    ",
  methods: {},
  watch: {
    value: function value(_value) {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDdjYmEwNDkuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiZmllbGRzIiwidGVtcGxhdGUiLCJtZXRob2RzIiwid2F0Y2giLCJ2YWx1ZSIsIl92YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxDQUQ0QjtBQUVuQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxNQUFNLEVBQUU7QUFESCxLQUFQO0FBR0QsR0FOa0M7QUFPbkNDLEVBQUFBLFFBQVEsRUFBRSwyekJBUHlCO0FBUW5DQyxFQUFBQSxPQUFPLEVBQUUsRUFSMEI7QUFTbkNDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlQyxNQUFmLEVBQXVCLENBQUU7QUFEM0I7QUFUNEIsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ZpZWxkc19hc2lkZScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkczoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1hc2lkZVxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiIGNsYXNzPVxcXCJ3cGNmdG8tZmllbGQtYXNpZGVfX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICB2LWlmPVxcXCJmaWVsZHMucHJldmlld1xcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwid3BjZnRvX3ByZXZpZXdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ3cGNmdG9fcHJldmlld19fdGV4dFxcXCI+UHJldmlldzwvc3Bhbj48c3BhblxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ3cGNmdG9fcHJldmlld19fcG9wdXBcXFwiPjxpbWdcXG4gICAgICAgICAgICA6c3JjPVxcXCJmaWVsZHMucHJldmlld1xcXCIgLz48L3NwYW4+PC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiB2LWh0bWw9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1kZXNjcmlwdGlvbiB3cGNmdG8tZmllbGQtZGVzY3JpcHRpb25fX2JlZm9yZSBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZmllbGRzLmhpbnRcXFwiIGNsYXNzPVxcXCJ3cGNmdG9fZmllbGRfaGludCB0ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWluZm8tY2lyY2xlXFxcIj48L2k+PGRpdiB2LWh0bWw9XFxcImZpZWxkcy5oaW50XFxcIiBjbGFzcz1cXFwiaGludFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7fVxuICB9XG59KTsiXX0=
},{}]},{},[1])