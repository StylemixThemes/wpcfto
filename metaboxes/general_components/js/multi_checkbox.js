(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_checkbox', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      checkboxes: []
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input\" v-bind:class=\"field_id\">\n            <label v-html=\"field_label\"></label>\n            <div class=\"wpcfto_multi_checkbox wpcfto-admin-checkbox\">                    \n                <label v-for=\"(option, key) in fields['options']\">\n                    <div class=\"wpcfto-admin-checkbox-wrapper\" v-bind:class=\"{'active' : checkboxes.includes(key)}\">\n                        <div class=\"wpcfto-checkbox-switcher\"></div>\n                        <input type=\"checkbox\" v-model=\"checkboxes\" v-bind:value=\"key\" :key=\"key\"/>\n                    </div>\n                    <span v-html=\"option\"></span>\n                </label>\n            </div>\n        </div>\n    ",
  mounted: function mounted() {
    this.checkboxes = typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value) ? JSON.parse(this.field_value) : this.field_value;

    if (this.checkboxes.length === 0) {
      this.checkboxes = [];
    }
  },
  methods: {},
  watch: {
    checkboxes: {
      deep: true,
      handler: function handler(checkboxes) {
        this.$emit('wpcfto-get-value', checkboxes);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzY1YTk0YS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJjaGVja2JveGVzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJsZW5ndGgiLCJtZXRob2RzIiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsdUJBQWQsRUFBdUM7QUFDckNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDhCO0FBRXJDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLFVBQVUsRUFBRTtBQURQLEtBQVA7QUFHRCxHQU5vQztBQU9yQ0MsRUFBQUEsUUFBUSxFQUFFLHN3QkFQMkI7QUFRckNDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtGLFVBQUwsR0FBa0IsT0FBTyxLQUFLRyxXQUFaLEtBQTRCLFFBQTVCLElBQXdDQyxrQkFBa0IsQ0FBQyxLQUFLRCxXQUFOLENBQTFELEdBQStFRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSCxXQUFoQixDQUEvRSxHQUE4RyxLQUFLQSxXQUFySTs7QUFFQSxRQUFJLEtBQUtILFVBQUwsQ0FBZ0JPLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLFdBQUtQLFVBQUwsR0FBa0IsRUFBbEI7QUFDRDtBQUNGLEdBZG9DO0FBZXJDUSxFQUFBQSxPQUFPLEVBQUUsRUFmNEI7QUFnQnJDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFQsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZVLE1BQUFBLElBQUksRUFBRSxJQURJO0FBRVZDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCWCxVQUFqQixFQUE2QjtBQUNwQyxhQUFLWSxLQUFMLENBQVcsa0JBQVgsRUFBK0JaLFVBQS9CO0FBQ0Q7QUFKUztBQURQO0FBaEI4QixDQUF2QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fbXVsdGlfY2hlY2tib3gnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoZWNrYm94ZXM6IFtdXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX211bHRpX2NoZWNrYm94IHdwY2Z0by1hZG1pbi1jaGVja2JveFxcXCI+ICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtZm9yPVxcXCIob3B0aW9uLCBrZXkpIGluIGZpZWxkc1snb3B0aW9ucyddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1hZG1pbi1jaGVja2JveC13cmFwcGVyXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsnYWN0aXZlJyA6IGNoZWNrYm94ZXMuaW5jbHVkZXMoa2V5KX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1jaGVja2JveC1zd2l0Y2hlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiB2LW1vZGVsPVxcXCJjaGVja2JveGVzXFxcIiB2LWJpbmQ6dmFsdWU9XFxcImtleVxcXCIgOmtleT1cXFwia2V5XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwib3B0aW9uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5jaGVja2JveGVzID0gdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSA/IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSkgOiB0aGlzLmZpZWxkX3ZhbHVlO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tib3hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFtdO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgY2hlY2tib3hlczoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoY2hlY2tib3hlcykge1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgY2hlY2tib3hlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])