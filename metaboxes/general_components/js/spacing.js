(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_spacing', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      spacing: {},
      focused: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_spacing\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_spacing\">\n\n                    <div class=\"wpcfto-spacing-input-wrap\" :class=\"{ 'focused' : focused == 'spacing_top' }\"><i class=\"fa fa-arrow-up\"></i><input type=\"number\" name=\"top\" v-model=\"spacing.top\" @focus=\"focused = 'spacing_top'\" @blur=\"focused = ''\"/></div>\n                    <div class=\"wpcfto-spacing-input-wrap\" :class=\"{ 'focused' : focused == 'spacing_right' }\"><i class=\"fa fa-arrow-right\"></i><input type=\"number\" name=\"right\" v-model=\"spacing.right\" @focus=\"focused = 'spacing_right'\" @blur=\"focused = ''\"/></div>\n                    <div class=\"wpcfto-spacing-input-wrap\" :class=\"{ 'focused' : focused == 'spacing_bottom' }\"><i class=\"fa fa-arrow-down\"></i><input type=\"number\" name=\"bottom\" v-model=\"spacing.bottom\" @focus=\"focused = 'spacing_bottom'\" @blur=\"focused = ''\"/></div>\n                    <div class=\"wpcfto-spacing-input-wrap\" :class=\"{ 'focused' : focused == 'spacing_left' }\"><i class=\"fa fa-arrow-left\"></i><input type=\"number\" name=\"left\" v-model=\"spacing.left\" @focus=\"focused = 'spacing_left'\" @blur=\"focused = ''\"/></div>\n    \n                    <select name=\"unit\" v-model=\"spacing.unit\">\n                        <option v-for=\"option in fields['units']\" v-bind:value=\"option\">{{ option }}</option>\n                    </select>\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzFhYjMxZjMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwic3BhY2luZyIsImZvY3VzZWQiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsIm1ldGhvZHMiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxnQkFBZCxFQUFnQztBQUM5QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEdUI7QUFFOUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsT0FBTyxFQUFFLEVBREo7QUFFTEMsTUFBQUEsT0FBTyxFQUFFO0FBRkosS0FBUDtBQUlELEdBUDZCO0FBUTlCQyxFQUFBQSxRQUFRLEVBQUUsNHlEQVJvQjtBQVM5QkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxTQUFLSCxPQUFMLEdBQWUsT0FBTyxLQUFLSSxXQUFaLEtBQTRCLFFBQTVCLElBQXdDQyxrQkFBa0IsQ0FBQyxLQUFLRCxXQUFOLENBQTFELEdBQStFRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSCxXQUFoQixDQUEvRSxHQUE4RyxLQUFLQSxXQUFsSTtBQUNELEdBWjZCO0FBYTlCSSxFQUFBQSxPQUFPLEVBQUUsRUFicUI7QUFjOUJDLEVBQUFBLEtBQUssRUFBRTtBQUNMVCxJQUFBQSxPQUFPLEVBQUU7QUFDUFUsTUFBQUEsSUFBSSxFQUFFLElBREM7QUFFUEMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJYLE9BQWpCLEVBQTBCO0FBQ2pDLGFBQUtZLEtBQUwsQ0FBVyxrQkFBWCxFQUErQlosT0FBL0I7QUFDRDtBQUpNO0FBREo7QUFkdUIsQ0FBaEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3NwYWNpbmcnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwYWNpbmc6IHt9LFxuICAgICAgZm9jdXNlZDogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX3NwYWNpbmdcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fc3BhY2luZ1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tc3BhY2luZy1pbnB1dC13cmFwXFxcIiA6Y2xhc3M9XFxcInsgJ2ZvY3VzZWQnIDogZm9jdXNlZCA9PSAnc3BhY2luZ190b3AnIH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy11cFxcXCI+PC9pPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInRvcFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy50b3BcXFwiIEBmb2N1cz1cXFwiZm9jdXNlZCA9ICdzcGFjaW5nX3RvcCdcXFwiIEBibHVyPVxcXCJmb2N1c2VkID0gJydcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiIDpjbGFzcz1cXFwieyAnZm9jdXNlZCcgOiBmb2N1c2VkID09ICdzcGFjaW5nX3JpZ2h0JyB9XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctcmlnaHRcXFwiPjwvaT48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJyaWdodFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy5yaWdodFxcXCIgQGZvY3VzPVxcXCJmb2N1c2VkID0gJ3NwYWNpbmdfcmlnaHQnXFxcIiBAYmx1cj1cXFwiZm9jdXNlZCA9ICcnXFxcIi8+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tc3BhY2luZy1pbnB1dC13cmFwXFxcIiA6Y2xhc3M9XFxcInsgJ2ZvY3VzZWQnIDogZm9jdXNlZCA9PSAnc3BhY2luZ19ib3R0b20nIH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1kb3duXFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwiYm90dG9tXFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLmJvdHRvbVxcXCIgQGZvY3VzPVxcXCJmb2N1c2VkID0gJ3NwYWNpbmdfYm90dG9tJ1xcXCIgQGJsdXI9XFxcImZvY3VzZWQgPSAnJ1xcXCIvPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCIgOmNsYXNzPVxcXCJ7ICdmb2N1c2VkJyA6IGZvY3VzZWQgPT0gJ3NwYWNpbmdfbGVmdCcgfVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvaT48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJsZWZ0XFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLmxlZnRcXFwiIEBmb2N1cz1cXFwiZm9jdXNlZCA9ICdzcGFjaW5nX2xlZnQnXFxcIiBAYmx1cj1cXFwiZm9jdXNlZCA9ICcnXFxcIi8+PC9kaXY+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJ1bml0XFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLnVuaXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcIm9wdGlvbiBpbiBmaWVsZHNbJ3VuaXRzJ11cXFwiIHYtYmluZDp2YWx1ZT1cXFwib3B0aW9uXFxcIj57eyBvcHRpb24gfX08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAvLyBKU09OIHBhcnNlIGZvciBQb3N0IE1ldGFcbiAgICB0aGlzLnNwYWNpbmcgPSB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpID8gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKSA6IHRoaXMuZmllbGRfdmFsdWU7XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHNwYWNpbmc6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHNwYWNpbmcpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHNwYWNpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])