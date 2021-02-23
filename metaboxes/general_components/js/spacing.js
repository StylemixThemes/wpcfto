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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTQyNzBkLmpzIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwic3BhY2luZyIsImZvY3VzZWQiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1ldGhvZHMiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQUU7O0FBQTJCLE1BQUksT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPQSxNQUFNLENBQUNDLFFBQWQsS0FBMkIsUUFBL0QsRUFBeUU7QUFBRUgsSUFBQUEsT0FBTyxHQUFHLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQUUsYUFBTyxPQUFPQSxHQUFkO0FBQW9CLEtBQXREO0FBQXlELEdBQXBJLE1BQTBJO0FBQUVELElBQUFBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFLGFBQU9BLEdBQUcsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQXpCLElBQXVDRCxHQUFHLENBQUNHLFdBQUosS0FBb0JGLE1BQTNELElBQXFFRCxHQUFHLEtBQUtDLE1BQU0sQ0FBQ0csU0FBcEYsR0FBZ0csUUFBaEcsR0FBMkcsT0FBT0osR0FBekg7QUFBK0gsS0FBaks7QUFBb0s7O0FBQUMsU0FBT0QsT0FBTyxDQUFDQyxHQUFELENBQWQ7QUFBc0I7O0FBRTFYSyxHQUFHLENBQUNDLFNBQUosQ0FBYyxnQkFBZCxFQUFnQztBQUM5QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEdUI7QUFFOUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsT0FBTyxFQUFFLEVBREo7QUFFTEMsTUFBQUEsT0FBTyxFQUFFO0FBRkosS0FBUDtBQUlELEdBUDZCO0FBUTlCQyxFQUFBQSxRQUFRLEVBQUUsNHlEQVJvQjtBQVM5QkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxTQUFLSCxPQUFMLEdBQWUsT0FBTyxLQUFLSSxXQUFaLEtBQTRCLFFBQTVCLElBQXdDQyxrQkFBa0IsQ0FBQyxLQUFLRCxXQUFOLENBQTFELEdBQStFRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSCxXQUFoQixDQUEvRSxHQUE4RyxLQUFLQSxXQUFsSTs7QUFFQSxRQUFJZCxPQUFPLENBQUMsS0FBS1UsT0FBTixDQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLFdBQUtBLE9BQUwsR0FBZTtBQUNiUSxRQUFBQSxHQUFHLEVBQUUsRUFEUTtBQUViQyxRQUFBQSxJQUFJLEVBQUUsRUFGTztBQUdiQyxRQUFBQSxLQUFLLEVBQUUsRUFITTtBQUliQyxRQUFBQSxNQUFNLEVBQUU7QUFKSyxPQUFmO0FBTUQ7QUFDRixHQXJCNkI7QUFzQjlCQyxFQUFBQSxPQUFPLEVBQUUsRUF0QnFCO0FBdUI5QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xiLElBQUFBLE9BQU8sRUFBRTtBQUNQYyxNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQmYsT0FBakIsRUFBMEI7QUFDakMsYUFBS2dCLEtBQUwsQ0FBVyxrQkFBWCxFQUErQmhCLE9BQS9CO0FBQ0Q7QUFKTTtBQURKO0FBdkJ1QixDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19zcGFjaW5nJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcGFjaW5nOiB7fSxcbiAgICAgIGZvY3VzZWQ6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9zcGFjaW5nXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX3NwYWNpbmdcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCIgOmNsYXNzPVxcXCJ7ICdmb2N1c2VkJyA6IGZvY3VzZWQgPT0gJ3NwYWNpbmdfdG9wJyB9XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctdXBcXFwiPjwvaT48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJ0b3BcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcudG9wXFxcIiBAZm9jdXM9XFxcImZvY3VzZWQgPSAnc3BhY2luZ190b3AnXFxcIiBAYmx1cj1cXFwiZm9jdXNlZCA9ICcnXFxcIi8+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tc3BhY2luZy1pbnB1dC13cmFwXFxcIiA6Y2xhc3M9XFxcInsgJ2ZvY3VzZWQnIDogZm9jdXNlZCA9PSAnc3BhY2luZ19yaWdodCcgfVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWFycm93LXJpZ2h0XFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwicmlnaHRcXFwiIHYtbW9kZWw9XFxcInNwYWNpbmcucmlnaHRcXFwiIEBmb2N1cz1cXFwiZm9jdXNlZCA9ICdzcGFjaW5nX3JpZ2h0J1xcXCIgQGJsdXI9XFxcImZvY3VzZWQgPSAnJ1xcXCIvPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLXNwYWNpbmctaW5wdXQtd3JhcFxcXCIgOmNsYXNzPVxcXCJ7ICdmb2N1c2VkJyA6IGZvY3VzZWQgPT0gJ3NwYWNpbmdfYm90dG9tJyB9XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctZG93blxcXCI+PC9pPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcImJvdHRvbVxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy5ib3R0b21cXFwiIEBmb2N1cz1cXFwiZm9jdXNlZCA9ICdzcGFjaW5nX2JvdHRvbSdcXFwiIEBibHVyPVxcXCJmb2N1c2VkID0gJydcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1zcGFjaW5nLWlucHV0LXdyYXBcXFwiIDpjbGFzcz1cXFwieyAnZm9jdXNlZCcgOiBmb2N1c2VkID09ICdzcGFjaW5nX2xlZnQnIH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwibGVmdFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy5sZWZ0XFxcIiBAZm9jdXM9XFxcImZvY3VzZWQgPSAnc3BhY2luZ19sZWZ0J1xcXCIgQGJsdXI9XFxcImZvY3VzZWQgPSAnJ1xcXCIvPjwvZGl2PlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cXFwidW5pdFxcXCIgdi1tb2RlbD1cXFwic3BhY2luZy51bml0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVxcXCJvcHRpb24gaW4gZmllbGRzWyd1bml0cyddXFxcIiB2LWJpbmQ6dmFsdWU9XFxcIm9wdGlvblxcXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXI+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgLy8gSlNPTiBwYXJzZSBmb3IgUG9zdCBNZXRhXG4gICAgdGhpcy5zcGFjaW5nID0gdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSA/IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSkgOiB0aGlzLmZpZWxkX3ZhbHVlO1xuXG4gICAgaWYgKF90eXBlb2YodGhpcy5zcGFjaW5nKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuc3BhY2luZyA9IHtcbiAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgYm90dG9tOiAnJ1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHNwYWNpbmc6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHNwYWNpbmcpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHNwYWNpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])