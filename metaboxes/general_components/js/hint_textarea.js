(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_hint_textarea', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field\">\n        \n            <label v-html=\"field_label\"></label>\n            \n            <div class=\"hints\">\n                <span @click=\"enterHint(hint_key)\" v-for=\"(hint_text, hint_key) in fields.hints\">{{hint_text}}</span>\n            </div>\n            \n            <textarea v-bind:name=\"field_name\"\n                      v-bind:placeholder=\"field_label\"\n                      v-bind:id=\"field_id\"\n                      v-model=\"value\">\n            </textarea>\n        </div>\n    ",
  mounted: function mounted() {
    this.value = this.field_value;
  },
  methods: {
    enterHint: function enterHint(hint) {
      this.value += ' {{' + hint + '}}';
    }
  },
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjgzZmIxYi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJ2YWx1ZSIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwibWV0aG9kcyIsImVudGVySGludCIsImhpbnQiLCJ3YXRjaCIsIl92YWx1ZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsc0JBQWQsRUFBc0M7QUFDcENDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDZCO0FBRXBDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEtBQUssRUFBRTtBQURGLEtBQVA7QUFHRCxHQU5tQztBQU9wQ0MsRUFBQUEsUUFBUSxFQUFFLCtpQkFQMEI7QUFRcENDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtGLEtBQUwsR0FBYSxLQUFLRyxXQUFsQjtBQUNELEdBVm1DO0FBV3BDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyxFQUFFLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ2xDLFdBQUtOLEtBQUwsSUFBYyxRQUFRTSxJQUFSLEdBQWUsSUFBN0I7QUFDRDtBQUhNLEdBWDJCO0FBZ0JwQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xQLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVRLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFoQjZCLENBQXRDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19oaW50X3RleHRhcmVhJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIj5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhpbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVxcXCJlbnRlckhpbnQoaGludF9rZXkpXFxcIiB2LWZvcj1cXFwiKGhpbnRfdGV4dCwgaGludF9rZXkpIGluIGZpZWxkcy5oaW50c1xcXCI+e3toaW50X3RleHR9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8dGV4dGFyZWEgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDppZD1cXFwiZmllbGRfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIj5cXG4gICAgICAgICAgICA8L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZW50ZXJIaW50OiBmdW5jdGlvbiBlbnRlckhpbnQoaGludCkge1xuICAgICAgdGhpcy52YWx1ZSArPSAnIHt7JyArIGhpbnQgKyAnfX0nO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])