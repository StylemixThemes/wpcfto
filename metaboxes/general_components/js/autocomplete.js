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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzVhMzVmLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsIlZ1ZVNlbGVjdCIsInByb3BzIiwiZGF0YSIsImlkcyIsIml0ZW1zIiwic2VhcmNoIiwib3B0aW9ucyIsImxvYWRpbmciLCJ2YWx1ZSIsInRlbXBsYXRlIiwiY3JlYXRlZCIsImZpZWxkX3ZhbHVlIiwiZ2V0UG9zdHMiLCJzdG1fd3BjZnRvX2FqYXh1cmwiLCJzdG1fd3BjZnRvX25vbmNlcyIsImZpZWxkcyIsInBvc3RfdHlwZSIsImpvaW4iLCJpc0xvYWRpbmciLCJtZXRob2RzIiwiX2lzTG9hZGluZyIsInNldFNlbGVjdGVkIiwicHVzaCIsIiRzZXQiLCJvblNlYXJjaCIsIl90aGlzIiwiZXhjbHVkZSIsInBvc3RfdHlwZXMiLCJ1cmwiLCJ2YXJpYWJsZSIsInZtIiwiZmllbGRfbmFtZSIsIiRodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsInVwZGF0ZUlkcyIsImZvckVhY2giLCJrZXkiLCJpZCIsIiRlbWl0IiwiY2FsbEZ1bmN0aW9uIiwiZnVuY3Rpb25OYW1lIiwiaXRlbSIsIm1vZGVsIiwiY29udGFpbnNPYmplY3QiLCJvYmoiLCJsaXN0IiwiaSIsImxlbmd0aCIsInJlbW92ZUl0ZW0iLCJpbmRleCIsInNwbGljZSIsIndhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsVUFBZCxFQUEwQkMsU0FBUyxDQUFDQSxTQUFwQztBQUNBRixHQUFHLENBQUNDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQztBQUNuQ0UsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FENEI7QUFFbkNDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsR0FBRyxFQUFFLEVBREE7QUFFTEMsTUFBQUEsS0FB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b25lbnQoJ3Ytc2VsZWN0JywgVnVlU2VsZWN0LlZ1ZVNlbGVjdCk7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fYXV0b2NvbXBsZXRlJywge1xuICBwcm9wczogWydmaWVsZHMnLCAnZmllbGRfbGFiZWwnLCAnZmllbGRfbmFtZScsICdmaWVsZF9pZCcsICdmaWVsZF92YWx1ZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZHM6IFtdLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGRfX2F1dG9jb21wbGV0ZV93cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19hdXRvY29tcGxldGVcXFwiPlxcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdG0tYXV0b2NvbXBsZXRlLXNlYXJjaFxcXCIgdi1iaW5kOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOiBsb2FkaW5nfVxcXCI+XFxuICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidi1zZWxlY3Qtc2VhcmNoXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwic2V0U2VsZWN0ZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcIm9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWFyY2g9XFxcIm9uU2VhcmNoKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2LXNlbGVjdC1zZWFyY2gtbGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQge3tmaWVsZF9sYWJlbH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICBcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwid3BjZnRvLWF1dG9jb21wbGV0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCIoaXRlbSwgaW5kZXgpIGluIGl0ZW1zXFxcIiB2LWlmPVxcXCJ0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZydcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVxcXCJpdGVtLmltYWdlXFxcIiB2LWlmPVxcXCJpdGVtLmltYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tZGF0YVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XFxcIml0ZW0udGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImxuciBsbnItY3Jvc3NcXFwiIEBjbGljaz1cXFwicmVtb3ZlSXRlbShpbmRleClcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZDpuYW1lPVxcXCJmaWVsZF9uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInZhbHVlXFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICBpZiAodGhpcy5maWVsZF92YWx1ZSkge1xuICAgICAgdGhpcy5nZXRQb3N0cyhzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj13cGNmdG9fc2VhcmNoX3Bvc3RzJm5vbmNlPScgKyBzdG1fd3BjZnRvX25vbmNlc1snd3BjZnRvX3NlYXJjaF9wb3N0cyddICsgJyZwb3N0c19wZXJfcGFnZT0tMSZvcmRlcmJ5PXBvc3RfX2luJmlkcz0nICsgdGhpcy5maWVsZF92YWx1ZSArICcmcG9zdF90eXBlcz0nICsgdGhpcy5maWVsZHMucG9zdF90eXBlLmpvaW4oJywnKSwgJ2l0ZW1zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uIGlzTG9hZGluZyhfaXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBfaXNMb2FkaW5nO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgLypSZXNldCBvcHRpb25zKi9cblxuICAgICAgdGhpcy4kc2V0KHRoaXMsICdvcHRpb25zJywgW10pO1xuICAgICAgdGhpcy4kc2V0KHRoaXMsICdzZWFyY2gnLCAnJyk7XG4gICAgfSxcbiAgICBvblNlYXJjaDogZnVuY3Rpb24gb25TZWFyY2goc2VhcmNoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXhjbHVkZSA9IF90aGlzLmlkcy5qb2luKCcsJyk7XG5cbiAgICAgIHZhciBwb3N0X3R5cGVzID0gX3RoaXMuZmllbGRzWydwb3N0X3R5cGUnXS5qb2luKCcsJyk7XG5cbiAgICAgIF90aGlzLmdldFBvc3RzKHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXdwY2Z0b19zZWFyY2hfcG9zdHMmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2VhcmNoX3Bvc3RzJ10gKyAnJmV4Y2x1ZGVfaWRzPScgKyBleGNsdWRlICsgJyZzPScgKyBzZWFyY2ggKyAnJnBvc3RfdHlwZXM9JyArIHBvc3RfdHlwZXMsICdvcHRpb25zJyk7XG4gICAgfSxcbiAgICBnZXRQb3N0czogZnVuY3Rpb24gZ2V0UG9zdHModXJsLCB2YXJpYWJsZSkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIHZtLmlzTG9hZGluZyh0cnVlKTtcbiAgICAgIC8qQWRkaW5nIGZpZWxkIElEIHRvIGZpbHRlcnMgdGhlbiovXG5cbiAgICAgIHVybCArPSAnJm5hbWU9JyArIHZtLmZpZWxkX25hbWU7XG4gICAgICB0aGlzLiRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHZtW3ZhcmlhYmxlXSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgIHZtLmlzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZUlkczogZnVuY3Rpb24gdXBkYXRlSWRzKCkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIHZtLmlkcyA9IFtdO1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZtLmlkcy5wdXNoKHZhbHVlLmlkKTtcbiAgICAgIH0pO1xuICAgICAgdm0uJHNldCh0aGlzLCAndmFsdWUnLCB2bS5pZHMpO1xuICAgICAgdm0uJGVtaXQoJ3dwY2Z0by1nZXQtdmFsdWUnLCB2bS5pZHMpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmN0aW9uOiBmdW5jdGlvbiBjYWxsRnVuY3Rpb24oZnVuY3Rpb25OYW1lLCBpdGVtLCBtb2RlbCkge1xuICAgICAgZnVuY3Rpb25OYW1lKGl0ZW0sIG1vZGVsKTtcbiAgICB9LFxuICAgIGNvbnRhaW5zT2JqZWN0OiBmdW5jdGlvbiBjb250YWluc09iamVjdChvYmosIGxpc3QpIHtcbiAgICAgIHZhciBpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXVsnaWQnXSA9PT0gb2JqWydpZCddKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShpbmRleCkge1xuICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlkcygpO1xuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])