(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_number', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
  data: function data() {
    return {
      value: '',
      step: 1
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__number\">\n            <wpcfto_fields_aside :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside>\n            \n            <input type=\"number\"\n                v-bind:name=\"field_name\"\n                v-bind:placeholder=\"field_data.placeholder\"\n                v-bind:id=\"field_id\"\n                :step=\"step\"\n                v-model=\"value\"\n            />\n\n            <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"wpcfto-field-description wpcfto-field-description__after description\"></span>\n        </div>\n    ",
  mounted: function mounted() {
    this.value = this.field_value;
    if (typeof this.field_data.step !== 'undefined') this.step = this.field_data.step;
  },
  methods: {},
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYmFmZjZkZDguanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJzdGVwIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJmaWVsZF9kYXRhIiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxlQUFkLEVBQStCO0FBQzdCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSxDQURzQjtBQUU3QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMQyxNQUFBQSxJQUFJLEVBQUU7QUFGRCxLQUFQO0FBSUQsR0FQNEI7QUFRN0JDLEVBQUFBLFFBQVEsRUFBRSwwcUJBUm1CO0FBUzdCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLSCxLQUFMLEdBQWEsS0FBS0ksV0FBbEI7QUFDQSxRQUFJLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkosSUFBdkIsS0FBZ0MsV0FBcEMsRUFBaUQsS0FBS0EsSUFBTCxHQUFZLEtBQUtJLFVBQUwsQ0FBZ0JKLElBQTVCO0FBQ2xELEdBWjRCO0FBYTdCSyxFQUFBQSxPQUFPLEVBQUUsRUFib0I7QUFjN0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMUCxJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlUSxNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBZHNCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19udW1iZXInLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX2RhdGEnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3RlcDogMVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fbnVtYmVyXFxcIj5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZT5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgdi1iaW5kOnBsYWNlaG9sZGVyPVxcXCJmaWVsZF9kYXRhLnBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICA6c3RlcD1cXFwic3RlcFxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiXFxuICAgICAgICAgICAgLz5cXG5cXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWRlc2NyaXB0aW9uIHdwY2Z0by1maWVsZC1kZXNjcmlwdGlvbl9fYWZ0ZXIgZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfZGF0YS5zdGVwICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGVwID0gdGhpcy5maWVsZF9kYXRhLnN0ZXA7XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBfdmFsdWUpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])