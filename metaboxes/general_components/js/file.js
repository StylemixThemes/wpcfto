(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_file', {
  props: ['field_label', 'field_name', 'field_id', 'field_value', 'field_data', 'field_native_name', 'field_native_name_inner'],
  data: function data() {
    return {
      data: '',
      error: '',
      value: {
        name: '',
        url: '',
        path: ''
      },
      input_value: '',
      uploading: false
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__file\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <label class=\"file-select\" v-if=\"!value.path\">\n\n                <div class=\"select-button\" v-bind:class=\"{'uploading' : uploading}\">\n                    <span v-if=\"!uploading\">\n                        <i class=\"fa fa-paperclip\"></i>\n                        {{field_data.load_labels.label}}\n                    </span>\n                    <span v-html=\"field_data.load_labels.loading\" v-else></span>\n                </div>\n\n                <input type=\"file\" :accept=\"field_data['accept'].join(',')\" @change=\"handleFileChange\" />\n            </label>\n\n            <div class=\"field_label_error\" v-if=\"error\" v-html=\"error\"></div>\n\n            <div class=\"field_label__file\" v-if=\"value.url\">\n                <a v-bind:href=\"value.url\" target=\"_blank\">\n                    {{generateFileName(value['url'])}}\n                    <i class=\"fa fa-times\" @click.prevent=\"deleteFile()\"></i>\n                </a>\n\n            </div>\n\n\n            <input type=\"hidden\"\n                v-bind:name=\"field_name\"\n                v-bind:placeholder=\"field_label\"\n                v-bind:id=\"field_id\"\n                v-model=\"input_value\"\n            />\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  mounted: function mounted() {
    if (typeof this.field_value !== 'undefined') {
      if (typeof this.field_value.url !== 'undefined' && this.field_value.url === '') this.field_value = '';
      if (typeof this.field_value.path !== 'undefined' && this.field_value.path === '') this.field_value = '';
      if (this.field_value !== '') this.value = JSON.parse(this.field_value);
    }

    this.data = this.field_data;
  },
  methods: {
    handleFileChange: function handleFileChange(e) {
      var _this = this;

      if (e.target.files.length) {
        var file = e.target.files[0];
        _this.uploading = true;
        _this.error = '';
        var formData = new FormData();
        formData.append('file', file);
        formData.append('field', this.field_name);

        if (typeof this.field_native_name !== 'undefined') {
          formData.append('field_native_name', this.field_native_name);
        }

        if (typeof this.field_native_name_inner !== 'undefined') {
          formData.append('field_native_name_inner', this.field_native_name_inner);
        }

        var url = stm_wpcfto_ajaxurl + '?action=wpcfto_upload_file&nonce=' + stm_wpcfto_nonces['wpcfto_upload_file'];

        _this.$http.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (r) {
          r = r.body;

          if (r.error) {
            _this.$set(_this, 'error', r.error);
          } else {
            _this.$set(_this, 'value', r);
          }

          _this.uploading = false;
        });
      }
    },
    deleteFile: function deleteFile() {
      this.$set(this, 'value', {
        path: '',
        url: ''
      });
    },
    generateFileName: function generateFileName(url) {
      var name = '';
      var nameLength = 30;
      if (url.length > nameLength) name = '...';
      name += url.substr(url.length - nameLength);
      return name;
    }
  },
  watch: {
    value: function value(_value) {
      var stringified = JSON.stringify(_value);
      if (_value.path === '' && _value.url === '') stringified = '';
      this['input_value'] = stringified;
      this.$emit('wpcfto-get-value', stringified);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2Q3MzkwOTIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiZXJyb3IiLCJ2YWx1ZSIsIm5hbWUiLCJ1cmwiLCJwYXRoIiwiaW5wdXRfdmFsdWUiLCJ1cGxvYWRpbmciLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIkpTT04iLCJwYXJzZSIsImZpZWxkX2RhdGEiLCJtZXRob2RzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJfdGhpcyIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZF9uYW1lIiwiZmllbGRfbmF0aXZlX25hbWUiLCJmaWVsZF9uYXRpdmVfbmFtZV9pbm5lciIsInN0bV93cGNmdG9fYWpheHVybCIsInN0bV93cGNmdG9fbm9uY2VzIiwiJGh0dHAiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwiYm9keSIsIiRzZXQiLCJkZWxldGVGaWxlIiwiZ2VuZXJhdGVGaWxlTmFtZSIsIm5hbWVMZW5ndGgiLCJzdWJzdHIiLCJ3YXRjaCIsIl92YWx1ZSIsInN0cmluZ2lmaWVkIiwic3RyaW5naWZ5IiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxhQUFkLEVBQTZCO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLGFBQTFDLEVBQXlELFlBQXpELEVBQXVFLG1CQUF2RSxFQUE0Rix5QkFBNUYsQ0FEb0I7QUFFM0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEEsTUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMsTUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxFQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSxFQUZBO0FBR0xDLFFBQUFBLElBQUksRUFBRTtBQUhELE9BSEY7QUFRTEMsTUFBQUEsV0FBVyxFQUFFLEVBUlI7QUFTTEMsTUFBQUEsU0FBUyxFQUFFO0FBVE4sS0FBUDtBQVdELEdBZDBCO0FBZTNCQyxFQUFBQSxRQUFRLEVBQUUsdWdEQWZpQjtBQWdCM0JDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksT0FBTyxLQUFLQyxXQUFaLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDLFVBQUksT0FBTyxLQUFLQSxXQUFMLENBQWlCTixHQUF4QixLQUFnQyxXQUFoQyxJQUErQyxLQUFLTSxXQUFMLENBQWlCTixHQUFqQixLQUF5QixFQUE1RSxFQUFnRixLQUFLTSxXQUFMLEdBQW1CLEVBQW5CO0FBQ2hGLFVBQUksT0FBTyxLQUFLQSxXQUFMLENBQWlCTCxJQUF4QixLQUFpQyxXQUFqQyxJQUFnRCxLQUFLSyxXQUFMLENBQWlCTCxJQUFqQixLQUEwQixFQUE5RSxFQUFrRixLQUFLSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ2xGLFVBQUksS0FBS0EsV0FBTCxLQUFxQixFQUF6QixFQUE2QixLQUFLUixLQUFMLEdBQWFTLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtGLFdBQWhCLENBQWI7QUFDOUI7O0FBRUQsU0FBS1YsSUFBTCxHQUFZLEtBQUthLFVBQWpCO0FBQ0QsR0F4QjBCO0FBeUIzQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLGdCQUFnQixFQUFFLFNBQVNBLGdCQUFULENBQTBCQyxDQUExQixFQUE2QjtBQUM3QyxVQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxNQUFuQixFQUEyQjtBQUN6QixZQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYO0FBQ0FGLFFBQUFBLEtBQUssQ0FBQ1YsU0FBTixHQUFrQixJQUFsQjtBQUNBVSxRQUFBQSxLQUFLLENBQUNoQixLQUFOLEdBQWMsRUFBZDtBQUNBLFlBQUlxQixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBQ0FELFFBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QkgsSUFBeEI7QUFDQUMsUUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCLEtBQUtDLFVBQTlCOztBQUVBLFlBQUksT0FBTyxLQUFLQyxpQkFBWixLQUFrQyxXQUF0QyxFQUFtRDtBQUNqREosVUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLG1CQUFoQixFQUFxQyxLQUFLRSxpQkFBMUM7QUFDRDs7QUFFRCxZQUFJLE9BQU8sS0FBS0MsdUJBQVosS0FBd0MsV0FBNUMsRUFBeUQ7QUFDdkRMLFVBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQix5QkFBaEIsRUFBMkMsS0FBS0csdUJBQWhEO0FBQ0Q7O0FBRUQsWUFBSXZCLEdBQUcsR0FBR3dCLGtCQUFrQixHQUFHLG1DQUFyQixHQUEyREMsaUJBQWlCLENBQUMsb0JBQUQsQ0FBdEY7O0FBRUFaLFFBQUFBLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxJQUFaLENBQWlCM0IsR0FBakIsRUFBc0JrQixRQUF0QixFQUFnQztBQUM5QlUsVUFBQUEsT0FBTyxFQUFFO0FBQ1AsNEJBQWdCO0FBRFQ7QUFEcUIsU0FBaEMsRUFJR0MsSUFKSCxDQUlRLFVBQVVDLENBQVYsRUFBYTtBQUNuQkEsVUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLElBQU47O0FBRUEsY0FBSUQsQ0FBQyxDQUFDakMsS0FBTixFQUFhO0FBQ1hnQixZQUFBQSxLQUFLLENBQUNtQixJQUFOLENBQVduQixLQUFYLEVBQWtCLE9BQWxCLEVBQTJCaUIsQ0FBQyxDQUFDakMsS0FBN0I7QUFDRCxXQUZELE1BRU87QUFDTGdCLFlBQUFBLEtBQUssQ0FBQ21CLElBQU4sQ0FBV25CLEtBQVgsRUFBa0IsT0FBbEIsRUFBMkJpQixDQUEzQjtBQUNEOztBQUVEakIsVUFBQUEsS0FBSyxDQUFDVixTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsU0FkRDtBQWVEO0FBQ0YsS0F0Q007QUF1Q1A4QixJQUFBQSxVQUFVLEVBQUUsU0FBU0EsVUFBVCxHQUFzQjtBQUNoQyxXQUFLRCxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QjtBQUN2Qi9CLFFBQUFBLElBQUksRUFBRSxFQURpQjtBQUV2QkQsUUFBQUEsR0FBRyxFQUFFO0FBRmtCLE9BQXpCO0FBSUQsS0E1Q007QUE2Q1BrQyxJQUFBQSxnQkFBZ0IsRUFBRSxTQUFTQSxnQkFBVCxDQUEwQmxDLEdBQTFCLEVBQStCO0FBQy9DLFVBQUlELElBQUksR0FBRyxFQUFYO0FBQ0EsVUFBSW9DLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFVBQUluQyxHQUFHLENBQUNnQixNQUFKLEdBQWFtQixVQUFqQixFQUE2QnBDLElBQUksR0FBRyxLQUFQO0FBQzdCQSxNQUFBQSxJQUFJLElBQUlDLEdBQUcsQ0FBQ29DLE1BQUosQ0FBV3BDLEdBQUcsQ0FBQ2dCLE1BQUosR0FBYW1CLFVBQXhCLENBQVI7QUFDQSxhQUFPcEMsSUFBUDtBQUNEO0FBbkRNLEdBekJrQjtBQThFM0JzQyxFQUFBQSxLQUFLLEVBQUU7QUFDTHZDLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWV3QyxNQUFmLEVBQXVCO0FBQzVCLFVBQUlDLFdBQVcsR0FBR2hDLElBQUksQ0FBQ2lDLFNBQUwsQ0FBZUYsTUFBZixDQUFsQjtBQUNBLFVBQUlBLE1BQU0sQ0FBQ3JDLElBQVAsS0FBZ0IsRUFBaEIsSUFBc0JxQyxNQUFNLENBQUN0QyxHQUFQLEtBQWUsRUFBekMsRUFBNkN1QyxXQUFXLEdBQUcsRUFBZDtBQUM3QyxXQUFLLGFBQUwsSUFBc0JBLFdBQXRCO0FBQ0EsV0FBS0UsS0FBTCxDQUFXLGtCQUFYLEVBQStCRixXQUEvQjtBQUNEO0FBTkk7QUE5RW9CLENBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19maWxlJywge1xuICBwcm9wczogWydmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX2RhdGEnLCAnZmllbGRfbmF0aXZlX25hbWUnLCAnZmllbGRfbmF0aXZlX25hbWVfaW5uZXInXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogJycsXG4gICAgICBlcnJvcjogJycsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgcGF0aDogJydcbiAgICAgIH0sXG4gICAgICBpbnB1dF92YWx1ZTogJycsXG4gICAgICB1cGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fZmlsZVxcXCI+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlIDpmaWVsZHM9XFxcImZpZWxkc1xcXCIgOmZpZWxkX2xhYmVsPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZT5cXG5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZpbGUtc2VsZWN0XFxcIiB2LWlmPVxcXCIhdmFsdWUucGF0aFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1idXR0b25cXFwiIHYtYmluZDpjbGFzcz1cXFwieyd1cGxvYWRpbmcnIDogdXBsb2FkaW5nfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCIhdXBsb2FkaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGFwZXJjbGlwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tmaWVsZF9kYXRhLmxvYWRfbGFiZWxzLmxhYmVsfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiZmllbGRfZGF0YS5sb2FkX2xhYmVscy5sb2FkaW5nXFxcIiB2LWVsc2U+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIDphY2NlcHQ9XFxcImZpZWxkX2RhdGFbJ2FjY2VwdCddLmpvaW4oJywnKVxcXCIgQGNoYW5nZT1cXFwiaGFuZGxlRmlsZUNoYW5nZVxcXCIgLz5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkX2xhYmVsX2Vycm9yXFxcIiB2LWlmPVxcXCJlcnJvclxcXCIgdi1odG1sPVxcXCJlcnJvclxcXCI+PC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRfbGFiZWxfX2ZpbGVcXFwiIHYtaWY9XFxcInZhbHVlLnVybFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIHYtYmluZDpocmVmPVxcXCJ2YWx1ZS51cmxcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7Z2VuZXJhdGVGaWxlTmFtZSh2YWx1ZVsndXJsJ10pfX1cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCIgQGNsaWNrLnByZXZlbnQ9XFxcImRlbGV0ZUZpbGUoKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDppZD1cXFwiZmllbGRfaWRcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImlucHV0X3ZhbHVlXFxcIlxcbiAgICAgICAgICAgIC8+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXI+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnVybCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5maWVsZF92YWx1ZS51cmwgPT09ICcnKSB0aGlzLmZpZWxkX3ZhbHVlID0gJyc7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUucGF0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5maWVsZF92YWx1ZS5wYXRoID09PSAnJykgdGhpcy5maWVsZF92YWx1ZSA9ICcnO1xuICAgICAgaWYgKHRoaXMuZmllbGRfdmFsdWUgIT09ICcnKSB0aGlzLnZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpZWxkX2RhdGE7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVGaWxlQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgX3RoaXMudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuZXJyb3IgPSAnJztcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpZWxkJywgdGhpcy5maWVsZF9uYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfbmF0aXZlX25hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWVsZF9uYXRpdmVfbmFtZScsIHRoaXMuZmllbGRfbmF0aXZlX25hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lX2lubmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmllbGRfbmF0aXZlX25hbWVfaW5uZXInLCB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lX2lubmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj13cGNmdG9fdXBsb2FkX2ZpbGUmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fdXBsb2FkX2ZpbGUnXTtcblxuICAgICAgICBfdGhpcy4kaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgciA9IHIuYm9keTtcblxuICAgICAgICAgIGlmIChyLmVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kc2V0KF90aGlzLCAnZXJyb3InLCByLmVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHNldChfdGhpcywgJ3ZhbHVlJywgcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gZGVsZXRlRmlsZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAndmFsdWUnLCB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdlbmVyYXRlRmlsZU5hbWU6IGZ1bmN0aW9uIGdlbmVyYXRlRmlsZU5hbWUodXJsKSB7XG4gICAgICB2YXIgbmFtZSA9ICcnO1xuICAgICAgdmFyIG5hbWVMZW5ndGggPSAzMDtcbiAgICAgIGlmICh1cmwubGVuZ3RoID4gbmFtZUxlbmd0aCkgbmFtZSA9ICcuLi4nO1xuICAgICAgbmFtZSArPSB1cmwuc3Vic3RyKHVybC5sZW5ndGggLSBuYW1lTGVuZ3RoKTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB2YXIgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShfdmFsdWUpO1xuICAgICAgaWYgKF92YWx1ZS5wYXRoID09PSAnJyAmJiBfdmFsdWUudXJsID09PSAnJykgc3RyaW5naWZpZWQgPSAnJztcbiAgICAgIHRoaXNbJ2lucHV0X3ZhbHVlJ10gPSBzdHJpbmdpZmllZDtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBzdHJpbmdpZmllZCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])