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
  template: "\n        <div class=\"wpcfto_generic_field__autocomplete_wrapper\">\n\n            <wpcfto_fields_aside_before :fields=\"fields\" :field_label=\"field_label\"></wpcfto_fields_aside_before>\n\n            <div class=\"wpcfto_generic_field wpcfto_generic_field__autocomplete\">\n\n                <div class=\"wpcfto-autocomplete-search\" v-bind:class=\"{'loading': loading}\">\n\n                    <div class=\"v-select-search\">\n\n                        <i class=\"fa fa-plus-circle\"></i>\n\n                        <v-select label=\"title\"\n                                  v-model=\"search\"\n                                  @input=\"setSelected($event)\"\n                                  :options=\"options\"\n                                  @search=\"onSearch($event)\">\n                        </v-select>\n\n                        <span class=\"v-select-search-label\">\n                            Add {{field_label}}\n                        </span>\n\n                    </div>\n\n                    <ul class=\"wpcfto-autocomplete\">\n                        <li v-for=\"(item, index) in items\" v-if=\"typeof item !== 'string'\">\n                            <div class=\"item-wrapper\">\n                                <img v-bind:src=\"item.image\" v-if=\"item.image\">\n                                <div class=\"item-data\">\n                                    <span class=\"item-label\" v-html=\"field_label\"></span>\n                                    <span v-html=\"item.title\"></span>\n                                </div>\n                            </div>\n                            <i class=\"fa fa-trash-alt\" @click=\"removeItem(index)\"></i>\n                        </li>\n                    </ul>\n\n\n                    <input type=\"hidden\"\n                           v-bind:name=\"field_name\"\n                           v-model=\"value\"/>\n\n                </div>\n            </div>\n\n            <wpcfto_fields_aside_after :fields=\"fields\"></wpcfto_fields_aside_after>\n\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMTNiYjI4MDIuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlU2VsZWN0IiwicHJvcHMiLCJkYXRhIiwiaWRzIiwiaXRlbXMiLCJzZWFyY2giLCJvcHRpb25zIiwibG9hZGluZyIsInZhbHVlIiwidGVtcGxhdGUiLCJjcmVhdGVkIiwiZmllbGRfdmFsdWUiLCJnZXRQb3N0cyIsInN0bV93cGNmdG9fYWpheHVybCIsInN0bV93cGNmdG9fbm9uY2VzIiwiZmllbGRzIiwicG9zdF90eXBlIiwiam9pbiIsImlzTG9hZGluZyIsIm1ldGhvZHMiLCJfaXNMb2FkaW5nIiwic2V0U2VsZWN0ZWQiLCJwdXNoIiwiJHNldCIsIm9uU2VhcmNoIiwiX3RoaXMiLCJleGNsdWRlIiwicG9zdF90eXBlcyIsInVybCIsInZhcmlhYmxlIiwidm0iLCJmaWVsZF9uYW1lIiwiJGh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwidXBkYXRlSWRzIiwiZm9yRWFjaCIsImtleSIsImlkIiwiJGVtaXQiLCJjYWxsRnVuY3Rpb24iLCJmdW5jdGlvbk5hbWUiLCJpdGVtIiwibW9kZWwiLCJjb250YWluc09iamVjdCIsIm9iaiIsImxpc3QiLCJpIiwibGVuZ3RoIiwicmVtb3ZlSXRlbSIsImluZGV4Iiwic3BsaWNlIiwid2F0Y2giXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxVQUFkLEVBQTBCQyxTQUFTLENBQUNBLFNBQXBDO0FBQ0FGLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DRSxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ0QjtBQUVuQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxHQUFHLEVBQUUsRUFEQTtBQUVMQyxNQUFBQSxL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bXBvbmVudCgndi1zZWxlY3QnLCBWdWVTZWxlY3QuVnVlU2VsZWN0KTtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19hdXRvY29tcGxldGUnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkczogW10sXG4gICAgICBpdGVtczogW10sXG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9fYXV0b2NvbXBsZXRlX3dyYXBwZXJcXFwiPlxcblxcbiAgICAgICAgICAgIDx3cGNmdG9fZmllbGRzX2FzaWRlX2JlZm9yZSA6ZmllbGRzPVxcXCJmaWVsZHNcXFwiIDpmaWVsZF9sYWJlbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvd3BjZnRvX2ZpZWxkc19hc2lkZV9iZWZvcmU+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX2F1dG9jb21wbGV0ZVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0by1hdXRvY29tcGxldGUtc2VhcmNoXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsnbG9hZGluZyc6IGxvYWRpbmd9XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInYtc2VsZWN0LXNlYXJjaFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXMtY2lyY2xlXFxcIj48L2k+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcInNldFNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2gtbGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQge3tmaWVsZF9sYWJlbH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIndwY2Z0by1hdXRvY29tcGxldGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc1xcXCIgdi1pZj1cXFwidHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cXFwiaXRlbS5pbWFnZVxcXCIgdi1pZj1cXFwiaXRlbS5pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIiB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVxcXCJpdGVtLnRpdGxlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1hbHRcXFwiIEBjbGljaz1cXFwicmVtb3ZlSXRlbShpbmRleClcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiLz5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPHdwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXIgOmZpZWxkcz1cXFwiZmllbGRzXFxcIj48L3dwY2Z0b19maWVsZHNfYXNpZGVfYWZ0ZXI+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZmllbGRfdmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0UG9zdHMoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NlYXJjaF9wb3N0cyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3dwY2Z0b19zZWFyY2hfcG9zdHMnXSArICcmcG9zdHNfcGVyX3BhZ2U9LTEmb3JkZXJieT1wb3N0X19pbiZpZHM9JyArIHRoaXMuZmllbGRfdmFsdWUgKyAnJnBvc3RfdHlwZXM9JyArIHRoaXMuZmllbGRzLnBvc3RfdHlwZS5qb2luKCcsJyksICdpdGVtcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNMb2FkaW5nOiBmdW5jdGlvbiBpc0xvYWRpbmcoX2lzTG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nID0gX2lzTG9hZGluZztcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgIC8qUmVzZXQgb3B0aW9ucyovXG5cbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnb3B0aW9ucycsIFtdKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLCAnc2VhcmNoJywgJycpO1xuICAgIH0sXG4gICAgb25TZWFyY2g6IGZ1bmN0aW9uIG9uU2VhcmNoKHNlYXJjaCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGV4Y2x1ZGUgPSBfdGhpcy5pZHMuam9pbignLCcpO1xuXG4gICAgICB2YXIgcG9zdF90eXBlcyA9IF90aGlzLmZpZWxkc1sncG9zdF90eXBlJ10uam9pbignLCcpO1xuXG4gICAgICBfdGhpcy5nZXRQb3N0cyhzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj13cGNmdG9fc2VhcmNoX3Bvc3RzJm5vbmNlPScgKyBzdG1fd3BjZnRvX25vbmNlc1snd3BjZnRvX3NlYXJjaF9wb3N0cyddICsgJyZleGNsdWRlX2lkcz0nICsgZXhjbHVkZSArICcmcz0nICsgc2VhcmNoICsgJyZwb3N0X3R5cGVzPScgKyBwb3N0X3R5cGVzLCAnb3B0aW9ucycpO1xuICAgIH0sXG4gICAgZ2V0UG9zdHM6IGZ1bmN0aW9uIGdldFBvc3RzKHVybCwgdmFyaWFibGUpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2bS5pc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAvKkFkZGluZyBmaWVsZCBJRCB0byBmaWx0ZXJzIHRoZW4qL1xuXG4gICAgICB1cmwgKz0gJyZuYW1lPScgKyB2bS5maWVsZF9uYW1lO1xuICAgICAgdGhpcy4kaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB2bVt2YXJpYWJsZV0gPSByZXNwb25zZS5ib2R5O1xuICAgICAgICB2bS5pc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVJZHM6IGZ1bmN0aW9uIHVwZGF0ZUlkcygpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2bS5pZHMgPSBbXTtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB2bS5pZHMucHVzaCh2YWx1ZS5pZCk7XG4gICAgICB9KTtcbiAgICAgIHZtLiRzZXQodGhpcywgJ3ZhbHVlJywgdm0uaWRzKTtcbiAgICAgIHZtLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgdm0uaWRzKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jdGlvbjogZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSwgaXRlbSwgbW9kZWwpIHtcbiAgICAgIGZ1bmN0aW9uTmFtZShpdGVtLCBtb2RlbCk7XG4gICAgfSxcbiAgICBjb250YWluc09iamVjdDogZnVuY3Rpb24gY29udGFpbnNPYmplY3Qob2JqLCBsaXN0KSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RbaV1bJ2lkJ10gPT09IG9ialsnaWQnXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaW5kZXgpIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy51cGRhdGVJZHMoKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==
},{}]},{},[1])