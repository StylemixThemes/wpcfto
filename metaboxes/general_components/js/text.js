(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_text', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text\">\n            <div class=\"wpcfto_field_title\">\n                <label>\n                    {{ field_label }}\n                    <span\n                    v-if=\"fields.preview\"\n                    class=\"wpcfto_preview\">Preview<span\n                    class=\"wpcfto_preview__popup\"><img\n                    :src=\"fields.preview\" /></span></span>\n                </label>\n            </div>\n            <input type=\"text\"\n                v-bind:name=\"field_name\"\n                v-bind:placeholder=\"fields.placeholder\"\n                v-bind:id=\"field_id\"\n                v-model=\"value\"\n                placeholder=\"Enter something...\"\n            />\n            <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n\n            <div v-if=\"fields.hint\" class=\"wpcfto_field_hint text\">\n                <i class=\"fa fa-info-circle\"></i><div v-html=\"fields.hint\" class=\"hint\"></div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2JiNWRjNTMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIm1ldGhvZHMiLCJ3YXRjaCIsIl92YWx1ZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsYUFBZCxFQUE2QjtBQUMzQkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEb0I7QUFFM0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFO0FBREYsS0FBUDtBQUdELEdBTjBCO0FBTzNCQyxFQUFBQSxRQUFRLEVBQUUsb25DQVBpQjtBQVEzQkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0YsS0FBTCxHQUFhLEtBQUtHLFdBQWxCO0FBQ0QsR0FWMEI7QUFXM0JDLEVBQUFBLE9BQU8sRUFBRSxFQVhrQjtBQVkzQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xMLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVNLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFab0IsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3RleHQnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fdGV4dFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2ZpZWxkX3RpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAge3sgZmllbGRfbGFiZWwgfX1cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJmaWVsZHMucHJldmlld1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ3cGNmdG9fcHJldmlld1xcXCI+UHJldmlldzxzcGFuXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwid3BjZnRvX3ByZXZpZXdfX3BvcHVwXFxcIj48aW1nXFxuICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJmaWVsZHMucHJldmlld1xcXCIgLz48L3NwYW4+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgdi1iaW5kOnBsYWNlaG9sZGVyPVxcXCJmaWVsZHMucGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDppZD1cXFwiZmllbGRfaWRcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgc29tZXRoaW5nLi4uXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiB2LWh0bWw9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZpZWxkLWRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIj48L3NwYW4+XFxuXFxuICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJmaWVsZHMuaGludFxcXCIgY2xhc3M9XFxcIndwY2Z0b19maWVsZF9oaW50IHRleHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaW5mby1jaXJjbGVcXFwiPjwvaT48ZGl2IHYtaHRtbD1cXFwiZmllbGRzLmhpbnRcXFwiIGNsYXNzPVxcXCJoaW50XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])