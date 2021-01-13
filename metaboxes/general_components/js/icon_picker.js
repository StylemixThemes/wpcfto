(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var timeout = undefined;
var icons = wpcfto_icons_set;
Vue.component('wpcfto_icon_picker', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
  data: function data() {
    return {
      value: {
        icon: '',
        color: '#000',
        size: 15
      },
      focusOn: false,
      icons: icons,
      hoverPanel: false,
      search: "",
      beforeSelect: "",
      selected: "",
      inited: false
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_iconpicker\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n            \n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_generic_field__inner\">\n    \n                    <div class=\"wpcfto_generic_field\">\n                        <label>Icon picker</label>\n                        <input ref=\"picker\"\n                        v-model=\"search\"\n                        @blur=\"blur\"\n                        @focus=\"focus\"\n                        type=\"email\"\n                        class=\"form-control\"\n                        placeholder=\"Search an icon\">\n                    </div>\n    \n                    <wpcfto_color @wpcfto-get-value=\"value['color'] = $event\"\n                        :fields=\"{position: 'bottom'}\"\n                        v-if=\"inited\"\n                        :field_label=\"'Icon color'\"\n                        :field_value=\"value['color']\">\n    \n                    </wpcfto_color>\n    \n                    <wpcfto_range_slider :fields=\"fields\"\n                        v-if=\"inited\"\n                        :field_label=\"'Icon size'\"\n                        :field_name=\"field_name\"\n                        :field_description=\"'Icon size set in pixels'\"\n                        :field_id=\"field_id\"\n                        :field_value=\"value['size']\"\n                        :field_data=\"{min:1,max:200}\"\n                        @wpcfto-get-value=\"value['size'] = $event\">\n                    </wpcfto_range_slider>\n    \n                </div>\n    \n                <transition name=\"icon-preview-fade\">\n                    <div v-if=\"focusOn\" class=\"preview-container\">\n                        <div @click=\"select(undefined)\" @mouseover=\"hoverPanel = true\" @mouseout=\"hoverPanel = false\" :class=\"['previewer', 'rounded', {'custom-shadow-sm': !hoverPanel}, {'custom-shadow': hoverPanel} ]\">\n                            <div v-for=\"(i, index) in iconsFiltered\" :key=\"index\" class=\"icon-preview\">\n                                <div @click.prevent.stop=\"select(i)\" :class=\"['icon-wrapper','rounded','shadow-sm', {selected: i.title == selected}]\" >\n                                    <i :class=\"i.title\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </transition>\n            \n                 <div class=\"icon-preview-wrap\">\n                    <label>Preview</label>\n                    <div class=\"icon-preview-inner\">\n                        <i class=\"wpcfto_generic_field__iconpicker__icon\"\n                        v-bind:class=\"value.icon\"\n                        v-bind:style=\"{ color: value.color, 'font-size' : value.size + 'px'}\"\n                        v-if=\"value.icon && value.icon !== ''\"></i>  \n                        <span v-else>--</span>  \n                    </div>        \n                 </div>\n             </div>\n\n        </div>\n  ",
  mounted: function mounted() {
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) {
      this.value = JSON.parse(this.field_value);
    } else if (_typeof(this.field_value) === 'object') {
      this.value = this.field_value;
    }

    if (!this.value.length) {
      this.value = {
        icon: '',
        color: '#000',
        size: 15
      };
    }

    this.selected = this.value.icon;
    this.inited = true;
  },
  methods: {
    blur: function blur() {
      var _this = this;

      timeout = setTimeout(function () {
        _this.focusOn = false;
        _this.value.icon = '';
      }, 100);
    },
    focus: function focus() {
      this.focusOn = true;
    },
    select: function select(icon) {
      clearTimeout(timeout);

      if (icon) {
        if (this.search != this.selected) this.beforeSelect = this.search;
        this.selected = icon.title;
        this.search = icon.title;
      }

      this.focusOn = false;
      this.value.icon = this.selected;
    }
  },
  computed: {
    iconsFiltered: function iconsFiltered() {
      var search = this.search == this.selected ? this.beforeSelect : this.search;
      return this.icons.filter(function (i) {
        return i.title.indexOf(search) !== -1 || i.searchTerms.some(function (t) {
          return t.indexOf(search) !== -1;
        });
      });
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(value) {
        this.$emit('wpcfto-get-value', value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZThmY2NlMjcuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJ0aW1lb3V0IiwidW5kZWZpbmVkIiwiaWNvbnMiLCJ3cGNmdG9faWNvbnNfc2V0IiwiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJpY29uIiwiY29sb3IiLCJzaXplIiwiZm9jdXNPbiIsImhvdmVyUGFuZWwiLCJzZWFyY2giLCJiZWZvcmVTZWxlY3QiLCJzZWxlY3RlZCIsImluaXRlZCIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwibWV0aG9kcyIsImJsdXIiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJmb2N1cyIsInNlbGVjdCIsImNsZWFyVGltZW91dCIsInRpdGxlIiwiY29tcHV0ZWQiLCJpY29uc0ZpbHRlcmVkIiwiZmlsdGVyIiwiaSIsImluZGV4T2YiLCJzZWFyY2hUZXJtcyIsInNvbWUiLCJ0Iiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFOztBQUEyQixNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0FBQUVILElBQUFBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFLGFBQU8sT0FBT0EsR0FBZDtBQUFvQixLQUF0RDtBQUF5RCxHQUFwSSxNQUEwSTtBQUFFRCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRSxhQUFPQSxHQUFHLElBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF6QixJ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RCxNQUF6QjtBQUNsQyxhQUFLRSxRQUFMLEdBQWdCUCxJQUFJLENBQUN1QixLQUFyQjtBQUNBLGFBQUtsQixNQUFMLEdBQWNMLElBQUksQ0FBQ3VCLEtBQW5CO0FBQ0Q7O0FBRUQsV0FBS3BCLE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS0osS0FBTCxDQUFXQyxJQUFYLEdBQWtCLEtBQUtPLFFBQXZCO0FBQ0Q7QUF2Qk0sR0FyQ3lCO0FBOERsQ2lCLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxVQUFJcEIsTUFBTSxHQUFHLEtBQUtBLE1BQUwsSUFBZSxLQUFLRSxRQUFwQixHQUErQixLQUFLRCxZQUFwQyxHQUFtRCxLQUFLRCxNQUFyRTtBQUNBLGFBQU8sS0FBS1osS0FBTCxDQUFXaUMsTUFBWCxDQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDcEMsZUFBT0EsQ0FBQyxDQUFDSixLQUFGLENBQVFLLE9BQVIsQ0FBZ0J2QixNQUFoQixNQUE0QixDQUFDLENBQTdCLElBQWtDc0IsQ0FBQyxDQUFDRSxXQUFGLENBQWNDLElBQWQsQ0FBbUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZFLGlCQUFPQSxDQUFDLENBQUNILE9BQUYsQ0FBVXZCLE1BQVYsTUFBc0IsQ0FBQyxDQUE5QjtBQUNELFNBRndDLENBQXpDO0FBR0QsT0FKTSxDQUFQO0FBS0Q7QUFSTyxHQTlEd0I7QUF3RWxDMkIsRUFBQUEsS0FBSyxFQUFFO0FBQ0xqQyxJQUFBQSxLQUFLLEVBQUU7QUFDTGtDLE1BQUFBLElBQUksRUFBRSxJQUREO0FBRUxDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCbkMsS0FBakIsRUFBd0I7QUFDL0IsYUFBS29DLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnBDLEtBQS9CO0FBQ0Q7QUFKSTtBQURGO0FBeEUyQixDQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciB0aW1lb3V0ID0gdW5kZWZpbmVkO1xudmFyIGljb25zID0gd3BjZnRvX2ljb25zX3NldDtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19pY29uX3BpY2tlcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfZGF0YSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgc2l6ZTogMTVcbiAgICAgIH0sXG4gICAgICBmb2N1c09uOiBmYWxzZSxcbiAgICAgIGljb25zOiBpY29ucyxcbiAgICAgIGhvdmVyUGFuZWw6IGZhbHNlLFxuICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgYmVmb3JlU2VsZWN0OiBcIlwiLFxuICAgICAgc2VsZWN0ZWQ6IFwiXCIsXG4gICAgICBpbml0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9pY29ucGlja2VyXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX2lubmVyXFxcIj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkljb24gcGlja2VyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVxcXCJwaWNrZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVxcXCJibHVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cXFwiZm9jdXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGFuIGljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPHdwY2Z0b19jb2xvciBAd3BjZnRvLWdldC12YWx1ZT1cXFwidmFsdWVbJ2NvbG9yJ10gPSAkZXZlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cXFwie3Bvc2l0aW9uOiAnYm90dG9tJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaW5pdGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9sYWJlbD1cXFwiJ0ljb24gY29sb3InXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidmFsdWVbJ2NvbG9yJ11cXFwiPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDwvd3BjZnRvX2NvbG9yPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDx3cGNmdG9fcmFuZ2Vfc2xpZGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpbml0ZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2xhYmVsPVxcXCInSWNvbiBzaXplJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfbmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfZGVzY3JpcHRpb249XFxcIidJY29uIHNpemUgc2V0IGluIHBpeGVscydcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2lkPVxcXCJmaWVsZF9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfdmFsdWU9XFxcInZhbHVlWydzaXplJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2RhdGE9XFxcInttaW46MSxtYXg6MjAwfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAd3BjZnRvLWdldC12YWx1ZT1cXFwidmFsdWVbJ3NpemUnXSA9ICRldmVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L3dwY2Z0b19yYW5nZV9zbGlkZXI+XFxuICAgIFxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgXFxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImljb24tcHJldmlldy1mYWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZm9jdXNPblxcXCIgY2xhc3M9XFxcInByZXZpZXctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cXFwic2VsZWN0KHVuZGVmaW5lZClcXFwiIEBtb3VzZW92ZXI9XFxcImhvdmVyUGFuZWwgPSB0cnVlXFxcIiBAbW91c2VvdXQ9XFxcImhvdmVyUGFuZWwgPSBmYWxzZVxcXCIgOmNsYXNzPVxcXCJbJ3ByZXZpZXdlcicsICdyb3VuZGVkJywgeydjdXN0b20tc2hhZG93LXNtJzogIWhvdmVyUGFuZWx9LCB7J2N1c3RvbS1zaGFkb3cnOiBob3ZlclBhbmVsfSBdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiKGksIGluZGV4KSBpbiBpY29uc0ZpbHRlcmVkXFxcIiA6a2V5PVxcXCJpbmRleFxcXCIgY2xhc3M9XFxcImljb24tcHJldmlld1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljay5wcmV2ZW50LnN0b3A9XFxcInNlbGVjdChpKVxcXCIgOmNsYXNzPVxcXCJbJ2ljb24td3JhcHBlcicsJ3JvdW5kZWQnLCdzaGFkb3ctc20nLCB7c2VsZWN0ZWQ6IGkudGl0bGUgPT0gc2VsZWN0ZWR9XVxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiaS50aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uLXByZXZpZXctd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJldmlldzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uLXByZXZpZXctaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9faWNvbnBpY2tlcl9faWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6Y2xhc3M9XFxcInZhbHVlLmljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOnN0eWxlPVxcXCJ7IGNvbG9yOiB2YWx1ZS5jb2xvciwgJ2ZvbnQtc2l6ZScgOiB2YWx1ZS5zaXplICsgJ3B4J31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwidmFsdWUuaWNvbiAmJiB2YWx1ZS5pY29uICE9PSAnJ1xcXCI+PC9pPiAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPi0tPC9zcGFuPiAgXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxcbiAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHRoaXMuZmllbGRfdmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGRfdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgICAgaWNvbjogJycsXG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICAgIHNpemU6IDE1XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnZhbHVlLmljb247XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZm9jdXNPbiA9IGZhbHNlO1xuICAgICAgICBfdGhpcy52YWx1ZS5pY29uID0gJyc7XG4gICAgICB9LCAxMDApO1xuICAgIH0sXG4gICAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5mb2N1c09uID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGljb24pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoICE9IHRoaXMuc2VsZWN0ZWQpIHRoaXMuYmVmb3JlU2VsZWN0ID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpY29uLnRpdGxlO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IGljb24udGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9jdXNPbiA9IGZhbHNlO1xuICAgICAgdGhpcy52YWx1ZS5pY29uID0gdGhpcy5zZWxlY3RlZDtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaWNvbnNGaWx0ZXJlZDogZnVuY3Rpb24gaWNvbnNGaWx0ZXJlZCgpIHtcbiAgICAgIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCA9PSB0aGlzLnNlbGVjdGVkID8gdGhpcy5iZWZvcmVTZWxlY3QgOiB0aGlzLnNlYXJjaDtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaS50aXRsZS5pbmRleE9mKHNlYXJjaCkgIT09IC0xIHx8IGkuc2VhcmNoVGVybXMuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmluZGV4T2Yoc2VhcmNoKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])