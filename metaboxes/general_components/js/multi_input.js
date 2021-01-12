(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_input', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_options'],
  data: function data() {
    return {
      inputs: []
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_multi_input\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n\t\t\t<div class=\"wpcfto_sorter\">\n\n\t\t\t\t<draggable class=\"list-group\"\n\t\t\t\t\t\t   :list=\"inputs\"\n\t\t\t\t\t\t   group=\"inputs\">\n\n\t\t\t\t\t<div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text\"\n\t\t\t\t\t\t v-for=\"(input, input_key) in inputs\"\n\t\t\t\t\t\t :key=\"input['key']\">\n\n\t\t\t\t\t  <div class=\"wpcfto_multi_input_label\">{{input['label']}}</div>\n\n\t\t\t\t\t  <input type=\"text\" v-model=\"input['value']\" v-bind:placeholder=\"input['label']\" />\n\n\t\t\t\t\t  <span class=\"wpcfto_multi_input_icon\"><i class=\"fa fa-arrows-alt\"></i></span>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t </draggable>\n\n\t\t\t </div>\n\n\t\t\t <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
    console.log(_this.field_value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjc3YzFmNDEuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiaW5wdXRzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiX3RoaXMiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3RvcmVkX2l0ZW0iLCJjb25maWdfaXRlbSIsImZpZWxkX29wdGlvbnMiLCJmaW5kIiwieCIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiaW5wdXRzX3ZhbHVlIiwiaXRlbSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsb0JBQWQsRUFBb0M7QUFDbENDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLGVBQW5FLENBRDJCO0FBRWxDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRTtBQURILEtBQVA7QUFHRCxHQU5pQztBQU9sQ0MsRUFBQUEsUUFBUSxFQUFFLG1nQ0FQd0I7QUFRbENDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUVBLFFBQUksT0FBT0EsS0FBSyxDQUFDQyxXQUFiLEtBQTZCLFFBQTdCLElBQXlDQyxrQkFBa0IsQ0FBQ0YsS0FBSyxDQUFDQyxXQUFQLENBQS9ELEVBQW9GRCxLQUFLLENBQUNDLFdBQU4sR0FBb0JFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFLLENBQUNDLFdBQWpCLENBQXBCO0FBQ3BGLFFBQUksQ0FBQ0QsS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxNQUF2QixFQUErQkwsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLEVBQXBCO0FBQy9COztBQUVBSyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBSyxDQUFDQyxXQUFsQixFQUErQk8sT0FBL0IsQ0FBdUMsVUFBVUMsR0FBVixFQUFlO0FBQ3BELFVBQUlDLFdBQVcsR0FBR1YsS0FBSyxDQUFDQyxXQUFOLENBQWtCUSxHQUFsQixDQUFsQjs7QUFFQSxVQUFJRSxXQUFXLEdBQUdYLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RELGVBQU9BLENBQUMsQ0FBQ0wsR0FBRixLQUFVQyxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUksT0FBT0MsV0FBUCxLQUF1QixXQUEzQixFQUF3QyxPQUFPLEtBQVA7O0FBRXhDWCxNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0I7QUFDaEJOLFFBQUFBLEdBQUcsRUFBRUMsV0FBVyxDQUFDLEtBQUQsQ0FEQTtBQUVoQk0sUUFBQUEsS0FBSyxFQUFFTixXQUFXLENBQUMsT0FBRCxDQUZGO0FBR2hCTyxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFEO0FBSEYsT0FBbEI7QUFLRCxLQWREO0FBZUFPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBSyxDQUFDQyxXQUFsQjtBQUNBOztBQUVBRCxJQUFBQSxLQUFLLENBQUNZLGFBQU4sQ0FBb0JKLE9BQXBCLENBQTRCLFVBQVVHLFdBQVYsRUFBdUI7QUFDakQsVUFBSUQsV0FBVyxHQUFHVixLQUFLLENBQUNILE1BQU4sQ0FBYWdCLElBQWIsQ0FBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQy9DLGVBQU9BLENBQUMsQ0FBQ0wsR0FBRixLQUFVRSxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUlELFdBQUosRUFBaUIsT0FBTyxLQUFQOztBQUVqQlYsTUFBQUEsS0FBSyxDQUFDSCxNQUFOLENBQWFrQixJQUFiLENBQWtCSixXQUFsQjtBQUNELEtBUkQ7QUFTRCxHQTFDaUM7QUEyQ2xDUyxFQUFBQSxPQUFPLEVBQUUsRUEzQ3lCO0FBNENsQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0x4QixJQUFBQSxNQUFNLEVBQUU7QUFDTnlCLE1BQUFBLElBQUksRUFBRSxJQURBO0FBRU5DLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCMUIsTUFBakIsRUFBeUI7QUFDaEMsWUFBSTJCLFlBQVksR0FBRyxFQUFuQjtBQUNBM0IsUUFBQUEsTUFBTSxDQUFDVyxPQUFQLENBQWUsVUFBVWlCLElBQVYsRUFBZ0I7QUFDN0JELFVBQUFBLFlBQVksQ0FBQ1QsSUFBYixDQUFrQjtBQUNoQk4sWUFBQUEsR0FBRyxFQUFFZ0IsSUFBSSxDQUFDaEIsR0FETTtBQUVoQk8sWUFBQUEsS0FBSyxFQUFFUyxJQUFJLENBQUNUO0FBRkksV0FBbEI7QUFJRCxTQUxEO0FBTUEsYUFBS1UsS0FBTCxDQUFXLGtCQUFYLEVBQStCRixZQUEvQjtBQUNEO0FBWEs7QUFESDtBQTVDMkIsQ0FBcEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX211bHRpX2lucHV0Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZScsICdmaWVsZF9vcHRpb25zJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0czogW11cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX211bHRpX2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIndwY2Z0b19zb3J0ZXJcXFwiPlxcblxcblxcdFxcdFxcdFxcdDxkcmFnZ2FibGUgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgOmxpc3Q9XFxcImlucHV0c1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICBncm91cD1cXFwiaW5wdXRzXFxcIj5cXG5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0IHdwY2Z0b19nZW5lcmljX2ZpZWxkX190ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCB2LWZvcj1cXFwiKGlucHV0LCBpbnB1dF9rZXkpIGluIGlucHV0c1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgOmtleT1cXFwiaW5wdXRbJ2tleSddXFxcIj5cXG5cXG5cXHRcXHRcXHRcXHRcXHQgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19tdWx0aV9pbnB1dF9sYWJlbFxcXCI+e3tpbnB1dFsnbGFiZWwnXX19PC9kaXY+XFxuXFxuXFx0XFx0XFx0XFx0XFx0ICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwiaW5wdXRbJ3ZhbHVlJ11cXFwiIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiaW5wdXRbJ2xhYmVsJ11cXFwiIC8+XFxuXFxuXFx0XFx0XFx0XFx0XFx0ICA8c3BhbiBjbGFzcz1cXFwid3BjZnRvX211bHRpX2lucHV0X2ljb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1hcnJvd3MtYWx0XFxcIj48L2k+PC9zcGFuPlxcblxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcblxcdFxcdFxcdFxcdCA8L2RyYWdnYWJsZT5cXG5cXG5cXHRcXHRcXHQgPC9kaXY+XFxuXFxuXFx0XFx0XFx0IDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcoX3RoaXMuZmllbGRfdmFsdWUpKSBfdGhpcy5maWVsZF92YWx1ZSA9IEpTT04ucGFyc2UoX3RoaXMuZmllbGRfdmFsdWUpO1xuICAgIGlmICghX3RoaXMuZmllbGRfdmFsdWUubGVuZ3RoKSBfdGhpcy5maWVsZF92YWx1ZSA9IHt9O1xuICAgIC8qR2V0IHNvcnRlZCBpdGVtcyovXG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5maWVsZF92YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgc3RvcmVkX2l0ZW0gPSBfdGhpcy5maWVsZF92YWx1ZVtrZXldO1xuXG4gICAgICB2YXIgY29uZmlnX2l0ZW0gPSBfdGhpcy5maWVsZF9vcHRpb25zLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBzdG9yZWRfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWdfaXRlbSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgX3RoaXMuaW5wdXRzLnB1c2goe1xuICAgICAgICBrZXk6IHN0b3JlZF9pdGVtWydrZXknXSxcbiAgICAgICAgdmFsdWU6IHN0b3JlZF9pdGVtWyd2YWx1ZSddLFxuICAgICAgICBsYWJlbDogY29uZmlnX2l0ZW1bJ2xhYmVsJ11cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICAvKkFkZCBuZXcgaXRlbXMgZnJvbSBjb25maWcqL1xuXG4gICAgX3RoaXMuZmllbGRfb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdfaXRlbSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuaW5wdXRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBjb25maWdfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0b3JlZF9pdGVtKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKGNvbmZpZ19pdGVtKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRzOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihpbnB1dHMpIHtcbiAgICAgICAgdmFyIGlucHV0c192YWx1ZSA9IFtdO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlucHV0c192YWx1ZS5wdXNoKHtcbiAgICAgICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGlucHV0c192YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])