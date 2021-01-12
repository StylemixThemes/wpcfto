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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_iconpicker\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n            \n            <div class=\"wpcfto-field-content\">\n                <div class=\"wpcfto_generic_field__inner\">\n    \n                    <div class=\"wpcfto_generic_field\">\n                        <label>Icon picker</label>\n                        <input ref=\"picker\"\n                        v-model=\"search\"\n                        @blur=\"blur\"\n                        @focus=\"focus\"\n                        type=\"email\"\n                        class=\"form-control\"\n                        placeholder=\"Search an icon\">\n                    </div>\n    \n                    <wpcfto_color @wpcfto-get-value=\"value['color'] = $event\"\n                        :fields=\"{position: 'bottom'}\"\n                        v-if=\"inited\"\n                        :field_label=\"'Icon color'\"\n                        :field_value=\"value['color']\">\n    \n                    </wpcfto_color>\n    \n                    <wpcfto_range_slider :fields=\"fields\"\n                        v-if=\"inited\"\n                        :field_label=\"'Icon size'\"\n                        :field_name=\"field_name\"\n                        :field_description=\"'Icon size set in pixels'\"\n                        :field_id=\"field_id\"\n                        :field_value=\"value['size']\"\n                        :field_data=\"{min:1,max:200}\"\n                        @wpcfto-get-value=\"value['size'] = $event\">\n                    </wpcfto_range_slider>\n    \n                </div>\n    \n                <transition name=\"icon-preview-fade\">\n                    <div v-if=\"focusOn\" class=\"preview-container\">\n                        <div @click=\"select(undefined)\" @mouseover=\"hoverPanel = true\" @mouseout=\"hoverPanel = false\" :class=\"['previewer', 'rounded', {'custom-shadow-sm': !hoverPanel}, {'custom-shadow': hoverPanel} ]\">\n                            <div v-for=\"(i, index) in iconsFiltered\" :key=\"index\" class=\"icon-preview\">\n                                <div @click.prevent.stop=\"select(i)\" :class=\"['icon-wrapper','rounded','shadow-sm', {selected: i.title == selected}]\" >\n                                    <i :class=\"i.title\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </transition>\n            \n                 <div class=\"icon-preview-wrap\">\n                    <label>Preview</label>\n                    <div class=\"icon-preview-inner\">\n                        <i class=\"wpcfto_generic_field__iconpicker__icon\"\n                        v-bind:class=\"value.icon\"\n                        v-bind:style=\"{ color: value.color, 'font-size' : value.size + 'px'}\"\n                        v-if=\"value.icon\"></i>    \n                    </div>        \n                 </div>\n             </div>\n\n        </div>\n  ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTZhMzdlOTMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJ0aW1lb3V0IiwidW5kZWZpbmVkIiwiaWNvbnMiLCJ3cGNmdG9faWNvbnNfc2V0IiwiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJpY29uIiwiY29sb3IiLCJzaXplIiwiZm9jdXNPbiIsImhvdmVyUGFuZWwiLCJzZWFyY2giLCJiZWZvcmVTZWxlY3QiLCJzZWxlY3RlZCIsImluaXRlZCIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwibWV0aG9kcyIsImJsdXIiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJmb2N1cyIsInNlbGVjdCIsImNsZWFyVGltZW91dCIsInRpdGxlIiwiY29tcHV0ZWQiLCJpY29uc0ZpbHRlcmVkIiwiZmlsdGVyIiwiaSIsImluZGV4T2YiLCJzZWFyY2hUZXJtcyIsInNvbWUiLCJ0Iiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFOztBQUEyQixNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0FBQUVILElBQUFBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUFFLGFBQU8sT0FBT0EsR0FBZDtBQUFvQixLQUF0RDtBQUF5RCxHQUFwSSxNQUEwSTtBQUFFRCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRSxhQUFPQSxHQUFHLElBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF6QixJ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Q0EsYUFBS2xCLE1BQUwsR0FBY0wsSUFBSSxDQUFDdUIsS0FBbkI7QUFDRDs7QUFFRCxXQUFLcEIsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLSixLQUFMLENBQVdDLElBQVgsR0FBa0IsS0FBS08sUUFBdkI7QUFDRDtBQXRCTSxHQXJDeUI7QUE2RGxDaUIsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFVBQUlwQixNQUFNLEdBQUcsS0FBS0EsTUFBTCxJQUFlLEtBQUtFLFFBQXBCLEdBQStCLEtBQUtELFlBQXBDLEdBQW1ELEtBQUtELE1BQXJFO0FBQ0EsYUFBTyxLQUFLWixLQUFMLENBQVdpQyxNQUFYLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUNwQyxlQUFPQSxDQUFDLENBQUNKLEtBQUYsQ0FBUUssT0FBUixDQUFnQnZCLE1BQWhCLE1BQTRCLENBQUMsQ0FBN0IsSUFBa0NzQixDQUFDLENBQUNFLFdBQUYsQ0FBY0MsSUFBZCxDQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDdkUsaUJBQU9BLENBQUMsQ0FBQ0gsT0FBRixDQUFVdkIsTUFBVixNQUFzQixDQUFDLENBQTlCO0FBQ0QsU0FGd0MsQ0FBekM7QUFHRCxPQUpNLENBQVA7QUFLRDtBQVJPLEdBN0R3QjtBQXVFbEMyQixFQUFBQSxLQUFLLEVBQUU7QUFDTGpDLElBQUFBLEtBQUssRUFBRTtBQUNMa0MsTUFBQUEsSUFBSSxFQUFFLElBREQ7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJuQyxLQUFqQixFQUF3QjtBQUMvQixhQUFLb0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCcEMsS0FBL0I7QUFDRDtBQUpJO0FBREY7QUF2RTJCLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG52YXIgaWNvbnMgPSB3cGNmdG9faWNvbnNfc2V0O1xuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2ljb25fcGlja2VyJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZScsICdmaWVsZF9kYXRhJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGljb246ICcnLFxuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBzaXplOiAxNVxuICAgICAgfSxcbiAgICAgIGZvY3VzT246IGZhbHNlLFxuICAgICAgaWNvbnM6IGljb25zLFxuICAgICAgaG92ZXJQYW5lbDogZmFsc2UsXG4gICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICBiZWZvcmVTZWxlY3Q6IFwiXCIsXG4gICAgICBzZWxlY3RlZDogXCJcIixcbiAgICAgIGluaXRlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ljb25waWNrZXJcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9faW5uZXJcXFwiPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SWNvbiBwaWNrZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XFxcInBpY2tlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcImJsdXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVxcXCJmb2N1c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggYW4gaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8d3BjZnRvX2NvbG9yIEB3cGNmdG8tZ2V0LXZhbHVlPVxcXCJ2YWx1ZVsnY29sb3InXSA9ICRldmVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRzPVxcXCJ7cG9zaXRpb246ICdib3R0b20nfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpbml0ZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX2xhYmVsPVxcXCInSWNvbiBjb2xvcidcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkX3ZhbHVlPVxcXCJ2YWx1ZVsnY29sb3InXVxcXCI+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC93cGNmdG9fY29sb3I+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPHdwY2Z0b19yYW5nZV9zbGlkZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImluaXRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfbGFiZWw9XFxcIidJY29uIHNpemUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9uYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF9kZXNjcmlwdGlvbj1cXFwiJ0ljb24gc2l6ZSBzZXQgaW4gcGl4ZWxzJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfaWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidmFsdWVbJ3NpemUnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGRfZGF0YT1cXFwie21pbjoxLG1heDoyMDB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEB3cGNmdG8tZ2V0LXZhbHVlPVxcXCJ2YWx1ZVsnc2l6ZSddID0gJGV2ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvd3BjZnRvX3JhbmdlX3NsaWRlcj5cXG4gICAgXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICBcXG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwiaWNvbi1wcmV2aWV3LWZhZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJmb2N1c09uXFxcIiBjbGFzcz1cXFwicHJldmlldy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVxcXCJzZWxlY3QodW5kZWZpbmVkKVxcXCIgQG1vdXNlb3Zlcj1cXFwiaG92ZXJQYW5lbCA9IHRydWVcXFwiIEBtb3VzZW91dD1cXFwiaG92ZXJQYW5lbCA9IGZhbHNlXFxcIiA6Y2xhc3M9XFxcIlsncHJldmlld2VyJywgJ3JvdW5kZWQnLCB7J2N1c3RvbS1zaGFkb3ctc20nOiAhaG92ZXJQYW5lbH0sIHsnY3VzdG9tLXNoYWRvdyc6IGhvdmVyUGFuZWx9IF1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCIoaSwgaW5kZXgpIGluIGljb25zRmlsdGVyZWRcXFwiIDprZXk9XFxcImluZGV4XFxcIiBjbGFzcz1cXFwiaWNvbi1wcmV2aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrLnByZXZlbnQuc3RvcD1cXFwic2VsZWN0KGkpXFxcIiA6Y2xhc3M9XFxcIlsnaWNvbi13cmFwcGVyJywncm91bmRlZCcsJ3NoYWRvdy1zbScsIHtzZWxlY3RlZDogaS50aXRsZSA9PSBzZWxlY3RlZH1dXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJpLnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tcHJldmlldy13cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmV2aWV3PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tcHJldmlldy1pbm5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkX19pY29ucGlja2VyX19pY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpjbGFzcz1cXFwidmFsdWUuaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6c3R5bGU9XFxcInsgY29sb3I6IHZhbHVlLmNvbG9yLCAnZm9udC1zaXplJyA6IHZhbHVlLnNpemUgKyAncHgnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ2YWx1ZS5pY29uXFxcIj48L2k+ICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoX3R5cGVvZih0aGlzLmZpZWxkX3ZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpZWxkX3ZhbHVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB7XG4gICAgICAgIGljb246ICcnLFxuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBzaXplOiAxNVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy52YWx1ZS5pY29uO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmZvY3VzT24gPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSxcbiAgICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB0aGlzLmZvY3VzT24gPSB0cnVlO1xuICAgIH0sXG4gICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoaWNvbikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICBpZiAoaWNvbikge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2ggIT0gdGhpcy5zZWxlY3RlZCkgdGhpcy5iZWZvcmVTZWxlY3QgPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGljb24udGl0bGU7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gaWNvbi50aXRsZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb2N1c09uID0gZmFsc2U7XG4gICAgICB0aGlzLnZhbHVlLmljb24gPSB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpY29uc0ZpbHRlcmVkOiBmdW5jdGlvbiBpY29uc0ZpbHRlcmVkKCkge1xuICAgICAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoID09IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLmJlZm9yZVNlbGVjdCA6IHRoaXMuc2VhcmNoO1xuICAgICAgcmV0dXJuIHRoaXMuaWNvbnMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpLnRpdGxlLmluZGV4T2Yoc2VhcmNoKSAhPT0gLTEgfHwgaS5zZWFyY2hUZXJtcy5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuaW5kZXhPZihzZWFyY2gpICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])