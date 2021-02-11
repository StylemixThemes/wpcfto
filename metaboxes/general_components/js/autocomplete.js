(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('v-select', VueSelect.VueSelect);
Vue.component('wpcfto_autocomplete', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      ids: [],
      items: [],
      search: '',
      options: [],
      loading: true,
      itemHovered: null,
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_autocomplete\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n\n                <div class=\"wpcfto-autocomplete-search\" v-bind:class=\"{'loading': loading}\">\n\n                    <div class=\"v-select-search\">\n\n                        <i class=\"fa fa-plus-circle\"></i>\n\n                        <v-select label=\"title\"\n                                  v-model=\"search\"\n                                  @input=\"setSelected($event)\"\n                                  :options=\"options\"\n                                  @search=\"onSearch($event)\">\n                        </v-select>\n\n                    </div>\n\n                    <ul class=\"wpcfto-autocomplete\">\n                        <li v-for=\"(item, index) in items\" v-if=\"typeof item !== 'string'\" :class=\"{ 'hovered' : itemHovered == index }\">\n                            <div class=\"item-wrapper\">\n                                <img v-bind:src=\"item.image\" v-if=\"item.image\" class=\"item-image\">\n                                <div class=\"item-data\">\n                                    <span v-html=\"item.title\" class=\"item-title\"></span>\n                                    <span v-html=\"item.excerpt\" class=\"item-excerpt\"></span>\n                                </div>\n                            </div>\n                            <i class=\"fa fa-trash-alt\" @click=\"removeItem(index)\" @mouseover=\"itemHovered = index\" @mouseleave=\"itemHovered = null\"></i>\n                        </li>\n                    </ul>\n\n                    <input type=\"hidden\"\n                           v-bind:name=\"field_name\"\n                           v-model=\"value\"/>\n\n                </div>\n            \n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  created: function created() {
    if (this.field_value) {
      this.getPosts(stm_wpcfto_ajaxurl + '?action=wpcfto_search_posts&nonce=' + stm_wpcfto_nonces['wpcfto_search_posts'] + '&posts_per_page=-1&orderby=post__in&ids=' + this.field_value + '&post_types=' + this.fields.post_type.join(','), 'items');
    } else {
      this.isLoading(false);
    }
  },
  methods: {
    isLoading: function isLoading(_isLoading) {
      this.loading = _isLoading;
    },
    setSelected: function setSelected(value) {
      this.items.push(value);
      /*Reset options*/

      this.$set(this, 'options', []);
      this.$set(this, 'search', '');
    },
    onSearch: function onSearch(search) {
      var _this = this;

      var exclude = _this.ids.join(',');

      var post_types = _this.fields['post_type'].join(',');

      _this.getPosts(stm_wpcfto_ajaxurl + '?action=wpcfto_search_posts&nonce=' + stm_wpcfto_nonces['wpcfto_search_posts'] + '&exclude_ids=' + exclude + '&s=' + search + '&post_types=' + post_types, 'options');
    },
    getPosts: function getPosts(url, variable) {
      var vm = this;
      vm.isLoading(true);
      /*Adding field ID to filters then*/

      url += '&name=' + vm.field_name;
      this.$http.get(url).then(function (response) {
        vm[variable] = response.body;
        vm.isLoading(false);
      });
    },
    updateIds: function updateIds() {
      var vm = this;
      vm.ids = [];
      this.items.forEach(function (value, key) {
        vm.ids.push(value.id);
      });
      vm.$set(this, 'value', vm.ids);
      vm.$emit('wpcfto-get-value', vm.ids);
    },
    callFunction: function callFunction(functionName, item, model) {
      functionName(item, model);
    },
    containsObject: function containsObject(obj, list) {
      var i;

      for (i = 0; i < list.length; i++) {
        if (list[i]['id'] === obj['id']) {
          return true;
        }
      }

      return false;
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
    }
  },
  watch: {
    items: function items() {
      this.updateIds();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzM0MDY4ZS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJWdWVTZWxlY3QiLCJwcm9wcyIsImRhdGEiLCJpZHMiLCJpdGVtcyIsInNlYXJjaCIsIm9wdGlvbnMiLCJsb2FkaW5nIiwiaXRlbUhvdmVyZWQiLCJ2YWx1ZSIsInRlbXBsYXRlIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiZ2V0UG9zdHMiLCJzdG1fd3BjZnRvX2FqYXh1cmwiLCJzdG1fd3BjZnRvX25vbmNlcyIsImZpZWxkcyIsInBvc3RfdHlwZSIsImpvaW4iLCJpc0xvYWRpbmciLCJtZXRob2RzIiwiX2lzTG9hZGluZyIsInNldFNlbGVjdGVkIiwicHVzaCIsIiRzZXQiLCJvblNlYXJjaCIsIl90aGlzIiwiZXhjbHVkZSIsInBvc3RfdHlwZXMiLCJ1cmwiLCJ2YXJpYWJsZSIsInZtIiwiZmllbGRfbmFtZSIsIiRodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsInVwZGF0ZUlkcyIsImZvckVhY2giLCJrZXkiLCJpZCIsIiRlbWl0IiwiY2FsbEZ1bmN0aW9uIiwiZnVuY3Rpb25OYW1lIiwiaXRlbSIsIm1vZGVsIiwiY29udGFpbnNPYmplY3QiLCJvYmoiLCJsaXN0IiwiaSIsImxlbmd0aCIsInJlbW92ZUl0ZW0iLCJpbmRleCIsInNwbGljZSIsIndhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsVUFBZCxFQUEwQkMsU0FBUyxDQUFDQSxTQUFwQztBQUNBRixHQUFHLENBQUNDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQztBQUNuQ0UsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FENEI7QUFFbkNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsR0FBRyxFQUFFLEVBREE7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cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblZ1ZS5jb21wb25lbnQoJ3Ytc2VsZWN0JywgVnVlU2VsZWN0LlZ1ZVNlbGVjdCk7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fYXV0b2NvbXBsZXRlJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZHM6IFtdLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGl0ZW1Ib3ZlcmVkOiBudWxsLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9hdXRvY29tcGxldGVcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlLXNlYXJjaFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2hcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzLWNpcmNsZVxcXCI+PC9pPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwidGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJzZXRTZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlYXJjaD1cXFwib25TZWFyY2goJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcXFwiIHYtaWY9XFxcInR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJ1xcXCIgOmNsYXNzPVxcXCJ7ICdob3ZlcmVkJyA6IGl0ZW1Ib3ZlcmVkID09IGluZGV4IH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVxcXCJpdGVtLmltYWdlXFxcIiB2LWlmPVxcXCJpdGVtLmltYWdlXFxcIiBjbGFzcz1cXFwiaXRlbS1pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiaXRlbS50aXRsZVxcXCIgY2xhc3M9XFxcIml0ZW0tdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIml0ZW0uZXhjZXJwdFxcXCIgY2xhc3M9XFxcIml0ZW0tZXhjZXJwdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtYWx0XFxcIiBAY2xpY2s9XFxcInJlbW92ZUl0ZW0oaW5kZXgpXFxcIiBAbW91c2VvdmVyPVxcXCJpdGVtSG92ZXJlZCA9IGluZGV4XFxcIiBAbW91c2VsZWF2ZT1cXFwiaXRlbUhvdmVyZWQgPSBudWxsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIi8+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlKSB7XG4gICAgICB0aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJnBvc3RzX3Blcl9wYWdlPS0xJm9yZGVyYnk9cG9zdF9faW4maWRzPScgKyB0aGlzLmZpZWxkX3ZhbHVlICsgJyZwb3N0X3R5cGVzPScgKyB0aGlzLmZpZWxkcy5wb3N0X3R5cGUuam9pbignLCcpLCAnaXRlbXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gaXNMb2FkaW5nKF9pc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IF9pc0xvYWRpbmc7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAvKlJlc2V0IG9wdGlvbnMqL1xuXG4gICAgICB0aGlzLiRzZXQodGhpcywgJ29wdGlvbnMnLCBbXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ3NlYXJjaCcsICcnKTtcbiAgICB9LFxuICAgIG9uU2VhcmNoOiBmdW5jdGlvbiBvblNlYXJjaChzZWFyY2gpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBleGNsdWRlID0gX3RoaXMuaWRzLmpvaW4oJywnKTtcblxuICAgICAgdmFyIHBvc3RfdHlwZXMgPSBfdGhpcy5maWVsZHNbJ3Bvc3RfdHlwZSddLmpvaW4oJywnKTtcblxuICAgICAgX3RoaXMuZ2V0UG9zdHMoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NlYXJjaF9wb3N0cyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3dwY2Z0b19zZWFyY2hfcG9zdHMnXSArICcmZXhjbHVkZV9pZHM9JyArIGV4Y2x1ZGUgKyAnJnM9JyArIHNlYXJjaCArICcmcG9zdF90eXBlcz0nICsgcG9zdF90eXBlcywgJ29wdGlvbnMnKTtcbiAgICB9LFxuICAgIGdldFBvc3RzOiBmdW5jdGlvbiBnZXRQb3N0cyh1cmwsIHZhcmlhYmxlKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaXNMb2FkaW5nKHRydWUpO1xuICAgICAgLypBZGRpbmcgZmllbGQgSUQgdG8gZmlsdGVycyB0aGVuKi9cblxuICAgICAgdXJsICs9ICcmbmFtZT0nICsgdm0uZmllbGRfbmFtZTtcbiAgICAgIHRoaXMuJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdm1bdmFyaWFibGVdID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgdm0uaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlSWRzOiBmdW5jdGlvbiB1cGRhdGVJZHMoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaWRzID0gW107XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdm0uaWRzLnB1c2godmFsdWUuaWQpO1xuICAgICAgfSk7XG4gICAgICB2bS4kc2V0KHRoaXMsICd2YWx1ZScsIHZtLmlkcyk7XG4gICAgICB2bS4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZtLmlkcyk7XG4gICAgfSxcbiAgICBjYWxsRnVuY3Rpb246IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihmdW5jdGlvbk5hbWUsIGl0ZW0sIG1vZGVsKSB7XG4gICAgICBmdW5jdGlvbk5hbWUoaXRlbSwgbW9kZWwpO1xuICAgIH0sXG4gICAgY29udGFpbnNPYmplY3Q6IGZ1bmN0aW9uIGNvbnRhaW5zT2JqZWN0KG9iaiwgbGlzdCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0W2ldWydpZCddID09PSBvYmpbJ2lkJ10pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKGluZGV4KSB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGl0ZW1zOiBmdW5jdGlvbiBpdGVtcygpIHtcbiAgICAgIHRoaXMudXBkYXRlSWRzKCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])