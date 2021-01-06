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
  template: "\n        <div class=\"wpcfto_generic_field\">\n            <div class=\"stm_colorpicker_wrapper wpcfto_generic_field_flex_input\" v-bind:class=\"['picker-position-' + position]\">\n\n                <label v-html=\"field_label\"></label>\n\n                <span v-bind:style=\"{'background-color': input_value}\" @click=\"$refs.field_name.focus()\"></span>\n\n                <input type=\"text\"\n                       v-bind:name=\"field_name\"\n                       v-bind:placeholder=\"field_label\"\n                       v-bind:id=\"field_id\"\n                       v-model=\"input_value\"\n                       ref=\"field_name\"\n                />\n\n                <div>\n                    <slider-picker v-model=\"value\"></slider-picker>\n                </div>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n\n                <div v-if=\"fields.hint\" class=\"wpcfto_field_hint color\">\n                    <i class=\"fa fa-info-circle\"></i><div v-html=\"fields.hint\" class=\"hint\"></div>\n                </div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODhiNjIzNC5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJWdWVDb2xvciIsIlBob3Rvc2hvcCIsImRhdGEiLCJpbnB1dF92YWx1ZSIsInBvc2l0aW9uIiwidmFsdWUiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiY29sb3JzIiwicmVwbGFjZSIsInNsaWNlIiwic3BsaXQiLCIkc2V0IiwiZmllbGRzIiwidGVtcGxhdGUiLCJtZXRob2RzIiwid2F0Y2giLCIkZW1pdCIsIl92YWx1ZSIsInJnYmEiLCJyZ2JhX2NvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsY0FBZCxFQUE4QjtBQUM1QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEcUI7QUFFNUJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWLHFCQUFpQkMsUUFBUSxDQUFDQztBQURoQixHQUZnQjtBQUs1QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxXQUFXLEVBQUUsRUFEUjtBQUVMQyxNQUFBQSxRQUFRLEVBQUUsUUFGTDtBQUdMQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEdBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFLEdBRkU7QUFHTEMsUUFBQUEsQ0FBQyxFQUFFLEdBSEU7QUFJTEMsUUFBQUEsQ0FBQyxFQUFFO0FBSkU7QUFIRixLQUFQO0FBVUQsR0FoQjJCO0FBaUI1QkMsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSSxPQUFPLEtBQUtDLFdBQVosS0FBNEIsUUFBaEMsRUFBMEM7QUFDeEMsV0FBS1IsV0FBTCxHQUFtQixLQUFLUSxXQUF4QjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxLQUFLRCxXQUFMLENBQWlCRSxPQUFqQixDQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQ0MsS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxFQUFtREMsS0FBbkQsQ0FBeUQsR0FBekQsQ0FBYjtBQUNBLFdBQUtDLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNBLFdBQUtJLElBQUwsQ0FBVSxLQUFLWCxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCTyxNQUFNLENBQUMsQ0FBRCxDQUFqQztBQUNEOztBQUVELFFBQUksS0FBS0ssTUFBTCxDQUFZYixRQUFoQixFQUEwQixLQUFLQSxRQUFMLEdBQWdCLEtBQUthLE1BQUwsQ0FBWWIsUUFBNUI7QUFDM0IsR0E1QjJCO0FBNkI1QmMsRUFBQUEsUUFBUSxFQUFFLG1wQ0E3QmtCO0FBOEI1QkMsRUFBQUEsT0FBTyxFQUFFLEVBOUJtQjtBQStCNUJDLEVBQUFBLEtBQUssRUFBRTtBQUNMakIsSUFBQUEsV0FBVyxFQUFFLFNBQVNBLFdBQVQsQ0FBcUJFLEtBQXJCLEVBQTRCO0FBQ3ZDLFdBQUtnQixLQUFMLENBQVcsa0JBQVgsRUFBK0JoQixLQUEvQjtBQUNELEtBSEk7QUFJTEEsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZWlCLE1BQWYsRUFBdUI7QUFDNUIsVUFBSSxPQUFPQSxNQUFNLENBQUNDLElBQWQsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdEMsWUFBSUMsVUFBVSxHQUFHLFVBQVVGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsQ0FBdEIsR0FBMEIsR0FBMUIsR0FBZ0NnQixNQUFNLENBQUNDLElBQVAsQ0FBWWhCLENBQTVDLEdBQWdELEdBQWhELEdBQXNEZSxNQUFNLENBQUNDLElBQVAsQ0FBWWYsQ0FBbEUsR0FBc0UsR0FBdEUsR0FBNEVjLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxDQUF4RixHQUE0RixHQUE3RztBQUNBLGFBQUtPLElBQUwsQ0FBVSxJQUFWLEVBQWdCLGFBQWhCLEVBQStCUSxVQUEvQjtBQUNBLGFBQUtILEtBQUwsQ0FBVyxrQkFBWCxFQUErQkcsVUFBL0I7QUFDRDtBQUNGO0FBVkk7QUEvQnFCLENBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19jb2xvcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgY29tcG9uZW50czoge1xuICAgICdzbGlkZXItcGlja2VyJzogVnVlQ29sb3IuUGhvdG9zaG9wXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0X3ZhbHVlOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDFcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5wdXRfdmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuICAgICAgdmFyIGNvbG9ycyA9IHRoaXMuZmllbGRfdmFsdWUucmVwbGFjZSgncmdiYSgnLCAnJykuc2xpY2UoMCwgLTEpLnNwbGl0KCcsJyk7XG4gICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZSwgJ3InLCBjb2xvcnNbMF0pO1xuICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUsICdnJywgY29sb3JzWzFdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLCAnYicsIGNvbG9yc1syXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZSwgJ2EnLCBjb2xvcnNbM10pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZpZWxkcy5wb3NpdGlvbikgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZmllbGRzLnBvc2l0aW9uO1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdG1fY29sb3JwaWNrZXJfd3JhcHBlciB3cGNmdG9fZ2VuZXJpY19maWVsZF9mbGV4X2lucHV0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcIlsncGlja2VyLXBvc2l0aW9uLScgKyBwb3NpdGlvbl1cXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBpbnB1dF92YWx1ZX1cXFwiIEBjbGljaz1cXFwiJHJlZnMuZmllbGRfbmFtZS5mb2N1cygpXFxcIj48L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOmlkPVxcXCJmaWVsZF9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImlucHV0X3ZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHNsaWRlci1waWNrZXIgdi1tb2RlbD1cXFwidmFsdWVcXFwiPjwvc2xpZGVyLXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgdi1odG1sPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmaWVsZC1kZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImZpZWxkcy5oaW50XFxcIiBjbGFzcz1cXFwid3BjZnRvX2ZpZWxkX2hpbnQgY29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWluZm8tY2lyY2xlXFxcIj48L2k+PGRpdiB2LWh0bWw9XFxcImZpZWxkcy5oaW50XFxcIiBjbGFzcz1cXFwiaGludFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dF92YWx1ZTogZnVuY3Rpb24gaW5wdXRfdmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB2YWx1ZSk7XG4gICAgfSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIF92YWx1ZS5yZ2JhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmdiYV9jb2xvciA9ICdyZ2JhKCcgKyBfdmFsdWUucmdiYS5yICsgJywnICsgX3ZhbHVlLnJnYmEuZyArICcsJyArIF92YWx1ZS5yZ2JhLmIgKyAnLCcgKyBfdmFsdWUucmdiYS5hICsgJyknO1xuICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2lucHV0X3ZhbHVlJywgcmdiYV9jb2xvcik7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCByZ2JhX2NvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])