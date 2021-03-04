(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('v-select', VueSelect.VueSelect);
Vue.component('wpcfto_autocomplete', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
  data: function data() {
    return {
      ids: [],
      items: [],
      search: '',
      options: [],
      loading: true,
      itemHovered: null,
      value: '',
      limit: 0
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field_autocomplete\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto-field-content\">\n\n                <div class=\"wpcfto-autocomplete-search\" v-bind:class=\"{'loading': loading}\">\n                  \n                    <div class=\"v-select-search\" v-if=\"underLimit()\">\n\n                        <i class=\"fa fa-plus-circle\"></i>\n\n                        <v-select label=\"title\"\n                                  v-model=\"search\"\n                                  @input=\"setSelected($event)\"\n                                  :options=\"options\"\n                                  @search=\"onSearch($event)\">\n                        </v-select>\n\n                    </div>\n\n                    <ul class=\"wpcfto-autocomplete\" v-bind:class=\"{'limited' : !underLimit()}\">\n                        <li v-for=\"(item, index) in items\" v-if=\"typeof item !== 'string'\" :class=\"{ 'hovered' : itemHovered == index }\">\n                            <div class=\"item-wrapper\">\n                                <img v-bind:src=\"item.image\" v-if=\"item.image\" class=\"item-image\">\n                                <div class=\"item-data\">\n                                    <span v-html=\"item.title\" class=\"item-title\"></span>\n                                    <span v-html=\"item.excerpt\" class=\"item-excerpt\"></span>\n                                </div>\n                            </div>\n                            <i class=\"fa fa-trash-alt\" @click=\"removeItem(index)\" @mouseover=\"itemHovered = index\" @mouseleave=\"itemHovered = null\"></i>\n                        </li>\n                    </ul>\n\n                    <input type=\"hidden\"\n                           v-bind:name=\"field_name\"\n                           v-model=\"value\"/>\n\n                </div>\n            \n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
  created: function created() {
    if (this.field_value) {
      this.getPosts(stm_wpcfto_ajaxurl + '?action=wpcfto_search_posts&nonce=' + stm_wpcfto_nonces['wpcfto_search_posts'] + '&posts_per_page=-1&orderby=post__in&ids=' + this.field_value + '&post_types=' + this.fields.post_type.join(','), 'items');
    } else {
      this.clearItems();
      this.isLoading(false);
    }

    if (typeof this.field_data.limit !== 'undefined') {
      this.limit = this.field_data.limit;
    }
  },
  methods: {
    isLoading: function isLoading(_isLoading) {
      this.loading = _isLoading;
    },
    setSelected: function setSelected(value) {
      if (value) this.items.push(value);
      /*Reset options*/

      this.$set(this, 'options', []);
      this.$set(this, 'search', '');
    },
    clearItems: function clearItems() {
      var vm = this;
      var filtered = vm['items'].filter(function (el) {
        return el != null || el !== '';
      });
      vm.$set(vm, 'items', filtered);
    },
    underLimit: function underLimit() {
      return this.items.length < this.limit;
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
        vm.clearItems();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmU0MzJkNGIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlU2VsZWN0IiwicHJvcHMiLCJkYXRhIiwiaWRzIiwiaXRlbXMiLCJzZWFyY2giLCJvcHRpb25zIiwibG9hZGluZyIsIml0ZW1Ib3ZlcmVkIiwidmFsdWUiLCJsaW1pdCIsInRlbXBsYXRlIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiZ2V0UG9zdHMiLCJzdG1fd3BjZnRvX2FqYXh1cmwiLCJzdG1fd3BjZnRvX25vbmNlcyIsImZpZWxkcyIsInBvc3RfdHlwZSIsImpvaW4iLCJjbGVhckl0ZW1zIiwiaXNMb2FkaW5nIiwiZmllbGRfZGF0YSIsIm1ldGhvZHMiLCJfaXNMb2FkaW5nIiwic2V0U2VsZWN0ZWQiLCJwdXNoIiwiJHNldCIsInZtIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJlbCIsInVuZGVyTGltaXQiLCJsZW5ndGgiLCJvblNlYXJjaCIsIl90aGlzIiwiZXhjbHVkZSIsInBvc3RfdHlwZXMiLCJ1cmwiLCJ2YXJpYWJsZSIsImZpZWxkX25hbWUiLCIkaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJ1cGRhdGVJZHMiLCJmb3JFYWNoIiwia2V5IiwiaWQiLCIkZW1pdCIsImNhbGxGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsIml0ZW0iLCJtb2RlbCIsImNvbnRhaW5zT2JqZWN0Iiwib2JqIiwibGlzdCIsImkiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLFVBQWQsRUFBMEJDLFNBQVMsQ0FBQ0EsU0FBcEM7QUFDQUYsR0FBRyxDQUFDQyxTQUFKLENBQWMscUJBQWQsRUFBcUM7QUFDbkNFLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLFlBQW5F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QUFoQztBQUNELEtBbERNO0FBbURQZ0QsSUFBQUEsWUFBWSxFQUFFLFNBQVNBLFlBQVQsQ0FBc0JDLFlBQXRCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7QUFDN0RGLE1BQUFBLFlBQVksQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLENBQVo7QUFDRCxLQXJETTtBQXNEUEMsSUFBQUEsY0FBYyxFQUFFLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCQyxJQUE3QixFQUFtQztBQUNqRCxVQUFJQyxDQUFKOztBQUVBLFdBQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0QsSUFBSSxDQUFDeEIsTUFBckIsRUFBNkJ5QixDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDLFlBQUlELElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVEsSUFBUixNQUFrQkYsR0FBRyxDQUFDLElBQUQsQ0FBekIsRUFBaUM7QUFDL0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxLQUFQO0FBQ0QsS0FoRU07QUFpRVBHLElBQUFBLFVBQVUsRUFBRSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUNyQyxXQUFLeEQsS0FBTCxDQUFXeUQsTUFBWCxDQUFrQkQsS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDtBQW5FTSxHQTNCMEI7QUFnR25DRSxFQUFBQSxLQUFLLEVBQUU7QUFDTDFELElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLFdBQUswQyxTQUFMO0FBQ0Q7QUFISTtBQWhHNEIsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgndi1zZWxlY3QnLCBWdWVTZWxlY3QuVnVlU2VsZWN0KTtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19hdXRvY29tcGxldGUnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJywgJ2ZpZWxkX2RhdGEnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBbXSxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBpdGVtSG92ZXJlZDogbnVsbCxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGxpbWl0OiAwXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9hdXRvY29tcGxldGVcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvLWZpZWxkLWNvbnRlbnRcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlLXNlYXJjaFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2hcXFwiIHYtaWY9XFxcInVuZGVyTGltaXQoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXMtY2lyY2xlXFxcIj48L2k+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcInNldFNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIndwY2Z0by1hdXRvY29tcGxldGVcXFwiIHYtYmluZDpjbGFzcz1cXFwieydsaW1pdGVkJyA6ICF1bmRlckxpbWl0KCl9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcXFwiIHYtaWY9XFxcInR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJ1xcXCIgOmNsYXNzPVxcXCJ7ICdob3ZlcmVkJyA6IGl0ZW1Ib3ZlcmVkID09IGluZGV4IH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVxcXCJpdGVtLmltYWdlXFxcIiB2LWlmPVxcXCJpdGVtLmltYWdlXFxcIiBjbGFzcz1cXFwiaXRlbS1pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiaXRlbS50aXRsZVxcXCIgY2xhc3M9XFxcIml0ZW0tdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIml0ZW0uZXhjZXJwdFxcXCIgY2xhc3M9XFxcIml0ZW0tZXhjZXJwdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtYWx0XFxcIiBAY2xpY2s9XFxcInJlbW92ZUl0ZW0oaW5kZXgpXFxcIiBAbW91c2VvdmVyPVxcXCJpdGVtSG92ZXJlZCA9IGluZGV4XFxcIiBAbW91c2VsZWF2ZT1cXFwiaXRlbUhvdmVyZWQgPSBudWxsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIi8+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlKSB7XG4gICAgICB0aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJnBvc3RzX3Blcl9wYWdlPS0xJm9yZGVyYnk9cG9zdF9faW4maWRzPScgKyB0aGlzLmZpZWxkX3ZhbHVlICsgJyZwb3N0X3R5cGVzPScgKyB0aGlzLmZpZWxkcy5wb3N0X3R5cGUuam9pbignLCcpLCAnaXRlbXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhckl0ZW1zKCk7XG4gICAgICB0aGlzLmlzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX2RhdGEubGltaXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gdGhpcy5maWVsZF9kYXRhLmxpbWl0O1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gaXNMb2FkaW5nKF9pc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IF9pc0xvYWRpbmc7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkgdGhpcy5pdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgIC8qUmVzZXQgb3B0aW9ucyovXG5cbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnb3B0aW9ucycsIFtdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnc2VhcmNoJywgJycpO1xuICAgIH0sXG4gICAgY2xlYXJJdGVtczogZnVuY3Rpb24gY2xlYXJJdGVtcygpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2YXIgZmlsdGVyZWQgPSB2bVsnaXRlbXMnXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbCAhPSBudWxsIHx8IGVsICE9PSAnJztcbiAgICAgIH0pO1xuICAgICAgdm0uJHNldCh2bSwgJ2l0ZW1zJywgZmlsdGVyZWQpO1xuICAgIH0sXG4gICAgdW5kZXJMaW1pdDogZnVuY3Rpb24gdW5kZXJMaW1pdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA8IHRoaXMubGltaXQ7XG4gICAgfSxcbiAgICBvblNlYXJjaDogZnVuY3Rpb24gb25TZWFyY2goc2VhcmNoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXhjbHVkZSA9IF90aGlzLmlkcy5qb2luKCcsJyk7XG5cbiAgICAgIHZhciBwb3N0X3R5cGVzID0gX3RoaXMuZmllbGRzWydwb3N0X3R5cGUnXS5qb2luKCcsJyk7XG5cbiAgICAgIF90aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJmV4Y2x1ZGVfaWRzPScgKyBleGNsdWRlICsgJyZzPScgKyBzZWFyY2ggKyAnJnBvc3RfdHlwZXM9JyArIHBvc3RfdHlwZXMsICdvcHRpb25zJyk7XG4gICAgfSxcbiAgICBnZXRQb3N0czogZnVuY3Rpb24gZ2V0UG9zdHModXJsLCB2YXJpYWJsZSkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIHZtLmlzTG9hZGluZyh0cnVlKTtcbiAgICAgIC8qQWRkaW5nIGZpZWxkIElEIHRvIGZpbHRlcnMgdGhlbiovXG5cbiAgICAgIHVybCArPSAnJm5hbWU9JyArIHZtLmZpZWxkX25hbWU7XG4gICAgICB0aGlzLiRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHZtW3ZhcmlhYmxlXSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgIHZtLmNsZWFySXRlbXMoKTtcbiAgICAgICAgdm0uaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlSWRzOiBmdW5jdGlvbiB1cGRhdGVJZHMoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaWRzID0gW107XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdm0uaWRzLnB1c2godmFsdWUuaWQpO1xuICAgICAgfSk7XG4gICAgICB2bS4kc2V0KHRoaXMsICd2YWx1ZScsIHZtLmlkcyk7XG4gICAgICB2bS4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZtLmlkcyk7XG4gICAgfSxcbiAgICBjYWxsRnVuY3Rpb246IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihmdW5jdGlvbk5hbWUsIGl0ZW0sIG1vZGVsKSB7XG4gICAgICBmdW5jdGlvbk5hbWUoaXRlbSwgbW9kZWwpO1xuICAgIH0sXG4gICAgY29udGFpbnNPYmplY3Q6IGZ1bmN0aW9uIGNvbnRhaW5zT2JqZWN0KG9iaiwgbGlzdCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0W2ldWydpZCddID09PSBvYmpbJ2lkJ10pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKGluZGV4KSB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGl0ZW1zOiBmdW5jdGlvbiBpdGVtcygpIHtcbiAgICAgIHRoaXMudXBkYXRlSWRzKCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])