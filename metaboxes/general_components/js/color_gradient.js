(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_color_gradient', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  components: {
    'slider-picker': VueColor.Chrome
  },
  data: function data() {
    return {
      gradient: {},
      copy_gradient: {}
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_color_gradient\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_color_gradient\">\n                    <div class=\"wpcfto_color_gradient_group\">\n                        <label>From</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': gradient.from.input_value}\" @click=\"$refs.field_name_from.focus()\"></span>\n                            <input type=\"text\" name=\"from\" v-model=\"gradient.from.input_value\" ref=\"field_name_from\"/>\n                            <div><slider-picker v-model=\"gradient.from.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                    <div class=\"wpcfto_color_gradient_group\">\n                        <label>To</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': gradient.to.input_value}\" @click=\"$refs.field_name_to.focus()\"></span>\n                            <input type=\"text\" name=\"to\" v-model=\"gradient.to.input_value\" ref=\"field_name_to\" />\n                            <div><slider-picker v-model=\"gradient.to.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  created: function created() {
    // JSON parse for Post Meta
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) {
      this.field_value = JSON.parse(this.field_value);
    }

    this.gradient = {
      from: {
        input_value: typeof this.field_value.from !== 'undefined' ? this.field_value.from : '',
        value: typeof this.field_value.from !== 'undefined' ? this.field_value.from : ''
      },
      to: {
        input_value: typeof this.field_value.to !== 'undefined' ? this.field_value.to : '',
        value: typeof this.field_value.to !== 'undefined' ? this.field_value.to : ''
      }
    };
    this.set_copy_gradient();
  },
  methods: {
    vuecolor_to_string: function vuecolor_to_string(color) {
      return color.a === 1 ? color.hex : 'rgba(' + color.rgba.r + ',' + color.rgba.g + ',' + color.rgba.b + ',' + color.rgba.a + ')';
    },
    set_copy_gradient: function set_copy_gradient() {
      this.copy_gradient = JSON.parse(JSON.stringify(this.gradient));
    }
  },
  watch: {
    gradient: {
      deep: true,
      handler: function handler(gradient) {
        var _this = this;

        var value = {};
        Object.keys(gradient).forEach(function (key) {
          if (gradient[key].input_value !== _this.copy_gradient[key].input_value) {
            value[key] = gradient[key].input_value;

            _this.$set(gradient[key], 'value', value[key]);
          } else {
            value[key] = typeof gradient[key].value === 'string' ? gradient[key].value : _this.vuecolor_to_string(gradient[key].value);

            _this.$set(gradient[key], 'input_value', value[key]);
          }
        });
        this.set_copy_gradient();
        this.$emit('wpcfto-get-value', value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWFlMWI0ZTIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnRzIiwiVnVlQ29sb3IiLCJDaHJvbWUiLCJkYXRhIiwiZ3JhZGllbnQiLCJjb3B5X2dyYWRpZW50IiwidGVtcGxhdGUiLCJjcmVhdGVkIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJmcm9tIiwiaW5wdXRfdmFsdWUiLCJ2YWx1ZSIsInRvIiwic2V0X2NvcHlfZ3JhZGllbnQiLCJtZXRob2RzIiwidnVlY29sb3JfdG9fc3RyaW5nIiwiY29sb3IiLCJhIiwiaGV4IiwicmdiYSIsInIiLCJnIiwiYiIsInN0cmluZ2lmeSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJfdGhpcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiJHNldCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsdUJBQWQsRUFBdUM7QUFDckNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDhCO0FBRXJDQyxFQUFBQSxVQUFVLEVBQUU7QUFDVixxQkFBaUJDLFFBQVEsQ0FBQ0M7QUFEaEIsR0FGeUI7QUFLckNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsUUFBUSxFQUFFLEVBREw7QUFFTEMsTUFBQUEsYUFBYSxFQUFFO0FBRlYsS0FBUDtBQUlELEdBVm9DO0FBV3JDQyxFQUFBQSxRQUFRLEVBQUUsbXJEQVgyQjtBQVlyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixD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QUF4RCxHQUFnRWdCLEtBQUssQ0FBQ1osa0JBQU4sQ0FBeUJkLFFBQVEsQ0FBQzhCLEdBQUQsQ0FBUixDQUFjcEIsS0FBdkMsQ0FBN0U7O0FBRUFnQixZQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVy9CLFFBQVEsQ0FBQzhCLEdBQUQsQ0FBbkIsRUFBMEIsYUFBMUIsRUFBeUNwQixLQUFLLENBQUNvQixHQUFELENBQTlDO0FBQ0Q7QUFDRixTQVZEO0FBV0EsYUFBS2xCLGlCQUFMO0FBQ0EsYUFBS29CLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnRCLEtBQS9CO0FBQ0Q7QUFuQk87QUFETDtBQXRDOEIsQ0FBdkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2NvbG9yX2dyYWRpZW50Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ3NsaWRlci1waWNrZXInOiBWdWVDb2xvci5DaHJvbWVcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JhZGllbnQ6IHt9LFxuICAgICAgY29weV9ncmFkaWVudDoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2NvbG9yX2dyYWRpZW50XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2NvbG9yX2dyYWRpZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19jb2xvcl9ncmFkaWVudF9ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZyb208L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBncmFkaWVudC5mcm9tLmlucHV0X3ZhbHVlfVxcXCIgQGNsaWNrPVxcXCIkcmVmcy5maWVsZF9uYW1lX2Zyb20uZm9jdXMoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZnJvbVxcXCIgdi1tb2RlbD1cXFwiZ3JhZGllbnQuZnJvbS5pbnB1dF92YWx1ZVxcXCIgcmVmPVxcXCJmaWVsZF9uYW1lX2Zyb21cXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2xpZGVyLXBpY2tlciB2LW1vZGVsPVxcXCJncmFkaWVudC5mcm9tLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19jb2xvcl9ncmFkaWVudF9ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdG1fY29sb3JwaWNrZXJfd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogZ3JhZGllbnQudG8uaW5wdXRfdmFsdWV9XFxcIiBAY2xpY2s9XFxcIiRyZWZzLmZpZWxkX25hbWVfdG8uZm9jdXMoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidG9cXFwiIHYtbW9kZWw9XFxcImdyYWRpZW50LnRvLmlucHV0X3ZhbHVlXFxcIiByZWY9XFxcImZpZWxkX25hbWVfdG9cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNsaWRlci1waWNrZXIgdi1tb2RlbD1cXFwiZ3JhZGllbnQudG8udmFsdWVcXFwiPjwvc2xpZGVyLXBpY2tlcj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAvLyBKU09OIHBhcnNlIGZvciBQb3N0IE1ldGFcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSkge1xuICAgICAgdGhpcy5maWVsZF92YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFkaWVudCA9IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgaW5wdXRfdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLmZyb20gIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5mcm9tIDogJycsXG4gICAgICAgIHZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5mcm9tICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUuZnJvbSA6ICcnXG4gICAgICB9LFxuICAgICAgdG86IHtcbiAgICAgICAgaW5wdXRfdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnRvICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUudG8gOiAnJyxcbiAgICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnRvICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUudG8gOiAnJ1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRfY29weV9ncmFkaWVudCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdnVlY29sb3JfdG9fc3RyaW5nOiBmdW5jdGlvbiB2dWVjb2xvcl90b19zdHJpbmcoY29sb3IpIHtcbiAgICAgIHJldHVybiBjb2xvci5hID09PSAxID8gY29sb3IuaGV4IDogJ3JnYmEoJyArIGNvbG9yLnJnYmEuciArICcsJyArIGNvbG9yLnJnYmEuZyArICcsJyArIGNvbG9yLnJnYmEuYiArICcsJyArIGNvbG9yLnJnYmEuYSArICcpJztcbiAgICB9LFxuICAgIHNldF9jb3B5X2dyYWRpZW50OiBmdW5jdGlvbiBzZXRfY29weV9ncmFkaWVudCgpIHtcbiAgICAgIHRoaXMuY29weV9ncmFkaWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5ncmFkaWVudCkpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBncmFkaWVudDoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoZ3JhZGllbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JhZGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChncmFkaWVudFtrZXldLmlucHV0X3ZhbHVlICE9PSBfdGhpcy5jb3B5X2dyYWRpZW50W2tleV0uaW5wdXRfdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBncmFkaWVudFtrZXldLmlucHV0X3ZhbHVlO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2V0KGdyYWRpZW50W2tleV0sICd2YWx1ZScsIHZhbHVlW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gdHlwZW9mIGdyYWRpZW50W2tleV0udmFsdWUgPT09ICdzdHJpbmcnID8gZ3JhZGllbnRba2V5XS52YWx1ZSA6IF90aGlzLnZ1ZWNvbG9yX3RvX3N0cmluZyhncmFkaWVudFtrZXldLnZhbHVlKTtcblxuICAgICAgICAgICAgX3RoaXMuJHNldChncmFkaWVudFtrZXldLCAnaW5wdXRfdmFsdWUnLCB2YWx1ZVtrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldF9jb3B5X2dyYWRpZW50KCk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])