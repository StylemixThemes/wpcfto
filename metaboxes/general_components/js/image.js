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
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_image\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-image\" :class=\"{ 'has-image' : image_url && wpcfto_checkURL(image_url) }\">\n                <input type=\"text\" v-model=\"image_url\" class=\"wpcfto-input-url\" placeholder=\"Enter image URL or click upload...\" />\n\n                <div class=\"image-field\" v-if=\"image_url && wpcfto_checkURL(image_url)\">\n\n                    <img v-bind:src=\"image_url\" v-if=\"wpcfto_checkURL(image_url)\"/>\n                    <!-- <div class=\"image-field-file\" v-else>\n                        <i class=\"fa fa-file-alt\"></i>\n                        {{image_url}}\n                    </div> -->\n                </div>\n                <div class=\"actions\">\n                    <div class=\"button\" v-if=\"!image_url || !wpcfto_checkURL(image_url)\" @click=\"addImage()\">\n                        <i class=\"fa fa-upload\"></i>Upload\n                    </div>\n                    <div class=\"button\" v-if=\"image_url && wpcfto_checkURL(image_url)\" @click=\"addImage()\">\n                    <i class=\"fa fa-upload\"></i>Replace\n                    </div>\n                    <div class=\"button button-remove\" v-if=\"image_url && wpcfto_checkURL(image_url)\" @click=\"removeImage()\">\n                        <i class=\"fa fa-times\"></i>Remove\n                    </div>\n                </div>\n            </div>\n\n\n            <input type=\"hidden\"\n                   v-bind:name=\"field_name\"\n                   v-model=\"value\" />\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTdhMzAzMzYuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJtaXhpbnMiLCJ3cGNmdG9fZ2V0X2ltYWdlX21peGluIiwiZGF0YSIsInZhbHVlIiwibWVkaWFfbW9kYWwiLCJpbWFnZV91cmwiLCJtb3VudGVkIiwidm0iLCJmaWVsZF92YWx1ZSIsInRlbXBsYXRlIiwibWV0aG9kcyIsImFkZEltYWdlIiwid3AiLCJtZWRpYSIsImZyYW1lIiwibXVsdGlwbGUiLCJlZGl0aW5nIiwib24iLCJhdHRhY2htZW50Iiwic3RhdGUiLCJnZXQiLCJmaXJzdCIsInRvSlNPTiIsImlkIiwidXJsIiwib3BlbiIsInJlbW92ZUltYWdlIiwid2F0Y2giLCJfdmFsdWUiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGNBQWQsRUFBOEI7QUFDNUJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRHFCO0FBRTVCQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0Msc0JBQUQsQ0FGb0I7QUFHNUJDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsV0FBVyxFQUFFLEVBRlI7QUFHTEMsTUFBQUEsU0FBUyxFQUFFO0FBSE4sS0FBUDtBQUtELEdBVDJCO0FBVTVCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBQSxJQUFBQSxFQUFFLENBQUNKLEtBQUgsR0FBV0ksRUFBRSxDQUFDQyxXQUFkO0FBQ0QsR0FiMkI7QUFjNUJDLEVBQUFBLFFBQVEsRUFBRSxxeERBZGtCO0FBZTVCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsUUFBUSxFQUFFLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS1AsV0FBTCxHQUFtQlEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDMUJDLFFBQUFBLEtBQUssRUFBRSxRQURtQjtBQUUxQkMsUUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCQyxRQUFBQSxPQUFPLEVBQUU7QUFIaUIsT0FBVCxDQUFuQjtBQUtBLFdBQUtaLFdBQUwsQ0FBaUJhLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQVVkLEtBQVYsRUFBaUI7QUFDN0MsWUFBSWUsVUFBVSxHQUFHLEtBQUtkLFdBQUwsQ0FBaUJlLEtBQWpCLEdBQXlCQyxHQUF6QixDQUE2QixXQUE3QixFQUEwQ0MsS0FBMUMsR0FBa0RDLE1BQWxELEVBQWpCO0FBQ0EsYUFBS25CLEtBQUwsR0FBYWUsVUFBVSxDQUFDSyxFQUF4QjtBQUNBLGFBQUtsQixTQUFMLEdBQWlCYSxVQUFVLENBQUNNLEdBQTVCO0FBQ0QsT0FKRCxFQUlHLElBSkg7QUFLQSxXQUFLcEIsV0FBTCxDQUFpQnFCLElBQWpCO0FBQ0QsS0FiTTtBQWNQQyxJQUFBQSxXQUFXLEVBQUUsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxXQUFLdkIsS0FBTCxHQUFhLEtBQUtFLFNBQUwsR0FBaUIsRUFBOUI7QUFDRDtBQWhCTSxHQWZtQjtBQWlDNUJzQixFQUFBQSxLQUFLLEVBQUU7QUFDTHhCLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWV5QixNQUFmLEVBQXVCO0FBQzVCLFdBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkQsTUFBL0I7QUFDRDtBQUhJO0FBakNxQixDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9faW1hZ2UnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIG1peGluczogW3dwY2Z0b19nZXRfaW1hZ2VfbWl4aW5dLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBtZWRpYV9tb2RhbDogJycsXG4gICAgICBpbWFnZV91cmw6ICcnXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnZhbHVlID0gdm0uZmllbGRfdmFsdWU7XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfaW1hZ2VcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWltYWdlXFxcIiA6Y2xhc3M9XFxcInsgJ2hhcy1pbWFnZScgOiBpbWFnZV91cmwgJiYgd3BjZnRvX2NoZWNrVVJMKGltYWdlX3VybCkgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJpbWFnZV91cmxcXFwiIGNsYXNzPVxcXCJ3cGNmdG8taW5wdXQtdXJsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgaW1hZ2UgVVJMIG9yIGNsaWNrIHVwbG9hZC4uLlxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UtZmllbGRcXFwiIHYtaWY9XFxcImltYWdlX3VybCAmJiB3cGNmdG9fY2hlY2tVUkwoaW1hZ2VfdXJsKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XFxcImltYWdlX3VybFxcXCIgdi1pZj1cXFwid3BjZnRvX2NoZWNrVVJMKGltYWdlX3VybClcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaW1hZ2UtZmllbGQtZmlsZVxcXCIgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLWFsdFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aW1hZ2VfdXJsfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uXFxcIiB2LWlmPVxcXCIhaW1hZ2VfdXJsIHx8ICF3cGNmdG9fY2hlY2tVUkwoaW1hZ2VfdXJsKVxcXCIgQGNsaWNrPVxcXCJhZGRJbWFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXBsb2FkXFxcIj48L2k+VXBsb2FkXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvblxcXCIgdi1pZj1cXFwiaW1hZ2VfdXJsICYmIHdwY2Z0b19jaGVja1VSTChpbWFnZV91cmwpXFxcIiBAY2xpY2s9XFxcImFkZEltYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVwbG9hZFxcXCI+PC9pPlJlcGxhY2VcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uIGJ1dHRvbi1yZW1vdmVcXFwiIHYtaWY9XFxcImltYWdlX3VybCAmJiB3cGNmdG9fY2hlY2tVUkwoaW1hZ2VfdXJsKVxcXCIgQGNsaWNrPVxcXCJyZW1vdmVJbWFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5SZW1vdmVcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXI+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRJbWFnZTogZnVuY3Rpb24gYWRkSW1hZ2UoKSB7XG4gICAgICB0aGlzLm1lZGlhX21vZGFsID0gd3AubWVkaWEoe1xuICAgICAgICBmcmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgZWRpdGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lZGlhX21vZGFsLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLm1lZGlhX21vZGFsLnN0YXRlKCkuZ2V0KCdzZWxlY3Rpb24nKS5maXJzdCgpLnRvSlNPTigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gYXR0YWNobWVudC5pZDtcbiAgICAgICAgdGhpcy5pbWFnZV91cmwgPSBhdHRhY2htZW50LnVybDtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdGhpcy5tZWRpYV9tb2RhbC5vcGVuKCk7XG4gICAgfSxcbiAgICByZW1vdmVJbWFnZTogZnVuY3Rpb24gcmVtb3ZlSW1hZ2UoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbWFnZV91cmwgPSAnJztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIF92YWx1ZSk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])