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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNzMxNDMwMmQuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiaW5wdXRzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiX3RoaXMiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3RvcmVkX2l0ZW0iLCJjb25maWdfaXRlbSIsImZpZWxkX29wdGlvbnMiLCJmaW5kIiwieCIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJpbnB1dHNfdmFsdWUiLCJpdGVtIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxvQkFBZCxFQUFvQztBQUNsQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsRUFBbUUsZUFBbkUsQ0FEMkI7QUFFbENDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsTUFBTSxFQUFFO0FBREgsS0FBUDtBQUdELEdBTmlDO0FBT2xDQyxFQUFBQSxRQUFRLEVBQUUsbWdDQVB3QjtBQVFsQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsUUFBSSxPQUFPQSxLQUFLLENBQUNDLFdBQWIsS0FBNkIsUUFBN0IsSUFBeUNDLGtCQUFrQixDQUFDRixLQUFLLENBQUNDLFdBQVAsQ0FBL0QsRUFBb0ZELEtBQUssQ0FBQ0MsV0FBTixHQUFvQkUsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQUssQ0FBQ0MsV0FBakIsQ0FBcEI7QUFDcEYsUUFBSSxDQUFDRCxLQUFLLENBQUNDLFdBQU4sQ0FBa0JJLE1BQXZCLEVBQStCTCxLQUFLLENBQUNDLFdBQU4sR0FBb0IsRUFBcEI7QUFDL0I7O0FBRUFLLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFLLENBQUNDLFdBQWxCLEVBQStCTyxPQUEvQixDQUF1QyxVQUFVQyxHQUFWLEVBQWU7QUFDcEQsVUFBSUMsV0FBVyxHQUFHVixLQUFLLENBQUNDLFdBQU4sQ0FBa0JRLEdBQWxCLENBQWxCOztBQUVBLFVBQUlFLFdBQVcsR0FBR1gsS0FBSyxDQUFDWSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QixVQUFVQyxDQUFWLEVBQWE7QUFDdEQsZUFBT0EsQ0FBQyxDQUFDTCxHQUFGLEtBQVVDLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQ0QsT0FGaUIsQ0FBbEI7O0FBSUEsVUFBSSxPQUFPQyxXQUFQLEtBQXVCLFdBQTNCLEVBQXdDLE9BQU8sS0FBUDs7QUFFeENYLE1BQUFBLEtBQUssQ0FBQ0gsTUFBTixDQUFha0IsSUFBYixDQUFrQjtBQUNoQk4sUUFBQUEsR0FBRyxFQUFFQyxXQUFXLENBQUMsS0FBRCxDQURBO0FBRWhCTSxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFELENBRkY7QUFHaEJPLFFBQUFBLEtBQUssRUFBRU4sV0FBVyxDQUFDLE9BQUQ7QUFIRixPQUFsQjtBQUtELEtBZEQ7QUFlQTs7QUFFQVgsSUFBQUEsS0FBSyxDQUFDWSxhQUFOLENBQW9CSixPQUFwQixDQUE0QixVQUFVRyxXQUFWLEVBQXVCO0FBQ2pELFVBQUlELFdBQVcsR0FBR1YsS0FBSyxDQUFDSCxNQUFOLENBQWFnQixJQUFiLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUMvQyxlQUFPQSxDQUFDLENBQUNMLEdBQUYsS0FBVUUsV0FBVyxDQUFDLEtBQUQsQ0FBNUI7QUFDRCxPQUZpQixDQUFsQjs7QUFJQSxVQUFJRCxXQUFKLEVBQWlCLE9BQU8sS0FBUDs7QUFFakJWLE1BQUFBLEtBQUssQ0FBQ0gsTUFBTixDQUFha0IsSUFBYixDQUFrQkosV0FBbEI7QUFDRCxLQVJEO0FBU0QsR0F6Q2lDO0FBMENsQ08sRUFBQUEsT0FBTyxFQUFFLEVBMUN5QjtBQTJDbENDLEVBQUFBLEtBQUssRUFBRTtBQUNMdEIsSUFBQUEsTUFBTSxFQUFFO0FBQ051QixNQUFBQSxJQUFJLEVBQUUsSUFEQTtBQUVOQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnhCLE1BQWpCLEVBQXlCO0FBQ2hDLFlBQUl5QixZQUFZLEdBQUcsRUFBbkI7QUFDQXpCLFFBQUFBLE1BQU0sQ0FBQ1csT0FBUCxDQUFlLFVBQVVlLElBQVYsRUFBZ0I7QUFDN0JELFVBQUFBLFlBQVksQ0FBQ1AsSUFBYixDQUFrQjtBQUNoQk4sWUFBQUEsR0FBRyxFQUFFYyxJQUFJLENBQUNkLEdBRE07QUFFaEJPLFlBQUFBLEtBQUssRUFBRU8sSUFBSSxDQUFDUDtBQUZJLFdBQWxCO0FBSUQsU0FMRDtBQU1BLGFBQUtRLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkYsWUFBL0I7QUFDRDtBQVhLO0FBREg7QUEzQzJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19tdWx0aV9pbnB1dCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfb3B0aW9ucyddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dHM6IFtdXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9tdWx0aV9pbnB1dFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlIDpmaWVsZHM9XFxcImZpZWxkc1xcXCIgOmZpZWxkX2xhYmVsPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZT5cXG5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fc29ydGVyXFxcIj5cXG5cXG5cXHRcXHRcXHRcXHQ8ZHJhZ2dhYmxlIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgIDpsaXN0PVxcXCJpbnB1dHNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgZ3JvdXA9XFxcImlucHV0c1xcXCI+XFxuXFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fdGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgdi1mb3I9XFxcIihpbnB1dCwgaW5wdXRfa2V5KSBpbiBpbnB1dHNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0IDprZXk9XFxcImlucHV0WydrZXknXVxcXCI+XFxuXFxuXFx0XFx0XFx0XFx0XFx0ICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fbXVsdGlfaW5wdXRfbGFiZWxcXFwiPnt7aW5wdXRbJ2xhYmVsJ119fTwvZGl2PlxcblxcblxcdFxcdFxcdFxcdFxcdCAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcImlucHV0Wyd2YWx1ZSddXFxcIiB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImlucHV0WydsYWJlbCddXFxcIiAvPlxcblxcblxcdFxcdFxcdFxcdFxcdCAgPHNwYW4gY2xhc3M9XFxcIndwY2Z0b19tdWx0aV9pbnB1dF9pY29uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3dzLWFsdFxcXCI+PC9pPjwvc3Bhbj5cXG5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXG5cXHRcXHRcXHRcXHQgPC9kcmFnZ2FibGU+XFxuXFxuXFx0XFx0XFx0IDwvZGl2PlxcblxcblxcdFxcdFxcdCA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKF90aGlzLmZpZWxkX3ZhbHVlKSkgX3RoaXMuZmllbGRfdmFsdWUgPSBKU09OLnBhcnNlKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICBpZiAoIV90aGlzLmZpZWxkX3ZhbHVlLmxlbmd0aCkgX3RoaXMuZmllbGRfdmFsdWUgPSB7fTtcbiAgICAvKkdldCBzb3J0ZWQgaXRlbXMqL1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuZmllbGRfdmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuZmllbGRfdmFsdWVba2V5XTtcblxuICAgICAgdmFyIGNvbmZpZ19pdGVtID0gX3RoaXMuZmllbGRfb3B0aW9ucy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtleSA9PT0gc3RvcmVkX2l0ZW1bJ2tleSddO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnX2l0ZW0gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKHtcbiAgICAgICAga2V5OiBzdG9yZWRfaXRlbVsna2V5J10sXG4gICAgICAgIHZhbHVlOiBzdG9yZWRfaXRlbVsndmFsdWUnXSxcbiAgICAgICAgbGFiZWw6IGNvbmZpZ19pdGVtWydsYWJlbCddXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvKkFkZCBuZXcgaXRlbXMgZnJvbSBjb25maWcqL1xuXG4gICAgX3RoaXMuZmllbGRfb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdfaXRlbSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuaW5wdXRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBjb25maWdfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0b3JlZF9pdGVtKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKGNvbmZpZ19pdGVtKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRzOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihpbnB1dHMpIHtcbiAgICAgICAgdmFyIGlucHV0c192YWx1ZSA9IFtdO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlucHV0c192YWx1ZS5wdXNoKHtcbiAgICAgICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGlucHV0c192YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])