(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_range_slider', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
  data: function data() {
    return {
      value: 0,
      min: 0,
      max: 100,
      step: 1
    };
  },
  components: {
    VueRangeSlider: VueRangeSlider
  },
  template: " \n        <div class=\"wpcfto_generic_field\" v-bind:class=\"field_id\">\n            <label v-html=\"field_label\"></label>\n            <vue-range-slider v-model=\"value\" :min=\"min\" :max=\"max\" :step=\"step\"></vue-range-slider>\n        </div>\n    ",
  mounted: function mounted() {
    this.value = typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value) ? JSON.parse(this.field_value) : this.field_value;
    this.min = this.field_data.min;
    this.max = this.field_data.max;
    this.step = this.field_data.step;
  },
  methods: {},
  watch: {
    value: {
      deep: true,
      handler: function handler(value) {
        this.$emit('wpcfto-get-value', value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjI2MzhlZDcuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJzdGVwIiwiY29tcG9uZW50cyIsIlZ1ZVJhbmdlU2xpZGVyIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCJXcGNmdG9Jc0pzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJmaWVsZF9kYXRhIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSxDQUQ0QjtBQUVuQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsQ0FERjtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsQ0FGQTtBQUdMQyxNQUFBQSxHQUFHLEVBQUUsR0FIQTtBQUlMQyxNQUFBQSxJQUFJLEVBQUU7QUFKRCxLQUFQO0FBTUQsR0FUa0M7QUFVbkNDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxjQUFjLEVBQUVBO0FBRE4sR0FWdUI7QUFhbkNDLEVBQUFBLFFBQVEsRUFBRSxtUUFieUI7QUFjbkNDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtQLEtBQUwsR0FBYSxPQUFPLEtBQUtRLFdBQVosS0FBNEIsUUFBNUIsSUFBd0NDLGtCQUFrQixDQUFDLEtBQUtELFdBQU4sQ0FBMUQsR0FBK0VFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtILFdBQWhCLENBQS9FLEdBQThHLEtBQUtBLFdBQWhJO0FBQ0EsU0FBS1AsR0FBTCxHQUFXLEtBQUtXLFVBQUwsQ0FBZ0JYLEdBQTNCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtVLFVBQUwsQ0FBZ0JWLEdBQTNCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtTLFVBQUwsQ0FBZ0JULElBQTVCO0FBQ0QsR0FuQmtDO0FBb0JuQ1UsRUFBQUEsT0FBTyxFQUFFLEVBcEIwQjtBQXFCbkNDLEVBQUFBLEtBQUssRUFBRTtBQUNMZCxJQUFBQSxLQUFLLEVBQUU7QUFDTGUsTUFBQUEsSUFBSSxFQUFFLElBREQ7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJoQixLQUFqQixFQUF3QjtBQUMvQixhQUFLaUIsS0FBTCxDQUFXLGtCQUFYLEVBQStCakIsS0FBL0I7QUFDRDtBQUpJO0FBREY7QUFyQjRCLENBQXJDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19yYW5nZV9zbGlkZXInLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX2RhdGEnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIHN0ZXA6IDFcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVnVlUmFuZ2VTbGlkZXI6IFZ1ZVJhbmdlU2xpZGVyXG4gIH0sXG4gIHRlbXBsYXRlOiBcIiBcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8dnVlLXJhbmdlLXNsaWRlciB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCIgOm1pbj1cXFwibWluXFxcIiA6bWF4PVxcXCJtYXhcXFwiIDpzdGVwPVxcXCJzdGVwXFxcIj48L3Z1ZS1yYW5nZS1zbGlkZXI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkgPyBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpIDogdGhpcy5maWVsZF92YWx1ZTtcbiAgICB0aGlzLm1pbiA9IHRoaXMuZmllbGRfZGF0YS5taW47XG4gICAgdGhpcy5tYXggPSB0aGlzLmZpZWxkX2RhdGEubWF4O1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuZmllbGRfZGF0YS5zdGVwO1xuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZToge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])