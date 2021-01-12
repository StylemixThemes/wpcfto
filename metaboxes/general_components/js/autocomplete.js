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
  template: "\n        <div class=\"wpcfto_generic_field__autocomplete_wrapper\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto_generic_field wpcfto_generic_field__autocomplete\">\n\n                <div class=\"wpcfto-autocomplete-search\" v-bind:class=\"{'loading': loading}\">\n\n                    <div class=\"v-select-search\">\n\n                        <i class=\"fa fa-plus-circle\"></i>\n\n                        <v-select label=\"title\"\n                                  v-model=\"search\"\n                                  @input=\"setSelected($event)\"\n                                  :options=\"options\"\n                                  @search=\"onSearch($event)\">\n                        </v-select>\n\n<!--                        <span class=\"v-select-search-label\">-->\n<!--                            Add {{field_label}}-->\n<!--                        </span>-->\n\n                    </div>\n\n                    <ul class=\"wpcfto-autocomplete\">\n                        <li v-for=\"(item, index) in items\" v-if=\"typeof item !== 'string'\" :class=\"{ 'hovered' : itemHovered == index }\">\n                            <div class=\"item-wrapper\">\n                                <img v-bind:src=\"item.image\" v-if=\"item.image\" class=\"item-image\">\n                                <div class=\"item-data\">\n                                    <span v-html=\"item.title\" class=\"item-title\"></span>\n                                    <span v-html=\"item.excerpt\" class=\"item-excerpt\"></span>\n                                </div>\n                            </div>\n                            <i class=\"fa fa-trash-alt\" @click=\"removeItem(index)\" @mouseover=\"itemHovered = index\" @mouseleave=\"itemHovered = null\"></i>\n                        </li>\n                    </ul>\n\n\n                    <input type=\"hidden\"\n                           v-bind:name=\"field_name\"\n                           v-model=\"value\"/>\n\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzU0ZjMyNmQuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlU2VsZWN0IiwicHJvcHMiLCJkYXRhIiwiaWRzIiwiaXRlbXMiLCJzZWFyY2giLCJvcHRpb25zIiwibG9hZGluZyIsIml0ZW1Ib3ZlcmVkIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsImNyZWF0ZWQiLCJmaWVsZF92YWx1ZSIsImdldFBvc3RzIiwic3RtX3dwY2Z0b19hamF4dXJsIiwic3RtX3dwY2Z0b19ub25jZXMiLCJmaWVsZHMiLCJwb3N0X3R5cGUiLCJqb2luIiwiaXNMb2FkaW5nIiwibWV0aG9kcyIsIl9pc0xvYWRpbmciLCJzZXRTZWxlY3RlZCIsInB1c2giLCIkc2V0Iiwib25TZWFyY2giLCJfdGhpcyIsImV4Y2x1ZGUiLCJwb3N0X3R5cGVzIiwidXJsIiwidmFyaWFibGUiLCJ2bSIsImZpZWxkX25hbWUiLCIkaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJ1cGRhdGVJZHMiLCJmb3JFYWNoIiwia2V5IiwiaWQiLCIkZW1pdCIsImNhbGxGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsIml0ZW0iLCJtb2RlbCIsImNvbnRhaW5zT2JqZWN0Iiwib2JqIiwibGlzdCIsImkiLCJsZW5ndGgiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLFVBQWQsRUFBMEJDLFNBQVMsQ0FBQ0EsU0FBcEM7QUFDQUYsR0FBRyxDQUFDQyxTQUFKLENBQWMscUJBQWQsRUFBcUM7QUFDbkNFLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDRCO0FBRW5DQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEdBQUcsRUFBRSxFQURBO0FBRUxDLE1BQUFBLEtBQUssRUFBRSxFQUZGO0FBR0xDLE1BQUFBLE1BQU0sRUFBRSxFQUhIO0FBSUxDLE1BQUFBLE9BQU8sRUFBRSxFQUpKO0FBS0xDLE1BQUFBLE9BQU8sRUFBRSxJQUxKO0FBTUxDLE1BQUFBLFdBQVcsRUFBRSxJQU5SO0FBT0xDLE1BQUFBLEtBQUssRUFBRTtBQVBGLEtBQVA7QUFTRCxHQVprQztBQWFuQ0MsRUFBQUEsUUFBUSxFQUFFLDJzRUFieUI7QUFjbkNDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksS0FBS0MsV0FBVCxFQUFzQjtBQUNwQixXQUFLQyxRQUFMLENBQWNDLGtCQUFrQixHQUFHLG9DQUFyQixHQUE0REMsaUJBQWlCLENBQUMscUJBQUQsQ0FBN0UsR0FBdUcsMENBQXZHLEdBQW9KLEtBQUtILFdBQXpKLEdBQXVLLGNBQXZLLEdBQXdMLEtBQUtJLE1BQUwsQ0FBWUMsU0FBWixDQUFzQkMsSUFBdEIsQ0FBMkIsR0FBM0IsQ0FBdE0sRUFBdU8sT0FBdk87QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLQyxTQUFMLENBQWUsS0FBZjtBQUNEO0FBQ0YsR0FwQmtDO0FBcUJuQ0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1BELElBQUFBLFNBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1CRSxVQUFuQixFQUErQjtBQUN4QyxXQUFLZCxPQUFMLEdBQWVjLFVBQWY7QUFDRCxLQUhNO0FBSVBDLElBQUFBLFdBQVcsRUFBRSxTQUFTQSxXQUFULENBQXFCYixLQUFyQixFQUE0QjtBQUN2QyxXQUFLTCxLQUFMLENBQVdtQixJQUFYLENBQWdCZCxLQUFoQjtBQUNBOztBQUVBLFdBQUtlLElBQUwsQ0FBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCLEVBQTNCO0FBQ0EsV0FBS0EsSUFBTCxDQUFVLElBQVYsRUFBZ0IsUUFBaEIsRUFBMEIsRUFBMUI7QUFDRCxLQVZNO0FBV1BDLElBQUFBLFFBQVEsRUFBRSxTQUFTQSxRQUFULENBQWtCcEIsTUFBbEIsRUFBMEI7QUFDbEMsVUFBSXFCLEtBQUssR0FBRyxJQUFaOztBQUVBLFVBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDdkIsR0FBTixDQUFVZSxJQUFWLENBQWUsR0FBZixDQUFkOztBQUVBLFVBQUlVLFVBQVUsR0FBR0YsS0FBSyxDQUFDVixNQUFOLENBQWEsV0FBYixFQUEwQkUsSUFBMUIsQ0FBK0IsR0FBL0IsQ0FBakI7O0FBRUFRLE1BQUFBLEtBQUssQ0FBQ2IsUUFBTixDQUFlQyxrQkFBa0IsR0FBRyxvQ0FBckIsR0FBNERDLGlCQUFpQixDQUFDLHFCQUFELENBQTdFLEdBQXVHLGVBQXZHLEdBQXlIWSxPQUF6SCxHQUFtSSxLQUFuSSxHQUEySXRCLE1BQTNJLEdBQW9KLGNBQXBKLEdBQXFLdUIsVUFBcEwsRUFBZ00sU0FBaE07QUFDRCxLQW5CTTtBQW9CUGYsSUFBQUEsUUFBUSxFQUFFLFNBQVNBLFFBQVQsQ0FBa0JnQixHQUFsQixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDekMsVUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQUEsTUFBQUEsRUFBRSxDQUFDWixTQUFILENBQWEsSUFBYjtBQUNBOztBQUVBVSxNQUFBQSxHQUFHLElBQUksV0FBV0UsRUFBRSxDQUFDQyxVQUFyQjtBQUNBLFdBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTCxHQUFmLEVBQW9CTSxJQUFwQixDQUF5QixVQUFVQyxRQUFWLEVBQW9CO0FBQzNDTCxRQUFBQSxFQUFFLENBQUNELFFBQUQsQ0FBRixHQUFlTSxRQUFRLENBQUNDLElBQXhCO0FBQ0FOLFFBQUFBLEVBQUUsQ0FBQ1osU0FBSCxDQUFhLEtBQWI7QUFDRCxPQUhEO0FBSUQsS0E5Qk07QUErQlBtQixJQUFBQSxTQUFTLEVBQUUsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixVQUFJUCxFQUFFLEdBQUcsSUFBVDtBQUNBQSxNQUFBQSxFQUFFLENBQUM1QixHQUFILEdBQVMsRUFBVDtBQUNBLFdBQUtDLEtBQUwsQ0FBV21DLE9BQVgsQ0FBbUIsVUFBVTlCLEtBQVYsRUFBaUIrQixHQUFqQixFQUFzQjtBQUN2Q1QsUUFBQUEsRUFBRSxDQUFDNUIsR0FBSCxDQUFPb0IsSUFBUCxDQUFZZCxLQUFLLENBQUNnQyxFQUFsQjtBQUNELE9BRkQ7QUFHQVYsTUFBQUEsRUFBRSxDQUFDUCxJQUFILENBQVEsSUFBUixFQUFjLE9BQWQsRUFBdUJPLEVBQUUsQ0FBQzVCLEdBQTFCO0FBQ0E0QixNQUFBQSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxrQkFBVCxFQUE2QlgsRUFBRSxDQUFDNUIsR0FBaEM7QUFDRCxLQXZDTTtBQXdDUHdDLElBQUFBLFlBQVksRUFBRSxTQUFTQSxZQUFULENBQXNCQyxZQUF0QixFQUFvQ0MsSUFBcEMsRUFBMENDLEtBQTFDLEVBQWlEO0FBQzdERixNQUFBQSxZQUFZLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFaO0FBQ0QsS0ExQ007QUEyQ1BDLElBQUFBLGNBQWMsRUFBRSxTQUFTQSxjQUFULENBQXdCQyxHQUF4QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDakQsVUFBSUMsQ0FBSjs7QUFFQSxXQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBckIsRUFBNkJELENBQUMsRUFBOUIsRUFBa0M7QUFDaEMsWUFBSUQsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUSxJQUFSLE1BQWtCRixHQUFHLENBQUMsSUFBRCxDQUF6QixFQUFpQztBQUMvQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEtBQVA7QUFDRCxLQXJETTtBQXNEUEksSUFBQUEsVUFBVSxFQUFFLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3JDLFdBQUtqRCxLQUFMLENBQVdrRCxNQUFYLENBQWtCRCxLQUFsQixFQUF5QixDQUF6QjtBQUNEO0FBeERNLEdBckIwQjtBQStFbkNFLEVBQUFBLEtBQUssRUFBRTtBQUNMbkQsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS2tDLFNBQUw7QUFDRDtBQUhJO0FBL0U0QixDQUFyQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd2LXNlbGVjdCcsIFZ1ZVNlbGVjdC5WdWVTZWxlY3QpO1xuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2F1dG9jb21wbGV0ZScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBbXSxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBpdGVtSG92ZXJlZDogbnVsbCxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX2F1dG9jb21wbGV0ZV93cmFwcGVyXFxcIj5cXG5cXG4gICAgICAgICAgICA8d3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmUgOmZpZWxkcz1cXFwiZmllbGRzXFxcIiA6ZmllbGRfbGFiZWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYmVmb3JlPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19hdXRvY29tcGxldGVcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlLXNlYXJjaFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2hcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzLWNpcmNsZVxcXCI+PC9pPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwidGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJzZXRTZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlYXJjaD1cXFwib25TZWFyY2goJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInYtc2VsZWN0LXNlYXJjaC1sYWJlbFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQge3tmaWVsZF9sYWJlbH19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tLT5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcXFwiIHYtaWY9XFxcInR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJ1xcXCIgOmNsYXNzPVxcXCJ7ICdob3ZlcmVkJyA6IGl0ZW1Ib3ZlcmVkID09IGluZGV4IH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVxcXCJpdGVtLmltYWdlXFxcIiB2LWlmPVxcXCJpdGVtLmltYWdlXFxcIiBjbGFzcz1cXFwiaXRlbS1pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiaXRlbS50aXRsZVxcXCIgY2xhc3M9XFxcIml0ZW0tdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIml0ZW0uZXhjZXJwdFxcXCIgY2xhc3M9XFxcIml0ZW0tZXhjZXJwdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtYWx0XFxcIiBAY2xpY2s9XFxcInJlbW92ZUl0ZW0oaW5kZXgpXFxcIiBAbW91c2VvdmVyPVxcXCJpdGVtSG92ZXJlZCA9IGluZGV4XFxcIiBAbW91c2VsZWF2ZT1cXFwiaXRlbUhvdmVyZWQgPSBudWxsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIi8+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyIDpmaWVsZHM9XFxcImZpZWxkc1xcXCI+PC93cGNmdG9fZmllbGRzX2FzaWRlX2FmdGVyPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlKSB7XG4gICAgICB0aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJnBvc3RzX3Blcl9wYWdlPS0xJm9yZGVyYnk9cG9zdF9faW4maWRzPScgKyB0aGlzLmZpZWxkX3ZhbHVlICsgJyZwb3N0X3R5cGVzPScgKyB0aGlzLmZpZWxkcy5wb3N0X3R5cGUuam9pbignLCcpLCAnaXRlbXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gaXNMb2FkaW5nKF9pc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IF9pc0xvYWRpbmc7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAvKlJlc2V0IG9wdGlvbnMqL1xuXG4gICAgICB0aGlzLiRzZXQodGhpcywgJ29wdGlvbnMnLCBbXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ3NlYXJjaCcsICcnKTtcbiAgICB9LFxuICAgIG9uU2VhcmNoOiBmdW5jdGlvbiBvblNlYXJjaChzZWFyY2gpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBleGNsdWRlID0gX3RoaXMuaWRzLmpvaW4oJywnKTtcblxuICAgICAgdmFyIHBvc3RfdHlwZXMgPSBfdGhpcy5maWVsZHNbJ3Bvc3RfdHlwZSddLmpvaW4oJywnKTtcblxuICAgICAgX3RoaXMuZ2V0UG9zdHMoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NlYXJjaF9wb3N0cyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3dwY2Z0b19zZWFyY2hfcG9zdHMnXSArICcmZXhjbHVkZV9pZHM9JyArIGV4Y2x1ZGUgKyAnJnM9JyArIHNlYXJjaCArICcmcG9zdF90eXBlcz0nICsgcG9zdF90eXBlcywgJ29wdGlvbnMnKTtcbiAgICB9LFxuICAgIGdldFBvc3RzOiBmdW5jdGlvbiBnZXRQb3N0cyh1cmwsIHZhcmlhYmxlKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaXNMb2FkaW5nKHRydWUpO1xuICAgICAgLypBZGRpbmcgZmllbGQgSUQgdG8gZmlsdGVycyB0aGVuKi9cblxuICAgICAgdXJsICs9ICcmbmFtZT0nICsgdm0uZmllbGRfbmFtZTtcbiAgICAgIHRoaXMuJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdm1bdmFyaWFibGVdID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgdm0uaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlSWRzOiBmdW5jdGlvbiB1cGRhdGVJZHMoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaWRzID0gW107XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdm0uaWRzLnB1c2godmFsdWUuaWQpO1xuICAgICAgfSk7XG4gICAgICB2bS4kc2V0KHRoaXMsICd2YWx1ZScsIHZtLmlkcyk7XG4gICAgICB2bS4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZtLmlkcyk7XG4gICAgfSxcbiAgICBjYWxsRnVuY3Rpb246IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihmdW5jdGlvbk5hbWUsIGl0ZW0sIG1vZGVsKSB7XG4gICAgICBmdW5jdGlvbk5hbWUoaXRlbSwgbW9kZWwpO1xuICAgIH0sXG4gICAgY29udGFpbnNPYmplY3Q6IGZ1bmN0aW9uIGNvbnRhaW5zT2JqZWN0KG9iaiwgbGlzdCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0W2ldWydpZCddID09PSBvYmpbJ2lkJ10pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKGluZGV4KSB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGl0ZW1zOiBmdW5jdGlvbiBpdGVtcygpIHtcbiAgICAgIHRoaXMudXBkYXRlSWRzKCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])