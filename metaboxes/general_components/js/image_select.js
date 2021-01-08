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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_image_select\" v-bind:class=\"field_id\">\n            <div class=\"wpcfto_field_title\">\n                <label v-html=\"field_label\"></label>\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n            </div>\n            <div class=\"wpcfto_image_select\">\n                <label v-for=\"(option, key) in fields['options']\" v-bind:class=\"{'active' : value == key}\">\n                    <span class=\"wpcfto-img-wrap\"><img v-bind:src=\"option.img\" v-bind:alt=\"option.alt\" v-bind:style=\"style\"></span>\n                    <input type=\"radio\" v-bind:name=\"field_name\" v-model=\"value\" v-bind:value=\"key\"/>\n                    <span v-html=\"option.alt\" class=\"wpcfto-img-alt\"></span>\n                </label>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjVlYTI2NjUuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiZmllbGRzIiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FENEI7QUFFbkNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsS0FBSyxFQUFFO0FBRkYsS0FBUDtBQUlELEdBUGtDO0FBUW5DQyxFQUFBQSxRQUFRLEVBQUUsNjVCQVJ5QjtBQVNuQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0gsS0FBTCxHQUFhLEtBQUtJLFdBQWxCOztBQUVBLFFBQUksS0FBS0MsTUFBTCxDQUFZLE9BQVosQ0FBSixFQUEwQjtBQUN4QixXQUFLSixLQUFMLElBQWMsWUFBWSxLQUFLSSxNQUFMLENBQVksT0FBWixDQUFaLEdBQW1DLEtBQWpEO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQSxNQUFMLENBQVksUUFBWixDQUFKLEVBQTJCO0FBQ3pCLFdBQUtKLEtBQUwsSUFBYyxhQUFhLEtBQUtJLE1BQUwsQ0FBWSxRQUFaLENBQWIsR0FBcUMsS0FBbkQ7QUFDRDtBQUNGLEdBbkJrQztBQW9CbkNDLEVBQUFBLE9BQU8sRUFBRSxFQXBCMEI7QUFxQm5DQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZVEsTUFBZixFQUF1QjtBQUM1QixXQUFLQyxLQUFMLENBQVcsa0JBQVgsRUFBK0JELE1BQS9CO0FBQ0Q7QUFISTtBQXJCNEIsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ltYWdlX3NlbGVjdCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3R5bGU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9pbWFnZV9zZWxlY3RcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19maWVsZF90aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZmllbGQtZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9faW1hZ2Vfc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtZm9yPVxcXCIob3B0aW9uLCBrZXkpIGluIGZpZWxkc1snb3B0aW9ucyddXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsnYWN0aXZlJyA6IHZhbHVlID09IGtleX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIndwY2Z0by1pbWctd3JhcFxcXCI+PGltZyB2LWJpbmQ6c3JjPVxcXCJvcHRpb24uaW1nXFxcIiB2LWJpbmQ6YWx0PVxcXCJvcHRpb24uYWx0XFxcIiB2LWJpbmQ6c3R5bGU9XFxcInN0eWxlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIiB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCIgdi1iaW5kOnZhbHVlPVxcXCJrZXlcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwib3B0aW9uLmFsdFxcXCIgY2xhc3M9XFxcIndwY2Z0by1pbWctYWx0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGRfdmFsdWU7XG5cbiAgICBpZiAodGhpcy5maWVsZHNbJ3dpZHRoJ10pIHtcbiAgICAgIHRoaXMuc3R5bGUgKz0gJ3dpZHRoOiAnICsgdGhpcy5maWVsZHNbJ3dpZHRoJ10gKyAncHg7JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWVsZHNbJ2hlaWdodCddKSB7XG4gICAgICB0aGlzLnN0eWxlICs9ICdoZWlnaHQ6ICcgKyB0aGlzLmZpZWxkc1snaGVpZ2h0J10gKyAncHg7JztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBfdmFsdWUpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])