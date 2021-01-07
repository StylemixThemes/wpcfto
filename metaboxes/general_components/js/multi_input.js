(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_input', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_options'],
  data: function data() {
    return {
      inputs: []
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input\" v-bind:class=\"field_id\">\n        \n            <label v-html=\"field_label\"></label>\n                        \n\t\t\t<div class=\"wpcfto_sorter\">\n\t\t\t\t\t\t\n\t\t\t\t<draggable class=\"list-group\" \n\t\t\t\t\t\t   :list=\"inputs\" \n\t\t\t\t\t\t   group=\"inputs\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text\"\n\t\t\t\t\t\t v-for=\"(input, input_key) in inputs\"\n\t\t\t\t\t\t :key=\"input['key']\">\n\t\t\t\t\t\t \n\t\t\t\t\t  <div class=\"wpcfto_multi_input_label\">{{input['label']}}</div>\n\t\t\t\t\t  \n\t\t\t\t\t  <input type=\"text\" v-model=\"input['value']\" v-bind:placeholder=\"input['label']\" />\n\t\t\t\t\t  \n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t </draggable>\n\t\t\t\t\t \n\t\t\t </div>\n             \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjI0NzdhYjcuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiaW5wdXRzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiX3RoaXMiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3RvcmVkX2l0ZW0iLCJjb25maWdfaXRlbSIsImZpZWxkX29wdGlvbnMiLCJmaW5kIiwieCIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiaW5wdXRzX3ZhbHVlIiwiaXRlbSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsb0JBQWQsRUFBb0M7QUFDbENDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLGVBQW5FLENBRDJCO0FBRWxDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRTtBQURILEtBQVA7QUFHRCxHQU5pQztBQU9sQ0MsRUFBQUEsUUFBUSxFQUFFLHU0QkFQd0I7QUFRbENDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUVBLFFBQUksT0FBT0EsS0FBSyxDQUFDQyxXQUFiLEtBQTZCLFFBQTdCLElBQXlDQyxrQkFBa0IsQ0FBQ0YsS0FBSyxDQUFDQyxXQUFQLENBQS9ELEVBQW9GRCxLQUFLLENBQUNDLFdBQU4sR0FBb0JFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFLLENBQUNDLFdBQWpCLENBQXBCO0FBQ3BGLFFBQUksQ0FBQ0QsS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxNQUF2QixFQUErQkwsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLEVBQXBCO0FBQy9COztBQUVBSyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBSyxDQUFDQyxXQUFsQixFQUErQk8sT0FBL0IsQ0FBdUMsVUFBVUMsR0FBVixFQUFlO0FBQ3BELFVBQUlDLFdBQVcsR0FBR1YsS0FBSyxDQUFDQyxXQUFOLENBQWtCUSxHQUFsQixDQUFsQjs7QUFFQSxVQUFJRSxXQUFXLEdBQUdYLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RELGVBQU9BLENBQUMsQ0FBQ0wsR0FBRixLQUFVQyxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUksT0FBT0MsV0FBUCxLQUF1QixXQUEzQixFQUF3QyxPQUFPLEtBQVA7O0FBRXhDWCxNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0I7QUFDaEJOLFFBQUFBLEdBQUcsRUFBRUMsV0FBVyxDQUFDLEtBQUQsQ0FEQTtBQUVoQk0sUUFBQUEsS0FBSyxFQUFFTixXQUFXLENBQUMsT0FBRCxDQUZGO0FBR2hCTyxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFEO0FBSEYsT0FBbEI7QUFLRCxLQWREO0FBZUFPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBSyxDQUFDQyxXQUFsQjtBQUNBOztBQUVBRCxJQUFBQSxLQUFLLENBQUNZLGFBQU4sQ0FBb0JKLE9BQXBCLENBQTRCLFVBQVVHLFdBQVYsRUFBdUI7QUFDakQsVUFBSUQsV0FBVyxHQUFHVixLQUFLLENBQUNILE1BQU4sQ0FBYWdCLElBQWIsQ0FBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQy9DLGVBQU9BLENBQUMsQ0FBQ0wsR0FBRixLQUFVRSxXQUFXLENBQUMsS0FBRCxDQUE1QjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUlELFdBQUosRUFBaUIsT0FBTyxLQUFQOztBQUVqQlYsTUFBQUEsS0FBSyxDQUFDSCxNQUFOLENBQWFrQixJQUFiLENBQWtCSixXQUFsQjtBQUNELEtBUkQ7QUFTRCxHQTFDaUM7QUEyQ2xDUyxFQUFBQSxPQUFPLEVBQUUsRUEzQ3lCO0FBNENsQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0x4QixJQUFBQSxNQUFNLEVBQUU7QUFDTnlCLE1BQUFBLElBQUksRUFBRSxJQURBO0FBRU5DLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCMUIsTUFBakIsRUFBeUI7QUFDaEMsWUFBSTJCLFlBQVksR0FBRyxFQUFuQjtBQUNBM0IsUUFBQUEsTUFBTSxDQUFDVyxPQUFQLENBQWUsVUFBVWlCLElBQVYsRUFBZ0I7QUFDN0JELFVBQUFBLFlBQVksQ0FBQ1QsSUFBYixDQUFrQjtBQUNoQk4sWUFBQUEsR0FBRyxFQUFFZ0IsSUFBSSxDQUFDaEIsR0FETTtBQUVoQk8sWUFBQUEsS0FBSyxFQUFFUyxJQUFJLENBQUNUO0FBRkksV0FBbEI7QUFJRCxTQUxEO0FBTUEsYUFBS1UsS0FBTCxDQUFXLGtCQUFYLEVBQStCRixZQUEvQjtBQUNEO0FBWEs7QUFESDtBQTVDMkIsQ0FBcEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX211bHRpX2lucHV0Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZScsICdmaWVsZF9vcHRpb25zJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0czogW11cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCIgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIndwY2Z0b19zb3J0ZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdDxkcmFnZ2FibGUgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgIDpsaXN0PVxcXCJpbnB1dHNcXFwiIFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgIGdyb3VwPVxcXCJpbnB1dHNcXFwiPlxcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ZsZXhfaW5wdXQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX3RleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0IHYtZm9yPVxcXCIoaW5wdXQsIGlucHV0X2tleSkgaW4gaW5wdXRzXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCA6a2V5PVxcXCJpbnB1dFsna2V5J11cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdCBcXG5cXHRcXHRcXHRcXHRcXHQgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19tdWx0aV9pbnB1dF9sYWJlbFxcXCI+e3tpbnB1dFsnbGFiZWwnXX19PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0ICBcXG5cXHRcXHRcXHRcXHRcXHQgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJpbnB1dFsndmFsdWUnXVxcXCIgdi1iaW5kOnBsYWNlaG9sZGVyPVxcXCJpbnB1dFsnbGFiZWwnXVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHQgIFxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdCA8L2RyYWdnYWJsZT5cXG5cXHRcXHRcXHRcXHRcXHQgXFxuXFx0XFx0XFx0IDwvZGl2PlxcbiAgICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKF90aGlzLmZpZWxkX3ZhbHVlKSkgX3RoaXMuZmllbGRfdmFsdWUgPSBKU09OLnBhcnNlKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICBpZiAoIV90aGlzLmZpZWxkX3ZhbHVlLmxlbmd0aCkgX3RoaXMuZmllbGRfdmFsdWUgPSB7fTtcbiAgICAvKkdldCBzb3J0ZWQgaXRlbXMqL1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuZmllbGRfdmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuZmllbGRfdmFsdWVba2V5XTtcblxuICAgICAgdmFyIGNvbmZpZ19pdGVtID0gX3RoaXMuZmllbGRfb3B0aW9ucy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtleSA9PT0gc3RvcmVkX2l0ZW1bJ2tleSddO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnX2l0ZW0gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKHtcbiAgICAgICAga2V5OiBzdG9yZWRfaXRlbVsna2V5J10sXG4gICAgICAgIHZhbHVlOiBzdG9yZWRfaXRlbVsndmFsdWUnXSxcbiAgICAgICAgbGFiZWw6IGNvbmZpZ19pdGVtWydsYWJlbCddXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhfdGhpcy5maWVsZF92YWx1ZSk7XG4gICAgLypBZGQgbmV3IGl0ZW1zIGZyb20gY29uZmlnKi9cblxuICAgIF90aGlzLmZpZWxkX29wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnX2l0ZW0pIHtcbiAgICAgIHZhciBzdG9yZWRfaXRlbSA9IF90aGlzLmlucHV0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtleSA9PT0gY29uZmlnX2l0ZW1bJ2tleSddO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdG9yZWRfaXRlbSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBfdGhpcy5pbnB1dHMucHVzaChjb25maWdfaXRlbSk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGlucHV0czoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoaW5wdXRzKSB7XG4gICAgICAgIHZhciBpbnB1dHNfdmFsdWUgPSBbXTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpbnB1dHNfdmFsdWUucHVzaCh7XG4gICAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBpbnB1dHNfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])