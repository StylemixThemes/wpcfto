(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_file', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data', 'field_native_name', 'field_native_name_inner'],
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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__file\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n                <label class=\"file-select\" v-if=\"!value.path\">\n    \n                    <div class=\"select-button\" v-bind:class=\"{'uploading' : uploading}\">\n                        <span v-if=\"!uploading\">\n                            <i class=\"fa fa-paperclip\"></i>\n                            {{field_data.load_labels.label}}\n                        </span>\n                        <span v-html=\"field_data.load_labels.loading\" v-else></span>\n                    </div>\n    \n                    <input type=\"file\" :accept=\"field_data['accept'].join(',')\" @change=\"handleFileChange\" />\n                </label>\n    \n                <div class=\"field_label_error\" v-if=\"error\" v-html=\"error\"></div>\n    \n                <div class=\"field_label__file\" v-if=\"value.url\">\n                    <a v-bind:href=\"value.url\" target=\"_blank\">\n                        {{generateFileName(value['url'])}}\n                        <i class=\"fa fa-times\" @click.prevent=\"deleteFile()\"></i>\n                    </a>\n    \n                </div>\n  \n                <input type=\"hidden\"\n                    v-bind:name=\"field_name\"\n                    v-bind:placeholder=\"field_label\"\n                    v-bind:id=\"field_id\"\n                    v-model=\"input_value\"\n                />\n            \n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\" :field_data=\"field_data\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTE5MzY4MTguanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiZXJyb3IiLCJ2YWx1ZSIsIm5hbWUiLCJ1cmwiLCJwYXRoIiwiaW5wdXRfdmFsdWUiLCJ1cGxvYWRpbmciLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiLCJmaWVsZF92YWx1ZSIsIkpTT04iLCJwYXJzZSIsImZpZWxkX2RhdGEiLCJtZXRob2RzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJfdGhpcyIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZF9uYW1lIiwiZmllbGRfbmF0aXZlX25hbWUiLCJmaWVsZF9uYXRpdmVfbmFtZV9pbm5lciIsInN0bV93cGNmdG9fYWpheHVybCIsInN0bV93cGNmdG9fbm9uY2VzIiwiJGh0dHAiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwiYm9keSIsIiRzZXQiLCJkZWxldGVGaWxlIiwiZ2VuZXJhdGVGaWxlTmFtZSIsIm5hbWVMZW5ndGgiLCJzdWJzdHIiLCJ3YXRjaCIsIl92YWx1ZSIsInN0cmluZ2lmaWVkIiwic3RyaW5naWZ5IiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxhQUFkLEVBQTZCO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSxFQUFpRixtQkFBakYsRUFBc0cseUJBQXRHLENBRG9CO0FBRTNCQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xBLE1BQUFBLElBQUksRUFBRSxFQUREO0FBRUxDLE1BQUFBLEtBQUssRUFBRSxFQUZGO0FBR0xDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUUs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ZW50KCd3cGNmdG9fZmlsZScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfZGF0YScsICdmaWVsZF9uYXRpdmVfbmFtZScsICdmaWVsZF9uYXRpdmVfbmFtZV9pbm5lciddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiAnJyxcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBwYXRoOiAnJ1xuICAgICAgfSxcbiAgICAgIGlucHV0X3ZhbHVlOiAnJyxcbiAgICAgIHVwbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19maWxlXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1maWVsZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmaWxlLXNlbGVjdFxcXCIgdi1pZj1cXFwiIXZhbHVlLnBhdGhcXFwiPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1idXR0b25cXFwiIHYtYmluZDpjbGFzcz1cXFwieyd1cGxvYWRpbmcnIDogdXBsb2FkaW5nfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwiIXVwbG9hZGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wYXBlcmNsaXBcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWVsZF9kYXRhLmxvYWRfbGFiZWxzLmxhYmVsfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVxcXCJmaWVsZF9kYXRhLmxvYWRfbGFiZWxzLmxvYWRpbmdcXFwiIHYtZWxzZT48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgOmFjY2VwdD1cXFwiZmllbGRfZGF0YVsnYWNjZXB0J10uam9pbignLCcpXFxcIiBAY2hhbmdlPVxcXCJoYW5kbGVGaWxlQ2hhbmdlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRfbGFiZWxfZXJyb3JcXFwiIHYtaWY9XFxcImVycm9yXFxcIiB2LWh0bWw9XFxcImVycm9yXFxcIj48L2Rpdj5cXG4gICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkX2xhYmVsX19maWxlXFxcIiB2LWlmPVxcXCJ2YWx1ZS51cmxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgdi1iaW5kOmhyZWY9XFxcInZhbHVlLnVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2VuZXJhdGVGaWxlTmFtZSh2YWx1ZVsndXJsJ10pfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJkZWxldGVGaWxlKClcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZDpwbGFjZWhvbGRlcj1cXFwiZmllbGRfbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6aWQ9XFxcImZpZWxkX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiaW5wdXRfdmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfZGF0YT1cXFwiZmllbGRfZGF0YVxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZS51cmwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZmllbGRfdmFsdWUudXJsID09PSAnJykgdGhpcy5maWVsZF92YWx1ZSA9ICcnO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlLnBhdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZmllbGRfdmFsdWUucGF0aCA9PT0gJycpIHRoaXMuZmllbGRfdmFsdWUgPSAnJztcbiAgICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlICE9PSAnJykgdGhpcy52YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWVsZF9kYXRhO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlRmlsZUNoYW5nZTogZnVuY3Rpb24gaGFuZGxlRmlsZUNoYW5nZShlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoZS50YXJnZXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIF90aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgIF90aGlzLmVycm9yID0gJyc7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWVsZCcsIHRoaXMuZmllbGRfbmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmllbGRfbmF0aXZlX25hbWUnLCB0aGlzLmZpZWxkX25hdGl2ZV9uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF9uYXRpdmVfbmFtZV9pbm5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpZWxkX25hdGl2ZV9uYW1lX2lubmVyJywgdGhpcy5maWVsZF9uYXRpdmVfbmFtZV9pbm5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3VwbG9hZF9maWxlJm5vbmNlPScgKyBzdG1fd3BjZnRvX25vbmNlc1snd3BjZnRvX3VwbG9hZF9maWxlJ107XG5cbiAgICAgICAgX3RoaXMuJGh0dHAucG9zdCh1cmwsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgIHIgPSByLmJvZHk7XG5cbiAgICAgICAgICBpZiAoci5lcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJHNldChfdGhpcywgJ2Vycm9yJywgci5lcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzZXQoX3RoaXMsICd2YWx1ZScsIHIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ3ZhbHVlJywge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZW5lcmF0ZUZpbGVOYW1lOiBmdW5jdGlvbiBnZW5lcmF0ZUZpbGVOYW1lKHVybCkge1xuICAgICAgdmFyIG5hbWUgPSAnJztcbiAgICAgIHZhciBuYW1lTGVuZ3RoID0gMzA7XG4gICAgICBpZiAodXJsLmxlbmd0aCA+IG5hbWVMZW5ndGgpIG5hbWUgPSAnLi4uJztcbiAgICAgIG5hbWUgKz0gdXJsLnN1YnN0cih1cmwubGVuZ3RoIC0gbmFtZUxlbmd0aCk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoX3ZhbHVlKTtcbiAgICAgIGlmIChfdmFsdWUucGF0aCA9PT0gJycgJiYgX3ZhbHVlLnVybCA9PT0gJycpIHN0cmluZ2lmaWVkID0gJyc7XG4gICAgICB0aGlzWydpbnB1dF92YWx1ZSddID0gc3RyaW5naWZpZWQ7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgc3RyaW5naWZpZWQpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])