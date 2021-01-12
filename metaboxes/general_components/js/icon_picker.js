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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_iconpicker\">\n\n            <div class=\"wpcfto_generic_field__inner\">\n            \n<!--                <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>-->\n            \n                <div class=\"wpcfto_generic_field\">\n                    <label>Icon picker</label>\n                    <input ref=\"picker\"\n                    v-model=\"search\"\n                    @blur=\"blur\"\n                    @focus=\"focus\"\n                    type=\"email\"\n                    class=\"form-control\"\n                    placeholder=\"Search an icon\">\n                </div>\n\n                <wpcfto_color @wpcfto-get-value=\"value['color'] = $event\"\n                    :fields=\"{position: 'bottom'}\"\n                    v-if=\"inited\"\n                    :field_label=\"'Icon color'\"\n                    :field_value=\"value['color']\">\n\n                </wpcfto_color>\n\n                <wpcfto_range_slider :fields=\"fields\"\n                    v-if=\"inited\"\n                    :field_label=\"'Icon size'\"\n                    :field_name=\"field_name\"\n                    :field_description=\"'Icon size set in pixels'\"\n                    :field_id=\"field_id\"\n                    :field_value=\"value['size']\"\n                    :field_data=\"{min:1,max:200}\"\n                    @wpcfto-get-value=\"value['size'] = $event\">\n                </wpcfto_range_slider>\n\n            </div>\n\n            <transition name=\"icon-preview-fade\">\n                <div v-if=\"focusOn\" class=\"preview-container\">\n                    <div @click=\"select(undefined)\" @mouseover=\"hoverPanel = true\" @mouseout=\"hoverPanel = false\" :class=\"['previewer', 'rounded', {'custom-shadow-sm': !hoverPanel}, {'custom-shadow': hoverPanel} ]\">\n                        <div v-for=\"(i, index) in iconsFiltered\" :key=\"index\" class=\"icon-preview\">\n                            <div @click.prevent.stop=\"select(i)\" :class=\"['icon-wrapper','rounded','shadow-sm', {selected: i.title == selected}]\" >\n                                <i :class=\"i.title\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </transition>\n        \n             <div class=\"icon-preview-wrap\">\n                <label>Preview</label>\n                <div class=\"icon-preview-inner\">\n                    <i class=\"wpcfto_generic_field__iconpicker__icon\"\n                    v-bind:class=\"value.icon\"\n                    v-bind:style=\"{ color: value.color, 'font-size' : value.size + 'px'}\"\n                    v-if=\"value.icon\"></i>    \n                </div>        \n             </div>\n\n        </div>\n  ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGE3Mzg0MGIuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJ0aW1lb3V0IiwidW5kZWZpbmVkIiwiaWNvbnMiLCJ3cGNmdG9faWNvbnNfc2V0IiwiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJpY29uIiwiY29sb3IiLCJzaXplIiwiZm9jdXNPbiIsImhvdmVyUGFuZWwiLCJzZWFyY2giLCJiZWZvcmVTZWxlY3QiLCJzZWxlY3RlZCIsImluaXRlZCIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwibWV0aG9kcyIsImJsdXIiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJmb2N1cyIsInNlbGVjdCIsImNsZWFyVGltZW91dCIsInRpdGxlIiwiY29tcHV0ZWQiLCJpY29uc0ZpbHRlcmVkIiwiZmlsdGVyIiwiaSIsImluZGV4T2YiLCJzZWFyY2hUZXJtcyIsInNvbWUiLCJ0Iiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFOztBQUEyQixNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0FBQUVILElBQUFBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFLGFBQU8sT0FBT0EsR0FBZDtBQUFvQixLQUF0RDtBQUF5RCxHQUFwSSxNQUEwSTtBQUFFRCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRSxhQUFPQSxHQUFHLElBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0QsR0FBRyxDQUFDRyxXQUFKLEtBQW9CRixNQUEzRCxJQUFxRUQsR0FBRyxLQUFLQyxNQUFNLENBQUNHLFNBQXBGLEdBQWdHLFFBQWhHLEdBQTJHLE9BQU9KLEdBQXpIO0FBQStILEtBQWpLO0FBQW9LOztBQUFDLFNBQU9ELE9BQU8sQ0FBQ0MsR0FBRCxDQUFkO0FBQXNCOztBQUUxWCxJQUFJSyxPQUFPLEdBQUdDLFNBQWQ7QUFDQSxJQUFJQyxLQUFLLEdBQUdDLGdCQUFaO0FBQ0FDLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLG9CQUFkLEVBQW9DO0FBQ2xDQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSxDQUQyQjtBQUVsQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMsUUFBQUEsS0FBSyxFQUFFLE1BRkY7QUFHTEMsUUFBQUEsSUFBSSxFQUFFO0FBSEQsT0FERjtBQU1MQyxNQUFBQSxPQUFPLEVBQUUsS0FOSjtBQU9MVixNQUFBQSxLQUFLLEVBQUVBLEtBUEY7QUFRTFcsTUFBQUEsVUFBVSxFQUFFLEtBUlA7QUFTTEMsTUFBQUEsTUFBTSxFQUFFLEVBVEg7QUFVTEMsTUFBQUEsWUFBWSxFQUFFLEVBVlQ7QUFXTEMsTUFBQUEsUUFBUSxFQUFFLEVBWEw7QUFZTEMsTUFBQUEsTUFBTSxFQUFFO0FBWkgsS0FBUDtBQWNELEdBakJpQztBQWtCbENDLEVBQUFBLFFBQVEsRUFBRSxvekZBbEJ3QjtBQW1CbENDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksT0FBTyxLQUFLQyxXQUFaLEtBQTRCLFFBQTVCLElBQXdDQyxrQkFBa0IsQ0FBQyxLQUFLRCxXQUFOLENBQTlELEVBQWtGO0FBQ2hGLFdBQUtaLEtBQUwsR0FBYWMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0gsV0FBaEIsQ0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJMUIsT0FBTyxDQUFDLEtBQUswQixXQUFOLENBQVAsS0FBOEIsUUFBbEMsRUFBNEM7QUFDakQsV0FBS1osS0FBTCxHQUFhLEtBQUtZLFdBQWxCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLEtBQUtaLEtBQUwsQ0FBV2dCLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQUtoQixLQUFMLEdBQWE7QUFDWEMsUUFBQUEsSUFBSSxFQUFFLEVBREs7QUFFWEMsUUFBQUEsS0FBSyxFQUFFLE1BRkk7QUFHWEMsUUFBQUEsSUFBSSxFQUFFO0FBSEssT0FBYjtBQUtEOztBQUVELFNBQUtLLFFBQUwsR0FBZ0IsS0FBS1IsS0FBTCxDQUFXQyxJQUEzQjtBQUNBLFNBQUtRLE1BQUwsR0FBYyxJQUFkO0FBQ0QsR0FwQ2lDO0FBcUNsQ1EsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFVBQUlDLEtBQUssR0FBRyxJQUFaOztBQUVBM0IsTUFBQUEsT0FBTyxHQUFHNEIsVUFBVSxDQUFDLFlBQVk7QUFDL0JELFFBQUFBLEtBQUssQ0FBQ2YsT0FBTixHQUFnQixLQUFoQjtBQUNELE9BRm1CLEVBRWpCLEdBRmlCLENBQXBCO0FBR0QsS0FQTTtBQVFQaUIsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS2pCLE9BQUwsR0FBZSxJQUFmO0FBQ0QsS0FWTTtBQVdQa0IsSUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0JyQixJQUFoQixFQUFzQjtBQUM1QnNCLE1BQUFBLFlBQVksQ0FBQy9CLE9BQUQsQ0FBWjs7QUFFQSxVQUFJUyxJQUFKLEVBQVU7QUFDUixZQUFJLEtBQUtLLE1BQUwsSUFBZSxLQUFLRSxRQUF4QixFQUFrQyxLQUFLRCxZQUFMLEdBQW9CLEtBQUtELE1BQXpCO0FBQ2xDLGFBQUtFLFFBQUwsR0FBZ0JQLElBQUksQ0FBQ3VCLEtBQXJCO0FBQ0EsYUFBS2xCLE1BQUwsR0FBY0wsSUFBSSxDQUFDdUIsS0FBbkI7QUFDRDs7QUFFRCxXQUFLcEIsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLSixLQUFMLENBQVdDLElBQVgsR0FBa0IsS0FBS08sUUFBdkI7QUFDRDtBQXRCTSxHQXJDeUI7QUE2RGxDaUIsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFVBQUlwQixNQUFNLEdBQUcsS0FBS0EsTUFBTCxJQUFlLEtBQUtFLFFBQXBCLEdBQStCLEtBQUtELFlBQXBDLEdBQW1ELEtBQUtELE1BQXJFO0FBQ0EsYUFBTyxLQUFLWixLQUFMLENBQVdpQyxNQUFYLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUNwQyxlQUFPQSxDQUFDLENBQUNKLEtBQUYsQ0FBUUssT0FBUixDQUFnQnZCLE1BQWhCLE1BQTRCLENBQUMsQ0FBN0IsSUFBa0NzQixDQUFDLENBQUNFLFdBQUYsQ0FBY0MsSUFBZCxDQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDdkUsaUJBQU9BLENBQUMsQ0FBQ0gsT0FBRixDQUFVdkIsTUFBVixNQUFzQixDQUFDLENBQTlCO0FBQ0QsU0FGd0MsQ0FBekM7QUFHRCxPQUpNLENBQVA7QUFLRDtBQVJPLEdBN0R3QjtBQXVFbEMyQixFQUFBQSxLQUFLLEVBQUU7QUFDTGpDLElBQUFBLEtBQUssRUFBRTtBQUNMa0MsTUFBQUEsSUFBSSxFQUFFLElBREQ7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJuQyxLQUFqQixFQUF3QjtBQUMvQixhQUFLb0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCcEMsS0FBL0I7QUFDRDtBQUpJO0FBREY7QUF2RTJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG52YXIgaWNvbnMgPSB3cGNmdG9faWNvbnNfc2V0O1xuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ljb25fcGlja2VyJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZScsICdmaWVsZF9kYXRhJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGljb246ICcnLFxuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBzaXplOiAxNVxuICAgICAgfSxcbiAgICAgIGZvY3VzT246IGZhbHNlLFxuICAgICAgaWNvbnM6IGljb25zLFxuICAgICAgaG92ZXJQYW5lbDogZmFsc2UsXG4gICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICBiZWZvcmVTZWxlY3Q6IFwiXCIsXG4gICAgICBzZWxlY3RlZDogXCJcIixcbiAgICAgIGluaXRlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ljb25waWNrZXJcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkX19pbm5lclxcXCI+XFxuICAgICAgICAgICAgXFxuPCEtLSAgICAgICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPi0tPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SWNvbiBwaWNrZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cXFwicGlja2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcImJsdXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XFxcImZvY3VzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBhbiBpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDx3cGNmdG9fY29sb3IgQHdwY2Z0by1nZXQtdmFsdWU9XFxcInZhbHVlWydjb2xvciddID0gJGV2ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cXFwie3Bvc2l0aW9uOiAnYm90dG9tJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpbml0ZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZmllbGRfbGFiZWw9XFxcIidJY29uIGNvbG9yJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidmFsdWVbJ2NvbG9yJ11cXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8L3dwY2Z0b19jb2xvcj5cXG5cXG4gICAgICAgICAgICAgICAgPHdwY2Z0b19yYW5nZV9zbGlkZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaW5pdGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2xhYmVsPVxcXCInSWNvbiBzaXplJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF9uYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2Rlc2NyaXB0aW9uPVxcXCInSWNvbiBzaXplIHNldCBpbiBwaXhlbHMnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2lkPVxcXCJmaWVsZF9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidmFsdWVbJ3NpemUnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF9kYXRhPVxcXCJ7bWluOjEsbWF4OjIwMH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAd3BjZnRvLWdldC12YWx1ZT1cXFwidmFsdWVbJ3NpemUnXSA9ICRldmVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvd3BjZnRvX3JhbmdlX3NsaWRlcj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJpY29uLXByZXZpZXctZmFkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZm9jdXNPblxcXCIgY2xhc3M9XFxcInByZXZpZXctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVxcXCJzZWxlY3QodW5kZWZpbmVkKVxcXCIgQG1vdXNlb3Zlcj1cXFwiaG92ZXJQYW5lbCA9IHRydWVcXFwiIEBtb3VzZW91dD1cXFwiaG92ZXJQYW5lbCA9IGZhbHNlXFxcIiA6Y2xhc3M9XFxcIlsncHJldmlld2VyJywgJ3JvdW5kZWQnLCB7J2N1c3RvbS1zaGFkb3ctc20nOiAhaG92ZXJQYW5lbH0sIHsnY3VzdG9tLXNoYWRvdyc6IGhvdmVyUGFuZWx9IF1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcIihpLCBpbmRleCkgaW4gaWNvbnNGaWx0ZXJlZFxcXCIgOmtleT1cXFwiaW5kZXhcXFwiIGNsYXNzPVxcXCJpY29uLXByZXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljay5wcmV2ZW50LnN0b3A9XFxcInNlbGVjdChpKVxcXCIgOmNsYXNzPVxcXCJbJ2ljb24td3JhcHBlcicsJ3JvdW5kZWQnLCdzaGFkb3ctc20nLCB7c2VsZWN0ZWQ6IGkudGl0bGUgPT0gc2VsZWN0ZWR9XVxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJpLnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICBcXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbi1wcmV2aWV3LXdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJldmlldzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tcHJldmlldy1pbm5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX2ljb25waWNrZXJfX2ljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6Y2xhc3M9XFxcInZhbHVlLmljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6c3R5bGU9XFxcInsgY29sb3I6IHZhbHVlLmNvbG9yLCAnZm9udC1zaXplJyA6IHZhbHVlLnNpemUgKyAncHgnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInZhbHVlLmljb25cXFwiPjwvaT4gICAgXFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXFxuICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHRoaXMuZmllbGRfdmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGRfdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgICAgaWNvbjogJycsXG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICAgIHNpemU6IDE1XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnZhbHVlLmljb247XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZm9jdXNPbiA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LFxuICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuZm9jdXNPbiA9IHRydWU7XG4gICAgfSxcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChpY29uKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgIGlmIChpY29uKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaCAhPSB0aGlzLnNlbGVjdGVkKSB0aGlzLmJlZm9yZVNlbGVjdCA9IHRoaXMuc2VhcmNoO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaWNvbi50aXRsZTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBpY29uLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZvY3VzT24gPSBmYWxzZTtcbiAgICAgIHRoaXMudmFsdWUuaWNvbiA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGljb25zRmlsdGVyZWQ6IGZ1bmN0aW9uIGljb25zRmlsdGVyZWQoKSB7XG4gICAgICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2ggPT0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuYmVmb3JlU2VsZWN0IDogdGhpcy5zZWFyY2g7XG4gICAgICByZXR1cm4gdGhpcy5pY29ucy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkudGl0bGUuaW5kZXhPZihzZWFyY2gpICE9PSAtMSB8fCBpLnNlYXJjaFRlcm1zLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5pbmRleE9mKHNlYXJjaCkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZToge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])