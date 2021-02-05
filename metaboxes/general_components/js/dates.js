(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('date-picker', DatePicker["default"]);
Vue.component('wpcfto_dates', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: [],
      saveValue: []
    };
  },
  mounted: function mounted() {
    if (typeof this.field_value !== 'undefined') {
      if (typeof this.field_value[0] !== 'undefined') {
        this.saveValue.push(this.field_value[0]);
        this.value.push(new Date(parseInt(this.field_value[0])));
      }

      if (typeof this.field_value[1] !== 'undefined') {
        this.saveValue.push(this.field_value[1]);
        this.value.push(new Date(parseInt(this.field_value[1])));
      }
    }
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__date\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n            \n                <div class=\"wpcfto_datepicker\">\n                    <date-picker v-model=\"value\" range lang=\"en\" @change=\"dateChanged(value)\"></date-picker>\n                </div>\n    \n                <input type=\"hidden\" v-bind:name=\"field_name\" v-model=\"saveValue\" />\n                <input type=\"hidden\" v-bind:name=\"field_name + '_start'\" v-model=\"saveValue[0]\" />\n                <input type=\"hidden\" v-bind:name=\"field_name + '_end'\" v-model=\"saveValue[1]\" />\n                \n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
  methods: {
    dateChanged: function dateChanged(newDate) {
      var customDate = [];
      customDate.push(new Date(newDate[0]).getTime());
      customDate.push(new Date(newDate[1]).getTime());
      this.$emit('wpcfto-get-value', customDate);
      this.$set(this, 'saveValue', customDate);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjAxNDNjNDUuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiRGF0ZVBpY2tlciIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwic2F2ZVZhbHVlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwicHVzaCIsIkRhdGUiLCJwYXJzZUludCIsInRlbXBsYXRlIiwibWV0aG9kcyIsImRhdGVDaGFuZ2VkIiwibmV3RGF0ZSIsImN1c3RvbURhdGUiLCJnZXRUaW1lIiwiJGVtaXQiLCIkc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsYUFBZCxFQUE2QkMsVUFBVSxDQUFDLFNBQUQsQ0FBdkM7QUFDQUYsR0FBRyxDQUFDQyxTQUFKLENBQWMsY0FBZCxFQUE4QjtBQUM1QkUsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEcUI7QUFFNUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsU0FBUyxFQUFFO0FBRk4sS0FBUDtBQUlELEdBUDJCO0FBUTVCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixXQUFoQyxFQUE2QztBQUMzQyxVQUFJLE9BQU8sS0FBS0EsV0FBTCxDQUFpQixDQUFqQixDQUFQLEtBQStCLFdBQW5DLEVBQWdEO0FBQzlDLGFBQUtGLFNBQUwsQ0FBZUcsSUFBZixDQUFvQixLQUFLRCxXQUFMLENBQWlCLENBQWpCLENBQXBCO0FBQ0EsYUFBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLElBQUlDLElBQUosQ0FBU0MsUUFBUSxDQUFDLEtBQUtILFdBQUwsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFqQixDQUFoQjtBQUNEOztBQUVELFVBQUksT0FBTyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLENBQVAsS0FBK0IsV0FBbkMsRUFBZ0Q7QUFDOUMsYUFBS0YsU0FBTCxDQUFlRyxJQUFmLENBQW9CLEtBQUtELFdBQUwsQ0FBaUIsQ0FBakIsQ0FBcEI7QUFDQSxhQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsSUFBSUMsSUFBSixDQUFTQyxRQUFRLENBQUMsS0FBS0gsV0FBTCxDQUFpQixDQUFqQixDQUFELENBQWpCLENBQWhCO0FBQ0Q7QUFDRjtBQUNGLEdBcEIyQjtBQXFCNUJJLEVBQUFBLFFBQVEsRUFBRSw2N0JBckJrQjtBQXNCNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxXQUFXLEVBQUUsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDekMsVUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0FBLE1BQUFBLFVBQVUsQ0FBQ1AsSUFBWCxDQUFnQixJQUFJQyxJQUFKLENBQVNLLE9BQU8sQ0FBQyxDQUFELENBQWhCLEVBQXFCRSxPQUFyQixFQUFoQjtBQUNBRCxNQUFBQSxVQUFVLENBQUNQLElBQVgsQ0FBZ0IsSUFBSUMsSUFBSixDQUFTSyxPQUFPLENBQUMsQ0FBRCxDQUFoQixFQUFxQkUsT0FBckIsRUFBaEI7QUFDQSxXQUFLQyxLQUFMLENBQVcsa0JBQVgsRUFBK0JGLFVBQS9CO0FBQ0EsV0FBS0csSUFBTCxDQUFVLElBQVYsRUFBZ0IsV0FBaEIsRUFBNkJILFVBQTdCO0FBQ0Q7QUFQTTtBQXRCbUIsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnZGF0ZS1waWNrZXInLCBEYXRlUGlja2VyW1wiZGVmYXVsdFwiXSk7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fZGF0ZXMnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHNhdmVWYWx1ZTogW11cbiAgICB9O1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zYXZlVmFsdWUucHVzaCh0aGlzLmZpZWxkX3ZhbHVlWzBdKTtcbiAgICAgICAgdGhpcy52YWx1ZS5wdXNoKG5ldyBEYXRlKHBhcnNlSW50KHRoaXMuZmllbGRfdmFsdWVbMF0pKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZVsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zYXZlVmFsdWUucHVzaCh0aGlzLmZpZWxkX3ZhbHVlWzFdKTtcbiAgICAgICAgdGhpcy52YWx1ZS5wdXNoKG5ldyBEYXRlKHBhcnNlSW50KHRoaXMuZmllbGRfdmFsdWVbMV0pKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ZsZXhfaW5wdXQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX2RhdGVcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZGF0ZXBpY2tlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGF0ZS1waWNrZXIgdi1tb2RlbD1cXFwidmFsdWVcXFwiIHJhbmdlIGxhbmc9XFxcImVuXFxcIiBAY2hhbmdlPVxcXCJkYXRlQ2hhbmdlZCh2YWx1ZSlcXFwiPjwvZGF0ZS1waWNrZXI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICBcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiIHYtbW9kZWw9XFxcInNhdmVWYWx1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWUgKyAnX3N0YXJ0J1xcXCIgdi1tb2RlbD1cXFwic2F2ZVZhbHVlWzBdXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZSArICdfZW5kJ1xcXCIgdi1tb2RlbD1cXFwic2F2ZVZhbHVlWzFdXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbWV0aG9kczoge1xuICAgIGRhdGVDaGFuZ2VkOiBmdW5jdGlvbiBkYXRlQ2hhbmdlZChuZXdEYXRlKSB7XG4gICAgICB2YXIgY3VzdG9tRGF0ZSA9IFtdO1xuICAgICAgY3VzdG9tRGF0ZS5wdXNoKG5ldyBEYXRlKG5ld0RhdGVbMF0pLmdldFRpbWUoKSk7XG4gICAgICBjdXN0b21EYXRlLnB1c2gobmV3IERhdGUobmV3RGF0ZVsxXSkuZ2V0VGltZSgpKTtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBjdXN0b21EYXRlKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnc2F2ZVZhbHVlJywgY3VzdG9tRGF0ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])