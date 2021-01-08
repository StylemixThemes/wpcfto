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
        'font-data': {
          'family': '',
          'variants': []
        }
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
        this.weightChanged();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDFkYTU4NzUuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJpbml0ZWQiLCJnb29nbGVfZm9udHMiLCJ3cGNmdG9fZ2xvYmFsX3NldHRpbmdzIiwid2ViX3NhZmVfZm9udHMiLCJ2YXJpYW50cyIsInN1YnNldHMiLCJhbGlnbiIsInRyYW5zbGF0aW9ucyIsInR5cG9ncmFwaHkiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImVkaXRWYXJpYW50IiwiZWRpdFN1YnNldCIsIm1ldGhvZHMiLCJpc0ZvbnRXZWlnaHREaXNhYmxlZCIsInZhcmlhbnQiLCJjdXJyZW50X3ZhcmlhbnRzIiwiaW5jbHVkZXMiLCJpc1N1YnNldERpc2FibGVkIiwic3Vic2V0IiwiY3VycmVudF9zdWJzZXRzIiwiZm9udENoYW5nZWQiLCIkc2V0IiwiZmFtaWx5IiwiY3VycmVudF92YXJpYW50Iiwid2VpZ2h0Q2hhbmdlZCIsImN1cnJlbnRfc3Vic2V0IiwiYnVpbGRHTGluayIsImJhc2UiLCJjb25jYXQiLCJpc0l0YWxpYyIsInByZXZpZXdTdHlsZXMiLCJ0eXBvIiwid2VpZ2h0IiwibXVsdGlXZWlnaHQiLCJtYXRjaCIsImxlbmd0aCIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRTs7QUFBMkIsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixRQUEvRCxFQUF5RTtBQUFFSCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFB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LGFBQWhCLEVBQStCQyxNQUEvQjtBQUNBLGFBQUtYLElBQUwsQ0FBVVUsSUFBVixFQUFnQixZQUFoQixFQUE4QixRQUE5QjtBQUNEO0FBQ0Y7QUE1RU0sR0EzQ3dCO0FBeUhqQ0ssRUFBQUEsS0FBSyxFQUFFO0FBQ0xqQyxJQUFBQSxVQUFVLEVBQUU7QUFDVmtDLE1BQUFBLElBQUksRUFBRSxJQURJO0FBRVZDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCbkMsVUFBakIsRUFBNkI7QUFDcEMsYUFBS29DLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnBDLFVBQS9CO0FBQ0Q7QUFKUztBQURQO0FBekgwQixDQUFuQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogQHZhciB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzXG4gKi9cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b190eXBvZ3JhcGh5Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0ZWQ6IGZhbHNlLFxuICAgICAgZ29vZ2xlX2ZvbnRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydmb250c19saXN0J11bJ2dvb2dsZSddLFxuICAgICAgd2ViX3NhZmVfZm9udHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ2ZvbnRzX2xpc3QnXVsnd2Vic2FmZSddLFxuICAgICAgdmFyaWFudHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ3ZhcmlhbnRzJ10sXG4gICAgICBzdWJzZXRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydzdWJzZXRzJ10sXG4gICAgICBhbGlnbjogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1snYWxpZ24nXSxcbiAgICAgIHRyYW5zbGF0aW9uczogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1sndHJhbnNsYXRpb25zJ10sXG4gICAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgICdmb250LWZhbWlseSc6ICcnLFxuICAgICAgICAnZ29vZ2xlLXdlaWdodCc6ICdyZWd1bGFyJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgICAgICdmb250LXN0eWxlJzogJ25vcm1hbCcsXG4gICAgICAgICdzdWJzZXQnOiAnbGF0aW4nLFxuICAgICAgICAnY29sb3InOiAnIzAwMCcsXG4gICAgICAgICdmb250LXNpemUnOiAnMTQnLFxuICAgICAgICAnbGluZS1oZWlnaHQnOiAnMjAnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICdsZWZ0JyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6ICcwJyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJzogJzAnLFxuICAgICAgICAnYmFja3VwLWZvbnQnOiAnJyxcbiAgICAgICAgJ2ZvbnQtZGF0YSc6IHtcbiAgICAgICAgICAnZmFtaWx5JzogJycsXG4gICAgICAgICAgJ3ZhcmlhbnRzJzogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIiBcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX190eXBvZ3JhcGh5XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcImZpZWxkX2lkXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInR5cG9ncmFwaHlbJ2ZvbnQtZmFtaWx5J10ubGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpbmsgOmhyZWY9XFxcImJ1aWxkR0xpbmsoKVxcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2ZvbnQtZGF0YSddXFxcIiBAY2hhbmdlPVxcXCJmb250Q2hhbmdlZCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5TZWxlY3QgZm9udDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtYmluZDp2YWx1ZT1cXFwiZm9udFxcXCIgdi1mb3I9XFxcImZvbnQgaW4gZ29vZ2xlX2ZvbnRzXFxcIiB2LWh0bWw9XFxcImZvbnQuZmFtaWx5XFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2JhY2t1cC1mb250J11cXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPlNlbGVjdCBiYWNrdXAgZm9udDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtYmluZDp2YWx1ZT1cXFwiZm9udFxcXCIgdi1mb3I9XFxcImZvbnQgaW4gd2ViX3NhZmVfZm9udHNcXFwiIHYtaHRtbD1cXFwiZm9udFxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5Wydnb29nbGUtd2VpZ2h0J11cXFwiIEBjaGFuZ2U9XFxcIndlaWdodENoYW5nZWQoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+U2VsZWN0IGZvbnQgd2VpZ2h0PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6dmFsdWU9XFxcInZhcmlhbnRfa2V5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJpc0ZvbnRXZWlnaHREaXNhYmxlZCh2YXJpYW50X2tleSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHZhcmlhbnQsIHZhcmlhbnRfa2V5KSBpbiB2YXJpYW50c1xcXCIgdi1odG1sPVxcXCJ2YXJpYW50XFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ3N1YnNldCddXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5TZWxlY3Qgc3Vic2V0PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6dmFsdWU9XFxcInN1YnNldF9rZXlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImlzU3Vic2V0RGlzYWJsZWQoc3Vic2V0X2tleSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHN1YnNldCwgc3Vic2V0X2tleSkgaW4gc3Vic2V0c1xcXCIgdi1odG1sPVxcXCJzdWJzZXRcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsndGV4dC1hbGlnbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBcXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDp2YWx1ZT1cXFwiYWxpZ25fa2V5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihhbGlnbl9sYWJlbCwgYWxpZ25fa2V5KSBpbiBhbGlnblxcXCIgdi1odG1sPVxcXCJhbGlnbl9sYWJlbFxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICB7e3RyYW5zbGF0aW9uc1snZm9udF9zaXplJ119fVxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5Wydmb250LXNpemUnXVxcXCI+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7dHJhbnNsYXRpb25zWydsaW5lX2hlaWdodCddfX1cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnbGluZS1oZWlnaHQnXVxcXCI+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7dHJhbnNsYXRpb25zWyd3b3JkX3NwYWNpbmcnXX19XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ3dvcmQtc3BhY2luZyddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAge3t0cmFuc2xhdGlvbnNbJ2xldHRlcl9zcGFjaW5nJ119fVxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5WydsZXR0ZXItc3BhY2luZyddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDx3cGNmdG9fY29sb3IgQHdwY2Z0by1nZXQtdmFsdWU9XFxcInR5cG9ncmFwaHlbJ2NvbG9yJ10gPSAkZXZlbnRcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cXFwie3Bvc2l0aW9uOiAnYm90dG9tJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpbml0ZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZmllbGRfdmFsdWU9XFxcInR5cG9ncmFwaHlbJ2NvbG9yJ11cXFwiPlxcbiAgICAgICAgICAgIDwvd3BjZnRvX2NvbG9yPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX3R5cG9ncmFwaHlfX3ByZXZpZXdcXFwiIDpzdHlsZT1cXFwicHJldmlld1N0eWxlcygpXFxcIj5cXG4gICAgICAgICAgICAgICAgQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejEyMzQ1Njc4OTBcXHUyMDE4P1xcdTIwMTlcXHUyMDFDIVxcdTIwMUQoJSlbI117QH0vJlxcXFw8LStcXHhGN1xceEQ3PT5cXHhBRVxceEE5JFxcdTIwQUNcXHhBM1xceEE1XFx4QTI6OywuKlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpKSB7XG4gICAgICB0aGlzLnR5cG9ncmFwaHkgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoX3R5cGVvZih0aGlzLmZpZWxkX3ZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMudHlwb2dyYXBoeSA9IHRoaXMuZmllbGRfdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZWRpdFZhcmlhbnQoKTtcbiAgICB0aGlzLmVkaXRTdWJzZXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzRm9udFdlaWdodERpc2FibGVkOiBmdW5jdGlvbiBpc0ZvbnRXZWlnaHREaXNhYmxlZCh2YXJpYW50KSB7XG4gICAgICB2YXIgY3VycmVudF92YXJpYW50cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3ZhcmlhbnRzJ107XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRfdmFyaWFudHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gIWN1cnJlbnRfdmFyaWFudHMuaW5jbHVkZXModmFyaWFudCk7XG4gICAgfSxcbiAgICBpc1N1YnNldERpc2FibGVkOiBmdW5jdGlvbiBpc1N1YnNldERpc2FibGVkKHN1YnNldCkge1xuICAgICAgdmFyIGN1cnJlbnRfc3Vic2V0cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3N1YnNldHMnXTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudF9zdWJzZXRzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICFjdXJyZW50X3N1YnNldHMuaW5jbHVkZXMoc3Vic2V0KTtcbiAgICB9LFxuICAgIGZvbnRDaGFuZ2VkOiBmdW5jdGlvbiBmb250Q2hhbmdlZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnR5cG9ncmFwaHksICdmb250LWZhbWlseScsIHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ10uZmFtaWx5KTtcbiAgICAgIHRoaXMuZWRpdFZhcmlhbnQoKTtcbiAgICAgIHRoaXMuZWRpdFN1YnNldCgpO1xuICAgIH0sXG4gICAgZWRpdFZhcmlhbnQ6IGZ1bmN0aW9uIGVkaXRWYXJpYW50KCkge1xuICAgICAgdmFyIGN1cnJlbnRfdmFyaWFudCA9IHRoaXMudHlwb2dyYXBoeVsnZ29vZ2xlLXdlaWdodCddO1xuICAgICAgdmFyIGN1cnJlbnRfdmFyaWFudHMgPSB0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtZGF0YSddWyd2YXJpYW50cyddO1xuXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRfdmFyaWFudHMgIT09ICd1bmRlZmluZWQnICYmICFjdXJyZW50X3ZhcmlhbnRzLmluY2x1ZGVzKGN1cnJlbnRfdmFyaWFudCkpIHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudHlwb2dyYXBoeSwgJ2dvb2dsZS13ZWlnaHQnLCBjdXJyZW50X3ZhcmlhbnRzWzBdKTtcbiAgICAgICAgdGhpcy53ZWlnaHRDaGFuZ2VkKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlZGl0U3Vic2V0OiBmdW5jdGlvbiBlZGl0U3Vic2V0KCkge1xuICAgICAgdmFyIGN1cnJlbnRfc3Vic2V0ID0gdGhpcy50eXBvZ3JhcGh5WydzdWJzZXQnXTtcbiAgICAgIHZhciBjdXJyZW50X3N1YnNldHMgPSB0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtZGF0YSddWydzdWJzZXRzJ107XG5cbiAgICAgIGlmICh0eXBlb2YgY3VycmVudF9zdWJzZXRzICE9PSAndW5kZWZpbmVkJyAmJiAhY3VycmVudF9zdWJzZXRzLmluY2x1ZGVzKGN1cnJlbnRfc3Vic2V0KSkge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy50eXBvZ3JhcGh5LCAnc3Vic2V0JywgY3VycmVudF9zdWJzZXRzWzBdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkR0xpbms6IGZ1bmN0aW9uIGJ1aWxkR0xpbmsoKSB7XG4gICAgICB2YXIgYmFzZSA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PSc7XG4gICAgICBiYXNlICs9IFwiXCIuY29uY2F0KHRoaXMudHlwb2dyYXBoeVsnZm9udC1mYW1pbHknXSk7XG4gICAgICB2YXIgaXNJdGFsaWMgPSB0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtc3R5bGUnXSA9PT0gJ2l0YWxpYyc7XG4gICAgICBiYXNlICs9IGlzSXRhbGljID8gJzppdGFsLCcgOiAnOic7XG4gICAgICBiYXNlICs9ICd3Z2h0QCc7XG4gICAgICBpZiAoaXNJdGFsaWMpIGJhc2UgKz0gJzEsJztcbiAgICAgIGJhc2UgKz0gdGhpcy50eXBvZ3JhcGh5Wydmb250LXdlaWdodCddO1xuICAgICAgYmFzZSArPSAnJmRpc3BsYXk9c3dhcCc7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9LFxuICAgIHByZXZpZXdTdHlsZXM6IGZ1bmN0aW9uIHByZXZpZXdTdHlsZXMoKSB7XG4gICAgICB2YXIgdHlwbyA9IHRoaXMudHlwb2dyYXBoeTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdmb250LWZhbWlseSc6IFwiJ1wiLmNvbmNhdCh0eXBvWydmb250LWZhbWlseSddLCBcIicsIFwiKS5jb25jYXQodHlwb1snZm9udC1kYXRhJ11bJ2NhdGVnb3J5J10pLFxuICAgICAgICAnY29sb3InOiB0eXBvWydjb2xvciddLFxuICAgICAgICAnZm9udC1zaXplJzogdHlwb1snZm9udC1zaXplJ10gKyAncHgnLFxuICAgICAgICAnbGluZS1oZWlnaHQnOiB0eXBvWydsaW5lLWhlaWdodCddICsgJ3B4JyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJzogdHlwb1snbGV0dGVyLXNwYWNpbmcnXSArICdweCcsXG4gICAgICAgICd3b3JkLXNwYWNpbmcnOiB0eXBvWyd3b3JkLXNwYWNpbmcnXSArICdweCcsXG4gICAgICAgICd0ZXh0LWFsaWduJzogdHlwb1sndGV4dC1hbGlnbiddLFxuICAgICAgICAnZm9udC13ZWlnaHQnOiB0eXBvWydmb250LXdlaWdodCddLFxuICAgICAgICAnZm9udC1zdHlsZSc6IHR5cG9bJ2ZvbnQtc3R5bGUnXVxuICAgICAgfTtcbiAgICB9LFxuICAgIHdlaWdodENoYW5nZWQ6IGZ1bmN0aW9uIHdlaWdodENoYW5nZWQoKSB7XG4gICAgICB2YXIgdHlwbyA9IHRoaXMudHlwb2dyYXBoeTtcbiAgICAgIHZhciB3ZWlnaHQgPSB0eXBvWydnb29nbGUtd2VpZ2h0J107XG4gICAgICB2YXIgbXVsdGlXZWlnaHQgPSB3ZWlnaHQubWF0Y2goL1thLXpBLVpdK3xbMC05XSsvZyk7XG5cbiAgICAgIGlmICh3ZWlnaHQgPT09ICdyZWd1bGFyJykge1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtd2VpZ2h0JywgNDAwKTtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXN0eWxlJywgJ25vcm1hbCcpO1xuICAgICAgfSBlbHNlIGlmICh3ZWlnaHQgPT09ICdyZWd1bGFyJykge1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtd2VpZ2h0JywgNDAwKTtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXN0eWxlJywgJ2l0YWxpYycpO1xuICAgICAgfSBlbHNlIGlmIChtdWx0aVdlaWdodC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXdlaWdodCcsIG11bHRpV2VpZ2h0WzBdKTtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXN0eWxlJywgbXVsdGlXZWlnaHRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXdlaWdodCcsIHdlaWdodCk7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC1zdHlsZScsICdub3JtYWwnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIodHlwb2dyYXBoeSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdHlwb2dyYXBoeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])