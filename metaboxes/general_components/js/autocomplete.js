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
      value: ''
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field__autocomplete_wrapper\">\n            \n            <label v-html=\"field_label\"></label>\n        \n            <div class=\"wpcfto_generic_field wpcfto_generic_field__autocomplete\">\n               \n                <div class=\"stm-autocomplete-search\" v-bind:class=\"{'loading': loading}\">\n          \n                    <div class=\"v-select-search\">\n\n                        <i class=\"fa fa-plus\"></i>\n    \n                        <v-select label=\"title\"\n                                  v-model=\"search\"\n                                  @input=\"setSelected($event)\"\n                                  :options=\"options\"\n                                  @search=\"onSearch($event)\">\n                        </v-select>\n    \n                        <span class=\"v-select-search-label\">\n                            Add {{field_label}}\n                        </span>\n    \n                    </div>\n                   \n                    <ul class=\"wpcfto-autocomplete\">\n                        <li v-for=\"(item, index) in items\" v-if=\"typeof item !== 'string'\">\n                            <div class=\"item-wrapper\">\n                                <img v-bind:src=\"item.image\" v-if=\"item.image\">\n                                <div class=\"item-data\">\n                                    <span class=\"item-label\" v-html=\"field_label\"></span>\n                                    <span v-html=\"item.title\"></span>\n                                </div>\n                            </div>\n                            <i class=\"lnr lnr-cross\" @click=\"removeItem(index)\"></i>\n                        </li>\n                    </ul>\n                    \n                    \n                    <input type=\"hidden\"\n                           v-bind:name=\"field_name\"\n                           v-model=\"value\"/>\n                \n                </div>\n            </div>\n            \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTEzZTdiMi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJWdWVTZWxlY3QiLCJwcm9wcyIsImRhdGEiLCJpZHMiLCJpdGVtcyIsInNlYXJjaCIsIm9wdGlvbnMiLCJsb2FkaW5nIiwidmFsdWUiLCJ0ZW1wbGF0ZSIsImNyZWF0ZWQiLCJmaWVsZF92YWx1ZSIsImdldFBvc3RzIiwic3RtX3dwY2Z0b19hamF4dXJsIiwic3RtX3dwY2Z0b19ub25jZXMiLCJmaWVsZHMiLCJwb3N0X3R5cGUiLCJqb2luIiwiaXNMb2FkaW5nIiwibWV0aG9kcyIsIl9pc0xvYWRpbmciLCJzZXRTZWxlY3RlZCIsInB1c2giLCIkc2V0Iiwib25TZWFyY2giLCJfdGhpcyIsImV4Y2x1ZGUiLCJwb3N0X3R5cGVzIiwidXJsIiwidmFyaWFibGUiLCJ2bSIsImZpZWxkX25hbWUiLCIkaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJ1cGRhdGVJZHMiLCJmb3JFYWNoIiwia2V5IiwiaWQiLCIkZW1pdCIsImNhbGxGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsIml0ZW0iLCJtb2RlbCIsImNvbnRhaW5zT2JqZWN0Iiwib2JqIiwibGlzdCIsImkiLCJsZW5ndGgiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLFVBQWQsRUFBMEJDLFNBQVMsQ0FBQ0EsU0FBcEM7QUFDQUYsR0FBRyxDQUFDQyxTQUFKLENBQWMscUJBQWQsRUFBcUM7QUFDbkNFLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDRCO0FBRW5DQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEdBQUcsRUFBRSxFQURBO0FBRUxDLE1BQUFBLEtB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cG9uZW50KCd2LXNlbGVjdCcsIFZ1ZVNlbGVjdC5WdWVTZWxlY3QpO1xuVnVlLmNvbXBvbmVudCgnd3BjZnRvX2F1dG9jb21wbGV0ZScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBbXSxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkX19hdXRvY29tcGxldGVfd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICBcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZCB3cGNmdG9fZ2VuZXJpY19maWVsZF9fYXV0b2NvbXBsZXRlXFxcIj5cXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RtLWF1dG9jb21wbGV0ZS1zZWFyY2hcXFwiIHYtYmluZDpjbGFzcz1cXFwieydsb2FkaW5nJzogbG9hZGluZ31cXFwiPlxcbiAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInYtc2VsZWN0LXNlYXJjaFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcInNldFNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidi1zZWxlY3Qtc2VhcmNoLWxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHt7ZmllbGRfbGFiZWx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIndwY2Z0by1hdXRvY29tcGxldGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc1xcXCIgdi1pZj1cXFwidHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cXFwiaXRlbS5pbWFnZVxcXCIgdi1pZj1cXFwiaXRlbS5pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIiB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVxcXCJpdGVtLnRpdGxlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJsbnIgbG5yLWNyb3NzXFxcIiBAY2xpY2s9XFxcInJlbW92ZUl0ZW0oaW5kZXgpXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6bmFtZT1cXFwiZmllbGRfbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ2YWx1ZVxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZmllbGRfdmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0UG9zdHMoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NlYXJjaF9wb3N0cyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3dwY2Z0b19zZWFyY2hfcG9zdHMnXSArICcmcG9zdHNfcGVyX3BhZ2U9LTEmb3JkZXJieT1wb3N0X19pbiZpZHM9JyArIHRoaXMuZmllbGRfdmFsdWUgKyAnJnBvc3RfdHlwZXM9JyArIHRoaXMuZmllbGRzLnBvc3RfdHlwZS5qb2luKCcsJyksICdpdGVtcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNMb2FkaW5nOiBmdW5jdGlvbiBpc0xvYWRpbmcoX2lzTG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nID0gX2lzTG9hZGluZztcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgIC8qUmVzZXQgb3B0aW9ucyovXG5cbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnb3B0aW9ucycsIFtdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnc2VhcmNoJywgJycpO1xuICAgIH0sXG4gICAgb25TZWFyY2g6IGZ1bmN0aW9uIG9uU2VhcmNoKHNlYXJjaCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGV4Y2x1ZGUgPSBfdGhpcy5pZHMuam9pbignLCcpO1xuXG4gICAgICB2YXIgcG9zdF90eXBlcyA9IF90aGlzLmZpZWxkc1sncG9zdF90eXBlJ10uam9pbignLCcpO1xuXG4gICAgICBfdGhpcy5nZXRQb3N0cyhzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj13cGNmdG9fc2VhcmNoX3Bvc3RzJm5vbmNlPScgKyBzdG1fd3BjZnRvX25vbmNlc1snd3BjZnRvX3NlYXJjaF9wb3N0cyddICsgJyZleGNsdWRlX2lkcz0nICsgZXhjbHVkZSArICcmcz0nICsgc2VhcmNoICsgJyZwb3N0X3R5cGVzPScgKyBwb3N0X3R5cGVzLCAnb3B0aW9ucycpO1xuICAgIH0sXG4gICAgZ2V0UG9zdHM6IGZ1bmN0aW9uIGdldFBvc3RzKHVybCwgdmFyaWFibGUpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2bS5pc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAvKkFkZGluZyBmaWVsZCBJRCB0byBmaWx0ZXJzIHRoZW4qL1xuXG4gICAgICB1cmwgKz0gJyZuYW1lPScgKyB2bS5maWVsZF9uYW1lO1xuICAgICAgdGhpcy4kaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB2bVt2YXJpYWJsZV0gPSByZXNwb25zZS5ib2R5O1xuICAgICAgICB2bS5pc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVJZHM6IGZ1bmN0aW9uIHVwZGF0ZUlkcygpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2bS5pZHMgPSBbXTtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB2bS5pZHMucHVzaCh2YWx1ZS5pZCk7XG4gICAgICB9KTtcbiAgICAgIHZtLiRzZXQodGhpcywgJ3ZhbHVlJywgdm0uaWRzKTtcbiAgICAgIHZtLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdm0uaWRzKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jdGlvbjogZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSwgaXRlbSwgbW9kZWwpIHtcbiAgICAgIGZ1bmN0aW9uTmFtZShpdGVtLCBtb2RlbCk7XG4gICAgfSxcbiAgICBjb250YWluc09iamVjdDogZnVuY3Rpb24gY29udGFpbnNPYmplY3Qob2JqLCBsaXN0KSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RbaV1bJ2lkJ10gPT09IG9ialsnaWQnXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaW5kZXgpIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy51cGRhdGVJZHMoKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])