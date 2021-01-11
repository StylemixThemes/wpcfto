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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_color_gradient\" v-bind:class=\"field_id\">\n            <div class=\"wpcfto_field_title\">\n                <label v-html=\"field_label\"></label>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n            </div>\n\n            <div class=\"wpcfto_color_gradient\">\n                <div class=\"wpcfto_color_gradient_group\">\n                    <label>From</label>\n                    <div class=\"stm_colorpicker_wrapper\">\n                        <span v-bind:style=\"{'background-color': gradient.from.input_value}\" @click=\"$refs.field_name_from.focus()\"></span>\n                        <input type=\"text\" name=\"from\" v-model=\"gradient.from.input_value\" ref=\"field_name_from\"/>\n                        <div><slider-picker v-model=\"gradient.from.value\"></slider-picker></div>\n                    </div>\n                </div>\n                <div class=\"wpcfto_color_gradient_group\">\n                    <label>To</label>\n                    <div class=\"stm_colorpicker_wrapper\">\n                        <span v-bind:style=\"{'background-color': gradient.to.input_value}\" @click=\"$refs.field_name_to.focus()\"></span>\n                        <input type=\"text\" name=\"to\" v-model=\"gradient.to.input_value\" ref=\"field_name_to\" />\n                        <div><slider-picker v-model=\"gradient.to.value\"></slider-picker></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjVjMzk2YjMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnRzIiwiVnVlQ29sb3IiLCJDaHJvbWUiLCJkYXRhIiwiZ3JhZGllbnQiLCJjb3B5X2dyYWRpZW50IiwidGVtcGxhdGUiLCJjcmVhdGVkIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJmcm9tIiwiaW5wdXRfdmFsdWUiLCJ2YWx1ZSIsInRvIiwic2V0X2NvcHlfZ3JhZGllbnQiLCJtZXRob2RzIiwidnVlY29sb3JfdG9fc3RyaW5nIiwiY29sb3IiLCJhIiwiaGV4IiwicmdiYSIsInIiLCJnIiwiYiIsInN0cmluZ2lmeSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJfdGhpcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiJHNldCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsdUJBQWQsRUFBdUM7QUFDckNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDhCO0FBRXJDQyxFQUFBQSxVQUFVLEVBQUU7QUFDVixxQkFBaUJDLFFBQVEsQ0FBQ0M7QUFEaEIsR0FGeUI7QUFLckNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsUUFBUSxFQUFFLEVBREw7QUFFTEMsTUFBQUEsYUFBYSxFQUFFO0FBRlYsS0FBUDtBQUlELEdBVm9DO0FBV3JDQyxFQUFBQSxRQUFRLEVBQUUsK2tEQVgyQjtBQVlyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixD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QUF4RCxHQUFnRWdCLEtBQUssQ0FBQ1osa0JBQU4sQ0FBeUJkLFFBQVEsQ0FBQzhCLEdBQUQsQ0FBUixDQUFjcEIsS0FBdkMsQ0FBN0U7O0FBRUFnQixZQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVy9CLFFBQVEsQ0FBQzhCLEdBQUQsQ0FBbkIsRUFBMEIsYUFBMUIsRUFBeUNwQixLQUFLLENBQUNvQixHQUFELENBQTlDO0FBQ0Q7QUFDRixTQVZEO0FBV0EsYUFBS2xCLGlCQUFMO0FBQ0EsYUFBS29CLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnRCLEtBQS9CO0FBQ0Q7QUFuQk87QUFETDtBQXRDOEIsQ0FBdkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2NvbG9yX2dyYWRpZW50Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ3NsaWRlci1waWNrZXInOiBWdWVDb2xvci5DaHJvbWVcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JhZGllbnQ6IHt9LFxuICAgICAgY29weV9ncmFkaWVudDoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2NvbG9yX2dyYWRpZW50XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZmllbGRfdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiB2LWh0bWw9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZpZWxkLWRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2NvbG9yX2dyYWRpZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2NvbG9yX2dyYWRpZW50X2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWJpbmQ6c3R5bGU9XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGdyYWRpZW50LmZyb20uaW5wdXRfdmFsdWV9XFxcIiBAY2xpY2s9XFxcIiRyZWZzLmZpZWxkX25hbWVfZnJvbS5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZyb21cXFwiIHYtbW9kZWw9XFxcImdyYWRpZW50LmZyb20uaW5wdXRfdmFsdWVcXFwiIHJlZj1cXFwiZmllbGRfbmFtZV9mcm9tXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2xpZGVyLXBpY2tlciB2LW1vZGVsPVxcXCJncmFkaWVudC5mcm9tLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19jb2xvcl9ncmFkaWVudF9ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VG88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtX2NvbG9ycGlja2VyX3dyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogZ3JhZGllbnQudG8uaW5wdXRfdmFsdWV9XFxcIiBAY2xpY2s9XFxcIiRyZWZzLmZpZWxkX25hbWVfdG8uZm9jdXMoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0b1xcXCIgdi1tb2RlbD1cXFwiZ3JhZGllbnQudG8uaW5wdXRfdmFsdWVcXFwiIHJlZj1cXFwiZmllbGRfbmFtZV90b1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcImdyYWRpZW50LnRvLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgLy8gSlNPTiBwYXJzZSBmb3IgUG9zdCBNZXRhXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkpIHtcbiAgICAgIHRoaXMuZmllbGRfdmFsdWUgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhZGllbnQgPSB7XG4gICAgICBmcm9tOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5mcm9tICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUuZnJvbSA6ICcnLFxuICAgICAgICB2YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUuZnJvbSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmZyb20gOiAnJ1xuICAgICAgfSxcbiAgICAgIHRvOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS50byAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLnRvIDogJycsXG4gICAgICAgIHZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS50byAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLnRvIDogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0X2NvcHlfZ3JhZGllbnQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHZ1ZWNvbG9yX3RvX3N0cmluZzogZnVuY3Rpb24gdnVlY29sb3JfdG9fc3RyaW5nKGNvbG9yKSB7XG4gICAgICByZXR1cm4gY29sb3IuYSA9PT0gMSA/IGNvbG9yLmhleCA6ICdyZ2JhKCcgKyBjb2xvci5yZ2JhLnIgKyAnLCcgKyBjb2xvci5yZ2JhLmcgKyAnLCcgKyBjb2xvci5yZ2JhLmIgKyAnLCcgKyBjb2xvci5yZ2JhLmEgKyAnKSc7XG4gICAgfSxcbiAgICBzZXRfY29weV9ncmFkaWVudDogZnVuY3Rpb24gc2V0X2NvcHlfZ3JhZGllbnQoKSB7XG4gICAgICB0aGlzLmNvcHlfZ3JhZGllbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JhZGllbnQpKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZ3JhZGllbnQ6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGdyYWRpZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHZhbHVlID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyYWRpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoZ3JhZGllbnRba2V5XS5pbnB1dF92YWx1ZSAhPT0gX3RoaXMuY29weV9ncmFkaWVudFtrZXldLmlucHV0X3ZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gZ3JhZGllbnRba2V5XS5pbnB1dF92YWx1ZTtcblxuICAgICAgICAgICAgX3RoaXMuJHNldChncmFkaWVudFtrZXldLCAndmFsdWUnLCB2YWx1ZVtrZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IHR5cGVvZiBncmFkaWVudFtrZXldLnZhbHVlID09PSAnc3RyaW5nJyA/IGdyYWRpZW50W2tleV0udmFsdWUgOiBfdGhpcy52dWVjb2xvcl90b19zdHJpbmcoZ3JhZGllbnRba2V5XS52YWx1ZSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRzZXQoZ3JhZGllbnRba2V5XSwgJ2lucHV0X3ZhbHVlJywgdmFsdWVba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRfY29weV9ncmFkaWVudCgpO1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])