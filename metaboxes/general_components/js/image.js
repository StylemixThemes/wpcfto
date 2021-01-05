(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_image', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  mixins: [wpcfto_get_image_mixin],
  data: function data() {
    return {
      value: '',
      media_modal: '',
      image_url: ''
    };
  },
  mounted: function mounted() {
    var vm = this;
    vm.value = vm.field_value;
  },
  template: "\n        <div class=\"wpcfto_generic_field\">\n        \n            <label v-html=\"field_label\"></label>\n        \n            <div class=\"wpcfto-image\">\n                <div class=\"image-field\" v-if=\"image_url\">\n                    <img v-bind:src=\"image_url\" v-if=\"wpcfto_checkURL(image_url)\"/>\n                    <div class=\"image-field-file\" v-else>\n                        <i class=\"fa fa-file-alt\"></i>\n                        {{image_url}}\n                    </div>\n                </div>\n                <div class=\"actions\">\n                    <div class=\"button\" v-if=\"!image_url\" @click=\"addImage()\">\n                        Add File\n                    </div>\n                    <div class=\"button\" v-if=\"image_url\" @click=\"removeImage()\">\n                        Remove File\n                    </div>\n                    <div class=\"button\" v-if=\"image_url\" @click=\"addImage()\">\n                        Replace File\n                    </div>\n                </div>\n            </div>\n           \n            <input type=\"hidden\"\n                   v-bind:name=\"field_name\"\n                   v-model=\"value\" />\n            \n           \n        </div>\n    ",
  methods: {
    addImage: function addImage() {
      this.media_modal = wp.media({
        frame: 'select',
        multiple: false,
        editing: true
      });
      this.media_modal.on('select', function (value) {
        var attachment = this.media_modal.state().get('selection').first().toJSON();
        this.value = attachment.id;
        this.image_url = attachment.url;
      }, this);
      this.media_modal.open();
    },
    removeImage: function removeImage() {
      this.value = this.image_url = '';
    }
  },
  watch: {
    value: function value(_value) {
      this.$emit('wpcfto-get-value', _value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmFiMGJlZGQuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJtaXhpbnMiLCJ3cGNmdG9fZ2V0X2ltYWdlX21peGluIiwiZGF0YSIsInZhbHVlIiwibWVkaWFfbW9kYWwiLCJpbWFnZV91cmwiLCJtb3VudGVkIiwidm0iLCJmaWVsZF92YWx1ZSIsInRlbXBsYXRlIiwibWV0aG9kcyIsImFkZEltYWdlIiwid3AiLCJtZWRpYSIsImZyYW1lIiwibXVsdGlwbGUiLCJlZGl0aW5nIiwib24iLCJhdHRhY2htZW50Iiwic3RhdGUiLCJnZXQiLCJmaXJzdCIsInRvSlNPTiIsImlkIiwidXJsIiwib3BlbiIsInJlbW92ZUltYWdlIiwid2F0Y2giLCJfdmFsdWUiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGNBQWQsRUFBOEI7QUFDNUJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHFCO0FBRTVCQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0Msc0JBQUQsQ0FGb0I7QUFHNUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsV0FBVyxFQUFFLEVBRlI7QUFHTEMsTUFBQUEsU0FBUyxFQUFFO0FBSE4sS0FBUDtBQUtELEdBVDJCO0FBVTVCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBQSxJQUFBQSxFQUFFLENBQUNKLEtBQUgsR0FBV0ksRUFBRSxDQUFDQyxXQUFkO0FBQ0QsR0FiMkI7QUFjNUJDLEVBQUFBLFFBQVEsRUFBRSxndUNBZGtCO0FBZTVCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsUUFBUSxFQUFFLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS1AsV0FBTCxHQUFtQlEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDMUJDLFFBQUFBLEtBQUssRUFBRSxRQURtQjtBQUUxQkMsUUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCQyxRQUFBQSxPQUFPLEVBQUU7QUFIaUIsT0FBVCxDQUFuQjtBQUtBLFdBQUtaLFdBQUwsQ0FBaUJhLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQVVkLEtBQVYsRUFBaUI7QUFDN0MsWUFBSWUsVUFBVSxHQUFHLEtBQUtkLFdBQUwsQ0FBaUJlLEtBQWpCLEdBQXlCQyxHQUF6QixDQUE2QixXQUE3QixFQUEwQ0MsS0FBMUMsR0FBa0RDLE1BQWxELEVBQWpCO0FBQ0EsYUFBS25CLEtBQUwsR0FBYWUsVUFBVSxDQUFDSyxFQUF4QjtBQUNBLGFBQUtsQixTQUFMLEdBQWlCYSxVQUFVLENBQUNNLEdBQTVCO0FBQ0QsT0FKRCxFQUlHLElBSkg7QUFLQSxXQUFLcEIsV0FBTCxDQUFpQnFCLElBQWpCO0FBQ0QsS0FiTTtBQWNQQyxJQUFBQSxXQUFXLEVBQUUsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxXQUFLdkIsS0FBTCxHQUFhLEtBQUtFLFNBQUwsR0FBaUIsRUFBOUI7QUFDRDtBQWhCTSxHQWZtQjtBQWlDNUJzQixFQUFBQSxLQUFLLEVBQUU7QUFDTHhCLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWV5QixNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBakNxQixDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9faW1hZ2UnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIG1peGluczogW3dwY2Z0b19nZXRfaW1hZ2VfbWl4aW5dLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBtZWRpYV9tb2RhbDogJycsXG4gICAgICBpbWFnZV91cmw6ICcnXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnZhbHVlID0gdm0uZmllbGRfdmFsdWU7XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRcXFwiPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8taW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZS1maWVsZFxcXCIgdi1pZj1cXFwiaW1hZ2VfdXJsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cXFwiaW1hZ2VfdXJsXFxcIiB2LWlmPVxcXCJ3cGNmdG9fY2hlY2tVUkwoaW1hZ2VfdXJsKVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UtZmllbGQtZmlsZVxcXCIgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLWFsdFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aW1hZ2VfdXJsfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25cXFwiIHYtaWY9XFxcIiFpbWFnZV91cmxcXFwiIEBjbGljaz1cXFwiYWRkSW1hZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEZpbGVcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uXFxcIiB2LWlmPVxcXCJpbWFnZV91cmxcXFwiIEBjbGljaz1cXFwicmVtb3ZlSW1hZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIEZpbGVcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uXFxcIiB2LWlmPVxcXCJpbWFnZV91cmxcXFwiIEBjbGljaz1cXFwiYWRkSW1hZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwbGFjZSBGaWxlXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbWV0aG9kczoge1xuICAgIGFkZEltYWdlOiBmdW5jdGlvbiBhZGRJbWFnZSgpIHtcbiAgICAgIHRoaXMubWVkaWFfbW9kYWwgPSB3cC5tZWRpYSh7XG4gICAgICAgIGZyYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICBlZGl0aW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVkaWFfbW9kYWwub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYXR0YWNobWVudCA9IHRoaXMubWVkaWFfbW9kYWwuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpLmZpcnN0KCkudG9KU09OKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBhdHRhY2htZW50LmlkO1xuICAgICAgICB0aGlzLmltYWdlX3VybCA9IGF0dGFjaG1lbnQudXJsO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLm1lZGlhX21vZGFsLm9wZW4oKTtcbiAgICB9LFxuICAgIHJlbW92ZUltYWdlOiBmdW5jdGlvbiByZW1vdmVJbWFnZSgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmltYWdlX3VybCA9ICcnO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])