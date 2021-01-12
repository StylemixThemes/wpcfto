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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_image_select\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto_image_select\">\n                <label v-for=\"(option, key) in fields['options']\" v-bind:class=\"{'active' : value == key}\">\n                    <span class=\"wpcfto-img-wrap\"><img v-bind:src=\"option.img\" v-bind:alt=\"option.alt\" v-bind:style=\"style\"></span>\n                    <input type=\"radio\" v-bind:name=\"field_name\" v-model=\"value\" v-bind:value=\"key\"/>\n                    <span v-html=\"option.alt\" class=\"wpcfto-img-alt\"></span>\n                </label>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTYyYmU4ZTUuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiZmllbGRzIiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FENEI7QUFFbkNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsS0FBSyxFQUFFO0FBRkYsS0FBUDtBQUlELEdBUGtDO0FBUW5DQyxFQUFBQSxRQUFRLEVBQUUsbTRCQVJ5QjtBQVNuQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0gsS0FBTCxHQUFhLEtBQUtJLFdBQWxCOztBQUVBLFFBQUksS0FBS0MsTUFBTCxDQUFZLE9BQVosQ0FBSixFQUEwQjtBQUN4QixXQUFLSixLQUFMLElBQWMsWUFBWSxLQUFLSSxNQUFMLENBQVksT0FBWixDQUFaLEdBQW1DLEtBQWpEO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQSxNQUFMLENBQVksUUFBWixDQUFKLEVBQTJCO0FBQ3pCLFdBQUtKLEtBQUwsSUFBYyxhQUFhLEtBQUtJLE1BQUwsQ0FBWSxRQUFaLENBQWIsR0FBcUMsS0FBbkQ7QUFDRDtBQUNGLEdBbkJrQztBQW9CbkNDLEVBQUFBLE9BQU8sRUFBRSxFQXBCMEI7QUFxQm5DQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZVEsTUFBZixFQUF1QjtBQUM1QixXQUFLQyxLQUFMLENBQVcsa0JBQVgsRUFBK0JELE1BQS9CO0FBQ0Q7QUFISTtBQXJCNEIsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ltYWdlX3NlbGVjdCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3R5bGU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9pbWFnZV9zZWxlY3RcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2ltYWdlX3NlbGVjdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWZvcj1cXFwiKG9wdGlvbiwga2V5KSBpbiBmaWVsZHNbJ29wdGlvbnMnXVxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2FjdGl2ZScgOiB2YWx1ZSA9PSBrZXl9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ3cGNmdG8taW1nLXdyYXBcXFwiPjxpbWcgdi1iaW5kOnNyYz1cXFwib3B0aW9uLmltZ1xcXCIgdi1iaW5kOmFsdD1cXFwib3B0aW9uLmFsdFxcXCIgdi1iaW5kOnN0eWxlPVxcXCJzdHlsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCIgdi1tb2RlbD1cXFwidmFsdWVcXFwiIHYtYmluZDp2YWx1ZT1cXFwia2V5XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIm9wdGlvbi5hbHRcXFwiIGNsYXNzPVxcXCJ3cGNmdG8taW1nLWFsdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuXG4gICAgaWYgKHRoaXMuZmllbGRzWyd3aWR0aCddKSB7XG4gICAgICB0aGlzLnN0eWxlICs9ICd3aWR0aDogJyArIHRoaXMuZmllbGRzWyd3aWR0aCddICsgJ3B4Oyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmllbGRzWydoZWlnaHQnXSkge1xuICAgICAgdGhpcy5zdHlsZSArPSAnaGVpZ2h0OiAnICsgdGhpcy5maWVsZHNbJ2hlaWdodCddICsgJ3B4Oyc7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])