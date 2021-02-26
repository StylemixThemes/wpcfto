(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var wpcfto_notice_mounted = false;
Vue.component('wpcfto_notice', {
  props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: '',
      mount_status: false
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__notice\" v-bind:class=\"field_name\" v-bind:data-notice=\"field_name\">\n            <label v-html=\"field_label\"></label>\n            <span v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></span>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfY2RiZjljLmpzIl0sIm5hbWVzIjpbIndwY2Z0b19ub3RpY2VfbW91bnRlZCIsIlZ1ZSIsImNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsInZhbHVlIiwibW91bnRfc3RhdHVzIiwidGVtcGxhdGUiLCJtb3VudGVkIiwibmV4dFRpY2siLCIkIiwialF1ZXJ5IiwiY3VycmVudF9ub3RpY2UiLCJlYWNoIiwiJHRoaXMiLCIkaXNOb3RpY2UiLCJmaW5kIiwibGVuZ3RoIiwiYXR0ciIsImFkZENsYXNzIiwib24iLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwibWV0aG9kcyIsIndhdGNoIiwiX3ZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxxQkFBcUIsR0FBRyxLQUE1QjtBQUNBQyxHQUFHLENBQUNDLFNBQUosQ0FBYyxlQUFkLEVBQStCO0FBQzdCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixZQUExQixFQUF3QyxVQUF4QyxFQUFvRCxhQUFwRCxDQURzQjtBQUU3QkMsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMQyxNQUFBQSxZQUFZLEVBQUU7QUFGVCxLQUFQO0FBSUQsR0FQNEI7QUFRN0JDLEVBQUFBLFFBQVEsRUFBRSxrVkFSbUI7QUFTN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksQ0FBQ1IscUJBQUwsRUFBNEI7QUFDMUJBLE1BQUFBLHFCQUFxQixHQUFHLElBQXhCO0FBQ0FDLE1BQUFBLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLFlBQVk7QUFDdkIsWUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsWUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0FGLFFBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUcsSUFBZixDQUFvQixZQUFZO0FBQzlCLGNBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLGNBQUlLLFNBQVMsR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsK0JBQWIsQ0FBaEI7O0FBRUEsY0FBSUQsU0FBUyxDQUFDRSxNQUFkLEVBQXNCO0FBQ3BCTCxZQUFBQSxjQUFjLEdBQUdHLFNBQVMsQ0FBQ0csSUFBVixDQUFlLGFBQWYsQ0FBakI7QUFDQUosWUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsV0FBWCxFQUF3Qk4sY0FBeEI7QUFDRCxXQUhELE1BR087QUFDTEUsWUFBQUEsS0FBSyxDQUFDSyxRQUFOLENBQWVQLGNBQWYsRUFBK0JPLFFBQS9CLENBQXdDLHlCQUF4QztBQUNEO0FBQ0YsU0FWRDtBQVdBVCxRQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1UsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBWTtBQUN6RFYsVUFBQUEsQ0FBQyxDQUFDLHlEQUFELENBQUQsQ0FBNkRXLFdBQTdELENBQXlFLFFBQXpFO0FBQ0FYLFVBQUFBLENBQUMsQ0FBQyxNQUFNQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFOLElBQVIsQ0FBYSxRQUFiLENBQVAsQ0FBRCxDQUFnQ2tCLFdBQWhDLENBQTRDLFFBQTVDO0FBQ0QsU0FIRDtBQUlELE9BbEJEO0FBbUJEO0FBQ0YsR0FoQzRCO0FBaUM3QkMsRUFBQUEsT0FBTyxFQUFFLEVBakNvQjtBQWtDN0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMbkIsSUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZW9CLE1BQWYsRUFBdUIsQ0FBRTtBQUQzQjtBQWxDc0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHdwY2Z0b19ub3RpY2VfbW91bnRlZCA9IGZhbHNlO1xuVnVlLmNvbXBvbmVudCgnd3BjZnRvX25vdGljZScsIHtcbiAgcHJvcHM6IFsnZmllbGRzJywgJ2ZpZWxkX2xhYmVsJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfaWQnLCAnZmllbGRfdmFsdWUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgbW91bnRfc3RhdHVzOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3BjZnRvX2dlbmVyaWNfZmllbGQgd3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZVxcXCIgdi1iaW5kOmNsYXNzPVxcXCJmaWVsZF9uYW1lXFxcIiB2LWJpbmQ6ZGF0YS1ub3RpY2U9XFxcImZpZWxkX25hbWVcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCB2LWh0bWw9XFxcImZpZWxkX2xhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkcy5kZXNjcmlwdGlvblxcXCIgdi1odG1sPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmaWVsZC1kZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICghd3BjZnRvX25vdGljZV9tb3VudGVkKSB7XG4gICAgICB3cGNmdG9fbm90aWNlX21vdW50ZWQgPSB0cnVlO1xuICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICQgPSBqUXVlcnk7XG4gICAgICAgIHZhciBjdXJyZW50X25vdGljZSA9ICcnO1xuICAgICAgICAkKCcuY29sdW1uLTEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkaXNOb3RpY2UgPSAkKHRoaXMpLmZpbmQoJy53cGNmdG9fZ2VuZXJpY19maWVsZF9fbm90aWNlJyk7XG5cbiAgICAgICAgICBpZiAoJGlzTm90aWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudF9ub3RpY2UgPSAkaXNOb3RpY2UuYXR0cignZGF0YS1ub3RpY2UnKTtcbiAgICAgICAgICAgICR0aGlzLmF0dHIoJ2RhdGEtbWFpbicsIGN1cnJlbnRfbm90aWNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoY3VycmVudF9ub3RpY2UpLmFkZENsYXNzKCd3cGNmdG9fbm90aWNlX3Zpc2libGl0eScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoJy53cGNmdG9fZ2VuZXJpY19maWVsZF9fbm90aWNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoJy53cGNmdG9fZ2VuZXJpY19maWVsZF9fbm90aWNlLCAud3BjZnRvX25vdGljZV92aXNpYmxpdHknKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgJCgnLicgKyAkKHRoaXMpLmRhdGEoJ25vdGljZScpKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7fVxuICB9XG59KTsiXX0=
},{}]},{},[1])