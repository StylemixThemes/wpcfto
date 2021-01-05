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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjBlZjMyNTIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiZXJyb3IiLCJ2YWx1ZSIsIm5hbWUiLCJ1cmwiLCJwYXRoIiwiaW5wdXRfdmFsdWUiLCJ1cGxvYWRpbmciLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIkpTT04iLCJwYXJzZSIsImZpZWxkX2RhdGEiLCJtZXRob2RzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJfdGhpcyIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZF9uYW1lIiwiZmllbGRfbmF0aXZlX25hbWUiLCJmaWVsZF9uYXRpdmVfbmFtZV9pbm5lciIsInN0bV93cGNmdG9fYWpheHVybCIsInN0bV93cGNmdG9fbm9uY2VzIiwiJGh0dHAiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwiYm9keSIsIiRzZXQiLCJkZWxldGVGaWxlIiwiZ2VuZXJhdGVGaWxlTmFtZSIsIm5hbWVMZW5ndGgiLCJzdWJzdHIiLCJ3YXRjaCIsIl92YWx1ZSIsInN0cmluZ2lmaWVkIiwic3RyaW5naWZ5IiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxhQUFkLEVBQTZCO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLGFBQTFDLEVBQXlELFlBQXpELEVBQXVFLG1CQUF2RSxFQUE0Rix5QkFBNUYsQ0FEb0I7QUFFM0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEEsTUFBQUEsSUFBSSxFQUFFLEVBREQ7QUFFTEMsTUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxFQUREO0FBRUxD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b19maWxlJywge1xuICBwcm9wczogWydmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX2RhdGEnLCAnZmllbGRfbmF0aXZlX25hbWUnLCAnZmllbGRfbmF0aXZlX25hbWVfaW5uZXInXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogJycsXG4gICAgICBlcnJvcjogJycsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgcGF0aDogJydcbiAgICAgIH0sXG4gICAgICBpbnB1dF92YWx1ZTogJycsXG4gICAgICB1cGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fZmlsZVxcXCI+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZpbGUtc2VsZWN0XFxcIiB2LWlmPVxcXCIhdmFsdWUucGF0aFxcXCI+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1idXR0b25cXFwiIHYtYmluZDpjbGFzcz1cXFwieyd1cGxvYWRpbmcnIDogdXBsb2FkaW5nfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCIhdXBsb2FkaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGFwZXJjbGlwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tmaWVsZF9kYXRhLmxvYWRfbGFiZWxzLmxhYmVsfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiZmllbGRfZGF0YS5sb2FkX2xhYmVscy5sb2FkaW5nXFxcIiB2LWVsc2U+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiA6YWNjZXB0PVxcXCJmaWVsZF9kYXRhWydhY2NlcHQnXS5qb2luKCcsJylcXFwiIEBjaGFuZ2U9XFxcImhhbmRsZUZpbGVDaGFuZ2VcXFwiIC8+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZF9sYWJlbF9lcnJvclxcXCIgdi1pZj1cXFwiZXJyb3JcXFwiIHYtaHRtbD1cXFwiZXJyb3JcXFwiPjwvZGl2PlxcbiAgICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZF9sYWJlbF9fZmlsZVxcXCIgdi1pZj1cXFwidmFsdWUudXJsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgdi1iaW5kOmhyZWY9XFxcInZhbHVlLnVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3tnZW5lcmF0ZUZpbGVOYW1lKHZhbHVlWyd1cmwnXSl9fSBcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCIgQGNsaWNrLnByZXZlbnQ9XFxcImRlbGV0ZUZpbGUoKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvZGl2PiAgXFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6cGxhY2Vob2xkZXI9XFxcImZpZWxkX2xhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJpbnB1dF92YWx1ZVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS51cmwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZmllbGRfdmFsdWUudXJsID09PSAnJykgdGhpcy5maWVsZF92YWx1ZSA9ICcnO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnBhdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZmllbGRfdmFsdWUucGF0aCA9PT0gJycpIHRoaXMuZmllbGRfdmFsdWUgPSAnJztcbiAgICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlICE9PSAnJykgdGhpcy52YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWVsZF9kYXRhO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlRmlsZUNoYW5nZTogZnVuY3Rpb24gaGFuZGxlRmlsZUNoYW5nZShlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoZS50YXJnZXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIF90aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgIF90aGlzLmVycm9yID0gJyc7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWVsZCcsIHRoaXMuZmllbGRfbmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmllbGRfbmF0aXZlX25hbWUnLCB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF9uYXRpdmVfbmFtZV9pbm5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpZWxkX25hdGl2ZV9uYW1lX2lubmVyJywgdGhpcy5maWVsZF9uYXRpdmVfbmFtZV9pbm5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3VwbG9hZF9maWxlJm5vbmNlPScgKyBzdG1fd3BjZnRvX25vbmNlc1snd3BjZnRvX3VwbG9hZF9maWxlJ107XG5cbiAgICAgICAgX3RoaXMuJGh0dHAucG9zdCh1cmwsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgIHIgPSByLmJvZHk7XG5cbiAgICAgICAgICBpZiAoci5lcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJHNldChfdGhpcywgJ2Vycm9yJywgci5lcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzZXQoX3RoaXMsICd2YWx1ZScsIHIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ3ZhbHVlJywge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZW5lcmF0ZUZpbGVOYW1lOiBmdW5jdGlvbiBnZW5lcmF0ZUZpbGVOYW1lKHVybCkge1xuICAgICAgdmFyIG5hbWUgPSAnJztcbiAgICAgIHZhciBuYW1lTGVuZ3RoID0gMzA7XG4gICAgICBpZiAodXJsLmxlbmd0aCA+IG5hbWVMZW5ndGgpIG5hbWUgPSAnLi4uJztcbiAgICAgIG5hbWUgKz0gdXJsLnN1YnN0cih1cmwubGVuZ3RoIC0gbmFtZUxlbmd0aCk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoX3ZhbHVlKTtcbiAgICAgIGlmIChfdmFsdWUucGF0aCA9PT0gJycgJiYgX3ZhbHVlLnVybCA9PT0gJycpIHN0cmluZ2lmaWVkID0gJyc7XG4gICAgICB0aGlzWydpbnB1dF92YWx1ZSddID0gc3RyaW5naWZpZWQ7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgc3RyaW5naWZpZWQpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])