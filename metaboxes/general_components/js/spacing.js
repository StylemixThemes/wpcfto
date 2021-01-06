(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_spacing', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      spacing: {}
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_spacing\" v-bind:class=\"field_id\">\n            <div class=\"wpcfto_field_column\">\n                <label v-html=\"field_label\" class=\"wpcfto_field_title\"></label>\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n                <div v-if=\"fields.hint\" class=\"wpcfto_field_hint text\">\n                    <i class=\"fa fa-info-circle\"></i><div v-html=\"fields.hint\" class=\"hint\"></div>\n                </div>\n            </div>\n            <div class=\"wpcfto_spacing\">\n\n                <div class=\"wpcfto-spacing-input-wrap\"><i class=\"fa fa-arrow-up\"></i><input type=\"number\" name=\"top\" v-model=\"spacing.top\"/></div>\n                <div class=\"wpcfto-spacing-input-wrap\"><i class=\"fa fa-arrow-right\"></i><input type=\"number\" name=\"right\" v-model=\"spacing.right\"/></div>\n                <div class=\"wpcfto-spacing-input-wrap\"><i class=\"fa fa-arrow-down\"></i><input type=\"number\" name=\"bottom\" v-model=\"spacing.bottom\"/></div>\n                <div class=\"wpcfto-spacing-input-wrap\"><i class=\"fa fa-arrow-left\"></i><input type=\"number\" name=\"left\" v-model=\"spacing.left\"/></div>\n\n                <select name=\"unit\" v-model=\"spacing.unit\">\n                    <option v-for=\"option in fields['units']\" v-bind:value=\"option\">{{ option }}</option>\n                </select>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTdkOWJiMWYuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwic3BhY2luZyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0FBQzlCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUR1QjtBQUU5QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQUFQO0FBR0QsR0FONkI7QUFPOUJDLEVBQUFBLFFBQVEsRUFBRSxpZ0RBUG9CO0FBUTlCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQjtBQUNBLFNBQUtGLE9BQUwsR0FBZSxPQUFPLEtBQUtHLFdBQVosS0FBNEIsUUFBNUIsSUFBd0NDLGtCQUFrQixDQUFDLEtBQUtELFdBQU4sQ0FBMUQsR0FBK0VFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtILFdBQWhCLENBQS9FLEdBQThHLEtBQUtBLFdBQWxJO0FBQ0QsR0FYNkI7QUFZOUJJLEVBQUFBLE9BQU8sRUFBRSxFQVpxQjtBQWE5QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xSLElBQUFBLE9BQU8sRUFBRTtBQUNQUyxNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQlYsT0FBakIsRUFBMEI7QUFDakMsYUFBS1csS0FBTCxDQUFXLGtCQUFYLEVBQStCWCxPQUEvQjtBQUNEO0FBSk07QUFESjtBQWJ1QixDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fc3BhY2luZycsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhY2luZzoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX3NwYWNpbmdcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19maWVsZF9jb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCIgY2xhc3M9XFxcIndwY2Z0b19maWVsZF90aXRsZVxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiB2LWh0bWw9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZpZWxkLWRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZmllbGRzLmhpbnRcXFwiIGNsYXNzPVxcXCJ3cGNmdG9fZmllbGRfaGludCB0ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1pbmZvLWNpcmNsZVxcXCI+PC9pPjxkaXYgdi1odG1sPVxcXCJmaWVsZHMuaGludFxcXCIgY2xhc3M9XFxcImhpbnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fc3BhY2luZ1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInRvcFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy50b3BcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXJpZ2h0XFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwicmlnaHRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcucmlnaHRcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWRvd25cXFwiPjwvaT48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJib3R0b21cXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcuYm90dG9tXFxcIi8+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwibGVmdFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy5sZWZ0XFxcIi8+PC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cXFwidW5pdFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy51bml0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcIm9wdGlvbiBpbiBmaWVsZHNbJ3VuaXRzJ11cXFwiIHYtYmluZDp2YWx1ZT1cXFwib3B0aW9uXFxcIj57eyBvcHRpb24gfX08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgLy8gSlNPTiBwYXJzZSBmb3IgUG9zdCBNZXRhXG4gICAgdGhpcy5zcGFjaW5nID0gdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSA/IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSkgOiB0aGlzLmZpZWxkX3ZhbHVlO1xuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICBzcGFjaW5nOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihzcGFjaW5nKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBzcGFjaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])