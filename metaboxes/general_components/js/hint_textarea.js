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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzNhZWFmMmYuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIm1ldGhvZHMiLCJlbnRlckhpbnQiLCJoaW50Iiwid2F0Y2giLCJfdmFsdWUiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHNCQUFkLEVBQXNDO0FBQ3BDQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ2QjtBQUVwQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFERixLQUFQO0FBR0QsR0FObUM7QUFPcENDLEVBQUFBLFFBQVEsRUFBRSwraUJBUDBCO0FBUXBDQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRixLQUFMLEdBQWEsS0FBS0csV0FBbEI7QUFDRCxHQVZtQztBQVdwQ0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFNBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUNsQyxXQUFLTixLQUFMLElBQWMsUUFBUU0sSUFBUixHQUFlLElBQTdCO0FBQ0Q7QUFITSxHQVgyQjtBQWdCcENDLEVBQUFBLEtBQUssRUFBRTtBQUNMUCxJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlUSxNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBaEI2QixDQUF0QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9faGludF90ZXh0YXJlYScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZFxcXCI+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaW50c1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwiZW50ZXJIaW50KGhpbnRfa2V5KVxcXCIgdi1mb3I9XFxcIihoaW50X3RleHQsIGhpbnRfa2V5KSBpbiBmaWVsZHMuaGludHNcXFwiPnt7aGludF90ZXh0fX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPHRleHRhcmVhIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCI+XFxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGVudGVySGludDogZnVuY3Rpb24gZW50ZXJIaW50KGhpbnQpIHtcbiAgICAgIHRoaXMudmFsdWUgKz0gJyB7eycgKyBoaW50ICsgJ319JztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])