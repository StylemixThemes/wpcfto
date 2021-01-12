(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('vue-editor', Vue2Editor["default"].VueEditor);
Vue.component('wpcfto_editor', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_editor\">\n            <div class=\"wpcfto-editor\">\n                <label v-html=\"field_label\" class=\"wpcfto_field_title\"></label>\n\n                <vue-editor :id=\"'editor' + field_name\" v-model=\"value\"></vue-editor>\n\n                <textarea v-bind:name=\"field_name\"\n                      v-bind:placeholder=\"field_label\"\n                      v-bind:id=\"field_id\"\n                      v-model=\"value\">\n                </textarea>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n\n            </div>\n        </div>\n    ",
  mounted: function mounted() {
    if (typeof this.field_value !== 'undefined') {
      this.$set(this, 'value', this.field_value);
    }
  },
  methods: {},
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGJlYTIwYjMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlMkVkaXRvciIsIlZ1ZUVkaXRvciIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCIkc2V0IiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxZQUFkLEVBQTRCQyxVQUFVLENBQUMsU0FBRCxDQUFWLENBQXNCQyxTQUFsRDtBQUNBSCxHQUFHLENBQUNDLFNBQUosQ0FBYyxlQUFkLEVBQStCO0FBQzdCRyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQURzQjtBQUU3QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFERixLQUFQO0FBR0QsR0FONEI7QUFPN0JDLEVBQUFBLFFBQVEsRUFBRSwrckJBUG1CO0FBUTdCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixXQUFoQyxFQUE2QztBQUMzQyxXQUFLQyxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QixLQUFLRCxXQUE5QjtBQUNEO0FBQ0YsR0FaNEI7QUFhN0JFLEVBQUFBLE9BQU8sRUFBRSxFQWJvQjtBQWM3QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xOLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVPLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFkc0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgndnVlLWVkaXRvcicsIFZ1ZTJFZGl0b3JbXCJkZWZhdWx0XCJdLlZ1ZUVkaXRvcik7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fZWRpdG9yJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2VkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWVkaXRvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIiBjbGFzcz1cXFwid3BjZnRvX2ZpZWxkX3RpdGxlXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICA8dnVlLWVkaXRvciA6aWQ9XFxcIidlZGl0b3InICsgZmllbGRfbmFtZVxcXCIgdi1tb2RlbD1cXFwidmFsdWVcXFwiPjwvdnVlLWVkaXRvcj5cXG5cXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XFxuXFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgdi1odG1sPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmaWVsZC1kZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcblxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAndmFsdWUnLCB0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBfdmFsdWUpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])