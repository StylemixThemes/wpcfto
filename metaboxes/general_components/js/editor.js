(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('vue-editor', Vue2Editor["default"].VueEditor);
Vue.component('wpcfto_editor', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_editor\">\n        \n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n            \n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto-editor\">\n                    <vue-editor :id=\"'editor' + field_name\" v-model=\"value\"></vue-editor>\n    \n                    <textarea v-bind:name=\"field_name\"\n                          v-bind:placeholder=\"field_label\"\n                          v-bind:id=\"field_id\"\n                          v-model=\"value\">\n                    </textarea>\n                </div>\n            </div>\n            \n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
  mounted: function mounted() {
    if (typeof this.field_value !== 'undefined') {
      this.$set(this, 'value', this.field_value);
    }
  },
  methods: {},
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTgwNzU2OTIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlMkVkaXRvciIsIlZ1ZUVkaXRvciIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwidGVtcGxhdGUiLCJtb3VudGVkIiwiZmllbGRfdmFsdWUiLCIkc2V0IiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxZQUFkLEVBQTRCQyxVQUFVLENBQUMsU0FBRCxDQUFWLENBQXNCQyxTQUFsRDtBQUNBSCxHQUFHLENBQUNDLFNBQUosQ0FBYyxlQUFkLEVBQStCO0FBQzdCRyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQURzQjtBQUU3QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFERixLQUFQO0FBR0QsR0FONEI7QUFPN0JDLEVBQUFBLFFBQVEsRUFBRSxnMUJBUG1CO0FBUTdCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixXQUFoQyxFQUE2QztBQUMzQyxXQUFLQyxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QixLQUFLRCxXQUE5QjtBQUNEO0FBQ0YsR0FaNEI7QUFhN0JFLEVBQUFBLE9BQU8sRUFBRSxFQWJvQjtBQWM3QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xOLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVPLE1BQWYsRUFBdUI7QUFDNUIsV0FBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCRCxNQUEvQjtBQUNEO0FBSEk7QUFkc0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgndnVlLWVkaXRvcicsIFZ1ZTJFZGl0b3JbXCJkZWZhdWx0XCJdLlZ1ZUVkaXRvcik7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fZWRpdG9yJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2VkaXRvclxcXCI+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWVkaXRvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dnVlLWVkaXRvciA6aWQ9XFxcIidlZGl0b3InICsgZmllbGRfbmFtZVxcXCIgdi1tb2RlbD1cXFwidmFsdWVcXFwiPjwvdnVlLWVkaXRvcj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOmlkPVxcXCJmaWVsZF9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAndmFsdWUnLCB0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBfdmFsdWUpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])