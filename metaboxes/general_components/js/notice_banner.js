(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var wpcfto_notice_mounted = false;
Vue.component('wpcfto_notice_banner', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: '',
      mount_status: false
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__notice_banner\" v-bind:class=\"field_name\" v-bind:data-notice=\"field_name\">\n            <label v-html=\"field_label\"></label>\n        </div>\n    ",
  mounted: function mounted() {
    if (!wpcfto_notice_mounted) {
      wpcfto_notice_mounted = true;
      Vue.nextTick(function () {
        var $ = jQuery;
        var current_notice = '';
        $('.column-1').each(function () {
          var $this = $(this);
          var $isNotice = $(this).find('.wpcfto_generic_field__notice');

          if ($isNotice.length) {
            current_notice = $isNotice.attr('data-notice');
            $this.attr('data-main', current_notice);
          } else {
            $this.addClass(current_notice).addClass('wpcfto_notice_visiblity');
          }
        });
        $('.wpcfto_generic_field__notice').on('click', function () {
          $('.wpcfto_generic_field__notice, .wpcfto_notice_visiblity').removeClass('opened');
          $('.' + $(this).data('notice')).toggleClass('opened');
        });
      });
    }
  },
  methods: {},
  watch: {
    value: function value(_value) {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDI3YTM4Ni5qcyJdLCJuYW1lcyI6WyJ3cGNmdG9fbm90aWNlX21vdW50ZWQiLCJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJ2YWx1ZSIsIm1vdW50X3N0YXR1cyIsInRlbXBsYXRlIiwibW91bnRlZCIsIm5leHRUaWNrIiwiJCIsImpRdWVyeSIsImN1cnJlbnRfbm90aWNlIiwiZWFjaCIsIiR0aGlzIiwiJGlzTm90aWNlIiwiZmluZCIsImxlbmd0aCIsImF0dHIiLCJhZGRDbGFzcyIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsIm1ldGhvZHMiLCJ3YXRjaCIsIl92YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSUEscUJBQXFCLEdBQUcsS0FBNUI7QUFDQUMsR0FBRyxDQUFDQyxTQUFKLENBQWMsc0JBQWQsRUFBc0M7QUFDcENDLEVBQUFBLEtBQUssRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFlBQTFCLEVBQXdDLFVBQXhDLEVBQW9ELGFBQXBELENBRDZCO0FBRXBDQyxFQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixXQUFPO0FBQ0xDLE1BQUFBLEtBQUssRUFBRSxFQURGO0FBRUxDLE1BQUFBLFlBQVksRUFBRTtBQUZULEtBQVA7QUFJRCxHQVBtQztBQVFwQ0MsRUFBQUEsUUFBUSxFQUFFLDROQVIwQjtBQVNwQ0MsRUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSSxDQUFDUixxQkFBTCxFQUE0QjtBQUMxQkEsTUFBQUEscUJBQXFCLEdBQUcsSUFBeEI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDUSxRQUFKLENBQWEsWUFBWTtBQUN2QixZQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxZQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQUYsUUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlRyxJQUFmLENBQW9CLFlBQVk7QUFDOUIsY0FBSUMsS0FBSyxHQUFHSixDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0EsY0FBSUssU0FBUyxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSwrQkFBYixDQUFoQjs7QUFFQSxjQUFJRCxTQUFTLENBQUNFLE1BQWQsRUFBc0I7QUFDcEJMLFlBQUFBLGNBQWMsR0FBR0csU0FBUyxDQUFDRyxJQUFWLENBQWUsYUFBZixDQUFqQjtBQUNBSixZQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxXQUFYLEVBQXdCTixjQUF4QjtBQUNELFdBSEQsTUFHTztBQUNMRSxZQUFBQSxLQUFLLENBQUNLLFFBQU4sQ0FBZVAsY0FBZixFQUErQk8sUUFBL0IsQ0FBd0MseUJBQXhDO0FBQ0Q7QUFDRixTQVZEO0FBV0FULFFBQUFBLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DVSxFQUFuQyxDQUFzQyxPQUF0QyxFQUErQyxZQUFZO0FBQ3pEVixVQUFBQSxDQUFDLENBQUMseURBQUQsQ0FBRCxDQUE2RFcsV0FBN0QsQ0FBeUUsUUFBekU7QUFDQVgsVUFBQUEsQ0FBQyxDQUFDLE1BQU1BLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU4sSUFBUixDQUFhLFFBQWIsQ0FBUCxDQUFELENBQWdDa0IsV0FBaEMsQ0FBNEMsUUFBNUM7QUFDRCxTQUhEO0FBSUQsT0FsQkQ7QUFtQkQ7QUFDRixHQWhDbUM7QUFpQ3BDQyxFQUFBQSxPQUFPLEVBQUUsRUFqQzJCO0FBa0NwQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xuQixJQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlb0IsTUFBZixFQUF1QixDQUFFO0FBRDNCO0FBbEM2QixDQUF0QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgd3BjZnRvX25vdGljZV9tb3VudGVkID0gZmFsc2U7XG5WdWUuY29tcG9uZW50KCd3cGNmdG9fbm90aWNlX2Jhbm5lcicsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgbW91bnRfc3RhdHVzOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZV9iYW5uZXJcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfbmFtZVxcXCIgdi1iaW5kOmRhdGEtbm90aWNlPVxcXCJmaWVsZF9uYW1lXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBpZiAoIXdwY2Z0b19ub3RpY2VfbW91bnRlZCkge1xuICAgICAgd3BjZnRvX25vdGljZV9tb3VudGVkID0gdHJ1ZTtcbiAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkID0galF1ZXJ5O1xuICAgICAgICB2YXIgY3VycmVudF9ub3RpY2UgPSAnJztcbiAgICAgICAgJCgnLmNvbHVtbi0xJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGlzTm90aWNlID0gJCh0aGlzKS5maW5kKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZScpO1xuXG4gICAgICAgICAgaWYgKCRpc05vdGljZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfbm90aWNlID0gJGlzTm90aWNlLmF0dHIoJ2RhdGEtbm90aWNlJyk7XG4gICAgICAgICAgICAkdGhpcy5hdHRyKCdkYXRhLW1haW4nLCBjdXJyZW50X25vdGljZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKGN1cnJlbnRfbm90aWNlKS5hZGRDbGFzcygnd3BjZnRvX25vdGljZV92aXNpYmxpdHknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZSwgLndwY2Z0b19ub3RpY2VfdmlzaWJsaXR5JykucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICQoJy4nICsgJCh0aGlzKS5kYXRhKCdub3RpY2UnKSkudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge31cbiAgfVxufSk7Il19
},{}]},{},[1])