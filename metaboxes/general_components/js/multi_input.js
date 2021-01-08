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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWZjYzUzNzYuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiaW5wdXRzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiX3RoaXMiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3RvcmVkX2l0ZW0iLCJjb25maWdfaXRlbSIsImZpZWxkX29wdGlvbnMiLCJmaW5kIiwieCIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJpbnB1dHNfdmFsdWUiLCJpdGVtIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxvQkFBZCxFQUFvQztBQUNsQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsRUFBbUUsZUFBbkUsQ0FEMkI7QUFFbENDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsTUFBTSxFQUFFO0FBREgsS0FBUDtBQUdELEdBTmlDO0FBT2xDQyxFQUFBQSxRQUFRLEVBQUUsdTRCQVB3QjtBQVFsQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsUUFBSSxPQUFPQSxLQUFLLENBQUNDLFdBQWIsS0FBNkIsUUFBN0IsSUFBeUNDLGtCQUFrQixDQUFDRixLQUFLLENBQUNDLFdBQVAsQ0FBL0QsRUFBb0ZELEtBQUssQ0FBQ0MsV0FBTixHQUFvQkUsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQUssQ0FBQ0MsV0FBakIsQ0FBcEI7QUFDcEYsUUFBSSxDQUFDRCxLQUFLLENBQUNDLFdBQU4sQ0FBa0JJLE1BQXZCLEVBQStCTCxLQUFLLENBQUNDLFdBQU4sR0FBb0IsRUFBcEI7QUFDL0I7O0FBRUFLLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFLLENBQUNDLFdBQWxCLEVBQStCTyxPQUEvQixDQUF1QyxVQUFVQyxHQUFWLEVBQWU7QUFDcEQsVUFBSUMsV0FBVyxHQUFHVixLQUFLLENBQUNDLFdBQU4sQ0FBa0JRLEdBQWxCLENBQWxCOztBQUVBLFVBQUlFLFdBQVcsR0FBR1gsS0FBSyxDQUFDWSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QixVQUFVQyxDQUFWLEVBQWE7QUFDdEQsZUFBT0EsQ0FBQyxDQUFDTCxHQUFGLEtBQVVDLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQ0QsT0FGaUIsQ0FBbEI7O0FBSUEsVUFBSSxPQUFPQyxXQUFQLEtBQXVCLFdBQTNCLEVBQXdDLE9BQU8sS0FBUDs7QUFFeENYLE1BQUFBLEtBQUssQ0FBQ0gsTUFBTixDQUFha0IsSUFBYixDQUFrQjtBQUNoQk4sUUFBQUEsR0FBRyxFQUFFQyxXQUFXLENBQUMsS0FBRCxDQURBO0FBRWhCTSxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQyxPQUFELENBRkY7QUFHaEJPLFFBQUFBLEtBQUssRUFBRU4sV0FBVyxDQUFDLE9BQUQ7QUFIRixPQUFsQjtBQUtELEtBZEQ7QUFlQTs7QUFFQVgsSUFBQUEsS0FBSyxDQUFDWSxhQUFOLENBQW9CSixPQUFwQixDQUE0QixVQUFVRyxXQUFWLEVBQXVCO0FBQ2pELFVBQUlELFdBQVcsR0FBR1YsS0FBSyxDQUFDSCxNQUFOLENBQWFnQixJQUFiLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUMvQyxlQUFPQSxDQUFDLENBQUNMLEdBQUYsS0FBVUUsV0FBVyxDQUFDLEtBQUQsQ0FBNUI7QUFDRCxPQUZpQixDQUFsQjs7QUFJQSxVQUFJRCxXQUFKLEVBQWlCLE9BQU8sS0FBUDs7QUFFakJWLE1BQUFBLEtBQUssQ0FBQ0gsTUFBTixDQUFha0IsSUFBYixDQUFrQkosV0FBbEI7QUFDRCxLQVJEO0FBU0QsR0F6Q2lDO0FBMENsQ08sRUFBQUEsT0FBTyxFQUFFLEVBMUN5QjtBQTJDbENDLEVBQUFBLEtBQUssRUFBRTtBQUNMdEIsSUFBQUEsTUFBTSxFQUFFO0FBQ051QixNQUFBQSxJQUFJLEVBQUUsSUFEQTtBQUVOQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnhCLE1BQWpCLEVBQXlCO0FBQ2hDLFlBQUl5QixZQUFZLEdBQUcsRUFBbkI7QUFDQXpCLFFBQUFBLE1BQU0sQ0FBQ1csT0FBUCxDQUFlLFVBQVVlLElBQVYsRUFBZ0I7QUFDN0JELFVBQUFBLFlBQVksQ0FBQ1AsSUFBYixDQUFrQjtBQUNoQk4sWUFBQUEsR0FBRyxFQUFFYyxJQUFJLENBQUNkLEdBRE07QUFFaEJPLFlBQUFBLEtBQUssRUFBRU8sSUFBSSxDQUFDUDtBQUZJLFdBQWxCO0FBSUQsU0FMRDtBQU1BLGFBQUtRLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkYsWUFBL0I7QUFDRDtBQVhLO0FBREg7QUEzQzJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19tdWx0aV9pbnB1dCcsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfb3B0aW9ucyddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dHM6IFtdXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fc29ydGVyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHQ8ZHJhZ2dhYmxlIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICA6bGlzdD1cXFwiaW5wdXRzXFxcIiBcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICBncm91cD1cXFwiaW5wdXRzXFxcIj5cXG5cXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0IHdwY2Z0b19nZW5lcmljX2ZpZWxkX190ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCB2LWZvcj1cXFwiKGlucHV0LCBpbnB1dF9rZXkpIGluIGlucHV0c1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgOmtleT1cXFwiaW5wdXRbJ2tleSddXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgXFxuXFx0XFx0XFx0XFx0XFx0ICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fbXVsdGlfaW5wdXRfbGFiZWxcXFwiPnt7aW5wdXRbJ2xhYmVsJ119fTwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdCAgXFxuXFx0XFx0XFx0XFx0XFx0ICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwiaW5wdXRbJ3ZhbHVlJ11cXFwiIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiaW5wdXRbJ2xhYmVsJ11cXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0ICBcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHQgPC9kcmFnZ2FibGU+XFxuXFx0XFx0XFx0XFx0XFx0IFxcblxcdFxcdFxcdCA8L2Rpdj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgX3RoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyhfdGhpcy5maWVsZF92YWx1ZSkpIF90aGlzLmZpZWxkX3ZhbHVlID0gSlNPTi5wYXJzZShfdGhpcy5maWVsZF92YWx1ZSk7XG4gICAgaWYgKCFfdGhpcy5maWVsZF92YWx1ZS5sZW5ndGgpIF90aGlzLmZpZWxkX3ZhbHVlID0ge307XG4gICAgLypHZXQgc29ydGVkIGl0ZW1zKi9cblxuICAgIE9iamVjdC5rZXlzKF90aGlzLmZpZWxkX3ZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzdG9yZWRfaXRlbSA9IF90aGlzLmZpZWxkX3ZhbHVlW2tleV07XG5cbiAgICAgIHZhciBjb25maWdfaXRlbSA9IF90aGlzLmZpZWxkX29wdGlvbnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5rZXkgPT09IHN0b3JlZF9pdGVtWydrZXknXTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZ19pdGVtID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBfdGhpcy5pbnB1dHMucHVzaCh7XG4gICAgICAgIGtleTogc3RvcmVkX2l0ZW1bJ2tleSddLFxuICAgICAgICB2YWx1ZTogc3RvcmVkX2l0ZW1bJ3ZhbHVlJ10sXG4gICAgICAgIGxhYmVsOiBjb25maWdfaXRlbVsnbGFiZWwnXVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLypBZGQgbmV3IGl0ZW1zIGZyb20gY29uZmlnKi9cblxuICAgIF90aGlzLmZpZWxkX29wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnX2l0ZW0pIHtcbiAgICAgIHZhciBzdG9yZWRfaXRlbSA9IF90aGlzLmlucHV0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtleSA9PT0gY29uZmlnX2l0ZW1bJ2tleSddO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdG9yZWRfaXRlbSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBfdGhpcy5pbnB1dHMucHVzaChjb25maWdfaXRlbSk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGlucHV0czoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoaW5wdXRzKSB7XG4gICAgICAgIHZhciBpbnB1dHNfdmFsdWUgPSBbXTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpbnB1dHNfdmFsdWUucHVzaCh7XG4gICAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBpbnB1dHNfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])