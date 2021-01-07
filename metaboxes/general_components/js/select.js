(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_select', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field\">\n            <div class=\"wpcfto-admin-select wpcfto_generic_field_flex_input\">\n                <label>\n                    {{ field_label }}\n                    <span\n                    v-if=\"fields.preview\"\n                    class=\"wpcfto_preview\">Preview<span\n                    class=\"wpcfto_preview__popup\"><img\n                    :src=\"fields.preview\" /></span></span>\n                </label>\n                <select v-bind:name=\"field_name\"\n                        v-model=\"value\"\n                        v-bind:id=\"field_id\">\n                    <option v-for=\"(option, key) in fields['options']\" v-bind:value=\"key\">{{ option }}</option>\n                </select>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n\n                <div v-if=\"fields.hint\" class=\"wpcfto_field_hint select\">\n                    <i class=\"fa fa-info-circle\"></i><div v-html=\"fields.hint\" class=\"hint\"></div>\n                </div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTg1MmZjLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJtZXRob2RzIiwid2F0Y2giLCJfdmFsdWUiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGVBQWQsRUFBK0I7QUFDN0JDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHNCO0FBRTdCQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEtBQUssRUFBRTtBQURGLEtBQVA7QUFHRCxHQU40QjtBQU83QkMsRUFBQUEsUUFBUSxFQUFFLHNuQ0FQbUI7QUFRN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtGLEtBQUwsR0FBYSxLQUFLRyxXQUFsQjtBQUNELEdBVjRCO0FBVzdCQyxFQUFBQSxPQUFPLEVBQUUsRUFYb0I7QUFZN0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMTCxJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlTSxNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBWnNCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19zZWxlY3QnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1hZG1pbi1zZWxlY3Qgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkX2xhYmVsIH19XFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiZmllbGRzLnByZXZpZXdcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwid3BjZnRvX3ByZXZpZXdcXFwiPlByZXZpZXc8c3BhblxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIndwY2Z0b19wcmV2aWV3X19wb3B1cFxcXCI+PGltZ1xcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwiZmllbGRzLnByZXZpZXdcXFwiIC8+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcIihvcHRpb24sIGtleSkgaW4gZmllbGRzWydvcHRpb25zJ11cXFwiIHYtYmluZDp2YWx1ZT1cXFwia2V5XFxcIj57eyBvcHRpb24gfX08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgdi1odG1sPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmaWVsZC1kZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImZpZWxkcy5oaW50XFxcIiBjbGFzcz1cXFwid3BjZnRvX2ZpZWxkX2hpbnQgc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1pbmZvLWNpcmNsZVxcXCI+PC9pPjxkaXYgdi1odG1sPVxcXCJmaWVsZHMuaGludFxcXCIgY2xhc3M9XFxcImhpbnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])