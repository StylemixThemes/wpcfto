(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_color', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  components: {
    'slider-picker': VueColor.Photoshop
  },
  data: function data() {
    return {
      input_value: '',
      position: 'bottom',
      value: {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      }
    };
  },
  created: function created() {
    if (typeof this.field_value === 'string') {
      this.input_value = this.field_value;
      var colors = this.field_value.replace('rgba(', '').slice(0, -1).split(',');
      this.$set(this.value, 'r', colors[0]);
      this.$set(this.value, 'g', colors[1]);
      this.$set(this.value, 'b', colors[2]);
      this.$set(this.value, 'a', colors[3]);
    }

    if (this.fields.position) this.position = this.fields.position;
  },
  template: "\n        <div class=\"wpcfto_generic_field\">\n            <div class=\"stm_colorpicker_wrapper wpcfto_generic_field_flex_input\" v-bind:class=\"['picker-position-' + position]\">\n            \n                <label v-html=\"field_label\"></label>\n               \n                <span v-bind:style=\"{'background-color': input_value}\"></span>\n            \n                <input type=\"text\"\n                       v-bind:name=\"field_name\"\n                       v-bind:placeholder=\"field_label\"\n                       v-bind:id=\"field_id\"\n                       v-model=\"input_value\"\n                />\n                       \n                <div>\n                    <slider-picker v-model=\"value\"></slider-picker>\n                </div>\n            </div>    \n        </div>\n    ",
  methods: {},
  watch: {
    input_value: function input_value(value) {
      this.$emit('wpcfto-get-value', value);
    },
    value: function value(_value) {
      if (typeof _value.rgba !== 'undefined') {
        var rgba_color = 'rgba(' + _value.rgba.r + ',' + _value.rgba.g + ',' + _value.rgba.b + ',' + _value.rgba.a + ')';
        this.$set(this, 'input_value', rgba_color);
        this.$emit('wpcfto-get-value', rgba_color);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTRlOTcxOS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJWdWVDb2xvciIsIlBob3Rvc2hvcCIsImRhdGEiLCJpbnB1dF92YWx1ZSIsInBvc2l0aW9uIiwidmFsdWUiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiY29sb3JzIiwicmVwbGFjZSIsInNsaWNlIiwic3BsaXQiLCIkc2V0IiwiZmllbGRzIiwidGVtcGxhdGUiLCJtZXRob2RzIiwid2F0Y2giLCIkZW1pdCIsIl92YWx1ZSIsInJnYmEiLCJyZ2JhX2NvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsY0FBZCxFQUE4QjtBQUM1QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEcUI7QUFFNUJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWLHFCQUFpQkMsUUFBUSxDQUFDQztBQURoQixHQUZnQjtBQUs1QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxXQUFXLEVBQUUsRUFEUjtBQUVMQyxNQUFBQSxRQUFRLEVBQUUsUUFGTDtBQUdMQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEdBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFLEdBRkU7QUFHTEMsUUFBQUEsQ0FBQyxFQUFFLEdBSEU7QUFJTEMsUUFBQUEsQ0FBQyxFQUFFO0FBSkU7QUFIRixLQUFQO0FBVUQsR0FoQjJCO0FBaUI1QkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSSxPQUFPLEtBQUtDLFdBQVosS0FBNEIsUUFBaEMsRUFBMEM7QUFDeEMsV0FBS1IsV0FBTCxHQUFtQixLQUFLUSxXQUF4QjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxLQUFLRCxXQUFMLENBQWlCRSxPQUFqQixDQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQ0MsS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxFQUFtREMsS0FBbkQsQ0FBeUQsR0FBekQsQ0FBYjtBQUNBLFdBQUtDLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNEOztBQUVELFFBQUksS0FBS0ssTUFBTCxDQUFZYixRQUFoQixFQUEwQixLQUFLQSxRQUFMLEdBQWdCLEtBQUthLE1BQUwsQ0FBWWIsUUFBNUI7QUFDM0IsR0E1QjJCO0FBNkI1QmMsRUFBQUEsUUFBUSxFQUFFLGl6QkE3QmtCO0FBOEI1QkMsRUFBQUEsT0FBTyxFQUFFLEVBOUJtQjtBQStCNUJDLEVBQUFBLEtBQUssRUFBRTtBQUNMakIsSUFBQUEsV0FBVyxFQUFFLFNBQVNBLFdBQVQsQ0FBcUJFLEtBQXJCLEVBQTRCO0FBQ3ZDLFdBQUtnQixLQUFMLENBQVcsa0JBQVgsRUFBK0JoQixLQUEvQjtBQUNELEtBSEk7QUFJTEEsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZWlCLE1BQWYsRUFBdUI7QUFDNUIsVUFBSSxPQUFPQSxNQUFNLENBQUNDLElBQWQsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdEMsWUFBSUMsVUFBVSxHQUFHLFVBQVVGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsQ0FBdEIsR0FBMEIsR0FBMUIsR0FBZ0NnQixNQUFNLENBQUNDLElBQVAsQ0FBWWhCLENBQTVDLEdBQWdELEdBQWhELEdBQXNEZSxNQUFNLENBQUNDLElBQVAsQ0FBWWYsQ0FBbEUsR0FBc0UsR0FBdEUsR0FBNEVjLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxDQUF4RixHQUE0RixHQUE3RztBQUNBLGFBQUtPLElBQUwsQ0FBVSxJQUFWLEVBQWdCLGFBQWhCLEVBQStCUSxVQUEvQjtBQUNBLGFBQUtILEtBQUwsQ0FBVyxrQkFBWCxFQUErQkcsVUFBL0I7QUFDRDtBQUNGO0FBVkk7QUEvQnFCLENBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19jb2xvcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgY29tcG9uZW50czoge1xuICAgICdzbGlkZXItcGlja2VyJzogVnVlQ29sb3IuUGhvdG9zaG9wXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0X3ZhbHVlOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDFcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5wdXRfdmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuICAgICAgdmFyIGNvbG9ycyA9IHRoaXMuZmllbGRfdmFsdWUucmVwbGFjZSgncmdiYSgnLCAnJykuc2xpY2UoMCwgLTEpLnNwbGl0KCcsJyk7XG4gICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZSwgJ3InLCBjb2xvcnNbMF0pO1xuICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUsICdnJywgY29sb3JzWzFdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLCAnYicsIGNvbG9yc1syXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZSwgJ2EnLCBjb2xvcnNbM10pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZpZWxkcy5wb3NpdGlvbikgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZmllbGRzLnBvc2l0aW9uO1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdG1fY29sb3JwaWNrZXJfd3JhcHBlciB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcIlsncGlja2VyLXBvc2l0aW9uLScgKyBwb3NpdGlvbl1cXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBpbnB1dF92YWx1ZX1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiaW5wdXRfdmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbGlkZXItcGlja2VyIHYtbW9kZWw9XFxcInZhbHVlXFxcIj48L3NsaWRlci1waWNrZXI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PiAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRfdmFsdWU6IGZ1bmN0aW9uIGlucHV0X3ZhbHVlKHZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdmFsdWUpO1xuICAgIH0sXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBfdmFsdWUucmdiYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHJnYmFfY29sb3IgPSAncmdiYSgnICsgX3ZhbHVlLnJnYmEuciArICcsJyArIF92YWx1ZS5yZ2JhLmcgKyAnLCcgKyBfdmFsdWUucmdiYS5iICsgJywnICsgX3ZhbHVlLnJnYmEuYSArICcpJztcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnB1dF92YWx1ZScsIHJnYmFfY29sb3IpO1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgcmdiYV9jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])