(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_repeater', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      repeater: [],
      repeater_values: {}
    };
  },
  template: "\n    <div class=\"wpcfto_generic_field wpcfto_generic_field_repeater wpcfto-repeater unflex_fields\">\n\n        <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n        <div v-for=\"(area, area_key) in repeater\" class=\"wpcfto-repeater-single\" :class=\"'wpcfto-repeater_' + field_name + '_' + area_key \">\n\n            <!--<span class=\"wpcfto-repeater-single-key\" :data-number=\"area_key + 1\" @click=\"toggleArea(area)\" :data-tab=\"field_label + ' (' + (area_key + 1) + ')'\"></span>-->\n\n            <!--:class=\"{'closed' : !area.closed_tab}\"-->\n\n            <div class=\"wpcfto_group_title\" v-html=\"'Item #' + (area_key + 1)\"></div>\n\n            <div class=\"repeater_inner\">\n\n                <div class=\"wpcfto-repeater-field\" v-for=\"(field, field_name_inner) in fields.fields\">\n\n                    <component :is=\"'wpcfto_' + field.type\"\n                               :fields=\"field\"\n                               :field_name=\"field_name + '_' + area_key + '_' + field_name_inner\"\n                               :field_label=\"field.label\"\n                               :field_value=\"getFieldValue(area_key, field, field_name_inner)\"\n                               :field_data=\"field\"\n                               :field_native_name=\"field_name\"\n                               :field_native_name_inner=\"field_name_inner\"\n                               @wpcfto-get-value=\"$set(repeater[area_key], field_name_inner, $event)\">\n                    </component>\n\n                </div>\n\n            </div>\n\n            <span class=\"wpcfto-repeater-single-delete\" @click=\"removeArea(area_key)\">\n                <i class=\"fa fa-trash-alt\"></i>Delete\n            </span>\n\n        </div>\n\n        <div v-if=\"repeater && repeater.length > 0\" class=\"separator\"></div>\n\n        <div class=\"addArea\" @click=\"addArea\">\n            <i class=\"fa fa-plus-circle\"></i>\n            <span v-html=\"field_label\"></span>\n        </div>\n\n    </div>\n    ",
  mounted: function mounted() {
    var _this = this;

    if (typeof _this.field_value === 'string' && WpcftoIsJsonString(_this.field_value)) {
      _this.field_value = JSON.parse(_this.field_value);
    }

    if (typeof _this.field_value !== 'undefined' && typeof _this.field_value !== 'string') {
      _this.$set(_this, 'repeater_values', _this.field_value);

      _this.repeater_values.forEach(function () {
        _this.repeater.push({});
      });
    }
  },
  methods: {
    addArea: function addArea() {
      this.repeater.push({
        closed_tab: true
      });
      var el = 'wpcfto-repeater_' + this.field_name + '_' + (this.repeater.length - 1);
      Vue.nextTick(function () {
        if (typeof jQuery !== 'undefined') {
          var $ = jQuery;
          $([document.documentElement, document.body]).animate({
            scrollTop: $("." + el).offset().top - 40
          }, 400);
        }
      });
    },
    toggleArea: function toggleArea(area) {
      var currentState = typeof area['closed_tab'] !== 'undefined' ? area['closed_tab'] : false;
      this.$set(area, 'closed_tab', !currentState);
    },
    removeArea: function removeArea(areaIndex) {
      if (confirm('Do your really want to delete this field?')) {
        this.repeater.splice(areaIndex, 1);
      }
    },
    getFieldValue: function getFieldValue(key, field, field_name) {
      if (typeof this.repeater_values === 'undefined') return field.value;
      if (typeof this.repeater_values[key] === 'undefined') return field.value;
      if (typeof this.repeater_values[key][field_name] === 'undefined') return field.value;
      return this.repeater_values[key][field_name];
    }
  },
  watch: {
    repeater: {
      deep: true,
      handler: function handler(repeater) {
        this.$emit('wpcfto-get-value', repeater);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZmM3MWVkZTMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwicmVwZWF0ZXIiLCJyZXBlYXRlcl92YWx1ZXMiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJfdGhpcyIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiJHNldCIsImZvckVhY2giLCJwdXNoIiwibWV0aG9kcyIsImFkZEFyZWEiLCJjbG9zZWRfdGFiIiwiZWwiLCJmaWVsZF9uYW1lIiwibGVuZ3RoIiwibmV4dFRpY2siLCJqUXVlcnkiLCIkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInRvZ2dsZUFyZWEiLCJhcmVhIiwiY3VycmVudFN0YXRlIiwicmVtb3ZlQXJlYSIsImFyZWFJbmRleCIsImNvbmZpcm0iLCJzcGxpY2UiLCJnZXRGaWVsZFZhbHVlIiwia2V5IiwiZmllbGQiLCJ2YWx1ZSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGlCQUFkLEVBQWlDO0FBQy9CQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUR3QjtBQUUvQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxRQUFRLEVBQUUsRUFETDtBQUVMQyxNQUFBQSxlQUFlLEVBQUU7QUFGWixLQUFQO0FBSUQsR0FQOEI7QUFRL0JDLEVBQUFBLFFBQVEsRUFBRSw4aUVBUnFCO0FBUy9CQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxRQUFJLE9BQU9BLEtBQUssQ0FBQ0MsV0FBYixLQUE2QixRQUE3QixJQUF5Q0Msa0JBQWtCLENBQUNGLEtBQUssQ0FBQ0MsV0FBUCxDQUEvRCxFQUFvRjtBQUNsRkQsTUFBQUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osS0FBSyxDQUFDQyxXQUFqQixDQUFwQjtBQUNEOztBQUVELFFBQUksT0FBT0QsS0FBSyxDQUFDQyxXQUFiLEtBQTZCLFdBQTdCLElBQTRDLE9BQU9ELEtBQUssQ0FBQ0MsV0FBYixLQUE2QixRQUE3RSxFQUF1RjtBQUNyRkQsTUFBQUEsS0FBSyxDQUFDSyxJQUFOLENBQVdMLEtBQVgsRUFBa0IsaUJBQWxCLEVBQXFDQSxLQUFLLENBQUNDLFdBQTNDOztBQUVBRCxNQUFBQSxLQUFLLENBQUNILGVBQU4sQ0FBc0JTLE9BQXRCLENBQThCLFlBQVk7QUFDeENOLFFBQUFBLEtBQUssQ0FBQ0osUUFBTixDQUFlVyxJQUFmLENBQW9CLEVBQXBCO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0F2QjhCO0FBd0IvQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtiLFFBQUwsQ0FBY1csSUFBZCxDQUFtQjtBQUNqQkcsUUFBQUEsVUFBVSxFQUFFO0FBREssT0FBbkI7QUFHQSxVQUFJQyxFQUFFLEdBQUcscUJBQXFCLEtBQUtDLFVBQTFCLEdBQXVDLEdBQXZDLElBQThDLEtBQUtoQixRQUFMLENBQWNpQixNQUFkLEdBQXVCLENBQXJFLENBQVQ7QUFDQXJCLE1BQUFBLEdBQUcsQ0FBQ3NCLFFBQUosQ0FBYSxZQUFZO0FBQ3ZCLFlBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxjQUFJQyxDQUFDLEdBQUdELE1BQVI7QUFDQUMsVUFBQUEsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ0MsZUFBVixFQUEyQkQsUUFBUSxDQUFDRSxJQUFwQyxDQUFELENBQUQsQ0FBNkNDLE9BQTdDLENBQXFEO0FBQ25EQyxZQUFBQSxTQUFTLEVBQUVMLENBQUMsQ0FBQyxNQUFNTCxFQUFQLENBQUQsQ0FBWVcsTUFBWixHQUFxQkMsR0FBckIsR0FBMkI7QUFEYSxXQUFyRCxFQUVHLEdBRkg7QUFHRDtBQUNGLE9BUEQ7QUFRRCxLQWRNO0FBZVBDLElBQUFBLFVBQVUsRUFBRSxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUNwQyxVQUFJQyxZQUFZLEdBQUcsT0FBT0QsSUFBSSxDQUFDLFlBQUQsQ0FBWCxLQUE4QixXQUE5QixHQUE0Q0EsSUFBSSxDQUFDLFlBQUQsQ0FBaEQsR0FBaUUsS0FBcEY7QUFDQSxXQUFLcEIsSUFBTCxDQUFVb0IsSUFBVixFQUFnQixZQUFoQixFQUE4QixDQUFDQyxZQUEvQjtBQUNELEtBbEJNO0FBbUJQQyxJQUFBQSxVQUFVLEVBQUUsU0FBU0EsVUFBVCxDQUFvQkMsU0FBcEIsRUFBK0I7QUFDekMsVUFBSUMsT0FBTyxDQUFDLDJDQUFELENBQVgsRUFBMEQ7QUFDeEQsYUFBS2pDLFFBQUwsQ0FBY2tDLE1BQWQsQ0FBcUJGLFNBQXJCLEVBQWdDLENBQWhDO0FBQ0Q7QUFDRixLQXZCTTtBQXdCUEcsSUFBQUEsYUFBYSxFQUFFLFNBQVNBLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxLQUE1QixFQUFtQ3JCLFVBQW5DLEVBQStDO0FBQzVELFVBQUksT0FBTyxLQUFLZixlQUFaLEtBQWdDLFdBQXBDLEVBQWlELE9BQU9vQyxLQUFLLENBQUNDLEtBQWI7QUFDakQsVUFBSSxPQUFPLEtBQUtyQyxlQUFMLENBQXFCbUMsR0FBckIsQ0FBUCxLQUFxQyxXQUF6QyxFQUFzRCxPQUFPQyxLQUFLLENBQUNDLEtBQWI7QUFDdEQsVUFBSSxPQUFPLEtBQUtyQyxlQUFMLENBQXFCbUMsR0FBckIsRUFBMEJwQixVQUExQixDQUFQLEtBQWlELFdBQXJELEVBQWtFLE9BQU9xQixLQUFLLENBQUNDLEtBQWI7QUFDbEUsYUFBTyxLQUFLckMsZUFBTCxDQUFxQm1DLEdBQXJCLEVBQTBCcEIsVUFBMUIsQ0FBUDtBQUNEO0FBN0JNLEdBeEJzQjtBQXVEL0J1QixFQUFBQSxLQUFLLEVBQUU7QUFDTHZDLElBQUFBLFFBQVEsRUFBRTtBQUNSd0MsTUFBQUEsSUFBSSxFQUFFLElBREU7QUFFUkMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJ6QyxRQUFqQixFQUEyQjtBQUNsQyxhQUFLMEMsS0FBTCxDQUFXLGtCQUFYLEVBQStCMUMsUUFBL0I7QUFDRDtBQUpPO0FBREw7QUF2RHdCLENBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19yZXBlYXRlcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVwZWF0ZXI6IFtdLFxuICAgICAgcmVwZWF0ZXJfdmFsdWVzOiB7fVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9yZXBlYXRlciB3cGNmdG8tcmVwZWF0ZXIgdW5mbGV4X2ZpZWxkc1xcXCI+XFxuXFxuICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwiKGFyZWEsIGFyZWFfa2V5KSBpbiByZXBlYXRlclxcXCIgY2xhc3M9XFxcIndwY2Z0by1yZXBlYXRlci1zaW5nbGVcXFwiIDpjbGFzcz1cXFwiJ3dwY2Z0by1yZXBlYXRlcl8nICsgZmllbGRfbmFtZSArICdfJyArIGFyZWFfa2V5IFxcXCI+XFxuXFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJ3cGNmdG8tcmVwZWF0ZXItc2luZ2xlLWtleVxcXCIgOmRhdGEtbnVtYmVyPVxcXCJhcmVhX2tleSArIDFcXFwiIEBjbGljaz1cXFwidG9nZ2xlQXJlYShhcmVhKVxcXCIgOmRhdGEtdGFiPVxcXCJmaWVsZF9sYWJlbCArICcgKCcgKyAoYXJlYV9rZXkgKyAxKSArICcpJ1xcXCI+PC9zcGFuPi0tPlxcblxcbiAgICAgICAgICAgIDwhLS06Y2xhc3M9XFxcInsnY2xvc2VkJyA6ICFhcmVhLmNsb3NlZF90YWJ9XFxcIi0tPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19ncm91cF90aXRsZVxcXCIgdi1odG1sPVxcXCInSXRlbSAjJyArIChhcmVhX2tleSArIDEpXFxcIj48L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXBlYXRlcl9pbm5lclxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1yZXBlYXRlci1maWVsZFxcXCIgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRfbmFtZV9pbm5lcikgaW4gZmllbGRzLmZpZWxkc1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwiJ3dwY2Z0b18nICsgZmllbGQudHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cXFwiZmllbGRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9uYW1lPVxcXCJmaWVsZF9uYW1lICsgJ18nICsgYXJlYV9rZXkgKyAnXycgKyBmaWVsZF9uYW1lX2lubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfbGFiZWw9XFxcImZpZWxkLmxhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfdmFsdWU9XFxcImdldEZpZWxkVmFsdWUoYXJlYV9rZXksIGZpZWxkLCBmaWVsZF9uYW1lX2lubmVyKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2RhdGE9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfbmF0aXZlX25hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9uYXRpdmVfbmFtZV9pbm5lcj1cXFwiZmllbGRfbmFtZV9pbm5lclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHdwY2Z0by1nZXQtdmFsdWU9XFxcIiRzZXQocmVwZWF0ZXJbYXJlYV9rZXldLCBmaWVsZF9uYW1lX2lubmVyLCAkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwid3BjZnRvLXJlcGVhdGVyLXNpbmdsZS1kZWxldGVcXFwiIEBjbGljaz1cXFwicmVtb3ZlQXJlYShhcmVhX2tleSlcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtYWx0XFxcIj48L2k+RGVsZXRlXFxuICAgICAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcInJlcGVhdGVyICYmIHJlcGVhdGVyLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJzZXBhcmF0b3JcXFwiPjwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkQXJlYVxcXCIgQGNsaWNrPVxcXCJhZGRBcmVhXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1cy1jaXJjbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcoX3RoaXMuZmllbGRfdmFsdWUpKSB7XG4gICAgICBfdGhpcy5maWVsZF92YWx1ZSA9IEpTT04ucGFyc2UoX3RoaXMuZmllbGRfdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMuZmllbGRfdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBfdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIF90aGlzLiRzZXQoX3RoaXMsICdyZXBlYXRlcl92YWx1ZXMnLCBfdGhpcy5maWVsZF92YWx1ZSk7XG5cbiAgICAgIF90aGlzLnJlcGVhdGVyX3ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMucmVwZWF0ZXIucHVzaCh7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRBcmVhOiBmdW5jdGlvbiBhZGRBcmVhKCkge1xuICAgICAgdGhpcy5yZXBlYXRlci5wdXNoKHtcbiAgICAgICAgY2xvc2VkX3RhYjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB2YXIgZWwgPSAnd3BjZnRvLXJlcGVhdGVyXycgKyB0aGlzLmZpZWxkX25hbWUgKyAnXycgKyAodGhpcy5yZXBlYXRlci5sZW5ndGggLSAxKTtcbiAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciAkID0galF1ZXJ5O1xuICAgICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLlwiICsgZWwpLm9mZnNldCgpLnRvcCAtIDQwXG4gICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b2dnbGVBcmVhOiBmdW5jdGlvbiB0b2dnbGVBcmVhKGFyZWEpIHtcbiAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0eXBlb2YgYXJlYVsnY2xvc2VkX3RhYiddICE9PSAndW5kZWZpbmVkJyA/IGFyZWFbJ2Nsb3NlZF90YWInXSA6IGZhbHNlO1xuICAgICAgdGhpcy4kc2V0KGFyZWEsICdjbG9zZWRfdGFiJywgIWN1cnJlbnRTdGF0ZSk7XG4gICAgfSxcbiAgICByZW1vdmVBcmVhOiBmdW5jdGlvbiByZW1vdmVBcmVhKGFyZWFJbmRleCkge1xuICAgICAgaWYgKGNvbmZpcm0oJ0RvIHlvdXIgcmVhbGx5IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmllbGQ/JykpIHtcbiAgICAgICAgdGhpcy5yZXBlYXRlci5zcGxpY2UoYXJlYUluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEZpZWxkVmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoa2V5LCBmaWVsZCwgZmllbGRfbmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlcGVhdGVyX3ZhbHVlcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXBlYXRlcl92YWx1ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXBlYXRlcl92YWx1ZXNba2V5XVtmaWVsZF9uYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLnJlcGVhdGVyX3ZhbHVlc1trZXldW2ZpZWxkX25hbWVdO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByZXBlYXRlcjoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIocmVwZWF0ZXIpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHJlcGVhdGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])