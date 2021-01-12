(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_gallery', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      gallery: []
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_gallery\" v-bind:class=\"field_id\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n\t\t\t<div class=\"wpcfto_gallery\">\n\n\t\t\t\t<draggable class=\"wpcfto_gallery__items\"\n\t\t\t\t\t\t   :list=\"gallery\"\n\t\t\t\t\t\t   group=\"gallery\">\n\n\t\t\t\t\t<div class=\"wpcfto_gallery__item\"\n\t\t\t\t\t\t v-for=\"(image, image_key) in gallery\"\n\t\t\t\t\t\t :key=\"image_key\">\n\n\t\t\t\t\t\t <i class=\"wpcfto_gallery__item_delete fa fa-times\" @click=\"gallery.splice(image_key, 1)\"></i>\n\n\t\t\t\t\t  <img v-bind:src=\"image.url\" />\n\n\t\t\t\t\t</div>\n\n\t\t\t\t </draggable>\n\n\t\t\t\t<div class=\"actions\">\n                    <div class=\"button\" @click=\"addImages()\">Add/Edit Gallery</div>\n                    <div class=\"button button-remove\" v-if=\"gallery.length > 0\" @click=\"gallery = []\">Clear Gallery</div>\n                </div>\n\n\t\t\t</div>\n\n\t\t\t<wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  mounted: function mounted() {
    this.gallery = this.field_value;
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) this.gallery = JSON.parse(this.field_value);
  },
  methods: {
    addImages: function addImages() {
      var _this = this;

      _this.media_modal = wp.media({
        frame: 'select',
        multiple: true,
        editing: true,
        library: {
          type: ['image']
        }
      });

      _this.media_modal.on('select', function () {
        var attachments = _this.media_modal.state().get('selection').toJSON();

        attachments.forEach(function (attachment) {
          _this.gallery.push({
            id: attachment.id,
            url: attachment.sizes.thumbnail.url
          });
        });
      }, _this);

      _this.media_modal.open();
    }
  },
  watch: {
    gallery: {
      deep: true,
      handler: function handler(gallery) {
        var gallery_value = [];
        gallery.forEach(function (gallery_item) {
          gallery_value.push(gallery_item.id);
        });
        this.$emit('wpcfto-get-value', gallery_value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZWRjZmQ5NDguanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiZ2FsbGVyeSIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiV3BjZnRvSXNKc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsImFkZEltYWdlcyIsIl90aGlzIiwibWVkaWFfbW9kYWwiLCJ3cCIsIm1lZGlhIiwiZnJhbWUiLCJtdWx0aXBsZSIsImVkaXRpbmciLCJsaWJyYXJ5IiwidHlwZSIsIm9uIiwiYXR0YWNobWVudHMiLCJzdGF0ZSIsImdldCIsInRvSlNPTiIsImZvckVhY2giLCJhdHRhY2htZW50IiwicHVzaCIsImlkIiwidXJsIiwic2l6ZXMiLCJ0aHVtYm5haWwiLCJvcGVuIiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsImdhbGxlcnlfdmFsdWUiLCJnYWxsZXJ5X2l0ZW0iLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0FBQzlCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUR1QjtBQUU5QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQUFQO0FBR0QsR0FONkI7QUFPOUJDLEVBQUFBLFFBQVEsRUFBRSw0bUNBUG9CO0FBUTlCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRixPQUFMLEdBQWUsS0FBS0csV0FBcEI7QUFDQSxRQUFJLE9BQU8sS0FBS0EsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Msa0JBQWtCLENBQUMsS0FBS0QsV0FBTixDQUE5RCxFQUFrRixLQUFLSCxPQUFMLEdBQWVLLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtILFdBQWhCLENBQWY7QUFDbkYsR0FYNkI7QUFZOUJJLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxTQUFTLEVBQUUsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixVQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFFQUEsTUFBQUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUMzQkMsUUFBQUEsS0FBSyxFQUFFLFFBRG9CO0FBRTNCQyxRQUFBQSxRQUFRLEVBQUUsSUFGaUI7QUFHM0JDLFFBQUFBLE9BQU8sRUFBRSxJQUhrQjtBQUkzQkMsUUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFVBQUFBLElBQUksRUFBRSxDQUFDLE9BQUQ7QUFEQztBQUprQixPQUFULENBQXBCOztBQVNBUixNQUFBQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JRLEVBQWxCLENBQXFCLFFBQXJCLEVBQStCLFlBQVk7QUFDekMsWUFBSUMsV0FBVyxHQUFHVixLQUFLLENBQUNDLFdBQU4sQ0FBa0JVLEtBQWxCLEdBQTBCQyxHQUExQixDQUE4QixXQUE5QixFQUEyQ0MsTUFBM0MsRUFBbEI7O0FBRUFILFFBQUFBLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDZixVQUFBQSxLQUFLLENBQUNULE9BQU4sQ0FBY3lCLElBQWQsQ0FBbUI7QUFDakJDLFlBQUFBLEVBQUUsRUFBRUYsVUFBVSxDQUFDRSxFQURFO0FBRWpCQyxZQUFBQSxHQUFHLEVBQUVILFVBQVUsQ0FBQ0ksS0FBWCxDQUFpQkMsU0FBakIsQ0FBMkJGO0FBRmYsV0FBbkI7QUFJRCxTQUxEO0FBTUQsT0FURCxFQVNHbEIsS0FUSDs7QUFXQUEsTUFBQUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCb0IsSUFBbEI7QUFDRDtBQXpCTSxHQVpxQjtBQXVDOUJDLEVBQUFBLEtBQUssRUFBRTtBQUNML0IsSUFBQUEsT0FBTyxFQUFFO0FBQ1BnQyxNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQmpDLE9BQWpCLEVBQTBCO0FBQ2pDLFlBQUlrQyxhQUFhLEdBQUcsRUFBcEI7QUFDQWxDLFFBQUFBLE9BQU8sQ0FBQ3VCLE9BQVIsQ0FBZ0IsVUFBVVksWUFBVixFQUF3QjtBQUN0Q0QsVUFBQUEsYUFBYSxDQUFDVCxJQUFkLENBQW1CVSxZQUFZLENBQUNULEVBQWhDO0FBQ0QsU0FGRDtBQUdBLGFBQUtVLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkYsYUFBL0I7QUFDRDtBQVJNO0FBREo7QUF2Q3VCLENBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19nYWxsZXJ5Jywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnYWxsZXJ5OiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfZ2FsbGVyeVxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCI+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlIDpmaWVsZHM9XFxcImZpZWxkc1xcXCIgOmZpZWxkX2xhYmVsPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZT5cXG5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2FsbGVyeVxcXCI+XFxuXFxuXFx0XFx0XFx0XFx0PGRyYWdnYWJsZSBjbGFzcz1cXFwid3BjZnRvX2dhbGxlcnlfX2l0ZW1zXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgIDpsaXN0PVxcXCJnYWxsZXJ5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgIGdyb3VwPVxcXCJnYWxsZXJ5XFxcIj5cXG5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2FsbGVyeV9faXRlbVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgdi1mb3I9XFxcIihpbWFnZSwgaW1hZ2Vfa2V5KSBpbiBnYWxsZXJ5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCA6a2V5PVxcXCJpbWFnZV9rZXlcXFwiPlxcblxcblxcdFxcdFxcdFxcdFxcdFxcdCA8aSBjbGFzcz1cXFwid3BjZnRvX2dhbGxlcnlfX2l0ZW1fZGVsZXRlIGZhIGZhLXRpbWVzXFxcIiBAY2xpY2s9XFxcImdhbGxlcnkuc3BsaWNlKGltYWdlX2tleSwgMSlcXFwiPjwvaT5cXG5cXG5cXHRcXHRcXHRcXHRcXHQgIDxpbWcgdi1iaW5kOnNyYz1cXFwiaW1hZ2UudXJsXFxcIiAvPlxcblxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcblxcdFxcdFxcdFxcdCA8L2RyYWdnYWJsZT5cXG5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhY3Rpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvblxcXCIgQGNsaWNrPVxcXCJhZGRJbWFnZXMoKVxcXCI+QWRkL0VkaXQgR2FsbGVyeTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uIGJ1dHRvbi1yZW1vdmVcXFwiIHYtaWY9XFxcImdhbGxlcnkubGVuZ3RoID4gMFxcXCIgQGNsaWNrPVxcXCJnYWxsZXJ5ID0gW11cXFwiPkNsZWFyIEdhbGxlcnk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFx0XFx0XFx0PC9kaXY+XFxuXFxuXFx0XFx0XFx0PHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXI+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5nYWxsZXJ5ID0gdGhpcy5maWVsZF92YWx1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRfdmFsdWUgPT09ICdzdHJpbmcnICYmIFdwY2Z0b0lzSnNvblN0cmluZyh0aGlzLmZpZWxkX3ZhbHVlKSkgdGhpcy5nYWxsZXJ5ID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZEltYWdlczogZnVuY3Rpb24gYWRkSW1hZ2VzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgX3RoaXMubWVkaWFfbW9kYWwgPSB3cC5tZWRpYSh7XG4gICAgICAgIGZyYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgIGVkaXRpbmc6IHRydWUsXG4gICAgICAgIGxpYnJhcnk6IHtcbiAgICAgICAgICB0eXBlOiBbJ2ltYWdlJ11cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm1lZGlhX21vZGFsLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhdHRhY2htZW50cyA9IF90aGlzLm1lZGlhX21vZGFsLnN0YXRlKCkuZ2V0KCdzZWxlY3Rpb24nKS50b0pTT04oKTtcblxuICAgICAgICBhdHRhY2htZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRhY2htZW50KSB7XG4gICAgICAgICAgX3RoaXMuZ2FsbGVyeS5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBhdHRhY2htZW50LmlkLFxuICAgICAgICAgICAgdXJsOiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbC51cmxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBfdGhpcyk7XG5cbiAgICAgIF90aGlzLm1lZGlhX21vZGFsLm9wZW4oKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZ2FsbGVyeToge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoZ2FsbGVyeSkge1xuICAgICAgICB2YXIgZ2FsbGVyeV92YWx1ZSA9IFtdO1xuICAgICAgICBnYWxsZXJ5LmZvckVhY2goZnVuY3Rpb24gKGdhbGxlcnlfaXRlbSkge1xuICAgICAgICAgIGdhbGxlcnlfdmFsdWUucHVzaChnYWxsZXJ5X2l0ZW0uaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGdhbGxlcnlfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])