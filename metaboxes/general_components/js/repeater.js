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
  template: "\n    <div class=\"wpcfto-repeater unflex_fields\">\n      \n        <label v-html=\"field_label\"></label>\n   \n        <div v-for=\"(area, area_key) in repeater\" class=\"wpcfto-repeater-single\" :class=\"'wpcfto-repeater_' + field_name + '_' + area_key \">\n        \n            <!--<span class=\"wpcfto-repeater-single-key\" :data-number=\"area_key + 1\" @click=\"toggleArea(area)\" :data-tab=\"field_label + ' (' + (area_key + 1) + ')'\"></span>-->\n            \n            <!--:class=\"{'closed' : !area.closed_tab}\"-->\n            <div class=\"repeater_inner\">\n           \n                <div class=\"wpcfto-repeater-field\" v-for=\"(field, field_name_inner) in fields.fields\">\n                \n                    <component :is=\"'wpcfto_' + field.type\"\n                               :fields=\"field\"\n                               :field_name=\"field_name + '_' + area_key + '_' + field_name_inner\"\n                               :field_label=\"field.label\"\n                               :field_value=\"getFieldValue(area_key, field, field_name_inner)\"\n                               :field_data=\"field\"\n                               :field_native_name=\"field_name\"\n                               :field_native_name_inner=\"field_name_inner\"\n                               @wpcfto-get-value=\"$set(repeater[area_key], field_name_inner, $event)\">\n                    </component>\n                   \n                </div>\n                \n            </div>\n                \n            \n            <i class=\"fa fa-trash-alt wpcfto-repeater-single-delete\" @click=\"removeArea(area_key)\"></i>\n                \n        </div>\n        \n       \n       \n        <div class=\"addArea\" @click=\"addArea\">\n            <i class=\"fa fa-plus\"></i>\n            <span v-html=\"field_label\"></span>\n        </div>\n\n    </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWFjMjdlNDEuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwicmVwZWF0ZXIiLCJyZXBlYXRlcl92YWx1ZXMiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJfdGhpcyIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiJHNldCIsImZvckVhY2giLCJwdXNoIiwibWV0aG9kcyIsImFkZEFyZWEiLCJjbG9zZWRfdGFiIiwiZWwiLCJmaWVsZF9uYW1lIiwibGVuZ3RoIiwibmV4dFRpY2siLCJqUXVlcnkiLCIkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInRvZ2dsZUFyZWEiLCJhcmVhIiwiY3VycmVudFN0YXRlIiwicmVtb3ZlQXJlYSIsImFyZWFJbmRleCIsImNvbmZpcm0iLCJzcGxpY2UiLCJnZXRGaWVsZFZhbHVlIiwia2V5IiwiZmllbGQiLCJ2YWx1ZSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGlCQUFkLEVBQWlDO0FBQy9CQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUR3QjtBQUUvQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxRQUFRLEVBQUUsRUFETDtBQUVMQyxNQUFBQSxlQUFlLEVBQUU7QUFGWixLQUFQO0FBSUQsR0FQOEI7QUFRL0JDLEVBQUFBLFFBQVEsRUFBRSxvMkRBUnFCO0FBUy9CQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxRQUFJLE9B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Q0FBUDtBQUNEO0FBN0JNLEdBeEJzQjtBQXVEL0J1QixFQUFBQSxLQUFLLEVBQUU7QUFDTHZDLElBQUFBLFFBQVEsRUFBRTtBQUNSd0MsTUFBQUEsSUFBSSxFQUFFLElBREU7QUFFUkMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJ6QyxRQUFqQixFQUEyQjtBQUNsQyxhQUFLMEMsS0FBTCxDQUFXLGtCQUFYLEVBQStCMUMsUUFBL0I7QUFDRDtBQUpPO0FBREw7QUF2RHdCLENBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19yZXBlYXRlcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVwZWF0ZXI6IFtdLFxuICAgICAgcmVwZWF0ZXJfdmFsdWVzOiB7fVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tcmVwZWF0ZXIgdW5mbGV4X2ZpZWxkc1xcXCI+XFxuICAgICAgXFxuICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICBcXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcIihhcmVhLCBhcmVhX2tleSkgaW4gcmVwZWF0ZXJcXFwiIGNsYXNzPVxcXCJ3cGNmdG8tcmVwZWF0ZXItc2luZ2xlXFxcIiA6Y2xhc3M9XFxcIid3cGNmdG8tcmVwZWF0ZXJfJyArIGZpZWxkX25hbWUgKyAnXycgKyBhcmVhX2tleSBcXFwiPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJ3cGNmdG8tcmVwZWF0ZXItc2luZ2xlLWtleVxcXCIgOmRhdGEtbnVtYmVyPVxcXCJhcmVhX2tleSArIDFcXFwiIEBjbGljaz1cXFwidG9nZ2xlQXJlYShhcmVhKVxcXCIgOmRhdGEtdGFiPVxcXCJmaWVsZF9sYWJlbCArICcgKCcgKyAoYXJlYV9rZXkgKyAxKSArICcpJ1xcXCI+PC9zcGFuPi0tPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS06Y2xhc3M9XFxcInsnY2xvc2VkJyA6ICFhcmVhLmNsb3NlZF90YWJ9XFxcIi0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlcGVhdGVyX2lubmVyXFxcIj5cXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tcmVwZWF0ZXItZmllbGRcXFwiIHYtZm9yPVxcXCIoZmllbGQsIGZpZWxkX25hbWVfaW5uZXIpIGluIGZpZWxkcy5maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVxcXCInd3BjZnRvXycgKyBmaWVsZC50eXBlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRzPVxcXCJmaWVsZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX25hbWU9XFxcImZpZWxkX25hbWUgKyAnXycgKyBhcmVhX2tleSArICdfJyArIGZpZWxkX25hbWVfaW5uZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9sYWJlbD1cXFwiZmllbGQubGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwiZ2V0RmllbGRWYWx1ZShhcmVhX2tleSwgZmllbGQsIGZpZWxkX25hbWVfaW5uZXIpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfZGF0YT1cXFwiZmllbGRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9uYXRpdmVfbmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX25hdGl2ZV9uYW1lX2lubmVyPVxcXCJmaWVsZF9uYW1lX2lubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAd3BjZnRvLWdldC12YWx1ZT1cXFwiJHNldChyZXBlYXRlclthcmVhX2tleV0sIGZpZWxkX25hbWVfaW5uZXIsICRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XFxuICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1hbHQgd3BjZnRvLXJlcGVhdGVyLXNpbmdsZS1kZWxldGVcXFwiIEBjbGljaz1cXFwicmVtb3ZlQXJlYShhcmVhX2tleSlcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgICAgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhZGRBcmVhXFxcIiBAY2xpY2s9XFxcImFkZEFyZWFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L2k+XFxuICAgICAgICAgICAgPHNwYW4gdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKF90aGlzLmZpZWxkX3ZhbHVlKSkge1xuICAgICAgX3RoaXMuZmllbGRfdmFsdWUgPSBKU09OLnBhcnNlKF90aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF90aGlzLmZpZWxkX3ZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgX3RoaXMuZmllbGRfdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBfdGhpcy4kc2V0KF90aGlzLCAncmVwZWF0ZXJfdmFsdWVzJywgX3RoaXMuZmllbGRfdmFsdWUpO1xuXG4gICAgICBfdGhpcy5yZXBlYXRlcl92YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnJlcGVhdGVyLnB1c2goe30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkQXJlYTogZnVuY3Rpb24gYWRkQXJlYSgpIHtcbiAgICAgIHRoaXMucmVwZWF0ZXIucHVzaCh7XG4gICAgICAgIGNsb3NlZF90YWI6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGVsID0gJ3dwY2Z0by1yZXBlYXRlcl8nICsgdGhpcy5maWVsZF9uYW1lICsgJ18nICsgKHRoaXMucmVwZWF0ZXIubGVuZ3RoIC0gMSk7XG4gICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgJCA9IGpRdWVyeTtcbiAgICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIi5cIiArIGVsKS5vZmZzZXQoKS50b3AgLSA0MFxuICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9nZ2xlQXJlYTogZnVuY3Rpb24gdG9nZ2xlQXJlYShhcmVhKSB7XG4gICAgICB2YXIgY3VycmVudFN0YXRlID0gdHlwZW9mIGFyZWFbJ2Nsb3NlZF90YWInXSAhPT0gJ3VuZGVmaW5lZCcgPyBhcmVhWydjbG9zZWRfdGFiJ10gOiBmYWxzZTtcbiAgICAgIHRoaXMuJHNldChhcmVhLCAnY2xvc2VkX3RhYicsICFjdXJyZW50U3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQXJlYTogZnVuY3Rpb24gcmVtb3ZlQXJlYShhcmVhSW5kZXgpIHtcbiAgICAgIGlmIChjb25maXJtKCdEbyB5b3VyIHJlYWxseSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZpZWxkPycpKSB7XG4gICAgICAgIHRoaXMucmVwZWF0ZXIuc3BsaWNlKGFyZWFJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRGaWVsZFZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGtleSwgZmllbGQsIGZpZWxkX25hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXBlYXRlcl92YWx1ZXMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmllbGQudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVwZWF0ZXJfdmFsdWVzW2tleV0gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmllbGQudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVwZWF0ZXJfdmFsdWVzW2tleV1bZmllbGRfbmFtZV0gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmllbGQudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5yZXBlYXRlcl92YWx1ZXNba2V5XVtmaWVsZF9uYW1lXTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcmVwZWF0ZXI6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHJlcGVhdGVyKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCByZXBlYXRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])