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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_link_color\" v-bind:class=\"field_id\">\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                \n                <div class=\"wpcfto_link_color\">\n                    <div class=\"wpcfto_link_color_group\">\n                        <label>Regular</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': link.regular.input_value}\" @click=\"$refs.field_regular.focus()\"></span>\n                            <input type=\"text\" name=\"regular\" v-model=\"link.regular.input_value\" ref=\"field_regular\" />\n                            <div><slider-picker v-model=\"link.regular.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"wpcfto_link_color_group\">\n                        <label>Hover</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': link.hover.input_value}\" @click=\"$refs.field_hover.focus()\"></span>\n                            <input type=\"text\" name=\"hover\" v-model=\"link.hover.input_value\" ref=\"field_hover\" />\n                            <div><slider-picker v-model=\"link.hover.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"wpcfto_link_color_group\">\n                        <label>Active</label>\n                        <div class=\"stm_colorpicker_wrapper\">\n                            <span v-bind:style=\"{'background-color': link.active.input_value}\" @click=\"$refs.field_active.focus()\"></span>\n                            <input type=\"text\" name=\"active\" v-model=\"link.active.input_value\" ref=\"field_active\" />\n                            <div><slider-picker v-model=\"link.active.value\"></slider-picker></div>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZmVkOTUzNTIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnRzIiwiVnVlQ29sb3IiLCJDaHJvbWUiLCJkYXRhIiwibGluayIsImNvcHlfbGluayIsInRlbXBsYXRlIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwicmVndWxhciIsImlucHV0X3ZhbHVlIiwidmFsdWUiLCJob3ZlciIsImFjdGl2ZSIsInNldF9jb3B5X2xpbmsiLCJtZXRob2RzIiwidnVlY29sb3JfdG9fc3RyaW5nIiwiY29sb3IiLCJhIiwiaGV4IiwicmdiYSIsInIiLCJnIiwiYiIsInN0cmluZ2lmeSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCJfdGhpcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiJHNldCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsbUJBQWQsRUFBbUM7QUFDakNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDBCO0FBRWpDQyxFQUFBQSxVQUFVLEVBQUU7QUFDVixxQkFBaUJDLFFBQVEsQ0FBQ0M7QUFEaEIsR0FGcUI7QUFLakNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMsTUFBQUEsU0FBUyxFQUFFO0FBRk4sS0FBUDtBQUlELEdBVmdDO0FBV2pDQyxFQUFBQSxRQUFRLEVBQUUsaXZFQVh1QjtBQVlqQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUI7QUFDQSxRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FB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QUFLLENBQUNLLElBQU4sQ0FBV2hDLElBQUksQ0FBQytCLEdBQUQsQ0FBZixFQUFzQixPQUF0QixFQUErQnJCLEtBQUssQ0FBQ3FCLEdBQUQsQ0FBcEM7QUFDRCxXQUpELE1BSU87QUFDTHJCLFlBQUFBLEtBQUssQ0FBQ3FCLEdBQUQsQ0FBTCxHQUFhLE9BQU8vQixJQUFJLENBQUMrQixHQUFELENBQUosQ0FBVXJCLEtBQWpCLEtBQTJCLFFBQTNCLEdBQXNDVixJQUFJLENBQUMrQixHQUFELENBQUosQ0FBVXJCLEtBQWhELEdBQXdEaUIsS0FBSyxDQUFDWixrQkFBTixDQUF5QmYsSUFBSSxDQUFDK0IsR0FBRCxDQUFKLENBQVVyQixLQUFuQyxDQUFyRTs7QUFFQWlCLFlBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXaEMsSUFBSSxDQUFDK0IsR0FBRCxDQUFmLEVBQXNCLGFBQXRCLEVBQXFDckIsS0FBSyxDQUFDcUIsR0FBRCxDQUExQztBQUNEO0FBQ0YsU0FWRDtBQVdBLGFBQUtsQixhQUFMO0FBQ0EsYUFBS29CLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnZCLEtBQS9CO0FBQ0Q7QUFuQkc7QUFERDtBQTFDMEIsQ0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2xpbmtfY29sb3InLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc2xpZGVyLXBpY2tlcic6IFZ1ZUNvbG9yLkNocm9tZVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiB7fSxcbiAgICAgIGNvcHlfbGluazoge31cbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2xpbmtfY29sb3JcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2xpbmtfY29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2xpbmtfY29sb3JfZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWd1bGFyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdG1fY29sb3JwaWNrZXJfd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogbGluay5yZWd1bGFyLmlucHV0X3ZhbHVlfVxcXCIgQGNsaWNrPVxcXCIkcmVmcy5maWVsZF9yZWd1bGFyLmZvY3VzKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInJlZ3VsYXJcXFwiIHYtbW9kZWw9XFxcImxpbmsucmVndWxhci5pbnB1dF92YWx1ZVxcXCIgcmVmPVxcXCJmaWVsZF9yZWd1bGFyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcImxpbmsucmVndWxhci52YWx1ZVxcXCI+PC9zbGlkZXItcGlja2VyPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19saW5rX2NvbG9yX2dyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SG92ZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBsaW5rLmhvdmVyLmlucHV0X3ZhbHVlfVxcXCIgQGNsaWNrPVxcXCIkcmVmcy5maWVsZF9ob3Zlci5mb2N1cygpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJob3ZlclxcXCIgdi1tb2RlbD1cXFwibGluay5ob3Zlci5pbnB1dF92YWx1ZVxcXCIgcmVmPVxcXCJmaWVsZF9ob3ZlclxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2xpZGVyLXBpY2tlciB2LW1vZGVsPVxcXCJsaW5rLmhvdmVyLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2xpbmtfY29sb3JfZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3RpdmU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bV9jb2xvcnBpY2tlcl93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBsaW5rLmFjdGl2ZS5pbnB1dF92YWx1ZX1cXFwiIEBjbGljaz1cXFwiJHJlZnMuZmllbGRfYWN0aXZlLmZvY3VzKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFjdGl2ZVxcXCIgdi1tb2RlbD1cXFwibGluay5hY3RpdmUuaW5wdXRfdmFsdWVcXFwiIHJlZj1cXFwiZmllbGRfYWN0aXZlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcImxpbmsuYWN0aXZlLnZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIC8vIEpTT04gcGFyc2UgZm9yIFBvc3QgTWV0YVxuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpKSB7XG4gICAgICB0aGlzLmZpZWxkX3ZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpbmsgPSB7XG4gICAgICByZWd1bGFyOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5yZWd1bGFyICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUucmVndWxhciA6ICcnLFxuICAgICAgICB2YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUucmVndWxhciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLnJlZ3VsYXIgOiAnJ1xuICAgICAgfSxcbiAgICAgIGhvdmVyOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5ob3ZlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmhvdmVyIDogJycsXG4gICAgICAgIHZhbHVlOiB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS5ob3ZlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmhvdmVyIDogJydcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgaW5wdXRfdmFsdWU6IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLmFjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlLmFjdGl2ZSA6ICcnLFxuICAgICAgICB2YWx1ZTogdHlwZW9mIHRoaXMuZmllbGRfdmFsdWUuYWN0aXZlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUuYWN0aXZlIDogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0X2NvcHlfbGluaygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdnVlY29sb3JfdG9fc3RyaW5nOiBmdW5jdGlvbiB2dWVjb2xvcl90b19zdHJpbmcoY29sb3IpIHtcbiAgICAgIHJldHVybiBjb2xvci5hID09PSAxID8gY29sb3IuaGV4IDogJ3JnYmEoJyArIGNvbG9yLnJnYmEuciArICcsJyArIGNvbG9yLnJnYmEuZyArICcsJyArIGNvbG9yLnJnYmEuYiArICcsJyArIGNvbG9yLnJnYmEuYSArICcpJztcbiAgICB9LFxuICAgIHNldF9jb3B5X2xpbms6IGZ1bmN0aW9uIHNldF9jb3B5X2xpbmsoKSB7XG4gICAgICB0aGlzLmNvcHlfbGluayA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5saW5rKSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGxpbms6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGxpbmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMobGluaykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGxpbmtba2V5XS5pbnB1dF92YWx1ZSAhPT0gX3RoaXMuY29weV9saW5rW2tleV0uaW5wdXRfdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBsaW5rW2tleV0uaW5wdXRfdmFsdWU7XG5cbiAgICAgICAgICAgIF90aGlzLiRzZXQobGlua1trZXldLCAndmFsdWUnLCB2YWx1ZVtrZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IHR5cGVvZiBsaW5rW2tleV0udmFsdWUgPT09ICdzdHJpbmcnID8gbGlua1trZXldLnZhbHVlIDogX3RoaXMudnVlY29sb3JfdG9fc3RyaW5nKGxpbmtba2V5XS52YWx1ZSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRzZXQobGlua1trZXldLCAnaW5wdXRfdmFsdWUnLCB2YWx1ZVtrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldF9jb3B5X2xpbmsoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])