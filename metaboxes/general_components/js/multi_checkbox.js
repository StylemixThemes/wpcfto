(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_multi_checkbox', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      checkboxes: []
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_multi_checkbox\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_multi_checkbox wpcfto-admin-checkbox\">\n                    <label v-for=\"(option, key) in fields['options']\">\n                        <div class=\"wpcfto-admin-checkbox-wrapper\" v-bind:class=\"{'active' : checkboxes.includes(key)}\">\n                            <div class=\"wpcfto-checkbox-switcher\"></div>\n                            <input type=\"checkbox\" v-model=\"checkboxes\" v-bind:value=\"key\" :key=\"key\"/>\n                        </div>\n                        <span v-html=\"option\"></span>\n                    </label>\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n            \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDQ2MThkZDcuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiY2hlY2tib3hlcyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwibWV0aG9kcyIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHVCQUFkLEVBQXVDO0FBQ3JDQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ4QjtBQUVyQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxVQUFVLEVBQUU7QUFEUCxLQUFQO0FBR0QsR0FOb0M7QUFPckNDLEVBQUFBLFFBQVEsRUFBRSw4Z0NBUDJCO0FBUXJDQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRixVQUFMLEdBQWtCLE9BQU8sS0FBS0csV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixDQUExRCxHQUErRUUsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0gsV0FBaEIsQ0FBL0UsR0FBOEcsS0FBS0EsV0FBckk7O0FBRUEsUUFBSSxLQUFLSCxVQUFMLENBQWdCTyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQyxXQUFLUCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0Q7QUFDRixHQWRvQztBQWVyQ1EsRUFBQUEsT0FBTyxFQUFFLEVBZjRCO0FBZ0JyQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xULElBQUFBLFVBQVUsRUFBRTtBQUNWVSxNQUFBQSxJQUFJLEVBQUUsSUFESTtBQUVWQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQlgsVUFBakIsRUFBNkI7QUFDcEMsYUFBS1ksS0FBTCxDQUFXLGtCQUFYLEVBQStCWixVQUEvQjtBQUNEO0FBSlM7QUFEUDtBQWhCOEIsQ0FBdkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX211bHRpX2NoZWNrYm94Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGVja2JveGVzOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfbXVsdGlfY2hlY2tib3hcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fbXVsdGlfY2hlY2tib3ggd3BjZnRvLWFkbWluLWNoZWNrYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB2LWZvcj1cXFwiKG9wdGlvbiwga2V5KSBpbiBmaWVsZHNbJ29wdGlvbnMnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWFkbWluLWNoZWNrYm94LXdyYXBwZXJcXFwiIHYtYmluZDpjbGFzcz1cXFwieydhY3RpdmUnIDogY2hlY2tib3hlcy5pbmNsdWRlcyhrZXkpfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1jaGVja2JveC1zd2l0Y2hlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgdi1tb2RlbD1cXFwiY2hlY2tib3hlc1xcXCIgdi1iaW5kOnZhbHVlPVxcXCJrZXlcXFwiIDprZXk9XFxcImtleVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwib3B0aW9uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlciA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9hZnRlcj5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpID8gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKSA6IHRoaXMuZmllbGRfdmFsdWU7XG5cbiAgICBpZiAodGhpcy5jaGVja2JveGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzID0gW107XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICBjaGVja2JveGVzOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihjaGVja2JveGVzKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBjaGVja2JveGVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])