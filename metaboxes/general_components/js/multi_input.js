(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_input', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_options'],
  data: function data() {
    return {
      inputs: []
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_multi_input\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\t\t\t\n\t\t\t<div class=\"wpcfto-field-content\">\n\t\t\t\t<div class=\"wpcfto_sorter\">\n\t\n\t\t\t\t\t<draggable class=\"list-group\"\n\t\t\t\t\t\t\t   :list=\"inputs\"\n\t\t\t\t\t\t\t   group=\"inputs\">\n\t\n\t\t\t\t\t\t<div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text\"\n\t\t\t\t\t\t\t v-for=\"(input, input_key) in inputs\"\n\t\t\t\t\t\t\t :key=\"input['key']\">\n\t\n\t\t\t\t\t\t  <div class=\"wpcfto_multi_input_label\">{{input['label']}}</div>\n\t\n\t\t\t\t\t\t  <input type=\"text\" v-model=\"input['value']\" v-bind:placeholder=\"input['label']\" />\n\t\n\t\t\t\t\t\t  <span class=\"wpcfto_multi_input_icon\"><i class=\"fa fa-arrows-alt\"></i></span>\n\t\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t </draggable>\n\t\n\t\t\t\t </div>\n\t\t\t </div>\n\n\t\t\t <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  mounted: function mounted() {
    var _this = this;

    if (typeof _this.field_value === 'string' && WpcftoIsJsonString(_this.field_value)) _this.field_value = JSON.parse(_this.field_value);
    if (!_this.field_value.length) _this.field_value = {};
    /*Get sorted items*/

    Object.keys(_this.field_value).forEach(function (key) {
      var stored_item = _this.field_value[key];

      var config_item = _this.field_options.find(function (x) {
        return x.key === stored_item['key'];
      });

      if (typeof config_item === 'undefined') return false;

      _this.inputs.push({
        key: stored_item['key'],
        value: stored_item['value'],
        label: config_item['label']
      });
    });
    /*Add new items from config*/

    _this.field_options.forEach(function (config_item) {
      var stored_item = _this.inputs.find(function (x) {
        return x.key === config_item['key'];
      });

      if (stored_item) return false;

      _this.inputs.push(config_item);
    });
  },
  methods: {},
  watch: {
    inputs: {
      deep: true,
      handler: function handler(inputs) {
        var inputs_value = [];
        inputs.forEach(function (item) {
          inputs_value.push({
            key: item.key,
            value: item.value
          });
        });
        this.$emit('wpcfto-get-value', inputs_value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDEzMDkwLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsImlucHV0cyIsInRlbXBsYXRlIiwibW91bnRlZCIsIl90aGlzIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInN0b3JlZF9pdGVtIiwiY29uZmlnX2l0ZW0iLCJmaWVsZF9vcHRpb25zIiwiZmluZCIsIngiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsIm1ldGhvZHMiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiaW5wdXRzX3ZhbHVlIiwiaXRlbSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsb0JBQWQsRUFBb0M7QUFDbENDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLGVBQW5FLENBRDJCO0FBRWxDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRTtBQURILEtBQVA7QUFHRCxHQU5pQztBQU9sQ0MsRUFBQUEsUUFBUSxFQUFFLDhtQ0FQd0I7QUFRbENDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUVBLFFBQUksT0FBT0EsS0FBSyxDQUFDQyxXQUFiLEtBQTZCLFFBQTdCLElBQXlDQyxrQkFBa0IsQ0FBQ0YsS0FBSyxDQUFDQyxXQUFQLENBQS9ELEVBQW9GRCxLQUFLLENBQUNDLFdBQU4sR0FBb0JFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFLLENBQUNDLFdBQWpCLENBQXBCO0FBQ3BGLFFBQUksQ0FBQ0QsS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxNQUF2QixFQUErQkwsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLEVBQXBCO0FBQy9COztBQUVBSyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBSyxDQUFDQyxXQUFsQixFQUErQk8sT0FBL0IsQ0FBdUMsVUFBVUMsR0FBVixFQUFlO0FBQ3BELFVBQUlDLFdBQVcsR0FBR1YsS0FBSyxDQUFDQyxXQUFOLENBQWtCUSxHQUFsQixDQUFsQjs7QUFFQSxVQUFJRSxXQUFXLEdBQUdYLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RELGVBQU9BLENBQUMsQ0FBQ0wsR0FBRixLQUFVQyxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUksT0FBT0MsV0FBUCxLQUF1QixXQUEzQixFQUF3QyxPQUFPLEtBQVA7O0FBRXhDWCxNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0I7QUFDaEJOLFFBQUFBLEdBQUcsRUFBRUMsV0FBVyxDQUFDLEtBQUQsQ0FEQTtBQUVoQk0sUUFBQUEsS0FBSyxFQUFFTixXQUFXLENBQUMsT0FBRCxDQUZGO0FBR2hCTyxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFEO0FBSEYsT0FBbEI7QUFLRCxLQWREO0FBZUE7O0FBRUFYLElBQUFBLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkosT0FBcEIsQ0FBNEIsVUFBVUcsV0FBVixFQUF1QjtBQUNqRCxVQUFJRCxXQUFXLEdBQUdWLEtBQUssQ0FBQ0gsTUFBTixDQUFhZ0IsSUFBYixDQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDL0MsZUFBT0EsQ0FBQyxDQUFDTCxHQUFGLEtBQVVFLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQ0QsT0FGaUIsQ0FBbEI7O0FBSUEsVUFBSUQsV0FBSixFQUFpQixPQUFPLEtBQVA7O0FBRWpCVixNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0JKLFdBQWxCO0FBQ0QsS0FSRDtBQVNELEdBekNpQztBQTBDbENPLEVBQUFBLE9BQU8sRUFBRSxFQTFDeUI7QUEyQ2xDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTHRCLElBQUFBLE1BQU0sRUFBRTtBQUNOdUIsTUFBQUEsSUFBSSxFQUFFLElBREE7QUFFTkMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJ4QixNQUFqQixFQUF5QjtBQUNoQyxZQUFJeUIsWUFBWSxHQUFHLEVBQW5CO0FBQ0F6QixRQUFBQSxNQUFNLENBQUNXLE9BQVAsQ0FBZSxVQUFVZSxJQUFWLEVBQWdCO0FBQzdCRCxVQUFBQSxZQUFZLENBQUNQLElBQWIsQ0FBa0I7QUFDaEJOLFlBQUFBLEdBQUcsRUFBRWMsSUFBSSxDQUFDZCxHQURNO0FBRWhCTyxZQUFBQSxLQUFLLEVBQUVPLElBQUksQ0FBQ1A7QUFGSSxXQUFsQjtBQUlELFNBTEQ7QUFNQSxhQUFLUSxLQUFMLENBQVcsa0JBQVgsRUFBK0JGLFlBQS9CO0FBQ0Q7QUFYSztBQURIO0FBM0MyQixDQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fbXVsdGlfaW5wdXQnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX29wdGlvbnMnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRzOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfbXVsdGlfaW5wdXRcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIndwY2Z0b19zb3J0ZXJcXFwiPlxcblxcdFxcblxcdFxcdFxcdFxcdFxcdDxkcmFnZ2FibGUgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgOmxpc3Q9XFxcImlucHV0c1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgICBncm91cD1cXFwiaW5wdXRzXFxcIj5cXG5cXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0IHdwY2Z0b19nZW5lcmljX2ZpZWxkX190ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCB2LWZvcj1cXFwiKGlucHV0LCBpbnB1dF9rZXkpIGluIGlucHV0c1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgOmtleT1cXFwiaW5wdXRbJ2tleSddXFxcIj5cXG5cXHRcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19tdWx0aV9pbnB1dF9sYWJlbFxcXCI+e3tpbnB1dFsnbGFiZWwnXX19PC9kaXY+XFxuXFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwiaW5wdXRbJ3ZhbHVlJ11cXFwiIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiaW5wdXRbJ2xhYmVsJ11cXFwiIC8+XFxuXFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8c3BhbiBjbGFzcz1cXFwid3BjZnRvX211bHRpX2lucHV0X2ljb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvd3MtYWx0XFxcIj48L2k+PC9zcGFuPlxcblxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcblxcdFxcdFxcdFxcdFxcdCA8L2RyYWdnYWJsZT5cXG5cXHRcXG5cXHRcXHRcXHRcXHQgPC9kaXY+XFxuXFx0XFx0XFx0IDwvZGl2PlxcblxcblxcdFxcdFxcdCA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKF90aGlzLmZpZWxkX3ZhbHVlKSkgX3RoaXMuZmllbGRfdmFsdWUgPSBKU09OLnBhcnNlKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICBpZiAoIV90aGlzLmZpZWxkX3ZhbHVlLmxlbmd0aCkgX3RoaXMuZmllbGRfdmFsdWUgPSB7fTtcbiAgICAvKkdldCBzb3J0ZWQgaXRlbXMqL1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuZmllbGRfdmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuZmllbGRfdmFsdWVba2V5XTtcblxuICAgICAgdmFyIGNvbmZpZ19pdGVtID0gX3RoaXMuZmllbGRfb3B0aW9ucy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtleSA9PT0gc3RvcmVkX2l0ZW1bJ2tleSddO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnX2l0ZW0gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKHtcbiAgICAgICAga2V5OiBzdG9yZWRfaXRlbVsna2V5J10sXG4gICAgICAgIHZhbHVlOiBzdG9yZWRfaXRlbVsndmFsdWUnXSxcbiAgICAgICAgbGFiZWw6IGNvbmZpZ19pdGVtWydsYWJlbCddXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvKkFkZCBuZXcgaXRlbXMgZnJvbSBjb25maWcqL1xuXG4gICAgX3RoaXMuZmllbGRfb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdfaXRlbSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuaW5wdXRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBjb25maWdfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0b3JlZF9pdGVtKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKGNvbmZpZ19pdGVtKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRzOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihpbnB1dHMpIHtcbiAgICAgICAgdmFyIGlucHV0c192YWx1ZSA9IFtdO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlucHV0c192YWx1ZS5wdXNoKHtcbiAgICAgICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGlucHV0c192YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])