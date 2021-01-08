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
/**
 * @var wpcfto_global_settings
 */


Vue.component('wpcfto_typography', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      inited: false,
      google_fonts: wpcfto_global_settings['fonts_list']['google'],
      web_safe_fonts: wpcfto_global_settings['fonts_list']['websafe'],
      variants: wpcfto_global_settings['variants'],
      subsets: wpcfto_global_settings['subsets'],
      align: wpcfto_global_settings['align'],
      translations: wpcfto_global_settings['translations'],
      typography: {
        'font-family': '',
        'google-weight': 'regular',
        'font-weight': '400',
        'font-style': 'normal',
        'subset': 'latin',
        'color': '#000',
        'font-size': '14',
        'line-height': '20',
        'text-align': 'left',
        'word-spacing': '0',
        'letter-spacing': '0',
        'backup-font': '',
        'font-data': {}
      }
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field__typography\" v-bind:class=\"field_id\">\n            <label v-html=\"field_label\"></label>\n            \n            <div v-if=\"typography['font-family'].length\">\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link :href=\"buildGLink()\" rel=\"stylesheet\">\n            </div>\n            \n            <select v-model=\"typography['font-data']\" @change=\"fontChanged()\">\n                <option value=\"\">Select font</option>\n                <option v-bind:value=\"font\" v-for=\"font in google_fonts\" v-html=\"font.family\"></option>\n            </select>\n            \n            <select v-model=\"typography['backup-font']\">\n                <option value=\"\">Select backup font</option>\n                <option v-bind:value=\"font\" v-for=\"font in web_safe_fonts\" v-html=\"font\"></option>\n            </select>\n            \n            <select v-model=\"typography['google-weight']\" @change=\"weightChanged()\">\n                <option value=\"\">Select font weight</option>\n                <option \n                    v-bind:value=\"variant_key\"\n                    :disabled=\"isFontWeightDisabled(variant_key)\"\n                    v-for=\"(variant, variant_key) in variants\" v-html=\"variant\"></option>\n            </select>\n            \n            <select v-model=\"typography['subset']\">\n                <option value=\"\">Select subset</option>\n                <option \n                    v-bind:value=\"subset_key\"\n                    :disabled=\"isSubsetDisabled(subset_key)\"\n                    v-for=\"(subset, subset_key) in subsets\" v-html=\"subset\"></option>\n            </select>\n            \n            <select v-model=\"typography['text-align']\">\n                <option \n                    v-bind:value=\"align_key\"\n                    v-for=\"(align_label, align_key) in align\" v-html=\"align_label\"></option>\n            </select>\n            \n            <label>\n                {{translations['font_size']}}\n                <input type=\"number\" v-model=\"typography['font-size']\">\n            </label>\n            \n            <label>\n                {{translations['line_height']}}\n                <input type=\"number\" v-model=\"typography['line-height']\">\n            </label>\n            \n            <label>\n                {{translations['word_spacing']}}\n                <input type=\"number\" v-model=\"typography['word-spacing']\">\n            </label>\n            \n            <label>\n                {{translations['letter_spacing']}}\n                <input type=\"number\" v-model=\"typography['letter-spacing']\">\n            </label>\n            \n            <wpcfto_color @wpcfto-get-value=\"typography['color'] = $event\" \n                    :fields=\"{position: 'bottom'}\"\n                    v-if=\"inited\"\n                    :field_value=\"typography['color']\">\n            </wpcfto_color>\n                    \n            <div class=\"wpcfto_generic_field__typography__preview\" :style=\"previewStyles()\">\n                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\u2018?\u2019\u201C!\u201D(%)[#]{@}/&\\<-+\xF7\xD7=>\xAE\xA9$\u20AC\xA3\xA5\xA2:;,.*\n            </div>\n            \n        </div>\n    ",
  mounted: function mounted() {
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) {
      this.typography = JSON.parse(this.field_value);
    } else if (_typeof(this.field_value) === 'object') {
      this.typography = this.field_value;
    }

    this.inited = true;
    this.editVariant();
    this.editSubset();
  },
  methods: {
    isFontWeightDisabled: function isFontWeightDisabled(variant) {
      var current_variants = this.typography['font-data']['variants'];
      if (typeof current_variants === 'undefined') return false;
      return !current_variants.includes(variant);
    },
    isSubsetDisabled: function isSubsetDisabled(subset) {
      var current_subsets = this.typography['font-data']['subsets'];
      if (typeof current_subsets === 'undefined') return false;
      return !current_subsets.includes(subset);
    },
    fontChanged: function fontChanged() {
      this.$set(this.typography, 'font-family', this.typography['font-data'].family);
      this.editVariant();
      this.editSubset();
    },
    editVariant: function editVariant() {
      var current_variant = this.typography['google-weight'];
      var current_variants = this.typography['font-data']['variants'];

      if (typeof current_variants !== 'undefined' && !current_variants.includes(current_variant)) {
        this.$set(this.typography, 'google-weight', current_variants[0]);
      }
    },
    editSubset: function editSubset() {
      var current_subset = this.typography['subset'];
      var current_subsets = this.typography['font-data']['subsets'];

      if (typeof current_subsets !== 'undefined' && !current_subsets.includes(current_subset)) {
        this.$set(this.typography, 'subset', current_subsets[0]);
      }
    },
    buildGLink: function buildGLink() {
      var base = 'https://fonts.googleapis.com/css2?family=';
      base += "".concat(this.typography['font-family']);
      var isItalic = this.typography['font-style'] === 'italic';
      base += isItalic ? ':ital,' : ':';
      base += 'wght@';
      if (isItalic) base += '1,';
      base += this.typography['font-weight'];
      base += '&display=swap';
      return base;
    },
    previewStyles: function previewStyles() {
      var typo = this.typography;
      return {
        'font-family': "'".concat(typo['font-family'], "', ").concat(typo['font-data']['category']),
        'color': typo['color'],
        'font-size': typo['font-size'] + 'px',
        'line-height': typo['line-height'] + 'px',
        'letter-spacing': typo['letter-spacing'] + 'px',
        'word-spacing': typo['word-spacing'] + 'px',
        'text-align': typo['text-align'],
        'font-weight': typo['font-weight'],
        'font-style': typo['font-style']
      };
    },
    weightChanged: function weightChanged() {
      var typo = this.typography;
      var weight = typo['google-weight'];
      var multiWeight = weight.match(/[a-zA-Z]+|[0-9]+/g);

      if (weight === 'regular') {
        this.$set(typo, 'font-weight', 400);
        this.$set(typo, 'font-style', 'normal');
      } else if (weight === 'regular') {
        this.$set(typo, 'font-weight', 400);
        this.$set(typo, 'font-style', 'italic');
      } else if (multiWeight.length === 2) {
        this.$set(typo, 'font-weight', multiWeight[0]);
        this.$set(typo, 'font-style', multiWeight[1]);
      } else {
        this.$set(typo, 'font-weight', weight);
        this.$set(typo, 'font-style', 'normal');
      }
    }
  },
  watch: {
    typography: {
      deep: true,
      handler: function handler(typography) {
        this.$emit('wpcfto-get-value', typography);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZWZhNjg3NDkuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJpbml0ZWQiLCJnb29nbGVfZm9udHMiLCJ3cGNmdG9fZ2xvYmFsX3NldHRpbmdzIiwid2ViX3NhZmVfZm9udHMiLCJ2YXJpYW50cyIsInN1YnNldHMiLCJhbGlnbiIsInRyYW5zbGF0aW9ucyIsInR5cG9ncmFwaHkiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImVkaXRWYXJpYW50IiwiZWRpdFN1YnNldCIsIm1ldGhvZHMiLCJpc0ZvbnRXZWlnaHREaXNhYmxlZCIsInZhcmlhbnQiLCJjdXJyZW50X3ZhcmlhbnRzIiwiaW5jbHVkZXMiLCJpc1N1YnNldERpc2FibGVkIiwic3Vic2V0IiwiY3VycmVudF9zdWJzZXRzIiwiZm9udENoYW5nZWQiLCIkc2V0IiwiZmFtaWx5IiwiY3VycmVudF92YXJpYW50IiwiY3VycmVudF9zdWJzZXQiLCJidWlsZEdMaW5rIiwiYmFzZSIsImNvbmNhdCIsImlzSXRhbGljIiwicHJldmlld1N0eWxlcyIsInR5cG8iLCJ3ZWlnaHRDaGFuZ2VkIiwid2VpZ2h0IiwibXVsdGlXZWlnaHQiLCJtYXRjaCIsImxlbmd0aCIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRTs7QUFBMkIsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixRQUEvRCxFQUF5RTtBQUFFSCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFB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QUFnQixZQUFoQixFQUE4QixRQUE5QjtBQUNEO0FBQ0Y7QUEzRU0sR0F4Q3dCO0FBcUhqQ00sRUFBQUEsS0FBSyxFQUFFO0FBQ0xqQyxJQUFBQSxVQUFVLEVBQUU7QUFDVmtDLE1BQUFBLElBQUksRUFBRSxJQURJO0FBRVZDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCbkMsVUFBakIsRUFBNkI7QUFDcEMsYUFBS29DLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnBDLFVBQS9CO0FBQ0Q7QUFKUztBQURQO0FBckgwQixDQUFuQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogQHZhciB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzXG4gKi9cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b190eXBvZ3JhcGh5Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0ZWQ6IGZhbHNlLFxuICAgICAgZ29vZ2xlX2ZvbnRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydmb250c19saXN0J11bJ2dvb2dsZSddLFxuICAgICAgd2ViX3NhZmVfZm9udHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ2ZvbnRzX2xpc3QnXVsnd2Vic2FmZSddLFxuICAgICAgdmFyaWFudHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ3ZhcmlhbnRzJ10sXG4gICAgICBzdWJzZXRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydzdWJzZXRzJ10sXG4gICAgICBhbGlnbjogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1snYWxpZ24nXSxcbiAgICAgIHRyYW5zbGF0aW9uczogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1sndHJhbnNsYXRpb25zJ10sXG4gICAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgICdmb250LWZhbWlseSc6ICcnLFxuICAgICAgICAnZ29vZ2xlLXdlaWdodCc6ICdyZWd1bGFyJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgICAgICdmb250LXN0eWxlJzogJ25vcm1hbCcsXG4gICAgICAgICdzdWJzZXQnOiAnbGF0aW4nLFxuICAgICAgICAnY29sb3InOiAnIzAwMCcsXG4gICAgICAgICdmb250LXNpemUnOiAnMTQnLFxuICAgICAgICAnbGluZS1oZWlnaHQnOiAnMjAnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICdsZWZ0JyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6ICcwJyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJzogJzAnLFxuICAgICAgICAnYmFja3VwLWZvbnQnOiAnJyxcbiAgICAgICAgJ2ZvbnQtZGF0YSc6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX3R5cG9ncmFwaHlcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidHlwb2dyYXBoeVsnZm9udC1mYW1pbHknXS5sZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cXFwiPlxcbiAgICAgICAgICAgICAgICA8bGluayA6aHJlZj1cXFwiYnVpbGRHTGluaygpXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnZm9udC1kYXRhJ11cXFwiIEBjaGFuZ2U9XFxcImZvbnRDaGFuZ2VkKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPlNlbGVjdCBmb250PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1iaW5kOnZhbHVlPVxcXCJmb250XFxcIiB2LWZvcj1cXFwiZm9udCBpbiBnb29nbGVfZm9udHNcXFwiIHYtaHRtbD1cXFwiZm9udC5mYW1pbHlcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnYmFja3VwLWZvbnQnXVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+U2VsZWN0IGJhY2t1cCBmb250PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1iaW5kOnZhbHVlPVxcXCJmb250XFxcIiB2LWZvcj1cXFwiZm9udCBpbiB3ZWJfc2FmZV9mb250c1xcXCIgdi1odG1sPVxcXCJmb250XFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2dvb2dsZS13ZWlnaHQnXVxcXCIgQGNoYW5nZT1cXFwid2VpZ2h0Q2hhbmdlZCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5TZWxlY3QgZm9udCB3ZWlnaHQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBcXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDp2YWx1ZT1cXFwidmFyaWFudF9rZXlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImlzRm9udFdlaWdodERpc2FibGVkKHZhcmlhbnRfa2V5KVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIodmFyaWFudCwgdmFyaWFudF9rZXkpIGluIHZhcmlhbnRzXFxcIiB2LWh0bWw9XFxcInZhcmlhbnRcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnc3Vic2V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPlNlbGVjdCBzdWJzZXQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBcXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDp2YWx1ZT1cXFwic3Vic2V0X2tleVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiaXNTdWJzZXREaXNhYmxlZChzdWJzZXRfa2V5KVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIoc3Vic2V0LCBzdWJzZXRfa2V5KSBpbiBzdWJzZXRzXFxcIiB2LWh0bWw9XFxcInN1YnNldFxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5Wyd0ZXh0LWFsaWduJ11cXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIFxcbiAgICAgICAgICAgICAgICAgICAgdi1iaW5kOnZhbHVlPVxcXCJhbGlnbl9rZXlcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGFsaWduX2xhYmVsLCBhbGlnbl9rZXkpIGluIGFsaWduXFxcIiB2LWh0bWw9XFxcImFsaWduX2xhYmVsXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7dHJhbnNsYXRpb25zWydmb250X3NpemUnXX19XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2ZvbnQtc2l6ZSddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAge3t0cmFuc2xhdGlvbnNbJ2xpbmVfaGVpZ2h0J119fVxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5WydsaW5lLWhlaWdodCddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAge3t0cmFuc2xhdGlvbnNbJ3dvcmRfc3BhY2luZyddfX1cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnd29yZC1zcGFjaW5nJ11cXFwiPlxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICB7e3RyYW5zbGF0aW9uc1snbGV0dGVyX3NwYWNpbmcnXX19XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2xldHRlci1zcGFjaW5nJ11cXFwiPlxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPHdwY2Z0b19jb2xvciBAd3BjZnRvLWdldC12YWx1ZT1cXFwidHlwb2dyYXBoeVsnY29sb3InXSA9ICRldmVudFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICA6ZmllbGRzPVxcXCJ7cG9zaXRpb246ICdib3R0b20nfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImluaXRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidHlwb2dyYXBoeVsnY29sb3InXVxcXCI+XFxuICAgICAgICAgICAgPC93cGNmdG9fY29sb3I+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9fdHlwb2dyYXBoeV9fcHJldmlld1xcXCIgOnN0eWxlPVxcXCJwcmV2aWV3U3R5bGVzKClcXFwiPlxcbiAgICAgICAgICAgICAgICBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIzNDU2Nzg5MFxcdTIwMTg/XFx1MjAxOVxcdTIwMUMhXFx1MjAxRCglKVsjXXtAfS8mXFxcXDwtK1xceEY3XFx4RDc9PlxceEFFXFx4QTkkXFx1MjBBQ1xceEEzXFx4QTVcXHhBMjo7LC4qXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkpIHtcbiAgICAgIHRoaXMudHlwb2dyYXBoeSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHRoaXMuZmllbGRfdmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy50eXBvZ3JhcGh5ID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5lZGl0VmFyaWFudCgpO1xuICAgIHRoaXMuZWRpdFN1YnNldCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNGb250V2VpZ2h0RGlzYWJsZWQ6IGZ1bmN0aW9uIGlzRm9udFdlaWdodERpc2FibGVkKHZhcmlhbnQpIHtcbiAgICAgIHZhciBjdXJyZW50X3ZhcmlhbnRzID0gdGhpcy50eXBvZ3JhcGh5Wydmb250LWRhdGEnXVsndmFyaWFudHMnXTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudF92YXJpYW50cyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAhY3VycmVudF92YXJpYW50cy5pbmNsdWRlcyh2YXJpYW50KTtcbiAgICB9LFxuICAgIGlzU3Vic2V0RGlzYWJsZWQ6IGZ1bmN0aW9uIGlzU3Vic2V0RGlzYWJsZWQoc3Vic2V0KSB7XG4gICAgICB2YXIgY3VycmVudF9zdWJzZXRzID0gdGhpcy50eXBvZ3JhcGh5Wydmb250LWRhdGEnXVsnc3Vic2V0cyddO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50X3N1YnNldHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gIWN1cnJlbnRfc3Vic2V0cy5pbmNsdWRlcyhzdWJzZXQpO1xuICAgIH0sXG4gICAgZm9udENoYW5nZWQ6IGZ1bmN0aW9uIGZvbnRDaGFuZ2VkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMudHlwb2dyYXBoeSwgJ2ZvbnQtZmFtaWx5JywgdGhpcy50eXBvZ3JhcGh5Wydmb250LWRhdGEnXS5mYW1pbHkpO1xuICAgICAgdGhpcy5lZGl0VmFyaWFudCgpO1xuICAgICAgdGhpcy5lZGl0U3Vic2V0KCk7XG4gICAgfSxcbiAgICBlZGl0VmFyaWFudDogZnVuY3Rpb24gZWRpdFZhcmlhbnQoKSB7XG4gICAgICB2YXIgY3VycmVudF92YXJpYW50ID0gdGhpcy50eXBvZ3JhcGh5Wydnb29nbGUtd2VpZ2h0J107XG4gICAgICB2YXIgY3VycmVudF92YXJpYW50cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3ZhcmlhbnRzJ107XG5cbiAgICAgIGlmICh0eXBlb2YgY3VycmVudF92YXJpYW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWN1cnJlbnRfdmFyaWFudHMuaW5jbHVkZXMoY3VycmVudF92YXJpYW50KSkge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy50eXBvZ3JhcGh5LCAnZ29vZ2xlLXdlaWdodCcsIGN1cnJlbnRfdmFyaWFudHNbMF0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZWRpdFN1YnNldDogZnVuY3Rpb24gZWRpdFN1YnNldCgpIHtcbiAgICAgIHZhciBjdXJyZW50X3N1YnNldCA9IHRoaXMudHlwb2dyYXBoeVsnc3Vic2V0J107XG4gICAgICB2YXIgY3VycmVudF9zdWJzZXRzID0gdGhpcy50eXBvZ3JhcGh5Wydmb250LWRhdGEnXVsnc3Vic2V0cyddO1xuXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRfc3Vic2V0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWN1cnJlbnRfc3Vic2V0cy5pbmNsdWRlcyhjdXJyZW50X3N1YnNldCkpIHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudHlwb2dyYXBoeSwgJ3N1YnNldCcsIGN1cnJlbnRfc3Vic2V0c1swXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZEdMaW5rOiBmdW5jdGlvbiBidWlsZEdMaW5rKCkge1xuICAgICAgdmFyIGJhc2UgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT0nO1xuICAgICAgYmFzZSArPSBcIlwiLmNvbmNhdCh0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtZmFtaWx5J10pO1xuICAgICAgdmFyIGlzSXRhbGljID0gdGhpcy50eXBvZ3JhcGh5Wydmb250LXN0eWxlJ10gPT09ICdpdGFsaWMnO1xuICAgICAgYmFzZSArPSBpc0l0YWxpYyA/ICc6aXRhbCwnIDogJzonO1xuICAgICAgYmFzZSArPSAnd2dodEAnO1xuICAgICAgaWYgKGlzSXRhbGljKSBiYXNlICs9ICcxLCc7XG4gICAgICBiYXNlICs9IHRoaXMudHlwb2dyYXBoeVsnZm9udC13ZWlnaHQnXTtcbiAgICAgIGJhc2UgKz0gJyZkaXNwbGF5PXN3YXAnO1xuICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfSxcbiAgICBwcmV2aWV3U3R5bGVzOiBmdW5jdGlvbiBwcmV2aWV3U3R5bGVzKCkge1xuICAgICAgdmFyIHR5cG8gPSB0aGlzLnR5cG9ncmFwaHk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnZm9udC1mYW1pbHknOiBcIidcIi5jb25jYXQodHlwb1snZm9udC1mYW1pbHknXSwgXCInLCBcIikuY29uY2F0KHR5cG9bJ2ZvbnQtZGF0YSddWydjYXRlZ29yeSddKSxcbiAgICAgICAgJ2NvbG9yJzogdHlwb1snY29sb3InXSxcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6IHR5cG9bJ2ZvbnQtc2l6ZSddICsgJ3B4JyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JzogdHlwb1snbGluZS1oZWlnaHQnXSArICdweCcsXG4gICAgICAgICdsZXR0ZXItc3BhY2luZyc6IHR5cG9bJ2xldHRlci1zcGFjaW5nJ10gKyAncHgnLFxuICAgICAgICAnd29yZC1zcGFjaW5nJzogdHlwb1snd29yZC1zcGFjaW5nJ10gKyAncHgnLFxuICAgICAgICAndGV4dC1hbGlnbic6IHR5cG9bJ3RleHQtYWxpZ24nXSxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogdHlwb1snZm9udC13ZWlnaHQnXSxcbiAgICAgICAgJ2ZvbnQtc3R5bGUnOiB0eXBvWydmb250LXN0eWxlJ11cbiAgICAgIH07XG4gICAgfSxcbiAgICB3ZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbiB3ZWlnaHRDaGFuZ2VkKCkge1xuICAgICAgdmFyIHR5cG8gPSB0aGlzLnR5cG9ncmFwaHk7XG4gICAgICB2YXIgd2VpZ2h0ID0gdHlwb1snZ29vZ2xlLXdlaWdodCddO1xuICAgICAgdmFyIG11bHRpV2VpZ2h0ID0gd2VpZ2h0Lm1hdGNoKC9bYS16QS1aXSt8WzAtOV0rL2cpO1xuXG4gICAgICBpZiAod2VpZ2h0ID09PSAncmVndWxhcicpIHtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXdlaWdodCcsIDQwMCk7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC1zdHlsZScsICdub3JtYWwnKTtcbiAgICAgIH0gZWxzZSBpZiAod2VpZ2h0ID09PSAncmVndWxhcicpIHtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXdlaWdodCcsIDQwMCk7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC1zdHlsZScsICdpdGFsaWMnKTtcbiAgICAgIH0gZWxzZSBpZiAobXVsdGlXZWlnaHQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC13ZWlnaHQnLCBtdWx0aVdlaWdodFswXSk7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC1zdHlsZScsIG11bHRpV2VpZ2h0WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC13ZWlnaHQnLCB3ZWlnaHQpO1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtc3R5bGUnLCAnbm9ybWFsJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHR5cG9ncmFwaHkpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHR5cG9ncmFwaHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])