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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTMwZjY5ZTUuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiVnVlU2VsZWN0IiwicHJvcHMiLCJkYXRhIiwiaWRzIiwiaXRlbXMiLCJzZWFyY2giLCJvcHRpb25zIiwibG9hZGluZyIsInZhbHVlIiwidGVtcGxhdGUiLCJjcmVhdGVkIiwiZmllbGRfdmFsdWUiLCJnZXRQb3N0cyIsInN0bV93cGNmdG9fYWpheHVybCIsInN0bV93cGNmdG9fbm9uY2VzIiwiZmllbGRzIiwicG9zdF90eXBlIiwiam9pbiIsImlzTG9hZGluZyIsIm1ldGhvZHMiLCJfaXNMb2FkaW5nIiwic2V0U2VsZWN0ZWQiLCJwdXNoIiwiJHNldCIsIm9uU2VhcmNoIiwiX3RoaXMiLCJleGNsdWRlIiwicG9zdF90eXBlcyIsInVybCIsInZhcmlhYmxlIiwidm0iLCJmaWVsZF9uYW1lIiwiJGh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwidXBkYXRlSWRzIiwiZm9yRWFjaCIsImtleSIsImlkIiwiJGVtaXQiLCJjYWxsRnVuY3Rpb24iLCJmdW5jdGlvbk5hbWUiLCJpdGVtIiwibW9kZWwiLCJjb250YWluc09iamVjdCIsIm9iaiIsImxpc3QiLCJpIiwibGVuZ3RoIiwicmVtb3ZlSXRlbSIsImluZGV4Iiwic3BsaWNlIiwid2F0Y2giXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxVQUFkLEVBQTBCQyxTQUFTLENBQUNBLFNBQXBDO0FBQ0FGLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DRSxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQUQ0QjtBQUVuQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxHQUFHLEVBQUUsRUFEQTtBQUVMQyxNQUFBQSxL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bXBvbmVudCgndi1zZWxlY3QnLCBWdWVTZWxlY3QuVnVlU2VsZWN0KTtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19hdXRvY29tcGxldGUnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkczogW10sXG4gICAgICBpdGVtczogW10sXG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9fYXV0b2NvbXBsZXRlX3dyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX2F1dG9jb21wbGV0ZVxcXCI+XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0bS1hdXRvY29tcGxldGUtc2VhcmNoXFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsnbG9hZGluZyc6IGxvYWRpbmd9XFxcIj5cXG4gICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2hcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L2k+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwidGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJzZXRTZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlYXJjaD1cXFwib25TZWFyY2goJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInYtc2VsZWN0LXNlYXJjaC1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB7e2ZpZWxkX2xhYmVsfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJ3cGNmdG8tYXV0b2NvbXBsZXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcXFwiIHYtaWY9XFxcInR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0td3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XFxcIml0ZW0uaW1hZ2VcXFwiIHYtaWY9XFxcIml0ZW0uaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1kYXRhXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCIgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cXFwiaXRlbS50aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibG5yIGxuci1jcm9zc1xcXCIgQGNsaWNrPVxcXCJyZW1vdmVJdGVtKGluZGV4KVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOm5hbWU9XFxcImZpZWxkX25hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidmFsdWVcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlKSB7XG4gICAgICB0aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJnBvc3RzX3Blcl9wYWdlPS0xJm9yZGVyYnk9cG9zdF9faW4maWRzPScgKyB0aGlzLmZpZWxkX3ZhbHVlICsgJyZwb3N0X3R5cGVzPScgKyB0aGlzLmZpZWxkcy5wb3N0X3R5cGUuam9pbignLCcpLCAnaXRlbXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gaXNMb2FkaW5nKF9pc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IF9pc0xvYWRpbmc7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAvKlJlc2V0IG9wdGlvbnMqL1xuXG4gICAgICB0aGlzLiRzZXQodGhpcywgJ29wdGlvbnMnLCBbXSk7XG4gICAgICB0aGlzLiRzZXQodGhpcywgJ3NlYXJjaCcsICcnKTtcbiAgICB9LFxuICAgIG9uU2VhcmNoOiBmdW5jdGlvbiBvblNlYXJjaChzZWFyY2gpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBleGNsdWRlID0gX3RoaXMuaWRzLmpvaW4oJywnKTtcblxuICAgICAgdmFyIHBvc3RfdHlwZXMgPSBfdGhpcy5maWVsZHNbJ3Bvc3RfdHlwZSddLmpvaW4oJywnKTtcblxuICAgICAgX3RoaXMuZ2V0UG9zdHMoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NlYXJjaF9wb3N0cyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3dwY2Z0b19zZWFyY2hfcG9zdHMnXSArICcmZXhjbHVkZV9pZHM9JyArIGV4Y2x1ZGUgKyAnJnM9JyArIHNlYXJjaCArICcmcG9zdF90eXBlcz0nICsgcG9zdF90eXBlcywgJ29wdGlvbnMnKTtcbiAgICB9LFxuICAgIGdldFBvc3RzOiBmdW5jdGlvbiBnZXRQb3N0cyh1cmwsIHZhcmlhYmxlKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaXNMb2FkaW5nKHRydWUpO1xuICAgICAgLypBZGRpbmcgZmllbGQgSUQgdG8gZmlsdGVycyB0aGVuKi9cblxuICAgICAgdXJsICs9ICcmbmFtZT0nICsgdm0uZmllbGRfbmFtZTtcbiAgICAgIHRoaXMuJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdm1bdmFyaWFibGVdID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgdm0uaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlSWRzOiBmdW5jdGlvbiB1cGRhdGVJZHMoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdm0uaWRzID0gW107XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdm0uaWRzLnB1c2godmFsdWUuaWQpO1xuICAgICAgfSk7XG4gICAgICB2bS4kc2V0KHRoaXMsICd2YWx1ZScsIHZtLmlkcyk7XG4gICAgICB2bS4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIHZtLmlkcyk7XG4gICAgfSxcbiAgICBjYWxsRnVuY3Rpb246IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihmdW5jdGlvbk5hbWUsIGl0ZW0sIG1vZGVsKSB7XG4gICAgICBmdW5jdGlvbk5hbWUoaXRlbSwgbW9kZWwpO1xuICAgIH0sXG4gICAgY29udGFpbnNPYmplY3Q6IGZ1bmN0aW9uIGNvbnRhaW5zT2JqZWN0KG9iaiwgbGlzdCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0W2ldWydpZCddID09PSBvYmpbJ2lkJ10pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKGluZGV4KSB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGl0ZW1zOiBmdW5jdGlvbiBpdGVtcygpIHtcbiAgICAgIHRoaXMudXBkYXRlSWRzKCk7XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])