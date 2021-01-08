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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmZmY2ZiZC5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJpbnB1dHMiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJfdGhpcyIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzdG9yZWRfaXRlbSIsImNvbmZpZ19pdGVtIiwiZmllbGRfb3B0aW9ucyIsImZpbmQiLCJ4IiwicHVzaCIsInZhbHVlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJpbnB1dHNfdmFsdWUiLCJpdGVtIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxvQkFBZCxFQUFvQztBQUNsQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsRUFBbUUsZUFBbkUsQ0FEMkI7QUFFbENDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsTUFBTSxFQUFFO0FBREgsS0FBUDtBQUdELEdBTmlDO0FBT2xDQyxFQUFBQSxRQUFRLEVBQUUsdTRCQVB3QjtBQVFsQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsUUFBSSxPQUFPQSxLQUFLLENBQUNDLFdBQWIsS0FBNkIsUUFBN0IsSUFBeUNDLGtCQUFrQixDQUFDRixLQUFLLENBQUNDLFdBQVAsQ0FBL0QsRUFBb0ZELEtBQUssQ0FBQ0MsV0FBTixHQUFvQkUsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQUssQ0FBQ0MsV0FBakIsQ0FBcEI7QUFDcEYsUUFBSSxDQUFDRCxLQUFLLENBQUNDLFdBQU4sQ0FBa0JJLE1BQXZCLEVBQStCTCxLQUFLLENBQUNDLFdBQU4sR0FBb0IsRUFBcEI7QUFDL0I7O0FBRUFLLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFLLENBQUNDLFdBQWxCLEVBQStCTyxPQUEvQixDQUF1QyxVQUFVQyxHQUFWLEVBQWU7QUFDcEQsVUFBSUMsV0FBVyxHQUFHVixLQUFLLENBQUNDLFdBQU4sQ0FBa0JRLEdBQWxCLENBQWxCOztBQUVBLFVBQUlFLFdBQVcsR0FBR1gsS0FBSyxDQUFDWSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QixVQUFVQyxDQUFWLEVBQWE7QUFDdEQsZUFBT0EsQ0FBQyxDQUFDTCxHQUFGLEtBQVVDLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQ0QsT0FGaUIsQ0FBbEI7O0FBSUEsVUFBSSxPQUFPQyxXQUFQLEtBQXVCLFdBQTNCLEVBQXdDLE9BQU8sS0FBUDs7QUFFeENYLE1BQUFBLEtBQUssQ0FBQ0gsTUFBTixDQUFha0IsSUFBYixDQUFrQjtBQUNoQk4sUUFBQUEsR0FBRyxFQUFFQyxXQUFXLENBQUMsS0FBRCxDQURBO0FBRWhCTSxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFELENBRkY7QUFHaEJPLFFBQUFBLEtBQUssRUFBRU4sV0FBVyxDQUFDLE9BQUQ7QUFIRixPQUFsQjtBQUtELEtBZEQ7QUFlQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVluQixLQUFLLENBQUNDLFdBQWxCO0FBQ0E7O0FBRUFELElBQUFBLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkosT0FBcEIsQ0FBNEIsVUFBVUcsV0FBVixFQUF1QjtBQUNqRCxVQUFJRCxXQUFXLEdBQUdWLEtBQUssQ0FBQ0gsTUFBTixDQUFhZ0IsSUFBYixDQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDL0MsZUFBT0EsQ0FBQyxDQUFDTCxHQUFGLEtBQVVFLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQ0QsT0FGaUIsQ0FBbEI7O0FBSUEsVUFBSUQsV0FBSixFQUFpQixPQUFPLEtBQVA7O0FBRWpCVixNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0JKLFdBQWxCO0FBQ0QsS0FSRDtBQVNELEdBMUNpQztBQTJDbENTLEVBQUFBLE9BQU8sRUFBRSxFQTNDeUI7QUE0Q2xDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTHhCLElBQUFBLE1BQU0sRUFBRTtBQUNOeUIsTUFBQUEsSUFBSSxFQUFFLElBREE7QUFFTkMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUIxQixNQUFqQixFQUF5QjtBQUNoQyxZQUFJMkIsWUFBWSxHQUFHLEVBQW5CO0FBQ0EzQixRQUFBQSxNQUFNLENBQUNXLE9BQVAsQ0FBZSxVQUFVaUIsSUFBVixFQUFnQjtBQUM3QkQsVUFBQUEsWUFBWSxDQUFDVCxJQUFiLENBQWtCO0FBQ2hCTixZQUFBQSxHQUFHLEVBQUVnQixJQUFJLENBQUNoQixHQURNO0FBRWhCTyxZQUFBQSxLQUFLLEVBQUVTLElBQUksQ0FBQ1Q7QUFGSSxXQUFsQjtBQUlELFNBTEQ7QUFNQSxhQUFLVSxLQUFMLENBQVcsa0JBQVgsRUFBK0JGLFlBQS9CO0FBQ0Q7QUFYSztBQURIO0FBNUMyQixDQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fbXVsdGlfaW5wdXQnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX29wdGlvbnMnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRzOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIiBcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ZsZXhfaW5wdXRcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwid3BjZnRvX3NvcnRlclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0PGRyYWdnYWJsZSBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgOmxpc3Q9XFxcImlucHV0c1xcXCIgXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgZ3JvdXA9XFxcImlucHV0c1xcXCI+XFxuXFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fdGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgdi1mb3I9XFxcIihpbnB1dCwgaW5wdXRfa2V5KSBpbiBpbnB1dHNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0IDprZXk9XFxcImlucHV0WydrZXknXVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0IFxcblxcdFxcdFxcdFxcdFxcdCAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX211bHRpX2lucHV0X2xhYmVsXFxcIj57e2lucHV0WydsYWJlbCddfX08L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQgIFxcblxcdFxcdFxcdFxcdFxcdCAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcImlucHV0Wyd2YWx1ZSddXFxcIiB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImlucHV0WydsYWJlbCddXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdCAgXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0IDwvZHJhZ2dhYmxlPlxcblxcdFxcdFxcdFxcdFxcdCBcXG5cXHRcXHRcXHQgPC9kaXY+XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcoX3RoaXMuZmllbGRfdmFsdWUpKSBfdGhpcy5maWVsZF92YWx1ZSA9IEpTT04ucGFyc2UoX3RoaXMuZmllbGRfdmFsdWUpO1xuICAgIGlmICghX3RoaXMuZmllbGRfdmFsdWUubGVuZ3RoKSBfdGhpcy5maWVsZF92YWx1ZSA9IHt9O1xuICAgIC8qR2V0IHNvcnRlZCBpdGVtcyovXG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5maWVsZF92YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgc3RvcmVkX2l0ZW0gPSBfdGhpcy5maWVsZF92YWx1ZVtrZXldO1xuXG4gICAgICB2YXIgY29uZmlnX2l0ZW0gPSBfdGhpcy5maWVsZF9vcHRpb25zLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBzdG9yZWRfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWdfaXRlbSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgX3RoaXMuaW5wdXRzLnB1c2goe1xuICAgICAgICBrZXk6IHN0b3JlZF9pdGVtWydrZXknXSxcbiAgICAgICAgdmFsdWU6IHN0b3JlZF9pdGVtWyd2YWx1ZSddLFxuICAgICAgICBsYWJlbDogY29uZmlnX2l0ZW1bJ2xhYmVsJ11cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICAvKkFkZCBuZXcgaXRlbXMgZnJvbSBjb25maWcqL1xuXG4gICAgX3RoaXMuZmllbGRfb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdfaXRlbSkge1xuICAgICAgdmFyIHN0b3JlZF9pdGVtID0gX3RoaXMuaW5wdXRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2V5ID09PSBjb25maWdfaXRlbVsna2V5J107XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0b3JlZF9pdGVtKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIF90aGlzLmlucHV0cy5wdXNoKGNvbmZpZ19pdGVtKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRzOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihpbnB1dHMpIHtcbiAgICAgICAgdmFyIGlucHV0c192YWx1ZSA9IFtdO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlucHV0c192YWx1ZS5wdXNoKHtcbiAgICAgICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGlucHV0c192YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])