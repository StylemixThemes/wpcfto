(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_sorter', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_options'],
  data: function data() {
    return {
      columns: []
    };
  },
  template: " \n        <div class=\"wpcfto_generic_field wpcfto_generic_field_flex_input\" v-bind:class=\"field_id\">\n        \n            <label v-html=\"field_label\"></label>\n                        \n\t\t\t<div class=\"wpcfto_sorter\">\n\t\t\t\n\t\t\t\t<div v-for=\"(column, column_key) in columns\" class=\"wpcfto_sorter_single\">\n\t\t\t\t\n\t\t\t\t\t<h6 v-html=\"column['name']\"></h6>\n\t\t\t\t\n\t\t\t\t\t<draggable class=\"list-group\" \n\t\t\t\t\t\t\t   :list=\"column['options']\" \n\t\t\t\t\t\t\t   group=\"list\"\n\t\t\t\t\t\t\t   key=\"column_key\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"list-group-item\"\n\t\t\t\t\t\t\t v-for=\"(element, element_key) in column['options']\"\n\t\t\t\t\t\t\t :key=\"element['id']\">\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t  {{element['label']}}\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t </draggable>\n\t\t\t\t\t \n\t\t\t\t </div>\n\t\t\t \n\t\t\t </div>\n             \n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDM1YzgzZTguanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwiY29sdW1ucyIsInRlbXBsYXRlIiwibW91bnRlZCIsImZpZWxkX3ZhbHVlIiwiZmllbGRfb3B0aW9ucyIsIldwY2Z0b0lzSnNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImZpbGxOZXdPcHRpb25zIiwibWV0aG9kcyIsIl90aGlzIiwiZmllbGRzIiwia2V5cyIsImZvckVhY2giLCJjb2x1bW4iLCJjb2x1bW5fa2V5IiwiZmllbGQiLCJpZCIsImxhYmVsIiwicHVzaCIsImZpZWxkX2tleSIsInNwbGljZSIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLGVBQWQsRUFBK0I7QUFDN0JDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELEVBQW1FLGVBQW5FLENBRHNCO0FBRTdCQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLE9BQU8sRUFBRTtBQURKLEtBQVA7QUFHRCxHQU40QjtBQU83QkMsRUFBQUEsUUFBUSxFQUFFLDg2QkFQbUI7QUFRN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtGLE9BQUwsR0FBZSxPQUFPLEtBQUtHLFdBQVosS0FBNEIsV0FBNUIsR0FBMEMsS0FBS0EsV0FBL0MsR0FBNkQsS0FBS0MsYUFBakY7QUFDQSxRQUFJLE9BQU8sS0FBS0QsV0FBWixLQUE0QixRQUE1QixJQUF3Q0Usa0JBQWtCLENBQUMsS0FBS0YsV0FBTixDQUE5RCxFQUFrRixLQUFLSCxPQUFMLEdBQWVNLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtKLFdBQWhCLENBQWY7QUFDbEYsUUFBSSxDQUFDLEtBQUtILE9BQUwsQ0FBYVEsTUFBbEIsRUFBMEIsS0FBS1IsT0FBTCxHQUFlLEtBQUtJLGFBQXBCO0FBQzFCLFNBQUtLLGNBQUw7QUFDRCxHQWI0QjtBQWM3QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BELElBQUFBLGNBQWMsRUFBRSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFVBQUlFLEtBQUssR0FBRyxJQUFaO0FBQ0E7OztBQUdBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUFGLE1BQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjYyxPQUFkLENBQXNCLFVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQThCO0FBQ2xERCxRQUFBQSxNQUFNLENBQUMsU0FBRCxDQUFOLENBQWtCRCxPQUFsQixDQUEwQixVQUFVRyxLQUFWLEVBQWlCO0FBQ3pDTCxVQUFBQSxNQUFNLENBQUNLLEtBQUssQ0FBQ0MsRUFBUCxDQUFOLEdBQW1CRCxLQUFLLENBQUNFLEtBQXpCO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLQTs7O0FBR0FSLE1BQUFBLEtBQUssQ0FBQ1AsYUFBTixDQUFvQlUsT0FBcEIsQ0FBNEIsVUFBVUMsTUFBVixFQUFrQkMsVUFBbEIsRUFBOEI7QUFDeERELFFBQUFBLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JELE9BQWxCLENBQTBCLFVBQVVHLEtBQVYsRUFBaUI7QUFDekNKLFVBQUFBLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxFQUFQLENBQUosR0FBaUJELEtBQUssQ0FBQ0UsS0FBdkI7QUFDQSxjQUFJLE9BQU9QLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLElBQUQsQ0FBTixDQUFiLEtBQStCLFdBQW5DLEVBQWdELE9BQU8sS0FBUDs7QUFFaEROLFVBQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjZ0IsVUFBZCxFQUEwQixTQUExQixFQUFxQ0ksSUFBckMsQ0FBMENILEtBQTFDO0FBQ0QsU0FMRDtBQU1ELE9BUEQ7QUFRQTs7O0FBR0FOLE1BQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjYyxPQUFkLENBQXNCLFVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQThCO0FBQ2xERCxRQUFBQSxNQUFNLENBQUMsU0FBRCxDQUFOLENBQWtCRCxPQUFsQixDQUEwQixVQUFVRyxLQUFWLEVBQWlCSSxTQUFqQixFQUE0QjtBQUNwRCxjQUFJLE9BQU9SLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUQsQ0FBTixDQUFYLEtBQTZCLFdBQWpDLEVBQThDLE9BQU8sS0FBUDs7QUFFOUNOLFVBQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFjZ0IsVUFBZCxFQUEwQixTQUExQixFQUFxQ00sTUFBckMsQ0FBNENELFNBQTVDLEVBQXVELENBQXZEO0FBQ0QsU0FKRDtBQUtELE9BTkQ7QUFPRDtBQW5DTSxHQWRvQjtBQW1EN0JFLEVBQUFBLEtBQUssRUFBRTtBQUNMdkIsSUFBQUEsT0FBTyxFQUFFO0FBQ1B3QixNQUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQnpCLE9BQWpCLEVBQTBCO0FBQ2pDLGFBQUswQixLQUFMLENBQVcsa0JBQVgsRUFBK0IxQixPQUEvQjtBQUNEO0FBSk07QUFESjtBQW5Ec0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuVnVlLmNvbXBvbmVudCgnd3BjZnRvX3NvcnRlcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnLCAnZmllbGRfb3B0aW9ucyddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBbXVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIiBcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX2ZsZXhfaW5wdXRcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfaWRcXFwiPlxcbiAgICAgICAgXFxuICAgICAgICAgICAgPGxhYmVsIHYtaHRtbD1cXFwiZmllbGRfbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwid3BjZnRvX3NvcnRlclxcXCI+XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0PGRpdiB2LWZvcj1cXFwiKGNvbHVtbiwgY29sdW1uX2tleSkgaW4gY29sdW1uc1xcXCIgY2xhc3M9XFxcIndwY2Z0b19zb3J0ZXJfc2luZ2xlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQ8aDYgdi1odG1sPVxcXCJjb2x1bW5bJ25hbWUnXVxcXCI+PC9oNj5cXG5cXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQ8ZHJhZ2dhYmxlIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgICA6bGlzdD1cXFwiY29sdW1uWydvcHRpb25zJ11cXFwiIFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgIGdyb3VwPVxcXCJsaXN0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgIGtleT1cXFwiY29sdW1uX2tleVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCB2LWZvcj1cXFwiKGVsZW1lbnQsIGVsZW1lbnRfa2V5KSBpbiBjb2x1bW5bJ29wdGlvbnMnXVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgOmtleT1cXFwiZWxlbWVudFsnaWQnXVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0IFxcblxcdFxcdFxcdFxcdFxcdFxcdCAge3tlbGVtZW50WydsYWJlbCddfX1cXG5cXHRcXHRcXHRcXHRcXHRcXHQgIFxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdFxcdCA8L2RyYWdnYWJsZT5cXG5cXHRcXHRcXHRcXHRcXHQgXFxuXFx0XFx0XFx0XFx0IDwvZGl2PlxcblxcdFxcdFxcdCBcXG5cXHRcXHRcXHQgPC9kaXY+XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMuY29sdW1ucyA9IHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuZmllbGRfdmFsdWUgOiB0aGlzLmZpZWxkX29wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkX3ZhbHVlID09PSAnc3RyaW5nJyAmJiBXcGNmdG9Jc0pzb25TdHJpbmcodGhpcy5maWVsZF92YWx1ZSkpIHRoaXMuY29sdW1ucyA9IEpTT04ucGFyc2UodGhpcy5maWVsZF92YWx1ZSk7XG4gICAgaWYgKCF0aGlzLmNvbHVtbnMubGVuZ3RoKSB0aGlzLmNvbHVtbnMgPSB0aGlzLmZpZWxkX29wdGlvbnM7XG4gICAgdGhpcy5maWxsTmV3T3B0aW9ucygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmlsbE5ld09wdGlvbnM6IGZ1bmN0aW9uIGZpbGxOZXdPcHRpb25zKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIC8qR2V0IGN1cnJlbnQgc2F2ZWQga2V5cyovXG5cblxuICAgICAgdmFyIGZpZWxkcyA9IFtdO1xuICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgX3RoaXMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGNvbHVtbl9rZXkpIHtcbiAgICAgICAgY29sdW1uWydvcHRpb25zJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZHNbZmllbGQuaWRdID0gZmllbGQubGFiZWw7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvKkFkZCBuZXcgZmllbGRzIGZyb20gY29uZmlnKi9cblxuXG4gICAgICBfdGhpcy5maWVsZF9vcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbiwgY29sdW1uX2tleSkge1xuICAgICAgICBjb2x1bW5bJ29wdGlvbnMnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIGtleXNbZmllbGQuaWRdID0gZmllbGQubGFiZWw7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZHNbZmllbGRbJ2lkJ11dICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgX3RoaXMuY29sdW1uc1tjb2x1bW5fa2V5XVsnb3B0aW9ucyddLnB1c2goZmllbGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLypSZW1vdmUgZGVsZXRlZCBjb25maWcgZmllbGRzIGZyb20gc3RvcmVkIGluIGRiKi9cblxuXG4gICAgICBfdGhpcy5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbiwgY29sdW1uX2tleSkge1xuICAgICAgICBjb2x1bW5bJ29wdGlvbnMnXS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCwgZmllbGRfa2V5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2ZpZWxkWydpZCddXSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIF90aGlzLmNvbHVtbnNbY29sdW1uX2tleV1bJ29wdGlvbnMnXS5zcGxpY2UoZmllbGRfa2V5LCAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29sdW1uczoge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoY29sdW1ucykge1xuICAgICAgICB0aGlzLiRlbWl0KCd3cGNmdG8tZ2V0LXZhbHVlJywgY29sdW1ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=
},{}]},{},[1])