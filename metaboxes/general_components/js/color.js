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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDcyMGQ2MjguanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnRzIiwiVnVlQ29sb3IiLCJQaG90b3Nob3AiLCJkYXRhIiwiaW5wdXRfdmFsdWUiLCJwb3NpdGlvbiIsInZhbHVlIiwiciIsImciLCJiIiwiYSIsImNyZWF0ZWQiLCJmaWVsZF92YWx1ZSIsImNvbG9ycyIsInJlcGxhY2UiLCJzbGljZSIsInNwbGl0IiwiJHNldCIsImZpZWxkcyIsInRlbXBsYXRlIiwibWV0aG9kcyIsIndhdGNoIiwiJGVtaXQiLCJfdmFsdWUiLCJyZ2JhIiwicmdiYV9jb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGNBQWQsRUFBOEI7QUFDNUJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHFCO0FBRTVCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVixxQkFBaUJDLFFBQVEsQ0FBQ0M7QUFEaEIsR0FGZ0I7QUFLNUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsV0FBVyxFQUFFLEVBRFI7QUFFTEMsTUFBQUEsUUFBUSxFQUFFLFFBRkw7QUFHTEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLENBQUMsRUFBRSxHQURFO0FBRUxDLFFBQUFBLENBQUMsRUFBRSxHQUZFO0FBR0xDLFFBQUFBLENBQUMsRUFBRSxHQUhFO0FBSUxDLFFBQUFBLENBQUMsRUFBRTtBQUpFO0FBSEYsS0FBUDtBQVVELEdBaEIyQjtBQWlCNUJDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksT0FBTyxLQUFLQyxXQUFaLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDLFdBQUtSLFdBQUwsR0FBbUIsS0FBS1EsV0FBeEI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsS0FBS0QsV0FBTCxDQUFpQkUsT0FBakIsQ0FBeUIsT0FBekIsRUFBa0MsRUFBbEMsRUFBc0NDLEtBQXRDLENBQTRDLENBQTVDLEVBQStDLENBQUMsQ0FBaEQsRUFBbURDLEtBQW5ELENBQXlELEdBQXpELENBQWI7QUFDQSxXQUFLQyxJQUFMLENBQVUsS0FBS1gsS0FBZixFQUFzQixHQUF0QixFQUEyQk8sTUFBTSxDQUFDLENBQUQsQ0FBakM7QUFDQSxXQUFLSSxJQUFMLENBQVUsS0FBS1gsS0FBZixFQUFzQixHQUF0QixFQUEyQk8sTUFBTSxDQUFDLENBQUQsQ0FBakM7QUFDQSxXQUFLSSxJQUFMLENBQVUsS0FBS1gsS0FBZixFQUFzQixHQUF0QixFQUEyQk8sTUFBTSxDQUFDLENBQUQsQ0FBakM7QUFDQSxXQUFLSSxJQUFMLENBQVUsS0FBS1gsS0FBZixFQUFzQixHQUF0QixFQUEyQk8sTUFBTSxDQUFDLENBQUQsQ0FBakM7QUFDRDs7QUFFRCxRQUFJLEtBQUtLLE1BQUwsQ0FBWWIsUUFBaEIsRUFBMEIsS0FBS0EsUUFBTCxHQUFnQixLQUFLYSxNQUFMLENBQVliLFFBQTVCO0FBQzNCLEdBNUIyQjtBQTZCNUJjLEVBQUFBLFFBQVEsRUFBRSxpekJBN0JrQjtBQThCNUJDLEVBQUFBLE9BQU8sRUFBRSxFQTlCbUI7QUErQjVCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTGpCLElBQUFBLFdBQVcsRUFBRSxTQUFTQSxXQUFULENBQXFCRSxLQUFyQixFQUE0QjtBQUN2QyxXQUFLZ0IsS0FBTCxDQUFXLGtCQUFYLEVBQStCaEIsS0FBL0I7QUFDRCxLQUhJO0FBSUxBLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVpQixNQUFmLEVBQXVCO0FBQzVCLFVBQUksT0FBT0EsTUFBTSxDQUFDQyxJQUFkLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDLFlBQUlDLFVBQVUsR0FBRyxVQUFVRixNQUFNLENBQUNDLElBQVAsQ0FBWWpCLENBQXRCLEdBQTBCLEdBQTFCLEdBQWdDZ0IsTUFBTSxDQUFDQyxJQUFQLENBQVloQixDQUE1QyxHQUFnRCxHQUFoRCxHQUFzRGUsTUFBTSxDQUFDQyxJQUFQLENBQVlmLENBQWxFLEdBQXNFLEdBQXRFLEdBQTRFYyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsQ0FBeEYsR0FBNEYsR0FBN0c7QUFDQSxhQUFLTyxJQUFMLENBQVUsSUFBVixFQUFnQixhQUFoQixFQUErQlEsVUFBL0I7QUFDQSxhQUFLSCxLQUFMLENBQVcsa0JBQVgsRUFBK0JHLFVBQS9CO0FBQ0Q7QUFDRjtBQVZJO0FBL0JxQixDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fY29sb3InLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc2xpZGVyLXBpY2tlcic6IFZ1ZUNvbG9yLlBob3Rvc2hvcFxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dF92YWx1ZTogJycsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICB2YWx1ZToge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmlucHV0X3ZhbHVlID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgICAgIHZhciBjb2xvcnMgPSB0aGlzLmZpZWxkX3ZhbHVlLnJlcGxhY2UoJ3JnYmEoJywgJycpLnNsaWNlKDAsIC0xKS5zcGxpdCgnLCcpO1xuICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUsICdyJywgY29sb3JzWzBdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLCAnZycsIGNvbG9yc1sxXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZSwgJ2InLCBjb2xvcnNbMl0pO1xuICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUsICdhJywgY29sb3JzWzNdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWVsZHMucG9zaXRpb24pIHRoaXMucG9zaXRpb24gPSB0aGlzLmZpZWxkcy5wb3NpdGlvbjtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtX2NvbG9ycGlja2VyX3dyYXBwZXIgd3BjZnRvX2dlbmVyaWNfZmllbGRfZmxleF9pbnB1dFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJbJ3BpY2tlci1wb3NpdGlvbi0nICsgcG9zaXRpb25dXFxcIj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtYmluZDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogaW5wdXRfdmFsdWV9XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOmlkPVxcXCJmaWVsZF9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImlucHV0X3ZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8c2xpZGVyLXBpY2tlciB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCI+PC9zbGlkZXItcGlja2VyPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj4gICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1ldGhvZHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGlucHV0X3ZhbHVlOiBmdW5jdGlvbiBpbnB1dF92YWx1ZSh2YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZhbHVlKTtcbiAgICB9LFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgX3ZhbHVlLnJnYmEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciByZ2JhX2NvbG9yID0gJ3JnYmEoJyArIF92YWx1ZS5yZ2JhLnIgKyAnLCcgKyBfdmFsdWUucmdiYS5nICsgJywnICsgX3ZhbHVlLnJnYmEuYiArICcsJyArIF92YWx1ZS5yZ2JhLmEgKyAnKSc7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW5wdXRfdmFsdWUnLCByZ2JhX2NvbG9yKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHJnYmFfY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])