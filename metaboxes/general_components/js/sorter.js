(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_sorter', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_options'],
  data: function data() {
    return {
      columns: []
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_sorter\" v-bind:class=\"field_id\" :class=\"'columns-' + columns.length\">\n        \n            <div class=\"wpcfto_field_title\">\n                <label v-html=\"field_label\"></label>\n\n                <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n            </div>\n                        \n\t\t\t<div class=\"wpcfto_sorter\">\n\t\t\t\n\t\t\t\t<div v-for=\"(column, column_key) in columns\" class=\"wpcfto_sorter_single\">\n\t\t\t\t\n\t\t\t\t\t<h6 v-html=\"column['name']\"></h6>\n\t\t\t\t\n\t\t\t\t\t<draggable class=\"list-group\" \n\t\t\t\t\t\t\t   :list=\"column['options']\" \n\t\t\t\t\t\t\t   group=\"list\"\n\t\t\t\t\t\t\t   key=\"column_key\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"list-group-item\"\n\t\t\t\t\t\t\t v-for=\"(element, element_key) in column['options']\"\n\t\t\t\t\t\t\t :key=\"element['id']\">\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t  {{element['label']}}\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t </draggable>\n\t\t\t\t\t \n\t\t\t\t </div>\n\t\t\t \n\t\t\t </div>\n             \n        </div>\n    ",
  mounted: function mounted() {
    this.columns = typeof this.field_value !== 'undefined' ? this.field_value : this.field_options;
    if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) this.columns = JSON.parse(this.field_value);
    if (!this.columns.length) this.columns = this.field_options;
    this.fillNewOptions();
  },
  methods: {
    fillNewOptions: function fillNewOptions() {
      var _this = this;
      /*Get current saved keys*/


      var fields = [];
      var keys = [];

      _this.columns.forEach(function (column, column_key) {
        column['options'].forEach(function (field) {
          fields[field.id] = field.label;
        });
      });
      /*Add new fields from config*/


      _this.field_options.forEach(function (column, column_key) {
        column['options'].forEach(function (field) {
          keys[field.id] = field.label;
          if (typeof fields[field['id']] !== 'undefined') return false;

          _this.columns[column_key]['options'].push(field);
        });
      });
      /*Remove deleted config fields from stored in db*/


      _this.columns.forEach(function (column, column_key) {
        column['options'].forEach(function (field, field_key) {
          if (typeof keys[field['id']] !== 'undefined') return false;

          _this.columns[column_key]['options'].splice(field_key, 1);
        });
      });
    }
  },
  watch: {
    columns: {
      deep: true,
      handler: function handler(columns) {
        this.$emit('wpcfto-get-value', columns);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODI5NDgyOTcuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiY29sdW1ucyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiZmllbGRfb3B0aW9ucyIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImZpbGxOZXdPcHRpb25zIiwibWV0aG9kcyIsIl90aGlzIiwiZmllbGRzIiwia2V5cyIsImZvckVhY2giLCJjb2x1bW4iLCJjb2x1bW5fa2V5IiwiZmllbGQiLCJpZCIsImxhYmVsIiwicHVzaCIsImZpZWxkX2tleSIsInNwbGljZSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGVBQWQsRUFBK0I7QUFDN0JDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLGVBQW5FLENBRHNCO0FBRTdCQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE9BQU8sRUFBRTtBQURKLEtBQVA7QUFHRCxHQU40QjtBQU83QkMsRUFBQUEsUUFBUSxFQUFFLDRwQ0FQbUI7QUFRN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtGLE9BQUwsR0FBZSxPQUFPLEtBQUtHLFdBQVosS0FBNEIsV0FBNUIsR0FBMEMsS0FBS0EsV0FBL0MsR0FBNkQsS0FBS0MsYUFBakY7QUFDQSxRQUFJLE9BQU8sS0FBS0QsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Usa0JBQWtCLENBQUMsS0FBS0YsV0FBTixDQUE5RCxFQUFrRixLQUFLSCxPQUFMLEdBQWVNLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtKLFdBQWhCLENBQWY7QUFDbEYsUUFBSSxDQUFDLEtBQUtILE9BQUwsQ0FBYVEsTUFBbEIsRUFBMEIsS0FBS1IsT0FBTCxHQUFlLEtBQUtJLGFBQXBCO0FBQzFCLFNBQUtLLGNBQUw7QUFDRCxHQWI0QjtBQWM3QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BELElBQUFBLGNBQWMsRUFBRSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFVBQUlFLEtBQUssR0FBRyxJQUFaO0FBQ0E7OztBQUdBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUFGLE1BQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjYyxPQUFkLENBQXNCLFVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQThCO0FBQ2xERCxRQUFBQSxNQUFNLENBQUMsU0FBRCxDQUFOLENBQWtCRCxPQUFsQixDQUEwQixVQUFVRyxLQUFWLEVBQWlCO0FBQ3pDTCxVQUFBQSxNQUFNLENBQUNLLEtBQUssQ0FBQ0MsRUFBUCxDQUFOLEdBQW1CRCxLQUFLLENBQUNFLEtBQXpCO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLQTs7O0FBR0FSLE1BQUFBLEtBQUssQ0FBQ1AsYUFBTixDQUFvQlUsT0FBcEIsQ0FBNEIsVUFBVUMsTUFBVixFQUFrQkMsVUFBbEIsRUFBOEI7QUFDeERELFFBQUFBLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JELE9BQWxCLENBQTBCLFVBQVVHLEtBQVYsRUFBaUI7QUFDekNKLFVBQUFBLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxFQUFQLENBQUosR0FBaUJELEtBQUssQ0FBQ0UsS0FBdkI7QUFDQSxjQUFJLE9BQU9QLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLElBQUQsQ0FBTixDQUFiLEtBQStCLFdBQW5DLEVBQWdELE9BQU8sS0FBUDs7QUFFaEROLFVBQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjZ0IsVUFBZCxFQUEwQixTQUExQixFQUFxQ0ksSUFBckMsQ0FBMENILEtBQTFDO0FBQ0QsU0FMRDtBQU1ELE9BUEQ7QUFRQTs7O0FBR0FOLE1BQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjYyxPQUFkLENBQXNCLFVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQThCO0FBQ2xERCxRQUFBQSxNQUFNLENBQUMsU0FBRCxDQUFOLENBQWtCRCxPQUFsQixDQUEwQixVQUFVRyxLQUFWLEVBQWlCSSxTQUFqQixFQUE0QjtBQUNwRCxjQUFJLE9BQU9SLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUQsQ0FBTixDQUFYLEtBQTZCLFdBQWpDLEVBQThDLE9BQU8sS0FBUDs7QUFFOUNOLFVBQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjZ0IsVUFBZCxFQUEwQixTQUExQixFQUFxQ00sTUFBckMsQ0FBNENELFNBQTVDLEVBQXVELENBQXZEO0FBQ0QsU0FKRDtBQUtELE9BTkQ7QUFPRDtBQW5DTSxHQWRvQjtBQW1EN0JFLEVBQUFBLEtBQUssRUFBRTtBQUNMdkIsSUFBQUEsT0FBTyxFQUFFO0FBQ1B3QixNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnpCLE9BQWpCLEVBQTBCO0FBQ2pDLGFBQUswQixLQUFMLENBQVcsa0JBQVgsRUFBK0IxQixPQUEvQjtBQUNEO0FBSk07QUFESjtBQW5Ec0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3NvcnRlcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfb3B0aW9ucyddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIiBcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX3NvcnRlclxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9pZFxcXCIgOmNsYXNzPVxcXCInY29sdW1ucy0nICsgY29sdW1ucy5sZW5ndGhcXFwiPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2ZpZWxkX3RpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgdi1odG1sPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmaWVsZC1kZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIndwY2Z0b19zb3J0ZXJcXFwiPlxcblxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdDxkaXYgdi1mb3I9XFxcIihjb2x1bW4sIGNvbHVtbl9rZXkpIGluIGNvbHVtbnNcXFwiIGNsYXNzPVxcXCJ3cGNmdG9fc29ydGVyX3NpbmdsZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0PGg2IHYtaHRtbD1cXFwiY29sdW1uWyduYW1lJ11cXFwiPjwvaDY+XFxuXFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0PGRyYWdnYWJsZSBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICAgOmxpc3Q9XFxcImNvbHVtblsnb3B0aW9ucyddXFxcIiBcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgICBncm91cD1cXFwibGlzdFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgICBrZXk9XFxcImNvbHVtbl9rZXlcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgdi1mb3I9XFxcIihlbGVtZW50LCBlbGVtZW50X2tleSkgaW4gY29sdW1uWydvcHRpb25zJ11cXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0IDprZXk9XFxcImVsZW1lbnRbJ2lkJ11cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCBcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIHt7ZWxlbWVudFsnbGFiZWwnXX19XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQgPC9kcmFnZ2FibGU+XFxuXFx0XFx0XFx0XFx0XFx0IFxcblxcdFxcdFxcdFxcdCA8L2Rpdj5cXG5cXHRcXHRcXHQgXFxuXFx0XFx0XFx0IDwvZGl2PlxcbiAgICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLmNvbHVtbnMgPSB0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmZpZWxkX3ZhbHVlIDogdGhpcy5maWVsZF9vcHRpb25zO1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZF92YWx1ZSA9PT0gJ3N0cmluZycgJiYgV3BjZnRvSXNKc29uU3RyaW5nKHRoaXMuZmllbGRfdmFsdWUpKSB0aGlzLmNvbHVtbnMgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgIGlmICghdGhpcy5jb2x1bW5zLmxlbmd0aCkgdGhpcy5jb2x1bW5zID0gdGhpcy5maWVsZF9vcHRpb25zO1xuICAgIHRoaXMuZmlsbE5ld09wdGlvbnMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZpbGxOZXdPcHRpb25zOiBmdW5jdGlvbiBmaWxsTmV3T3B0aW9ucygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAvKkdldCBjdXJyZW50IHNhdmVkIGtleXMqL1xuXG5cbiAgICAgIHZhciBmaWVsZHMgPSBbXTtcbiAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgIF90aGlzLmNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uLCBjb2x1bW5fa2V5KSB7XG4gICAgICAgIGNvbHVtblsnb3B0aW9ucyddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGRzW2ZpZWxkLmlkXSA9IGZpZWxkLmxhYmVsO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLypBZGQgbmV3IGZpZWxkcyBmcm9tIGNvbmZpZyovXG5cblxuICAgICAgX3RoaXMuZmllbGRfb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGNvbHVtbl9rZXkpIHtcbiAgICAgICAgY29sdW1uWydvcHRpb25zJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICBrZXlzW2ZpZWxkLmlkXSA9IGZpZWxkLmxhYmVsO1xuICAgICAgICAgIGlmICh0eXBlb2YgZmllbGRzW2ZpZWxkWydpZCddXSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIF90aGlzLmNvbHVtbnNbY29sdW1uX2tleV1bJ29wdGlvbnMnXS5wdXNoKGZpZWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8qUmVtb3ZlIGRlbGV0ZWQgY29uZmlnIGZpZWxkcyBmcm9tIHN0b3JlZCBpbiBkYiovXG5cblxuICAgICAgX3RoaXMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGNvbHVtbl9rZXkpIHtcbiAgICAgICAgY29sdW1uWydvcHRpb25zJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQsIGZpZWxkX2tleSkge1xuICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tmaWVsZFsnaWQnXV0gIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICBfdGhpcy5jb2x1bW5zW2NvbHVtbl9rZXldWydvcHRpb25zJ10uc3BsaWNlKGZpZWxkX2tleSwgMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbHVtbnM6IHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnd3BjZnRvLWdldC12YWx1ZScsIGNvbHVtbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19
},{}]},{},[1])