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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTdmNzI2MC5qcyJdLCJuYW1lcyI6WyJ3cGNmdG9fbm90aWNlX21vdW50ZWQiLCJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJ2YWx1ZSIsIm1vdW50X3N0YXR1cyIsInRlbXBsYXRlIiwibW91bnRlZCIsIm5leHRUaWNrIiwiJCIsImpRdWVyeSIsImN1cnJlbnRfbm90aWNlIiwiZWFjaCIsIiR0aGlzIiwiJGlzTm90aWNlIiwiZmluZCIsImxlbmd0aCIsImF0dHIiLCJhZGRDbGFzcyIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsIm1ldGhvZHMiLCJ3YXRjaCIsIl92YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSUEscUJBQXFCLEdBQUcsS0FBNUI7QUFDQUMsR0FBRyxDQUFDQyxTQUFKLENBQWMsZUFBZCxFQUErQjtBQUM3QkMsRUFBQUEsS0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsWUFBMUIsRUFBd0MsVUFBeEMsRUFBb0QsYUFBcEQsQ0FEc0I7QUFFN0JDLEVBQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsTUFBQUEsWUFBWSxFQUFFO0FBRlQsS0FBUDtBQUlELEdBUDRCO0FBUTdCQyxFQUFBQSxRQUFRLEVBQUUsa1ZBUm1CO0FBUzdCQyxFQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJLENBQUNSLHFCQUFMLEVBQTRCO0FBQzFCQSxNQUFBQSxxQkFBcUIsR0FBRyxJQUF4QjtBQUNBQyxNQUFBQSxHQUFHLENBQUNRLFFBQUosQ0FBYSxZQUFZO0FBQ3ZCLFlBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLFlBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBRixRQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVHLElBQWYsQ0FBb0IsWUFBWTtBQUM5QixjQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxjQUFJSyxTQUFTLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLCtCQUFiLENBQWhCOztBQUVBLGNBQUlELFNBQVMsQ0FBQ0UsTUFBZCxFQUFzQjtBQUNwQkwsWUFBQUEsY0FBYyxHQUFHRyxTQUFTLENBQUNHLElBQVYsQ0FBZSxhQUFmLENBQWpCO0FBQ0FKLFlBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLFdBQVgsRUFBd0JOLGNBQXhCO0FBQ0QsV0FIRCxNQUdPO0FBQ0xFLFlBQUFBLEtBQUssQ0FBQ0ssUUFBTixDQUFlUCxjQUFmLEVBQStCTyxRQUEvQixDQUF3Qyx5QkFBeEM7QUFDRDtBQUNGLFNBVkQ7QUFXQVQsUUFBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNVLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFlBQVk7QUFDekRWLFVBQUFBLENBQUMsQ0FBQyx5REFBRCxDQUFELENBQTZEVyxXQUE3RCxDQUF5RSxRQUF6RTtBQUNBWCxVQUFBQSxDQUFDLENBQUMsTUFBTUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTixJQUFSLENBQWEsUUFBYixDQUFQLENBQUQsQ0FBZ0NrQixXQUFoQyxDQUE0QyxRQUE1QztBQUNELFNBSEQ7QUFJRCxPQWxCRDtBQW1CRDtBQUNGLEdBaEM0QjtBQWlDN0JDLEVBQUFBLE9BQU8sRUFBRSxFQWpDb0I7QUFrQzdCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTG5CLElBQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVvQixNQUFmLEVBQXVCLENBQUU7QUFEM0I7QUFsQ3NCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB3cGNmdG9fbm90aWNlX21vdW50ZWQgPSBmYWxzZTtcblZ1ZS5jb21wb25lbnQoJ3dwY2Z0b19ub3RpY2UnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9sYWJlbCcsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG1vdW50X3N0YXR1czogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19ub3RpY2VcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfbmFtZVxcXCIgdi1iaW5kOmRhdGEtbm90aWNlPVxcXCJmaWVsZF9uYW1lXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgdi1odG1sPVxcXCJmaWVsZF9sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZmllbGQtZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICBcIixcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBpZiAoIXdwY2Z0b19ub3RpY2VfbW91bnRlZCkge1xuICAgICAgd3BjZnRvX25vdGljZV9tb3VudGVkID0gdHJ1ZTtcbiAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkID0galF1ZXJ5O1xuICAgICAgICB2YXIgY3VycmVudF9ub3RpY2UgPSAnJztcbiAgICAgICAgJCgnLmNvbHVtbi0xJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGlzTm90aWNlID0gJCh0aGlzKS5maW5kKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZScpO1xuXG4gICAgICAgICAgaWYgKCRpc05vdGljZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfbm90aWNlID0gJGlzTm90aWNlLmF0dHIoJ2RhdGEtbm90aWNlJyk7XG4gICAgICAgICAgICAkdGhpcy5hdHRyKCdkYXRhLW1haW4nLCBjdXJyZW50X25vdGljZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKGN1cnJlbnRfbm90aWNlKS5hZGRDbGFzcygnd3BjZnRvX25vdGljZV92aXNpYmxpdHknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcud3BjZnRvX2dlbmVyaWNfZmllbGRfX25vdGljZSwgLndwY2Z0b19ub3RpY2VfdmlzaWJsaXR5JykucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICQoJy4nICsgJCh0aGlzKS5kYXRhKCdub3RpY2UnKSkudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge30sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge31cbiAgfVxufSk7Il19
},{}]},{},[1])