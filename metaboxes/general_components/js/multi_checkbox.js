(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_checkbox', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      checkboxes: []
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_multi_checkbox\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto_multi_checkbox wpcfto-admin-checkbox\">\n                <label v-for=\"(option, key) in fields['options']\">\n                    <div class=\"wpcfto-admin-checkbox-wrapper\" v-bind:class=\"{'active' : checkboxes.includes(key)}\">\n                        <div class=\"wpcfto-checkbox-switcher\"></div>\n                        <input type=\"checkbox\" v-model=\"checkboxes\" v-bind:value=\"key\" :key=\"key\"/>\n                    </div>\n                    <span v-html=\"option\"></span>\n                </label>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
  mounted: function mounted() {
    this.checkboxes = typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value) ? JSON.parse(this.field_value) : this.field_value;

    if (this.checkboxes.length === 0) {
      this.checkboxes = [];
    }
  },
  methods: {},
  watch: {
    checkboxes: {
      deep: true,
      handler: function handler(checkboxes) {
        this.$emit('wpcfto-get-value', checkboxes);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDUzNjIzMjEuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiY2hlY2tib3hlcyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHVCQUFkLEVBQXVDO0FBQ3JDQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ4QjtBQUVyQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxVQUFVLEVBQUU7QUFEUCxLQUFQO0FBR0QsR0FOb0M7QUFPckNDLEVBQUFBLFFBQVEsRUFBRSxvNkJBUDJCO0FBUXJDQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRixVQUFMLEdBQWtCLE9BQU8sS0FBS0csV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixDQUExRCxHQUErRUUsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0gsV0FBaEIsQ0FBL0UsR0FBOEcsS0FBS0EsV0FBckk7O0FBRUEsUUFBSSxLQUFLSCxVQUFMLENBQWdCTyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQyxXQUFLUCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0Q7QUFDRixHQWRvQztBQWVyQ1EsRUFBQUEsT0FBTyxFQUFFLEVBZjRCO0FBZ0JyQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xULElBQUFBLFVBQVUsRUFBRTtBQUNWVSxNQUFBQSxJQUFJLEVBQUUsSUFESTtBQUVWQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQlgsVUFBakIsRUFBNkI7QUFDcEMsYUFBS1ksS0FBTCxDQUFXLGtCQUFYLEVBQStCWixVQUEvQjtBQUNEO0FBSlM7QUFEUDtBQWhCOEIsQ0FBdkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX211bHRpX2NoZWNrYm94Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGVja2JveGVzOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfbXVsdGlfY2hlY2tib3hcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX211bHRpX2NoZWNrYm94IHdwY2Z0by1hZG1pbi1jaGVja2JveFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWZvcj1cXFwiKG9wdGlvbiwga2V5KSBpbiBmaWVsZHNbJ29wdGlvbnMnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tYWRtaW4tY2hlY2tib3gtd3JhcHBlclxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2FjdGl2ZScgOiBjaGVja2JveGVzLmluY2x1ZGVzKGtleSl9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tY2hlY2tib3gtc3dpdGNoZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgdi1tb2RlbD1cXFwiY2hlY2tib3hlc1xcXCIgdi1iaW5kOnZhbHVlPVxcXCJrZXlcXFwiIDprZXk9XFxcImtleVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIm9wdGlvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkgPyBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpIDogdGhpcy5maWVsZF92YWx1ZTtcblxuICAgIGlmICh0aGlzLmNoZWNrYm94ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbXTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGNoZWNrYm94ZXM6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGNoZWNrYm94ZXMpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGNoZWNrYm94ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])