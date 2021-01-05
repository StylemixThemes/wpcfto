(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_spacing', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      spacing: {}
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input\" v-bind:class=\"field_id\">\n            <label v-html=\"field_label\"></label>\n            <div class=\"wpcfto_spacing\">\n                \n                <input type=\"text\" name=\"top\" v-model=\"spacing.top\"/>\n                <input type=\"text\" name=\"right\" v-model=\"spacing.right\"/>\n                <input type=\"text\" name=\"bottom\" v-model=\"spacing.bottom\"/>\n                <input type=\"text\" name=\"left\" v-model=\"spacing.left\"/>\n                \n                <select name=\"unit\" v-model=\"spacing.unit\">\n                    <option v-for=\"option in fields['units']\" v-bind:value=\"option\">{{ option }}</option>\n                </select>\n            </div>\n        </div>\n    ",
  mounted: function mounted() {
    // JSON parse for Post Meta
    this.spacing = typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value) ? JSON.parse(this.field_value) : this.field_value;
  },
  methods: {},
  watch: {
    spacing: {
      deep: true,
      handler: function handler(spacing) {
        this.$emit('wpcfto-get-value', spacing);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTJjMDY5N2MuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwic3BhY2luZyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0FBQzlCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUR1QjtBQUU5QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQUFQO0FBR0QsR0FONkI7QUFPOUJDLEVBQUFBLFFBQVEsRUFBRSxveUJBUG9CO0FBUTlCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQjtBQUNBLFNBQUtGLE9BQUwsR0FBZSxPQUFPLEtBQUtHLFdBQVosS0FBNEIsUUFBNUIsSUFBd0NDLGtCQUFrQixDQUFDLEtBQUtELFdBQU4sQ0FBMUQsR0FBK0VFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtILFdBQWhCLENBQS9FLEdBQThHLEtBQUtBLFdBQWxJO0FBQ0QsR0FYNkI7QUFZOUJJLEVBQUFBLE9BQU8sRUFBRSxFQVpxQjtBQWE5QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xSLElBQUFBLE9BQU8sRUFBRTtBQUNQUyxNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQlYsT0FBakIsRUFBMEI7QUFDakMsYUFBS1csS0FBTCxDQUFXLGtCQUFYLEVBQStCWCxPQUEvQjtBQUNEO0FBSk07QUFESjtBQWJ1QixDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fc3BhY2luZycsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhY2luZzoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCIgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fc3BhY2luZ1xcXCI+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidG9wXFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLnRvcFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicmlnaHRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcucmlnaHRcXFwiLz5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImJvdHRvbVxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy5ib3R0b21cXFwiLz5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImxlZnRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcubGVmdFxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJ1bml0XFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLnVuaXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cXFwib3B0aW9uIGluIGZpZWxkc1sndW5pdHMnXVxcXCIgdi1iaW5kOnZhbHVlPVxcXCJvcHRpb25cXFwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAvLyBKU09OIHBhcnNlIGZvciBQb3N0IE1ldGFcbiAgICB0aGlzLnNwYWNpbmcgPSB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpID8gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKSA6IHRoaXMuZmllbGRfdmFsdWU7XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHNwYWNpbmc6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHNwYWNpbmcpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHNwYWNpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])