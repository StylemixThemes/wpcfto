(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_image_select', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: '',
      style: ''
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input\" v-bind:class=\"field_id\">\n            <label v-html=\"field_label\"></label>\n            <div class=\"wpcfto_image_select\">\n                <label v-for=\"(option, key) in fields['options']\" v-bind:class=\"{'active' : value == key}\">\n                    <input type=\"radio\" v-bind:name=\"field_name\" v-model=\"value\" v-bind:value=\"key\"/>\n                    <img v-bind:src=\"option.img\" v-bind:alt=\"option.alt\" v-bind:style=\"style\">\n                </label>\n            </div>\n        </div>\n    ",
  mounted: function mounted() {
    this.value = this.field_value;

    if (this.fields['width']) {
      this.style += 'width: ' + this.fields['width'] + 'px;';
    }

    if (this.fields['height']) {
      this.style += 'height: ' + this.fields['height'] + 'px;';
    }
  },
  methods: {},
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjFiZTc0ZS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJ2YWx1ZSIsInN0eWxlIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJmaWVsZHMiLCJtZXRob2RzIiwid2F0Y2giLCJfdmFsdWUiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ0QjtBQUVuQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMQyxNQUFBQSxLQUFLLEVBQUU7QUFGRixLQUFQO0FBSUQsR0FQa0M7QUFRbkNDLEVBQUFBLFFBQVEsRUFBRSwwbEJBUnlCO0FBU25DQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLSCxLQUFMLEdBQWEsS0FBS0ksV0FBbEI7O0FBRUEsUUFBSSxLQUFLQyxNQUFMLENBQVksT0FBWixDQUFKLEVBQTBCO0FBQ3hCLFdBQUtKLEtBQUwsSUFBYyxZQUFZLEtBQUtJLE1BQUwsQ0FBWSxPQUFaLENBQVosR0FBbUMsS0FBakQ7QUFDRDs7QUFFRCxRQUFJLEtBQUtBLE1BQUwsQ0FBWSxRQUFaLENBQUosRUFBMkI7QUFDekIsV0FBS0osS0FBTCxJQUFjLGFBQWEsS0FBS0ksTUFBTCxDQUFZLFFBQVosQ0FBYixHQUFxQyxLQUFuRDtBQUNEO0FBQ0YsR0FuQmtDO0FBb0JuQ0MsRUFBQUEsT0FBTyxFQUFFLEVBcEIwQjtBQXFCbkNDLEVBQUFBLEtBQUssRUFBRTtBQUNMUCxJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlUSxNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBckI0QixDQUFyQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9faW1hZ2Vfc2VsZWN0Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBzdHlsZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCIgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9faW1hZ2Vfc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtZm9yPVxcXCIob3B0aW9uLCBrZXkpIGluIGZpZWxkc1snb3B0aW9ucyddXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsnYWN0aXZlJyA6IHZhbHVlID09IGtleX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCIgdi1tb2RlbD1cXFwidmFsdWVcXFwiIHYtYmluZDp2YWx1ZT1cXFwia2V5XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XFxcIm9wdGlvbi5pbWdcXFwiIHYtYmluZDphbHQ9XFxcIm9wdGlvbi5hbHRcXFwiIHYtYmluZDpzdHlsZT1cXFwic3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuXG4gICAgaWYgKHRoaXMuZmllbGRzWyd3aWR0aCddKSB7XG4gICAgICB0aGlzLnN0eWxlICs9ICd3aWR0aDogJyArIHRoaXMuZmllbGRzWyd3aWR0aCddICsgJ3B4Oyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmllbGRzWydoZWlnaHQnXSkge1xuICAgICAgdGhpcy5zdHlsZSArPSAnaGVpZ2h0OiAnICsgdGhpcy5maWVsZHNbJ2hlaWdodCddICsgJ3B4Oyc7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])