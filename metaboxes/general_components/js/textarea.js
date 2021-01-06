(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_textarea', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field\">\n            <label v-html=\"field_label\"></label>\n            <textarea v-bind:name=\"field_name\"\n                      v-bind:placeholder=\"field_label\"\n                      v-bind:id=\"field_id\"\n                      v-model=\"value\">\n            </textarea>\n        </div>\n    ",
  mounted: function mounted() {
    this.value = this.field_value;
  },
  methods: {},
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzU3ZTU2YjIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIm1ldGhvZHMiLCJ3YXRjaCIsIl92YWx1ZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsaUJBQWQsRUFBaUM7QUFDL0JDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHdCO0FBRS9CQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEtBQUssRUFBRTtBQURGLEtBQVA7QUFHRCxHQU44QjtBQU8vQkMsRUFBQUEsUUFBUSxFQUFFLHVWQVBxQjtBQVEvQkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0YsS0FBTCxHQUFhLEtBQUtHLFdBQWxCO0FBQ0QsR0FWOEI7QUFXL0JDLEVBQUFBLE9BQU8sRUFBRSxFQVhzQjtBQVkvQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xMLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVNLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFad0IsQ0FBakMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3RleHRhcmVhJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDppZD1cXFwiZmllbGRfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIj5cXG4gICAgICAgICAgICA8L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])