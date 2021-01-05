(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function ($) {
  $(document).ready(function () {
    $('[data-vue]').each(function () {
      var $this = $(this);
      var data_var = $this.attr('data-vue');
      var data_source = $this.attr('data-source');
      new Vue({
        el: $(this)[0],
        data: function data() {
          return {
            loading: false,
            data: ''
          };
        },
        mounted: function mounted() {
          this.getSettings();
        },
        methods: {
          initSubmenu: function initSubmenu() {
            Vue.nextTick().then(function () {
              (function ($) {
                /*Hide all fields in submenu*/
                var submenu_tab_fields = $('.wpcfto-tab.has-submenu-items [data-field]');
                submenu_tab_fields.css({
                  display: 'none'
                });
                var $sub_menu = $('.wpcfto-submenus .active');
                var sub_menu_section = $sub_menu.attr('data-submenu');
                $('.' + sub_menu_section).removeAttr('style');
                submenu_tab_fields.parents('.wpcfto_group_started').css({
                  display: 'none'
                });
                $('.' + sub_menu_section).parents('.wpcfto_group_started').removeAttr('style');
              })(jQuery);
            });
          },
          changeTabFromAnchor: function changeTabFromAnchor() {
            var _this = this;

            var hash = window.location.hash;
            var hashParts = hash.split('#');

            if (typeof hashParts[1] !== 'undefined') {
              Vue.nextTick(function () {
                _this.changeTab(hashParts[1]);
              });
            }
          },
          changeTab: function changeTab(tab) {
            var $tab = $('#' + tab);
            $tab.closest('.stm_metaboxes_grid__inner').find('.wpcfto-tab').removeClass('active');
            $tab.addClass('active');
            var $section = $('div[data-section="' + tab + '"]');
            $tab.closest('.stm_metaboxes_grid__inner').find('.wpcfto-nav').removeClass('active');
            $section.closest('.wpcfto-nav').addClass('active');
            history.pushState(null, null, '#' + tab);
            /*if has submenu*/

            if ($section.closest('.wpcfto-nav').hasClass('has-submenu')) {
              var $submenu = $section.closest('.wpcfto-nav').find('.wpcfto-submenus [data-submenu]').eq(0);
              this.changeSubMenu($submenu.attr('data-submenu'));
            }
          },
          changeSubMenu: function changeSubMenu(sub_menu) {
            var $submenu = $('[data-submenu="' + sub_menu + '"]');
            $('[data-submenu]').removeClass('active');
            $submenu.addClass('active');
            this.initSubmenu();
          },
          getSettings: function getSettings() {
            var _this = this;

            _this.loading = true;
            this.$http.get(stm_wpcfto_ajaxurl + '?action=stm_wpcfto_get_settings&source=' + data_source + '&name=' + data_var).then(function (r) {
              _this.$set(_this, 'data', r.body);

              _this.loading = false;
              this.changeTabFromAnchor();
              this.initSubmenu();
            });
          },
          saveSettings: function saveSettings(id) {
            var vm = this;
            vm.loading = true;
            this.$http.post(stm_wpcfto_ajaxurl + '?action=stm_save_settings&nonce=' + stm_wpcfto_nonces['stm_save_settings'] + '&name=' + id, JSON.stringify(vm.data)).then(function (response) {
              vm.loading = false;
            });
          },
          initOpen: function initOpen(field) {
            if (typeof field.opened === 'undefined') {
              this.$set(field, 'opened', !!field.value);
            }
          },
          openField: function openField(field) {
            var opened = !field.opened;
            this.$set(field, 'opened', opened);

            if (!field.opened) {
              this.$set(field, 'value', '');
            }
          },
          enableAddon: function enableAddon($event, option) {
            var _this = this;

            Vue.nextTick(function () {
              (function ($) {
                var currentItem = $($event.target);
                currentItem.addClass('loading');
                var url = stm_wpcfto_ajaxurl + '?action=stm_lms_enable_addon&addon=' + option;

                _this.$http.get(url).then(function (response) {
                  currentItem.removeClass('loading');
                  var $container = $('.stm_lms_addon_group_settings_' + option);
                  $container.each(function () {
                    var $this = $(this);
                    $this.removeClass('is_pro is_pro_in_addon');
                    $this.find('.field_overlay').remove();
                    $this.find('.pro-notice').remove();
                  });
                });
              })(jQuery);
            });
          }
        }
      });
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZGI3YmU5MWEuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiJHRoaXMiLCJkYXRhX3ZhciIsImF0dHIiLCJkYXRhX3NvdXJjZSIsIlZ1ZSIsImVsIiwiZGF0YSIsImxvYWRpbmciLCJtb3VudGVkIiwiZ2V0U2V0dGluZ3MiLCJtZXRob2RzIiwiaW5pdFN1Ym1lbnUiLCJuZXh0VGljayIsInRoZW4iLCJzdWJtZW51X3RhYl9maWVsZHMiLCJjc3MiLCJkaXNwbGF5IiwiJHN1Yl9tZW51Iiwic3ViX21lbnVfc2VjdGlvbiIsInJlbW92ZUF0dHIiLCJwYXJlbnRzIiwialF1ZXJ5IiwiY2hhbmdlVGFiRnJvbUFuY2hvciIsIl90aGlzIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaFBhcnRzIiwic3BsaXQiLCJjaGFuZ2VUYWIiLCJ0YWIiLCIkdGFiIiwiY2xvc2VzdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJHNlY3Rpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaGFzQ2xhc3MiLCIkc3VibWVudSIsImVxIiwiY2hhbmdlU3ViTWVudSIsInN1Yl9tZW51IiwiJGh0dHAiLCJnZXQiLCJzdG1fd3BjZnRvX2FqYXh1cmwiLCJyIiwiJHNldCIsImJvZHkiLCJzYXZlU2V0dGluZ3MiLCJpZCIsInZtIiwicG9zdCIsInN0bV93cGNmdG9fbm9uY2VzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiaW5pdE9wZW4iLCJmaWVsZCIsIm9wZW5lZCIsInZhbHVlIiwib3BlbkZpZWxkIiwiZW5hYmxlQWRkb24iLCIkZXZlbnQiLCJvcHRpb24iLCJjdXJyZW50SXRlbSIsInRhcmdldCIsInVybCIsIiRjb250YWluZXIiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ1pBLEVBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtB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QUFYLEVBQTZCcUMsTUFBN0I7QUFDQXRFLG9CQUFBQSxLQUFLLENBQUNpQyxJQUFOLENBQVcsYUFBWCxFQUEwQnFDLE1BQTFCO0FBQ0QsbUJBTEQ7QUFNRCxpQkFURDtBQVVELGVBZkQsRUFlR2pELE1BZkg7QUFnQkQsYUFqQkQ7QUFrQkQ7QUF6R007QUFYSCxPQUFSO0FBdUhELEtBM0hEO0FBNEhELEdBN0hEO0FBOEhELENBL0hELEVBK0hHQSxNQS9ISCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXZ1ZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICB2YXIgZGF0YV92YXIgPSAkdGhpcy5hdHRyKCdkYXRhLXZ1ZScpO1xuICAgICAgdmFyIGRhdGFfc291cmNlID0gJHRoaXMuYXR0cignZGF0YS1zb3VyY2UnKTtcbiAgICAgIG5ldyBWdWUoe1xuICAgICAgICBlbDogJCh0aGlzKVswXSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiAnJ1xuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICAgICAgdGhpcy5nZXRTZXR0aW5ncygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgaW5pdFN1Ym1lbnU6IGZ1bmN0aW9uIGluaXRTdWJtZW51KCkge1xuICAgICAgICAgICAgVnVlLm5leHRUaWNrKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgICAgIC8qSGlkZSBhbGwgZmllbGRzIGluIHN1Ym1lbnUqL1xuICAgICAgICAgICAgICAgIHZhciBzdWJtZW51X3RhYl9maWVsZHMgPSAkKCcud3BjZnRvLXRhYi5oYXMtc3VibWVudS1pdGVtcyBbZGF0YS1maWVsZF0nKTtcbiAgICAgICAgICAgICAgICBzdWJtZW51X3RhYl9maWVsZHMuY3NzKHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciAkc3ViX21lbnUgPSAkKCcud3BjZnRvLXN1Ym1lbnVzIC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ViX21lbnVfc2VjdGlvbiA9ICRzdWJfbWVudS5hdHRyKCdkYXRhLXN1Ym1lbnUnKTtcbiAgICAgICAgICAgICAgICAkKCcuJyArIHN1Yl9tZW51X3NlY3Rpb24pLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3VibWVudV90YWJfZmllbGRzLnBhcmVudHMoJy53cGNmdG9fZ3JvdXBfc3RhcnRlZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuJyArIHN1Yl9tZW51X3NlY3Rpb24pLnBhcmVudHMoJy53cGNmdG9fZ3JvdXBfc3RhcnRlZCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgIH0pKGpRdWVyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoYW5nZVRhYkZyb21BbmNob3I6IGZ1bmN0aW9uIGNoYW5nZVRhYkZyb21BbmNob3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgdmFyIGhhc2hQYXJ0cyA9IGhhc2guc3BsaXQoJyMnKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoUGFydHNbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlVGFiKGhhc2hQYXJ0c1sxXSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hhbmdlVGFiOiBmdW5jdGlvbiBjaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgICAgICB2YXIgJHRhYiA9ICQoJyMnICsgdGFiKTtcbiAgICAgICAgICAgICR0YWIuY2xvc2VzdCgnLnN0bV9tZXRhYm94ZXNfZ3JpZF9faW5uZXInKS5maW5kKCcud3BjZnRvLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICR0YWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdmFyICRzZWN0aW9uID0gJCgnZGl2W2RhdGEtc2VjdGlvbj1cIicgKyB0YWIgKyAnXCJdJyk7XG4gICAgICAgICAgICAkdGFiLmNsb3Nlc3QoJy5zdG1fbWV0YWJveGVzX2dyaWRfX2lubmVyJykuZmluZCgnLndwY2Z0by1uYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkc2VjdGlvbi5jbG9zZXN0KCcud3BjZnRvLW5hdicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcjJyArIHRhYik7XG4gICAgICAgICAgICAvKmlmIGhhcyBzdWJtZW51Ki9cblxuICAgICAgICAgICAgaWYgKCRzZWN0aW9uLmNsb3Nlc3QoJy53cGNmdG8tbmF2JykuaGFzQ2xhc3MoJ2hhcy1zdWJtZW51JykpIHtcbiAgICAgICAgICAgICAgdmFyICRzdWJtZW51ID0gJHNlY3Rpb24uY2xvc2VzdCgnLndwY2Z0by1uYXYnKS5maW5kKCcud3BjZnRvLXN1Ym1lbnVzIFtkYXRhLXN1Ym1lbnVdJykuZXEoMCk7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3ViTWVudSgkc3VibWVudS5hdHRyKCdkYXRhLXN1Ym1lbnUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFuZ2VTdWJNZW51OiBmdW5jdGlvbiBjaGFuZ2VTdWJNZW51KHN1Yl9tZW51KSB7XG4gICAgICAgICAgICB2YXIgJHN1Ym1lbnUgPSAkKCdbZGF0YS1zdWJtZW51PVwiJyArIHN1Yl9tZW51ICsgJ1wiXScpO1xuICAgICAgICAgICAgJCgnW2RhdGEtc3VibWVudV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkc3VibWVudS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmluaXRTdWJtZW51KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZXR0aW5nczogZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXN0bV93cGNmdG9fZ2V0X3NldHRpbmdzJnNvdXJjZT0nICsgZGF0YV9zb3VyY2UgKyAnJm5hbWU9JyArIGRhdGFfdmFyKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgIF90aGlzLiRzZXQoX3RoaXMsICdkYXRhJywgci5ib2R5KTtcblxuICAgICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiRnJvbUFuY2hvcigpO1xuICAgICAgICAgICAgICB0aGlzLmluaXRTdWJtZW51KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNhdmVTZXR0aW5nczogZnVuY3Rpb24gc2F2ZVNldHRpbmdzKGlkKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdm0ubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3Qoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249c3RtX3NhdmVfc2V0dGluZ3Mmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWydzdG1fc2F2ZV9zZXR0aW5ncyddICsgJyZuYW1lPScgKyBpZCwgSlNPTi5zdHJpbmdpZnkodm0uZGF0YSkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5pdE9wZW46IGZ1bmN0aW9uIGluaXRPcGVuKGZpZWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkLm9wZW5lZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy4kc2V0KGZpZWxkLCAnb3BlbmVkJywgISFmaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcGVuRmllbGQ6IGZ1bmN0aW9uIG9wZW5GaWVsZChmaWVsZCkge1xuICAgICAgICAgICAgdmFyIG9wZW5lZCA9ICFmaWVsZC5vcGVuZWQ7XG4gICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICdvcGVuZWQnLCBvcGVuZWQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpZWxkLm9wZW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICd2YWx1ZScsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZUFkZG9uOiBmdW5jdGlvbiBlbmFibGVBZGRvbigkZXZlbnQsIG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gJCgkZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj1zdG1fbG1zX2VuYWJsZV9hZGRvbiZhZGRvbj0nICsgb3B0aW9uO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJy5zdG1fbG1zX2FkZG9uX2dyb3VwX3NldHRpbmdzXycgKyBvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2lzX3BybyBpc19wcm9faW5fYWRkb24nKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmZpZWxkX292ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLnByby1ub3RpY2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KShqUXVlcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KShqUXVlcnkpOyJdfQ==
},{}]},{},[1])