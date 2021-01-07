(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('date-picker', DatePicker["default"]);
Vue.component('wpcfto_date', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: '',
      input_value: ''
    };
  },
  mounted: function mounted() {
    this.value = this.field_value;

    if (typeof this.field_value !== 'undefined') {
      this.$set(this, 'input_value', this.field_value);
      this.value = new Date(parseInt(this.field_value));
    }
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field_date\">\n        \n            <label v-html=\"field_label\"></label>\n        \n            <date-picker v-model=\"value\" lang=\"en\" @change=\"dateChanged(value)\"></date-picker>\n           \n          \n            <input type=\"hidden\"\n                v-bind:name=\"field_name\"\n                v-bind:placeholder=\"field_label\"\n                v-bind:id=\"field_id\"\n                v-model=\"input_value\" \n            />\n            \n        </div>\n    ",
  methods: {
    dateChanged: function dateChanged(newDate) {
      var unix_time = new Date(newDate + ' UTC').getTime();
      this.$emit('wpcfto-get-value', unix_time);
      this.$set(this, 'input_value', unix_time);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2I5YWM5YTcuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiRGF0ZVBpY2tlciIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwiaW5wdXRfdmFsdWUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCIkc2V0IiwiRGF0ZSIsInBhcnNlSW50IiwidGVtcGxhdGUiLCJtZXRob2RzIiwiZGF0ZUNoYW5nZWQiLCJuZXdEYXRlIiwidW5peF90aW1lIiwiZ2V0VGltZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsYUFBZCxFQUE2QkMsVUFBVSxDQUFDLFNBQUQsQ0FBdkM7QUFDQUYsR0FBRyxDQUFDQyxTQUFKLENBQWMsYUFBZCxFQUE2QjtBQUMzQkUsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEb0I7QUFFM0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsV0FBVyxFQUFFO0FBRlIsS0FBUDtBQUlELEdBUDBCO0FBUTNCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRixLQUFMLEdBQWEsS0FBS0csV0FBbEI7O0FBRUEsUUFBSSxPQUFPLEtBQUtBLFdBQVosS0FBNEIsV0FBaEMsRUFBNkM7QUFDM0MsV0FBS0MsSUFBTCxDQUFVLElBQVYsRUFBZ0IsYUFBaEIsRUFBK0IsS0FBS0QsV0FBcEM7QUFDQSxXQUFLSCxLQUFMLEdBQWEsSUFBSUssSUFBSixDQUFTQyxRQUFRLENBQUMsS0FBS0gsV0FBTixDQUFqQixDQUFiO0FBQ0Q7QUFDRixHQWYwQjtBQWdCM0JJLEVBQUFBLFFBQVEsRUFBRSwyakJBaEJpQjtBQWlCM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxXQUFXLEVBQUUsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDekMsVUFBSUMsU0FBUyxHQUFHLElBQUlOLElBQUosQ0FBU0ssT0FBTyxHQUFHLE1BQW5CLEVBQTJCRSxPQUEzQixFQUFoQjtBQUNBLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkYsU0FBL0I7QUFDQSxXQUFLUCxJQUFMLENBQVUsSUFBVixFQUFnQixhQUFoQixFQUErQk8sU0FBL0I7QUFDRDtBQUxNO0FBakJrQixDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCdkYXRlLXBpY2tlcicsIERhdGVQaWNrZXJbXCJkZWZhdWx0XCJdKTtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19kYXRlJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBpbnB1dF92YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnB1dF92YWx1ZScsIHRoaXMuZmllbGRfdmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRoaXMuZmllbGRfdmFsdWUpKTtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dCB3cGNmdG9fZ2VuZXJpY19maWVsZF9kYXRlXFxcIj5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XFxcInZhbHVlXFxcIiBsYW5nPVxcXCJlblxcXCIgQGNoYW5nZT1cXFwiZGF0ZUNoYW5nZWQodmFsdWUpXFxcIj48L2RhdGUtcGlja2VyPlxcbiAgICAgICAgICAgXFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJpbnB1dF92YWx1ZVxcXCIgXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbWV0aG9kczoge1xuICAgIGRhdGVDaGFuZ2VkOiBmdW5jdGlvbiBkYXRlQ2hhbmdlZChuZXdEYXRlKSB7XG4gICAgICB2YXIgdW5peF90aW1lID0gbmV3IERhdGUobmV3RGF0ZSArICcgVVRDJykuZ2V0VGltZSgpO1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHVuaXhfdGltZSk7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ2lucHV0X3ZhbHVlJywgdW5peF90aW1lKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])