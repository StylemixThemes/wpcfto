(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

    if (_typeof(this.spacing) !== 'object') {
      this.spacing = {
        top: '',
        left: '',
        right: '',
        bottom: ''
      };
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYmFmYmM5MS5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIlZ1ZSIsImNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsInNwYWNpbmciLCJmb2N1c2VkIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtZXRob2RzIiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFOztBQUEyQixNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0FBQUVILElBQUFBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFLGFBQU8sT0FBT0EsR0FBZDtBQUFvQixLQUF0RDtBQUF5RCxHQUFwSSxNQUEwSTtBQUFFRCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRSxhQUFPQSxHQUFHLElBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0QsR0FBRyxDQUFDRyxXQUFKLEtBQW9CRixNQUEzRCxJQUFxRUQsR0FBRyxLQUFLQyxNQUFNLENBQUNHLFNBQXBGLEdBQWdHLFFBQWhHLEdBQTJHLE9BQU9KLEdBQXpIO0FBQStILEtBQWpLO0FBQW9LOztBQUFDLFNBQU9ELE9BQU8sQ0FBQ0MsR0FBRCxDQUFkO0FBQXNCOztBQUUxWEssR0FBRyxDQUFDQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7QUFDOUJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHVCO0FBRTlCQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE9BQU8sRUFBRSxFQURKO0FBRUxDLE1BQUFBLE9BQU8sRUFBRTtBQUZKLEtBQVA7QUFJRCxHQVA2QjtBQVE5QkMsRUFBQUEsUUFBUSxFQUFFLDR5REFSb0I7QUFTOUJDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLE9BQU8sS0FBS0ksV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixDQUExRCxHQUErRUUsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0gsV0FBaEIsQ0FBL0UsR0FBOEcsS0FBS0EsV0FBbEk7O0FBRUEsUUFBSWQsT0FBTyxDQUFDLEtBQUtVLE9BQU4sQ0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUN0QyxXQUFLQSxPQUFMLEdBQWU7QUFDYlEsUUFBQUEsR0FBRyxFQUFFLEVBRFE7QUFFYkMsUUFBQUEsSUFBSSxFQUFFLEVBRk87QUFHYkMsUUFBQUEsS0FBSyxFQUFFLEVBSE07QUFJYkMsUUFBQUEsTUFBTSxFQUFFO0FBSkssT0FBZjtBQU1EO0FBQ0YsR0FyQjZCO0FBc0I5QkMsRUFBQUEsT0FBTyxFQUFFLEVBdEJxQjtBQXVCOUJDLEVBQUFBLEtBQUssRUFBRTtBQUNMYixJQUFBQSxPQUFPLEVBQUU7QUFDUGMsTUFBQUEsSUFBSSxFQUFFLElBREM7QUFFUEMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJmLE9BQWpCLEVBQTBCO0FBQ2pDLGFBQUtnQixLQUFMLENBQVcsa0JBQVgsRUFBK0JoQixPQUEvQjtBQUNEO0FBSk07QUFESjtBQXZCdUIsQ0FBaEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fc3BhY2luZycsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhY2luZzoge30sXG4gICAgICBmb2N1c2VkOiAnJ1xuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfc3BhY2luZ1xcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlIDpmaWVsZHM9XFxcImZpZWxkc1xcXCIgOmZpZWxkX2xhYmVsPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tZmllbGQtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19zcGFjaW5nXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiIDpjbGFzcz1cXFwieyAnZm9jdXNlZCcgOiBmb2N1c2VkID09ICdzcGFjaW5nX3RvcCcgfVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXVwXFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwidG9wXFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLnRvcFxcXCIgQGZvY3VzPVxcXCJmb2N1c2VkID0gJ3NwYWNpbmdfdG9wJ1xcXCIgQGJsdXI9XFxcImZvY3VzZWQgPSAnJ1xcXCIvPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCIgOmNsYXNzPVxcXCJ7ICdmb2N1c2VkJyA6IGZvY3VzZWQgPT0gJ3NwYWNpbmdfcmlnaHQnIH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1yaWdodFxcXCI+PC9pPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInJpZ2h0XFxcIiB2LW1vZGVsPVxcXCJzcGFjaW5nLnJpZ2h0XFxcIiBAZm9jdXM9XFxcImZvY3VzZWQgPSAnc3BhY2luZ19yaWdodCdcXFwiIEBibHVyPVxcXCJmb2N1c2VkID0gJydcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiIDpjbGFzcz1cXFwieyAnZm9jdXNlZCcgOiBmb2N1c2VkID09ICdzcGFjaW5nX2JvdHRvbScgfVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWRvd25cXFwiPjwvaT48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJib3R0b21cXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcuYm90dG9tXFxcIiBAZm9jdXM9XFxcImZvY3VzZWQgPSAnc3BhY2luZ19ib3R0b20nXFxcIiBAYmx1cj1cXFwiZm9jdXNlZCA9ICcnXFxcIi8+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tc3BhY2luZy1pbnB1dC13cmFwXFxcIiA6Y2xhc3M9XFxcInsgJ2ZvY3VzZWQnIDogZm9jdXNlZCA9PSAnc3BhY2luZ19sZWZ0JyB9XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9pPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcImxlZnRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcubGVmdFxcXCIgQGZvY3VzPVxcXCJmb2N1c2VkID0gJ3NwYWNpbmdfbGVmdCdcXFwiIEBibHVyPVxcXCJmb2N1c2VkID0gJydcXFwiLz48L2Rpdj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XFxcInVuaXRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcudW5pdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cXFwib3B0aW9uIGluIGZpZWxkc1sndW5pdHMnXVxcXCIgdi1iaW5kOnZhbHVlPVxcXCJvcHRpb25cXFwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIC8vIEpTT04gcGFyc2UgZm9yIFBvc3QgTWV0YVxuICAgIHRoaXMuc3BhY2luZyA9IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkgPyBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpIDogdGhpcy5maWVsZF92YWx1ZTtcblxuICAgIGlmIChfdHlwZW9mKHRoaXMuc3BhY2luZykgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLnNwYWNpbmcgPSB7XG4gICAgICAgIHRvcDogJycsXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICByaWdodDogJycsXG4gICAgICAgIGJvdHRvbTogJydcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICBzcGFjaW5nOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihzcGFjaW5nKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBzcGFjaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])