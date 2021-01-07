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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__file\">\n        \n            <label v-html=\"field_label\"></label>\n            \n            <label class=\"file-select\" v-if=\"!value.path\">\n            \n                <div class=\"select-button\" v-bind:class=\"{'uploading' : uploading}\">\n                    <span v-if=\"!uploading\">\n                        <i class=\"fa fa-paperclip\"></i>\n                        {{field_data.load_labels.label}}\n                    </span>\n                    <span v-html=\"field_data.load_labels.loading\" v-else></span>\n                </div>\n                \n                <input type=\"file\" :accept=\"field_data['accept'].join(',')\" @change=\"handleFileChange\" />\n            </label>\n            \n            <div class=\"field_label_error\" v-if=\"error\" v-html=\"error\"></div>\n          \n            <div class=\"field_label__file\" v-if=\"value.url\">\n                <a v-bind:href=\"value.url\" target=\"_blank\">\n                    {{generateFileName(value['url'])}} \n                    <i class=\"fa fa-times\" @click.prevent=\"deleteFile()\"></i>\n                </a>\n                \n            </div>  \n          \n            \n            <input type=\"hidden\"\n                v-bind:name=\"field_name\"\n                v-bind:placeholder=\"field_label\"\n                v-bind:id=\"field_id\"\n                v-model=\"input_value\"\n            />\n            \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTgwNTE0YS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJlcnJvciIsInZhbHVlIiwibmFtZSIsInVybCIsInBhdGgiLCJpbnB1dF92YWx1ZSIsInVwbG9hZGluZyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiSlNPTiIsInBhcnNlIiwiZmllbGRfZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsIl90aGlzIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkX25hbWUiLCJmaWVsZF9uYXRpdmVfbmFtZSIsImZpZWxkX25hdGl2ZV9uYW1lX2lubmVyIiwic3RtX3dwY2Z0b19hamF4dXJsIiwic3RtX3dwY2Z0b19ub25jZXMiLCIkaHR0cCIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJib2R5IiwiJHNldCIsImRlbGV0ZUZpbGUiLCJnZW5lcmF0ZUZpbGVOYW1lIiwibmFtZUxlbmd0aCIsInN1YnN0ciIsIndhdGNoIiwiX3ZhbHVlIiwic3RyaW5naWZpZWQiLCJzdHJpbmdpZnkiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGFBQWQsRUFBNkI7QUFDM0JDLEVBQUFBLEtBQUssRUFBRSxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsRUFBOEIsVUFBOUIsRUFBMEMsYUFBMUMsRUFBeUQsWUFBekQsRUFBdUUsbUJBQXZFLEVBQTRGLHlCQUE1RixDQURvQjtBQUUzQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQSxNQUFBQSxJQUFJLEVBQUUsRUFERDtBQUVMQyxNQUFBQSxLQUFLLEVBQUUsRUFGRjtBQUdMQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMs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X2ZpbGUnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfZGF0YScsICdmaWVsZF9uYXRpdmVfbmFtZScsICdmaWVsZF9uYXRpdmVfbmFtZV9pbm5lciddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiAnJyxcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBwYXRoOiAnJ1xuICAgICAgfSxcbiAgICAgIGlucHV0X3ZhbHVlOiAnJyxcbiAgICAgIHVwbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19maWxlXFxcIj5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZmlsZS1zZWxlY3RcXFwiIHYtaWY9XFxcIiF2YWx1ZS5wYXRoXFxcIj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0LWJ1dHRvblxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J3VwbG9hZGluZycgOiB1cGxvYWRpbmd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcIiF1cGxvYWRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wYXBlcmNsaXBcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZWxkX2RhdGEubG9hZF9sYWJlbHMubGFiZWx9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVxcXCJmaWVsZF9kYXRhLmxvYWRfbGFiZWxzLmxvYWRpbmdcXFwiIHYtZWxzZT48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIDphY2NlcHQ9XFxcImZpZWxkX2RhdGFbJ2FjY2VwdCddLmpvaW4oJywnKVxcXCIgQGNoYW5nZT1cXFwiaGFuZGxlRmlsZUNoYW5nZVxcXCIgLz5cXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkX2xhYmVsX2Vycm9yXFxcIiB2LWlmPVxcXCJlcnJvclxcXCIgdi1odG1sPVxcXCJlcnJvclxcXCI+PC9kaXY+XFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkX2xhYmVsX19maWxlXFxcIiB2LWlmPVxcXCJ2YWx1ZS51cmxcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSB2LWJpbmQ6aHJlZj1cXFwidmFsdWUudXJsXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e2dlbmVyYXRlRmlsZU5hbWUodmFsdWVbJ3VybCddKX19IFxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIiBAY2xpY2sucHJldmVudD1cXFwiZGVsZXRlRmlsZSgpXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDppZD1cXFwiZmllbGRfaWRcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImlucHV0X3ZhbHVlXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnVybCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5maWVsZF92YWx1ZS51cmwgPT09ICcnKSB0aGlzLmZpZWxkX3ZhbHVlID0gJyc7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUucGF0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5maWVsZF92YWx1ZS5wYXRoID09PSAnJykgdGhpcy5maWVsZF92YWx1ZSA9ICcnO1xuICAgICAgaWYgKHRoaXMuZmllbGRfdmFsdWUgIT09ICcnKSB0aGlzLnZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpZWxkX2RhdGE7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVGaWxlQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgX3RoaXMudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuZXJyb3IgPSAnJztcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpZWxkJywgdGhpcy5maWVsZF9uYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfbmF0aXZlX25hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWVsZF9uYXRpdmVfbmFtZScsIHRoaXMuZmllbGRfbmF0aXZlX25hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lX2lubmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmllbGRfbmF0aXZlX25hbWVfaW5uZXInLCB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lX2lubmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj13cGNmdG9fdXBsb2FkX2ZpbGUmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fdXBsb2FkX2ZpbGUnXTtcblxuICAgICAgICBfdGhpcy4kaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgciA9IHIuYm9keTtcblxuICAgICAgICAgIGlmIChyLmVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kc2V0KF90aGlzLCAnZXJyb3InLCByLmVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHNldChfdGhpcywgJ3ZhbHVlJywgcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gZGVsZXRlRmlsZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAndmFsdWUnLCB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdlbmVyYXRlRmlsZU5hbWU6IGZ1bmN0aW9uIGdlbmVyYXRlRmlsZU5hbWUodXJsKSB7XG4gICAgICB2YXIgbmFtZSA9ICcnO1xuICAgICAgdmFyIG5hbWVMZW5ndGggPSAzMDtcbiAgICAgIGlmICh1cmwubGVuZ3RoID4gbmFtZUxlbmd0aCkgbmFtZSA9ICcuLi4nO1xuICAgICAgbmFtZSArPSB1cmwuc3Vic3RyKHVybC5sZW5ndGggLSBuYW1lTGVuZ3RoKTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB2YXIgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShfdmFsdWUpO1xuICAgICAgaWYgKF92YWx1ZS5wYXRoID09PSAnJyAmJiBfdmFsdWUudXJsID09PSAnJykgc3RyaW5naWZpZWQgPSAnJztcbiAgICAgIHRoaXNbJ2lucHV0X3ZhbHVlJ10gPSBzdHJpbmdpZmllZDtcbiAgICAgIHRoaXMuJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCBzdHJpbmdpZmllZCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])