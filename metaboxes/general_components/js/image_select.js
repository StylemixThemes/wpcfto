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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDk4OGIwMGEuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiZmllbGRzIiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FENEI7QUFFbkNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsS0FBSyxFQUFFO0FBRkYsS0FBUDtBQUlELEdBUGtDO0FBUW5DQyxFQUFBQSxRQUFRLEVBQUUsMGxCQVJ5QjtBQVNuQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0gsS0FBTCxHQUFhLEtBQUtJLFdBQWxCOztBQUVBLFFBQUksS0FBS0MsTUFBTCxDQUFZLE9BQVosQ0FBSixFQUEwQjtBQUN4QixXQUFLSixLQUFMLElBQWMsWUFBWSxLQUFLSSxNQUFMLENBQVksT0FBWixDQUFaLEdBQW1DLEtBQWpEO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQSxNQUFMLENBQVksUUFBWixDQUFKLEVBQTJCO0FBQ3pCLFdBQUtKLEtBQUwsSUFBYyxhQUFhLEtBQUtJLE1BQUwsQ0FBWSxRQUFaLENBQWIsR0FBcUMsS0FBbkQ7QUFDRDtBQUNGLEdBbkJrQztBQW9CbkNDLEVBQUFBLE9BQU8sRUFBRSxFQXBCMEI7QUFxQm5DQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZVEsTUFBZixFQUF1QjtBQUM1QixXQUFLQyxLQUFMLENBQVcsa0JBQVgsRUFBK0JELE1BQS9CO0FBQ0Q7QUFISTtBQXJCNEIsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ltYWdlX3NlbGVjdCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3R5bGU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2ltYWdlX3NlbGVjdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWZvcj1cXFwiKG9wdGlvbiwga2V5KSBpbiBmaWVsZHNbJ29wdGlvbnMnXVxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2FjdGl2ZScgOiB2YWx1ZSA9PSBrZXl9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiIHYtbW9kZWw9XFxcInZhbHVlXFxcIiB2LWJpbmQ6dmFsdWU9XFxcImtleVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVxcXCJvcHRpb24uaW1nXFxcIiB2LWJpbmQ6YWx0PVxcXCJvcHRpb24uYWx0XFxcIiB2LWJpbmQ6c3R5bGU9XFxcInN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcblxuICAgIGlmICh0aGlzLmZpZWxkc1snd2lkdGgnXSkge1xuICAgICAgdGhpcy5zdHlsZSArPSAnd2lkdGg6ICcgKyB0aGlzLmZpZWxkc1snd2lkdGgnXSArICdweDsnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZpZWxkc1snaGVpZ2h0J10pIHtcbiAgICAgIHRoaXMuc3R5bGUgKz0gJ2hlaWdodDogJyArIHRoaXMuZmllbGRzWydoZWlnaHQnXSArICdweDsnO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])