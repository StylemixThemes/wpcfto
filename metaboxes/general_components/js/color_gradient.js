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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_color_gradient\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_color_gradient\">\n                    <div class=\"wpcfto_color_gradient_group\">\n                        <label>From</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': gradient.from.input_value}\" @click=\"$refs.field_name_from.focus()\"></span>\n                            <input type=\"text\" name=\"from\" v-model=\"gradient.from.input_value\" ref=\"field_name_from\"/>\n                            <div><slider-picker v-model=\"gradient.from.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                    <div class=\"wpcfto_color_gradient_group\">\n                        <label>To</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': gradient.to.input_value}\" @click=\"$refs.field_name_to.focus()\"></span>\n                            <input type=\"text\" name=\"to\" v-model=\"gradient.to.input_value\" ref=\"field_name_to\" />\n                            <div><slider-picker v-model=\"gradient.to.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjg3YzcxZS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJWdWVDb2xvciIsIkNocm9tZSIsImRhdGEiLCJncmFkaWVudCIsImNvcHlfZ3JhZGllbnQiLCJ0ZW1wbGF0ZSIsImNyZWF0ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImZyb20iLCJpbnB1dF92YWx1ZSIsInZhbHVlIiwidG8iLCJzZXRfY29weV9ncmFkaWVudCIsIm1ldGhvZHMiLCJ2dWVjb2xvcl90b19zdHJpbmciLCJjb2xvciIsImEiLCJoZXgiLCJyZ2JhIiwiciIsImciLCJiIiwic3RyaW5naWZ5Iiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIl90aGlzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCIkc2V0IiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyx1QkFBZCxFQUF1QztBQUNyQ0MsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEOEI7QUFFckNDLEVBQUFBLFVBQVUsRUFBRTtBQUNWLHFCQUFpQkMsUUFBUSxDQUFDQztBQURoQixHQUZ5QjtBQUtyQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxRQUFRLEVBQUUsRUFETDtBQUVMQyxNQUFBQSxhQUFhLEVBQUU7QUFGVixLQUFQO0FBSUQsR0FWb0M7QUFXckNDLEVBQUFBLFFBQVEsRUFBRSxtckRBWDJCO0FBWXJDQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQjtBQUNBLFFBQUksT0FBTyxLQUFLQyxXQUFaLEtBQTRCLFFBQTVCLElBQXdDQyxrQkFBa0IsQ0FBQyxLQUFLRCxXQUFOLENB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QXhELEdBQWdFZ0IsS0FBSyxDQUFDWixrQkFBTixDQUF5QmQsUUFBUSxDQUFDOEIsR0FBRCxDQUFSLENBQWNwQixLQUF2QyxDQUE3RTs7QUFFQWdCLFlBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXL0IsUUFBUSxDQUFDOEIsR0FBRCxDQUFuQixFQUEwQixhQUExQixFQUF5Q3BCLEtBQUssQ0FBQ29CLEdBQUQsQ0FBOUM7QUFDRDtBQUNGLFNBVkQ7QUFXQSxhQUFLbEIsaUJBQUw7QUFDQSxhQUFLb0IsS0FBTCxDQUFXLGtCQUFYLEVBQStCdEIsS0FBL0I7QUFDRDtBQW5CTztBQURMO0FBdEM4QixDQUF2QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fY29sb3JfZ3JhZGllbnQnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc2xpZGVyLXBpY2tlcic6IFZ1ZUNvbG9yLkNocm9tZVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBncmFkaWVudDoge30sXG4gICAgICBjb3B5X2dyYWRpZW50OiB7fVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfY29sb3JfZ3JhZGllbnRcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fY29sb3JfZ3JhZGllbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2NvbG9yX2dyYWRpZW50X2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtX2NvbG9ycGlja2VyX3dyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWJpbmQ6c3R5bGU9XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGdyYWRpZW50LmZyb20uaW5wdXRfdmFsdWV9XFxcIiBAY2xpY2s9XFxcIiRyZWZzLmZpZWxkX25hbWVfZnJvbS5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJmcm9tXFxcIiB2LW1vZGVsPVxcXCJncmFkaWVudC5mcm9tLmlucHV0X3ZhbHVlXFxcIiByZWY9XFxcImZpZWxkX25hbWVfZnJvbVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcImdyYWRpZW50LmZyb20udmFsdWVcXFwiPjwvc2xpZGVyLXBpY2tlcj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2NvbG9yX2dyYWRpZW50X2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VG88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBncmFkaWVudC50by5pbnB1dF92YWx1ZX1cXFwiIEBjbGljaz1cXFwiJHJlZnMuZmllbGRfbmFtZV90by5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0b1xcXCIgdi1tb2RlbD1cXFwiZ3JhZGllbnQudG8uaW5wdXRfdmFsdWVcXFwiIHJlZj1cXFwiZmllbGRfbmFtZV90b1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2xpZGVyLXBpY2tlciB2LW1vZGVsPVxcXCJncmFkaWVudC50by52YWx1ZVxcXCI+PC9zbGlkZXItcGlja2VyPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIC8vIEpTT04gcGFyc2UgZm9yIFBvc3QgTWV0YVxuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpKSB7XG4gICAgICB0aGlzLmZpZWxkX3ZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmdyYWRpZW50ID0ge1xuICAgICAgZnJvbToge1xuICAgICAgICBpbnB1dF92YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUuZnJvbSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmZyb20gOiAnJyxcbiAgICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLmZyb20gIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS5mcm9tIDogJydcbiAgICAgIH0sXG4gICAgICB0bzoge1xuICAgICAgICBpbnB1dF92YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUudG8gIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS50byA6ICcnLFxuICAgICAgICB2YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUudG8gIT09ICd1bmRlZmluZWQnID8gdGhpcy5maWVsZF92YWx1ZS50byA6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldF9jb3B5X2dyYWRpZW50KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB2dWVjb2xvcl90b19zdHJpbmc6IGZ1bmN0aW9uIHZ1ZWNvbG9yX3RvX3N0cmluZyhjb2xvcikge1xuICAgICAgcmV0dXJuIGNvbG9yLmEgPT09IDEgPyBjb2xvci5oZXggOiAncmdiYSgnICsgY29sb3IucmdiYS5yICsgJywnICsgY29sb3IucmdiYS5nICsgJywnICsgY29sb3IucmdiYS5iICsgJywnICsgY29sb3IucmdiYS5hICsgJyknO1xuICAgIH0sXG4gICAgc2V0X2NvcHlfZ3JhZGllbnQ6IGZ1bmN0aW9uIHNldF9jb3B5X2dyYWRpZW50KCkge1xuICAgICAgdGhpcy5jb3B5X2dyYWRpZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdyYWRpZW50KSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGdyYWRpZW50OiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihncmFkaWVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncmFkaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGdyYWRpZW50W2tleV0uaW5wdXRfdmFsdWUgIT09IF90aGlzLmNvcHlfZ3JhZGllbnRba2V5XS5pbnB1dF92YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IGdyYWRpZW50W2tleV0uaW5wdXRfdmFsdWU7XG5cbiAgICAgICAgICAgIF90aGlzLiRzZXQoZ3JhZGllbnRba2V5XSwgJ3ZhbHVlJywgdmFsdWVba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSB0eXBlb2YgZ3JhZGllbnRba2V5XS52YWx1ZSA9PT0gJ3N0cmluZycgPyBncmFkaWVudFtrZXldLnZhbHVlIDogX3RoaXMudnVlY29sb3JfdG9fc3RyaW5nKGdyYWRpZW50W2tleV0udmFsdWUpO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2V0KGdyYWRpZW50W2tleV0sICdpbnB1dF92YWx1ZScsIHZhbHVlW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0X2NvcHlfZ3JhZGllbnQoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])