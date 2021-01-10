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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__typography\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div v-if=\"typography['font-family'].length\">\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link :href=\"buildGLink()\" rel=\"stylesheet\">\n            </div>\n\n            <select v-model=\"typography['font-data']\" @change=\"fontChanged()\">\n                <option value=\"\">Select font</option>\n                <option v-bind:value=\"font\" v-for=\"font in google_fonts\" v-html=\"font.family\"></option>\n            </select>\n\n            <select v-model=\"typography['backup-font']\">\n                <option value=\"\">Select backup font</option>\n                <option v-bind:value=\"font\" v-for=\"font in web_safe_fonts\" v-html=\"font\"></option>\n            </select>\n\n            <select v-model=\"typography['google-weight']\" @change=\"weightChanged()\">\n                <option value=\"\">Select font weight</option>\n                <option\n                    v-bind:value=\"variant_key\"\n                    :disabled=\"isFontWeightDisabled(variant_key)\"\n                    v-for=\"(variant, variant_key) in variants\" v-html=\"variant\"></option>\n            </select>\n\n            <select v-model=\"typography['subset']\">\n                <option value=\"\">Select subset</option>\n                <option\n                    v-bind:value=\"subset_key\"\n                    :disabled=\"isSubsetDisabled(subset_key)\"\n                    v-for=\"(subset, subset_key) in subsets\" v-html=\"subset\"></option>\n            </select>\n\n            <select v-model=\"typography['text-align']\">\n                <option\n                    v-bind:value=\"align_key\"\n                    v-for=\"(align_label, align_key) in align\" v-html=\"align_label\"></option>\n            </select>\n\n            <label>\n                {{translations['font_size']}}\n                <input type=\"number\" v-model=\"typography['font-size']\">\n            </label>\n\n            <label>\n                {{translations['line_height']}}\n                <input type=\"number\" v-model=\"typography['line-height']\">\n            </label>\n\n            <label>\n                {{translations['word_spacing']}}\n                <input type=\"number\" v-model=\"typography['word-spacing']\">\n            </label>\n\n            <label>\n                {{translations['letter_spacing']}}\n                <input type=\"number\" v-model=\"typography['letter-spacing']\">\n            </label>\n\n            <wpcfto_color @wpcfto-get-value=\"typography['color'] = $event\"\n                    :fields=\"{position: 'bottom'}\"\n                    v-if=\"inited\"\n                    :field_value=\"typography['color']\">\n            </wpcfto_color>\n\n            <div class=\"wpcfto_generic_field__typography__preview\" :style=\"previewStyles()\">\n                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\u2018?\u2019\u201C!\u201D(%)[#]{@}/&\\<-+\xF7\xD7=>\xAE\xA9$\u20AC\xA3\xA5\xA2:;,.*\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTU4OTRkNzguanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJpbml0ZWQiLCJnb29nbGVfZm9udHMiLCJ3cGNmdG9fZ2xvYmFsX3NldHRpbmdzIiwid2ViX3NhZmVfZm9udHMiLCJ2YXJpYW50cyIsInN1YnNldHMiLCJhbGlnbiIsInRyYW5zbGF0aW9ucyIsInR5cG9ncmFwaHkiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImVkaXRWYXJpYW50IiwiZWRpdFN1YnNldCIsIm1ldGhvZHMiLCJpc0ZvbnRXZWlnaHREaXNhYmxlZCIsInZhcmlhbnQiLCJjdXJyZW50X3ZhcmlhbnRzIiwiaW5jbHVkZXMiLCJpc1N1YnNldERpc2FibGVkIiwic3Vic2V0IiwiY3VycmVudF9zdWJzZXRzIiwiZm9udENoYW5nZWQiLCIkc2V0IiwiZmFtaWx5IiwiY3VycmVudF92YXJpYW50IiwiY3VycmVudF9zdWJzZXQiLCJidWlsZEdMaW5rIiwiYmFzZSIsImNvbmNhdCIsImlzSXRhbGljIiwicHJldmlld1N0eWxlcyIsInR5cG8iLCJ3ZWlnaHRDaGFuZ2VkIiwid2VpZ2h0IiwibXVsdGlXZWlnaHQiLCJtYXRjaCIsImxlbmd0aCIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRTs7QUFBMkIsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixRQUEvRCxFQUF5RTtBQUFFSCxJQUFBQSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFBRSxhQUFPLE9BQU9BLEdBQWQ7QUFBb0IsS0FBdEQ7QUFBeUQsR0FBcEksTUFBMEk7QUFBRUQsSUFBQUEsT0FBTyxHQUFHLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQUUsYUFBT0EsR0FBRyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBekIsSUFBdUNELEdBQUcsQ0FBQ0csV0FBSixLQUFvQkYsTUFBM0QsSUFBcUVELEdBQUcsS0FBS0MsTUFBTSxDQUFDRyxTQUFwRixHQUFnRyxRQUFoRyxHQUEyRyxPQUFPSixHQUF6SDtBQUErSCxLQUFqSztBQUFvSzs7QUFBQyxTQUFPRCxPQUFPLENBQUNDLEdBQUQsQ0FBZDtBQUFzQjtBQUUxWDs7Ozs7QUFHQUssR0FBRyxDQUFDQyxTQUFKLENBQWMsbUJBQWQsRUFBbUM7QUFDakNDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDBCO0FBRWpDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRSxLQURIO0FBRUxDLE1BQUFBLFlBQVksRUFBRUMsc0JBQXNCLENBQUMsWUFBRCxDQUF0QixDQUFxQyxRQUFyQyxDQUZUO0FBR0xDLE1BQUFBLGNBQWMsRUFBRUQsc0JBQXNCLENBQUMsWUFBRCxDQUF0QixDQUFxQyxTQUFyQyxDQUhYO0FBSUxFLE1BQUFBLFFBQVEsRUFBRUYsc0JBQXNCLENBQUMsVUFBRCxDQUozQjtBQUtMRyxNQUFBQSxPQUFPLEVBQUVILHNCQUFzQixDQUFDLFNBQUQsQ0FMMUI7QUFNTEksTUFBQUEsS0FBSyxFQUFFSixzQkFBc0IsQ0FBQyxPQUFELENBTnhCO0FBT0xLLE1BQUFBLFlBQVksRUFBRUwsc0JBQXNCLENBQUMsY0FBRCxDQVAvQjtBQVFMTSxNQUFBQSxVQUFVLEVBQUU7QUFDVix1QkFBZSxFQURMO0FBRVYseUJBQWlCLFNBRlA7QUFHVix1QkFBZSxLQUhMO0FBSVYsc0JBQWMsUUFKSjtBQUtWLGtCQUFVLE9BTEE7QUFNVixpQkFBUyxNQU5DO0FBT1YscUJBQWEsSUFQSDtBQVFWLHVCQUFlLElBUkw7QUFTVixzQkFBYyxNQVRKO0FBVVYsd0JBQWdCLEdBVk47QUFXViwwQkFBa0IsR0FYUjtBQVlWLHVCQUFlLEVBWkw7QUFhVixxQkFBYTtBQWJIO0FBUlAsS0FBUDtBQXdCRCxHQTNCZ0M7QUE0QmpDQyxFQUFBQSxRQUFRLEVBQUUscXpHQTVCdUI7QUE2QmpDQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJLE9BQU8sS0FBS0MsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixDQUE5RCxFQUFrRjtBQUNoRixXQUFLSCxVQUFMLEdBQWtCSyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSCxXQUFoQixDQUFsQjtBQUNELEtBRkQsTUFFTyxJQUFJckIsT0FBTyxDQUFDLEtBQUtxQixXQUFOLENBQVAsS0FBOEIsUUFBbEMsRUFBNEM7QUFDakQsV0FBS0gsVUFBTCxHQUFrQixLQUFLRyxXQUF2QjtBQUNEOztBQUVELFNBQUtYLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBS2UsV0FBTDtBQUNBLFNBQUtDLFVBQUw7QUFDRCxHQXZDZ0M7QUF3Q2pDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsb0JBQW9CLEVBQUUsU0FBU0Esb0JBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzNELFVBQUlDLGdCQUFnQixHQUFHLEtBQUtaLFVBQUwsQ0FBZ0IsV0FBaEIsRUFBNkIsVUFBN0IsQ0FBdkI7QUFDQSxVQUFJLE9BQU9ZLGdCQUFQLEtBQTRCLFdBQWhDLEVBQTZDLE9BQU8sS0FBUDtBQUM3QyxhQUFPLENBQUNBLGdCQUFnQixDQUFDQyxRQUFqQixDQUEwQkYsT0FBMUIsQ0FBUjtBQUNELEtBTE07QUFNUEcsSUFBQUEsZ0JBQWdCLEVBQUUsU0FBU0EsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ2xELFVBQUlDLGVBQWUsR0FBRyxLQUFLaEIsVUFBTCxDQUFnQixXQUFoQixFQUE2QixTQUE3QixDQUF0QjtBQUNBLFVBQUksT0FBT2dCLGVBQVAsS0FBMkIsV0FBL0IsRUFBNEMsT0FBTyxLQUFQO0FBQzVDLGFBQU8sQ0FBQ0EsZUFBZSxDQUFDSCxRQUFoQixDQUF5QkUsTUFBekIsQ0FBUjtBQUNELEtBVk07QUFXUEUsSUFBQUEsV0FBVyxFQUFFLFNBQVNBLFdBQVQsR0FBdUI7QUFDbEMsV0FBS0MsSUFBTCxDQUFVLEtBQUtsQixVQUFmLEVBQTJCLGFBQTNCLEVBQTBDLEtBQUtBLFVBQUwsQ0FBZ0IsV0FBaEIsRUFBNkJtQixNQUF2RTtBQUNBLFdBQUtaLFdBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0QsS0FmTTtBQWdCUEQsSUFBQUEsV0FBVyxFQUFFLFNBQVNBLFdBQVQsR0FBdUI7QUFDbEMsVUFBSWEsZUFBZSxHQUFHLEtBQUtwQixVQUFMLENBQWdCLGVBQWhCLENBQXRCO0FBQ0EsVUFBSVksZ0JBQWdCLEdBQUcsS0FBS1osVUFBTCxDQUFnQixXQUFoQixFQUE2QixVQUE3QixDQUF2Qjs7QUFFQSxVQUFJLE9BQU9ZLGdCQUFQLEtBQTRCLFdBQTVCLElBQTJDLENBQUNBLGdCQUFnQixDQUFDQyxRQUFqQixDQUEwQk8sZUFBMUIsQ0FBaEQsRUFBNEY7QUFDMUYsYUFBS0YsSUFBTCxDQUFVLEtBQUtsQixVQUFmLEVBQTJCLGVBQTNCLEVBQTRDWSxnQkFBZ0IsQ0FBQyxDQUFELENBQTVEO0FBQ0Q7QUFDRixLQXZCTTtBQXdCUEosSUFBQUEsVUFBVSxFQUFFLFNBQVNBLFVBQVQsR0FBc0I7QUFDaEMsVUFBSWEsY0FBYyxHQUFHLEtBQUtyQixVQUFMLENBQWdCLFFBQWhCLENBQXJCO0FBQ0EsVUFBSWdCLGVBQWUsR0FBRyxLQUFLaEIsVUFBTCxDQUFnQixXQUFoQixFQUE2QixTQUE3QixDQUF0Qjs7QUFFQSxVQUFJLE9BQU9nQixlQUFQLEtBQTJCLFdBQTNCLElBQTBDLENBQUNBLGVBQWUsQ0FBQ0gsUUFBaEIsQ0FBeUJRLGNBQXpCLENBQS9DLEVBQXlGO0FBQ3ZGLGFBQUtILElBQUwsQ0FBVSxLQUFLbEIsVUFBZixFQUEyQixRQUEzQixFQUFxQ2dCLGVBQWUsQ0FBQyxDQUFELENBQXBEO0FBQ0Q7QUFDRixLQS9CTTtBQWdDUE0sSUFBQUEsVUFBVSxFQUFFLFNBQVNBLFVBQVQsR0FBc0I7QUFDaEMsVUFBSUMsSUFBSSxHQUFHLDJDQUFYO0FBQ0FBLE1BQUFBLElBQUksSUFBSSxHQUFHQyxNQUFILENBQVUsS0FBS3hCLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBVixDQUFSO0FBQ0EsVUFBSXlCLFFBQVEsR0FBRyxLQUFLekIsVUFBTCxDQUFnQixZQUFoQixNQUFrQyxRQUFqRDtBQUNBdUIsTUFBQUEsSUFBSSxJQUFJRSxRQUFRLEdBQUcsUUFBSCxHQUFjLEdBQTlCO0FBQ0FGLE1BQUFBLElBQUksSUFBSSxPQUFSO0FBQ0EsVUFBSUUsUUFBSixFQUFjRixJQUFJLElBQUksSUFBUjtBQUNkQSxNQUFBQSxJQUFJLElBQUksS0FBS3ZCLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBUjtBQUNBdUIsTUFBQUEsSUFBSSxJQUFJLGVBQVI7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0ExQ007QUEyQ1BHLElBQUFBLGFBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFVBQUlDLElBQUksR0FBRyxLQUFLM0IsVUFBaEI7QUFDQSxhQUFPO0FBQ0wsdUJBQWUsSUFBSXdCLE1BQUosQ0FBV0csSUFBSSxDQUFDLGFBQUQsQ0FBZixFQUFnQyxLQUFoQyxFQUF1Q0gsTUFBdkMsQ0FBOENHLElBQUksQ0FBQyxXQUFELENBQUosQ0FBa0IsVUFBbEIsQ0FBOUMsQ0FEVjtBQUVMLGlCQUFTQSxJQUFJLENBQUMsT0FBRCxDQUZSO0FBR0wscUJBQWFBLElBQUksQ0FBQyxXQUFELENBQUosR0FBb0IsSUFINUI7QUFJTCx1QkFBZUEsSUFBSSxDQUFDLGFBQUQsQ0FBSixHQUFzQixJQUpoQztBQUtMLDBCQUFrQkEsSUFBSSxDQUFDLGdCQUFELENBQUosR0FBeUIsSUFMdEM7QUFNTCx3QkFBZ0JBLElBQUksQ0FBQyxjQUFELENBQUosR0FBdUIsSUFObEM7QUFPTCxzQkFBY0EsSUFBSSxDQUFDLFlBQUQsQ0FQYjtBQVFMLHVCQUFlQSxJQUFJLENBQUMsYUFBRCxDQVJkO0FBU0wsc0JBQWNBLElBQUksQ0FBQyxZQUFEO0FBVGIsT0FBUDtBQVdELEtBeERNO0FBeURQQyxJQUFBQSxhQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxVQUFJRCxJQUFJLEdBQUcsS0FBSzNCLFVBQWhCO0FBQ0EsVUFBSTZCLE1BQU0sR0FBR0YsSUFBSSxDQUFDLGVBQUQsQ0FBakI7QUFDQSxVQUFJRyxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLG1CQUFiLENBQWxCOztBQUVBLFVBQUlGLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCLGFBQUtYLElBQUwsQ0FBVVMsSUFBVixFQUFnQixhQUFoQixFQUErQixHQUEvQjtBQUNBLGFBQUtULElBQUwsQ0FBVVMsSUFBVixFQUFnQixZQUFoQixFQUE4QixRQUE5QjtBQUNELE9BSEQsTUFHTyxJQUFJRSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUMvQixhQUFLWCxJQUFMLENBQVVTLElBQVYsRUFBZ0IsYUFBaEIsRUFBK0IsR0FBL0I7QUFDQSxhQUFLVCxJQUFMLENBQVVTLElBQVYsRUFBZ0IsWUFBaEIsRUFBOEIsUUFBOUI7QUFDRCxPQUhNLE1BR0EsSUFBSUcsV0FBVyxDQUFDRSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQ25DLGFBQUtkLElBQUwsQ0FBVVMsSUFBVixFQUFnQixhQUFoQixFQUErQkcsV0FBVyxDQUFDLENBQUQsQ0FBMUM7QUFDQSxhQUFLWixJQUFMLENBQVVTLElBQVYsRUFBZ0IsWUFBaEIsRUFBOEJHLFdBQVcsQ0FBQyxDQUFELENBQXpDO0FBQ0QsT0FITSxNQUdBO0FBQ0wsYUFBS1osSUFBTCxDQUFVUyxJQUFWLEVBQWdCLGFBQWhCLEVBQStCRSxNQUEvQjtBQUNBLGFBQUtYLElBQUwsQ0FBVVMsSUFBVixFQUFnQixZQUFoQixFQUE4QixRQUE5QjtBQUNEO0FBQ0Y7QUEzRU0sR0F4Q3dCO0FBcUhqQ00sRUFBQUEsS0FBSyxFQUFFO0FBQ0xqQyxJQUFBQSxVQUFVLEVBQUU7QUFDVmtDLE1BQUFBLElBQUksRUFBRSxJQURJO0FBRVZDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCbkMsVUFBakIsRUFBNkI7QUFDcEMsYUFBS29DLEtBQUwsQ0FBVyxrQkFBWCxFQUErQnBDLFVBQS9CO0FBQ0Q7QUFKUztBQURQO0FBckgwQixDQUFuQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogQHZhciB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzXG4gKi9cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b190eXBvZ3JhcGh5Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0ZWQ6IGZhbHNlLFxuICAgICAgZ29vZ2xlX2ZvbnRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydmb250c19saXN0J11bJ2dvb2dsZSddLFxuICAgICAgd2ViX3NhZmVfZm9udHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ2ZvbnRzX2xpc3QnXVsnd2Vic2FmZSddLFxuICAgICAgdmFyaWFudHM6IHdwY2Z0b19nbG9iYWxfc2V0dGluZ3NbJ3ZhcmlhbnRzJ10sXG4gICAgICBzdWJzZXRzOiB3cGNmdG9fZ2xvYmFsX3NldHRpbmdzWydzdWJzZXRzJ10sXG4gICAgICBhbGlnbjogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1snYWxpZ24nXSxcbiAgICAgIHRyYW5zbGF0aW9uczogd3BjZnRvX2dsb2JhbF9zZXR0aW5nc1sndHJhbnNsYXRpb25zJ10sXG4gICAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgICdmb250LWZhbWlseSc6ICcnLFxuICAgICAgICAnZ29vZ2xlLXdlaWdodCc6ICdyZWd1bGFyJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgICAgICdmb250LXN0eWxlJzogJ25vcm1hbCcsXG4gICAgICAgICdzdWJzZXQnOiAnbGF0aW4nLFxuICAgICAgICAnY29sb3InOiAnIzAwMCcsXG4gICAgICAgICdmb250LXNpemUnOiAnMTQnLFxuICAgICAgICAnbGluZS1oZWlnaHQnOiAnMjAnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICdsZWZ0JyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6ICcwJyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJzogJzAnLFxuICAgICAgICAnYmFja3VwLWZvbnQnOiAnJyxcbiAgICAgICAgJ2ZvbnQtZGF0YSc6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fdHlwb2dyYXBoeVxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlIDpmaWVsZHM9XFxcImZpZWxkc1xcXCIgOmZpZWxkX2xhYmVsPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZT5cXG5cXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInR5cG9ncmFwaHlbJ2ZvbnQtZmFtaWx5J10ubGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpbmsgOmhyZWY9XFxcImJ1aWxkR0xpbmsoKVxcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2ZvbnQtZGF0YSddXFxcIiBAY2hhbmdlPVxcXCJmb250Q2hhbmdlZCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5TZWxlY3QgZm9udDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtYmluZDp2YWx1ZT1cXFwiZm9udFxcXCIgdi1mb3I9XFxcImZvbnQgaW4gZ29vZ2xlX2ZvbnRzXFxcIiB2LWh0bWw9XFxcImZvbnQuZmFtaWx5XFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ2JhY2t1cC1mb250J11cXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPlNlbGVjdCBiYWNrdXAgZm9udDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtYmluZDp2YWx1ZT1cXFwiZm9udFxcXCIgdi1mb3I9XFxcImZvbnQgaW4gd2ViX3NhZmVfZm9udHNcXFwiIHYtaHRtbD1cXFwiZm9udFxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5Wydnb29nbGUtd2VpZ2h0J11cXFwiIEBjaGFuZ2U9XFxcIndlaWdodENoYW5nZWQoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+U2VsZWN0IGZvbnQgd2VpZ2h0PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb25cXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDp2YWx1ZT1cXFwidmFyaWFudF9rZXlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImlzRm9udFdlaWdodERpc2FibGVkKHZhcmlhbnRfa2V5KVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIodmFyaWFudCwgdmFyaWFudF9rZXkpIGluIHZhcmlhbnRzXFxcIiB2LWh0bWw9XFxcInZhcmlhbnRcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcblxcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnc3Vic2V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPlNlbGVjdCBzdWJzZXQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvblxcbiAgICAgICAgICAgICAgICAgICAgdi1iaW5kOnZhbHVlPVxcXCJzdWJzZXRfa2V5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJpc1N1YnNldERpc2FibGVkKHN1YnNldF9rZXkpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihzdWJzZXQsIHN1YnNldF9rZXkpIGluIHN1YnNldHNcXFwiIHYtaHRtbD1cXFwic3Vic2V0XFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ3RleHQtYWxpZ24nXVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb25cXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDp2YWx1ZT1cXFwiYWxpZ25fa2V5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihhbGlnbl9sYWJlbCwgYWxpZ25fa2V5KSBpbiBhbGlnblxcXCIgdi1odG1sPVxcXCJhbGlnbl9sYWJlbFxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICB7e3RyYW5zbGF0aW9uc1snZm9udF9zaXplJ119fVxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5Wydmb250LXNpemUnXVxcXCI+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7dHJhbnNsYXRpb25zWydsaW5lX2hlaWdodCddfX1cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgdi1tb2RlbD1cXFwidHlwb2dyYXBoeVsnbGluZS1oZWlnaHQnXVxcXCI+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7dHJhbnNsYXRpb25zWyd3b3JkX3NwYWNpbmcnXX19XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHYtbW9kZWw9XFxcInR5cG9ncmFwaHlbJ3dvcmQtc3BhY2luZyddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAge3t0cmFuc2xhdGlvbnNbJ2xldHRlcl9zcGFjaW5nJ119fVxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiB2LW1vZGVsPVxcXCJ0eXBvZ3JhcGh5WydsZXR0ZXItc3BhY2luZyddXFxcIj5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fY29sb3IgQHdwY2Z0by1nZXQtdmFsdWU9XFxcInR5cG9ncmFwaHlbJ2NvbG9yJ10gPSAkZXZlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZmllbGRzPVxcXCJ7cG9zaXRpb246ICdib3R0b20nfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImluaXRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZF92YWx1ZT1cXFwidHlwb2dyYXBoeVsnY29sb3InXVxcXCI+XFxuICAgICAgICAgICAgPC93cGNmdG9fY29sb3I+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX3R5cG9ncmFwaHlfX3ByZXZpZXdcXFwiIDpzdHlsZT1cXFwicHJldmlld1N0eWxlcygpXFxcIj5cXG4gICAgICAgICAgICAgICAgQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejEyMzQ1Njc4OTBcXHUyMDE4P1xcdTIwMTlcXHUyMDFDIVxcdTIwMUQoJSlbI117QH0vJlxcXFw8LStcXHhGN1xceEQ3PT5cXHhBRVxceEE5JFxcdTIwQUNcXHhBM1xceEE1XFx4QTI6OywuKlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpKSB7XG4gICAgICB0aGlzLnR5cG9ncmFwaHkgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoX3R5cGVvZih0aGlzLmZpZWxkX3ZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMudHlwb2dyYXBoeSA9IHRoaXMuZmllbGRfdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZWRpdFZhcmlhbnQoKTtcbiAgICB0aGlzLmVkaXRTdWJzZXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzRm9udFdlaWdodERpc2FibGVkOiBmdW5jdGlvbiBpc0ZvbnRXZWlnaHREaXNhYmxlZCh2YXJpYW50KSB7XG4gICAgICB2YXIgY3VycmVudF92YXJpYW50cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3ZhcmlhbnRzJ107XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRfdmFyaWFudHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gIWN1cnJlbnRfdmFyaWFudHMuaW5jbHVkZXModmFyaWFudCk7XG4gICAgfSxcbiAgICBpc1N1YnNldERpc2FibGVkOiBmdW5jdGlvbiBpc1N1YnNldERpc2FibGVkKHN1YnNldCkge1xuICAgICAgdmFyIGN1cnJlbnRfc3Vic2V0cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3N1YnNldHMnXTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudF9zdWJzZXRzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICFjdXJyZW50X3N1YnNldHMuaW5jbHVkZXMoc3Vic2V0KTtcbiAgICB9LFxuICAgIGZvbnRDaGFuZ2VkOiBmdW5jdGlvbiBmb250Q2hhbmdlZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnR5cG9ncmFwaHksICdmb250LWZhbWlseScsIHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ10uZmFtaWx5KTtcbiAgICAgIHRoaXMuZWRpdFZhcmlhbnQoKTtcbiAgICAgIHRoaXMuZWRpdFN1YnNldCgpO1xuICAgIH0sXG4gICAgZWRpdFZhcmlhbnQ6IGZ1bmN0aW9uIGVkaXRWYXJpYW50KCkge1xuICAgICAgdmFyIGN1cnJlbnRfdmFyaWFudCA9IHRoaXMudHlwb2dyYXBoeVsnZ29vZ2xlLXdlaWdodCddO1xuICAgICAgdmFyIGN1cnJlbnRfdmFyaWFudHMgPSB0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtZGF0YSddWyd2YXJpYW50cyddO1xuXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRfdmFyaWFudHMgIT09ICd1bmRlZmluZWQnICYmICFjdXJyZW50X3ZhcmlhbnRzLmluY2x1ZGVzKGN1cnJlbnRfdmFyaWFudCkpIHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudHlwb2dyYXBoeSwgJ2dvb2dsZS13ZWlnaHQnLCBjdXJyZW50X3ZhcmlhbnRzWzBdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVkaXRTdWJzZXQ6IGZ1bmN0aW9uIGVkaXRTdWJzZXQoKSB7XG4gICAgICB2YXIgY3VycmVudF9zdWJzZXQgPSB0aGlzLnR5cG9ncmFwaHlbJ3N1YnNldCddO1xuICAgICAgdmFyIGN1cnJlbnRfc3Vic2V0cyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1kYXRhJ11bJ3N1YnNldHMnXTtcblxuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50X3N1YnNldHMgIT09ICd1bmRlZmluZWQnICYmICFjdXJyZW50X3N1YnNldHMuaW5jbHVkZXMoY3VycmVudF9zdWJzZXQpKSB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnR5cG9ncmFwaHksICdzdWJzZXQnLCBjdXJyZW50X3N1YnNldHNbMF0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGRHTGluazogZnVuY3Rpb24gYnVpbGRHTGluaygpIHtcbiAgICAgIHZhciBiYXNlID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9JztcbiAgICAgIGJhc2UgKz0gXCJcIi5jb25jYXQodGhpcy50eXBvZ3JhcGh5Wydmb250LWZhbWlseSddKTtcbiAgICAgIHZhciBpc0l0YWxpYyA9IHRoaXMudHlwb2dyYXBoeVsnZm9udC1zdHlsZSddID09PSAnaXRhbGljJztcbiAgICAgIGJhc2UgKz0gaXNJdGFsaWMgPyAnOml0YWwsJyA6ICc6JztcbiAgICAgIGJhc2UgKz0gJ3dnaHRAJztcbiAgICAgIGlmIChpc0l0YWxpYykgYmFzZSArPSAnMSwnO1xuICAgICAgYmFzZSArPSB0aGlzLnR5cG9ncmFwaHlbJ2ZvbnQtd2VpZ2h0J107XG4gICAgICBiYXNlICs9ICcmZGlzcGxheT1zd2FwJztcbiAgICAgIHJldHVybiBiYXNlO1xuICAgIH0sXG4gICAgcHJldmlld1N0eWxlczogZnVuY3Rpb24gcHJldmlld1N0eWxlcygpIHtcbiAgICAgIHZhciB0eXBvID0gdGhpcy50eXBvZ3JhcGh5O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2ZvbnQtZmFtaWx5JzogXCInXCIuY29uY2F0KHR5cG9bJ2ZvbnQtZmFtaWx5J10sIFwiJywgXCIpLmNvbmNhdCh0eXBvWydmb250LWRhdGEnXVsnY2F0ZWdvcnknXSksXG4gICAgICAgICdjb2xvcic6IHR5cG9bJ2NvbG9yJ10sXG4gICAgICAgICdmb250LXNpemUnOiB0eXBvWydmb250LXNpemUnXSArICdweCcsXG4gICAgICAgICdsaW5lLWhlaWdodCc6IHR5cG9bJ2xpbmUtaGVpZ2h0J10gKyAncHgnLFxuICAgICAgICAnbGV0dGVyLXNwYWNpbmcnOiB0eXBvWydsZXR0ZXItc3BhY2luZyddICsgJ3B4JyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6IHR5cG9bJ3dvcmQtc3BhY2luZyddICsgJ3B4JyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiB0eXBvWyd0ZXh0LWFsaWduJ10sXG4gICAgICAgICdmb250LXdlaWdodCc6IHR5cG9bJ2ZvbnQtd2VpZ2h0J10sXG4gICAgICAgICdmb250LXN0eWxlJzogdHlwb1snZm9udC1zdHlsZSddXG4gICAgICB9O1xuICAgIH0sXG4gICAgd2VpZ2h0Q2hhbmdlZDogZnVuY3Rpb24gd2VpZ2h0Q2hhbmdlZCgpIHtcbiAgICAgIHZhciB0eXBvID0gdGhpcy50eXBvZ3JhcGh5O1xuICAgICAgdmFyIHdlaWdodCA9IHR5cG9bJ2dvb2dsZS13ZWlnaHQnXTtcbiAgICAgIHZhciBtdWx0aVdlaWdodCA9IHdlaWdodC5tYXRjaCgvW2EtekEtWl0rfFswLTldKy9nKTtcblxuICAgICAgaWYgKHdlaWdodCA9PT0gJ3JlZ3VsYXInKSB7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC13ZWlnaHQnLCA0MDApO1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtc3R5bGUnLCAnbm9ybWFsJyk7XG4gICAgICB9IGVsc2UgaWYgKHdlaWdodCA9PT0gJ3JlZ3VsYXInKSB7XG4gICAgICAgIHRoaXMuJHNldCh0eXBvLCAnZm9udC13ZWlnaHQnLCA0MDApO1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtc3R5bGUnLCAnaXRhbGljJyk7XG4gICAgICB9IGVsc2UgaWYgKG11bHRpV2VpZ2h0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtd2VpZ2h0JywgbXVsdGlXZWlnaHRbMF0pO1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtc3R5bGUnLCBtdWx0aVdlaWdodFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRzZXQodHlwbywgJ2ZvbnQtd2VpZ2h0Jywgd2VpZ2h0KTtcbiAgICAgICAgdGhpcy4kc2V0KHR5cG8sICdmb250LXN0eWxlJywgJ25vcm1hbCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih0eXBvZ3JhcGh5KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB0eXBvZ3JhcGh5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])