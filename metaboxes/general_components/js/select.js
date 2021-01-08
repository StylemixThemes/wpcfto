(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_select', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__select\">\n            <div class=\"wpcfto-admin-select wpcfto_generic_field_flex_input\">\n                <wpcfto_fields_aside :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside>\n                \n                <select v-bind:name=\"field_name\"\n                        v-model=\"value\"\n                        v-bind:id=\"field_id\">\n                    <option v-for=\"(option, key) in fields['options']\" v-bind:value=\"key\">{{ option }}</option>\n                </select>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"wpcfto-field-description wpcfto-field-description__after description\"></span>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGQ0Y2Y0YzEuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIm1ldGhvZHMiLCJ3YXRjaCIsIl92YWx1ZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsZUFBZCxFQUErQjtBQUM3QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEc0I7QUFFN0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFO0FBREYsS0FBUDtBQUdELEdBTjRCO0FBTzdCQyxFQUFBQSxRQUFRLEVBQUUsaXhCQVBtQjtBQVE3QkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0YsS0FBTCxHQUFhLEtBQUtHLFdBQWxCO0FBQ0QsR0FWNEI7QUFXN0JDLEVBQUFBLE9BQU8sRUFBRSxFQVhvQjtBQVk3QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xMLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVNLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFac0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3NlbGVjdCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tYWRtaW4tc2VsZWN0IHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ZsZXhfaW5wdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZT5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOmlkPVxcXCJmaWVsZF9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVxcXCIob3B0aW9uLCBrZXkpIGluIGZpZWxkc1snb3B0aW9ucyddXFxcIiB2LWJpbmQ6dmFsdWU9XFxcImtleVxcXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcblxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWRlc2NyaXB0aW9uIHdwY2Z0by1maWVsZC1kZXNjcmlwdGlvbl9fYWZ0ZXIgZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])