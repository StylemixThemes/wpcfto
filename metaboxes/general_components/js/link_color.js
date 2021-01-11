(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_link_color', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  components: {
    'slider-picker': VueColor.Chrome
  },
  data: function data() {
    return {
      link: {},
      copy_link: {}
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_link_color\" v-bind:class=\"field_id\">\n            <div class=\"wpcfto_field_title\">\n                <label v-html=\"field_label\"></label>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n            </div>\n            \n            <div class=\"wpcfto_link_color\">\n                <div class=\"wpcfto_link_color_group\">\n                    <label>Regular</label>\n                    <div class=\"stm_colorpicker_wrapper\">\n                        <span v-bind:style=\"{'background-color': link.regular.input_value}\" @click=\"$refs.field_regular.focus()\"></span>\n                        <input type=\"text\" name=\"regular\" v-model=\"link.regular.input_value\" ref=\"field_regular\" />\n                        <div><slider-picker v-model=\"link.regular.value\"></slider-picker></div>\n                    </div>\n                </div>\n                \n                <div class=\"wpcfto_link_color_group\">\n                    <label>Hover</label>\n                    <div class=\"stm_colorpicker_wrapper\">\n                        <span v-bind:style=\"{'background-color': link.hover.input_value}\" @click=\"$refs.field_hover.focus()\"></span>\n                        <input type=\"text\" name=\"hover\" v-model=\"link.hover.input_value\" ref=\"field_hover\" />\n                        <div><slider-picker v-model=\"link.hover.value\"></slider-picker></div>\n                    </div>\n                </div>\n                \n                <div class=\"wpcfto_link_color_group\">\n                    <label>Active</label>\n                    <div class=\"stm_colorpicker_wrapper\">\n                        <span v-bind:style=\"{'background-color': link.active.input_value}\" @click=\"$refs.field_active.focus()\"></span>\n                        <input type=\"text\" name=\"active\" v-model=\"link.active.input_value\" ref=\"field_active\" />\n                        <div><slider-picker v-model=\"link.active.value\"></slider-picker></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  created: function created() {
    // JSON parse for Post Meta
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) {
      this.field_value = JSON.parse(this.field_value);
    }

    this.link = {
      regular: {
        input_value: typeof this.field_value.regular !== 'undefined' ? this.field_value.regular : '',
        value: typeof this.field_value.regular !== 'undefined' ? this.field_value.regular : ''
      },
      hover: {
        input_value: typeof this.field_value.hover !== 'undefined' ? this.field_value.hover : '',
        value: typeof this.field_value.hover !== 'undefined' ? this.field_value.hover : ''
      },
      active: {
        input_value: typeof this.field_value.active !== 'undefined' ? this.field_value.active : '',
        value: typeof this.field_value.active !== 'undefined' ? this.field_value.active : ''
      }
    };
    this.set_copy_link();
  },
  methods: {
    vuecolor_to_string: function vuecolor_to_string(color) {
      return color.a === 1 ? color.hex : 'rgba(' + color.rgba.r + ',' + color.rgba.g + ',' + color.rgba.b + ',' + color.rgba.a + ')';
    },
    set_copy_link: function set_copy_link() {
      this.copy_link = JSON.parse(JSON.stringify(this.link));
    }
  },
  watch: {
    link: {
      deep: true,
      handler: function handler(link) {
        var _this = this;

        var value = {};
        Object.keys(link).forEach(function (key) {
          if (link[key].input_value !== _this.copy_link[key].input_value) {
            value[key] = link[key].input_value;

            _this.$set(link[key], 'value', value[key]);
          } else {
            value[key] = typeof link[key].value === 'string' ? link[key].value : _this.vuecolor_to_string(link[key].value);

            _this.$set(link[key], 'input_value', value[key]);
          }
        });
        this.set_copy_link();
        this.$emit('wpcfto-get-value', value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjY2YjBhNjAuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnRzIiwiVnVlQ29sb3IiLCJDaHJvbWUiLCJkYXRhIiwibGluayIsImNvcHlfbGluayIsInRlbXBsYXRlIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwicmVndWxhciIsImlucHV0X3ZhbHVlIiwidmFsdWUiLCJob3ZlciIsImFjdGl2ZSIsInNldF9jb3B5X2xpbmsiLCJtZXRob2RzIiwidnVlY29sb3JfdG9fc3RyaW5nIiwiY29sb3IiLCJhIiwiaGV4IiwicmdiYSIsInIiLCJnIiwiYiIsInN0cmluZ2lmeSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJfdGhpcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiJHNldCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsbUJBQWQsRUFBbUM7QUFDakNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDBCO0FBRWpDQyxFQUFBQSxVQUFVLEVBQUU7QUFDVixxQkFBaUJDLFFBQVEsQ0FBQ0M7QUFEaEIsR0FGcUI7QUFLakNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMsTUFBQUEsU0FBUyxFQUFFO0FBRk4sS0FBUDtBQUlELEdBVmdDO0FBV2pDQyxFQUFBQSxRQUFRLEVBQUUsMnFFQVh1QjtBQVlqQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FB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QUFLLENBQUNLLElBQU4sQ0FBV2hDLElBQUksQ0FBQytCLEdBQUQsQ0FBZixFQUFzQixPQUF0QixFQUErQnJCLEtBQUssQ0FBQ3FCLEdBQUQsQ0FBcEM7QUFDRCxXQUpELE1BSU87QUFDTHJCLFlBQUFBLEtBQUssQ0FBQ3FCLEdBQUQsQ0FBTCxHQUFhLE9BQU8vQixJQUFJLENBQUMrQixHQUFELENBQUosQ0FBVXJCLEtBQWpCLEtBQTJCLFFBQTNCLEdBQXNDVixJQUFJLENBQUMrQixHQUFELENBQUosQ0FBVXJCLEtBQWhELEdBQXdEaUIsS0FBSyxDQUFDWixrQkFBTixDQUF5QmYsSUFBSSxDQUFDK0IsR0FBRCxDQUFKLENBQVVyQixLQUFuQyxDQUFyRTs7QUFFQWlCLFlBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXaEMsSUFBSSxDQUFDK0IsR0FBRCxDQUFmLEVBQXNCLGFBQXRCLEVBQXFDckIsS0FBSyxDQUFDcUIsR0FBRCxDQUExQztBQUNEO0FBQ0YsU0FWRDtBQVdBLGFBQUtsQixhQUFMO0FBQ0EsYUFBS29CLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnZCLEtBQS9CO0FBQ0Q7QUFuQkc7QUFERDtBQTFDMEIsQ0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2xpbmtfY29sb3InLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc2xpZGVyLXBpY2tlcic6IFZ1ZUNvbG9yLkNocm9tZVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiB7fSxcbiAgICAgIGNvcHlfbGluazoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2xpbmtfY29sb3JcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19maWVsZF90aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZmllbGQtZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fbGlua19jb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19saW5rX2NvbG9yX2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWd1bGFyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWJpbmQ6c3R5bGU9XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGxpbmsucmVndWxhci5pbnB1dF92YWx1ZX1cXFwiIEBjbGljaz1cXFwiJHJlZnMuZmllbGRfcmVndWxhci5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInJlZ3VsYXJcXFwiIHYtbW9kZWw9XFxcImxpbmsucmVndWxhci5pbnB1dF92YWx1ZVxcXCIgcmVmPVxcXCJmaWVsZF9yZWd1bGFyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNsaWRlci1waWNrZXIgdi1tb2RlbD1cXFwibGluay5yZWd1bGFyLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fbGlua19jb2xvcl9ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SG92ZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtX2NvbG9ycGlja2VyX3dyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogbGluay5ob3Zlci5pbnB1dF92YWx1ZX1cXFwiIEBjbGljaz1cXFwiJHJlZnMuZmllbGRfaG92ZXIuZm9jdXMoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJob3ZlclxcXCIgdi1tb2RlbD1cXFwibGluay5ob3Zlci5pbnB1dF92YWx1ZVxcXCIgcmVmPVxcXCJmaWVsZF9ob3ZlclxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcImxpbmsuaG92ZXIudmFsdWVcXFwiPjwvc2xpZGVyLXBpY2tlcj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19saW5rX2NvbG9yX2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3RpdmU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtX2NvbG9ycGlja2VyX3dyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogbGluay5hY3RpdmUuaW5wdXRfdmFsdWV9XFxcIiBAY2xpY2s9XFxcIiRyZWZzLmZpZWxkX2FjdGl2ZS5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFjdGl2ZVxcXCIgdi1tb2RlbD1cXFwibGluay5hY3RpdmUuaW5wdXRfdmFsdWVcXFwiIHJlZj1cXFwiZmllbGRfYWN0aXZlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNsaWRlci1waWNrZXIgdi1tb2RlbD1cXFwibGluay5hY3RpdmUudmFsdWVcXFwiPjwvc2xpZGVyLXBpY2tlcj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAvLyBKU09OIHBhcnNlIGZvciBQb3N0IE1ldGFcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSkge1xuICAgICAgdGhpcy5maWVsZF92YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5saW5rID0ge1xuICAgICAgcmVndWxhcjoge1xuICAgICAgICBpbnB1dF92YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUucmVndWxhciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLnJlZ3VsYXIgOiAnJyxcbiAgICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnJlZ3VsYXIgIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5yZWd1bGFyIDogJydcbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBpbnB1dF92YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUuaG92ZXIgIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5ob3ZlciA6ICcnLFxuICAgICAgICB2YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUuaG92ZXIgIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5ob3ZlciA6ICcnXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5hY3RpdmUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5hY3RpdmUgOiAnJyxcbiAgICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLmFjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmFjdGl2ZSA6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldF9jb3B5X2xpbmsoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHZ1ZWNvbG9yX3RvX3N0cmluZzogZnVuY3Rpb24gdnVlY29sb3JfdG9fc3RyaW5nKGNvbG9yKSB7XG4gICAgICByZXR1cm4gY29sb3IuYSA9PT0gMSA/IGNvbG9yLmhleCA6ICdyZ2JhKCcgKyBjb2xvci5yZ2JhLnIgKyAnLCcgKyBjb2xvci5yZ2JhLmcgKyAnLCcgKyBjb2xvci5yZ2JhLmIgKyAnLCcgKyBjb2xvci5yZ2JhLmEgKyAnKSc7XG4gICAgfSxcbiAgICBzZXRfY29weV9saW5rOiBmdW5jdGlvbiBzZXRfY29weV9saW5rKCkge1xuICAgICAgdGhpcy5jb3B5X2xpbmsgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubGluaykpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBsaW5rOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihsaW5rKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHZhbHVlID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGxpbmspLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChsaW5rW2tleV0uaW5wdXRfdmFsdWUgIT09IF90aGlzLmNvcHlfbGlua1trZXldLmlucHV0X3ZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gbGlua1trZXldLmlucHV0X3ZhbHVlO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2V0KGxpbmtba2V5XSwgJ3ZhbHVlJywgdmFsdWVba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSB0eXBlb2YgbGlua1trZXldLnZhbHVlID09PSAnc3RyaW5nJyA/IGxpbmtba2V5XS52YWx1ZSA6IF90aGlzLnZ1ZWNvbG9yX3RvX3N0cmluZyhsaW5rW2tleV0udmFsdWUpO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2V0KGxpbmtba2V5XSwgJ2lucHV0X3ZhbHVlJywgdmFsdWVba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRfY29weV9saW5rKCk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])