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
          this.clearEmptyGroups();
        },
        methods: {
          initSubmenu: function initSubmenu() {
            Vue.nextTick().then(function () {
              (function ($) {
                /*Hide all fields in submenu*/
                var submenu_tab_fields = $('.wpcfto-tab.has-submenu-items [data-field], .wpcfto-tab.has-submenu-items .wpcfto_group_started');
                submenu_tab_fields.css({
                  display: 'none'
                });
                var $sub_menu = $('.wpcfto-submenus .active');
                var sub_menu_section = $sub_menu.attr('data-submenu');
                var $submenu_section = $('.' + sub_menu_section);
                $submenu_section.removeAttr('style');
                submenu_tab_fields.parents('.wpcfto_group_started').css({
                  display: 'none'
                });
                $submenu_section.parents('.wpcfto_group_started').removeAttr('style');
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
          },
          clearEmptyGroups: function clearEmptyGroups() {
            Vue.nextTick().then(function () {
              (function ($) {
                $('.wpcfto_group_started').each(function () {
                  var $group = $(this);
                  var $childs = $group.find('.wpcfto-box-child');

                  if (!$childs.length) {
                    $group.addClass('no-childs-visible');
                  } else {
                    $group.removeClass('no-childs-visible');
                  }
                });
              })(jQuery);
            });
          }
        },
        watch: {
          data: {
            deep: true,
            handler: function handler() {
              var _this = this;

              setTimeout(function () {
                _this.clearEmptyGroups();
              }, 100);
            }
          }
        }
      });
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDFkZmI3NGQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiJHRoaXMiLCJkYXRhX3ZhciIsImF0dHIiLCJkYXRhX3NvdXJjZSIsIlZ1ZSIsImVsIiwiZGF0YSIsImxvYWRpbmciLCJtb3VudGVkIiwiZ2V0U2V0dGluZ3MiLCJjbGVhckVtcHR5R3JvdXBzIiwibWV0aG9kcyIsImluaXRTdWJtZW51IiwibmV4dFRpY2siLCJ0aGVuIiwic3VibWVudV90YWJfZmllbGRzIiwiY3NzIiwiZGlzcGxheSIsIiRzdWJfbWVudSIsInN1Yl9tZW51X3NlY3Rpb24iLCIkc3VibWVudV9zZWN0aW9uIiwicmVtb3ZlQXR0ciIsInBhcmVudHMiLCJqUXVlcnkiLCJjaGFuZ2VUYWJGcm9tQW5jaG9yIiwiX3RoaXMiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoUGFydHMiLCJzcGxpdCIsImNoYW5nZVRhYiIsInRhYiIsIiR0YWIiLCJjbG9zZXN0IiwiZmluZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkc2VjdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJoYXNDbGFzcyIsIiRzdWJtZW51IiwiZXEiLCJjaGFuZ2VTdWJNZW51Iiwic3ViX21lbnUiLCIkaHR0cCIsImdldCIsInN0bV93cGNmdG9fYWpheHVybCIsInIiLCIkc2V0IiwiYm9keSIsInNhdmVTZXR0aW5ncyIsImlkIiwidm0iLCJwb3N0Iiwic3RtX3dwY2Z0b19ub25jZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJpbml0T3BlbiIsImZpZWxkIiwib3BlbmVkIiwidmFsdWUiLCJvcGVuRmllbGQiLCJlbmFibGVBZGRvbiIsIiRldmVudCIsIm9wdGlvbiIsImN1cnJlbnRJdGVtIiwidGFyZ2V0IiwidXJsIiwiJGNvbnRhaW5lciIsInJlbW92ZSIsIiRncm91cCIsIiRjaGlsZHMiLCJsZW5ndGgiLCJ3YXRjaCIsImRlZXAiLCJoYW5k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LEdBQUcsSUFBWjs7QUFFQXNELGNBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ3JCdEQsZ0JBQUFBLEtBQUssQ0FBQ2YsZ0JBQU47QUFDRCxlQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0Q7QUFSRztBQUREO0FBeElELE9BQVI7QUFxSkQsS0F6SkQ7QUEwSkQsR0EzSkQ7QUE0SkQsQ0E3SkQsRUE2SkdhLE1BN0pIIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbihmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdnVlXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciBkYXRhX3ZhciA9ICR0aGlzLmF0dHIoJ2RhdGEtdnVlJyk7XG4gICAgICB2YXIgZGF0YV9zb3VyY2UgPSAkdGhpcy5hdHRyKCdkYXRhLXNvdXJjZScpO1xuICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAkKHRoaXMpWzBdLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6ICcnXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgICAgICB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5jbGVhckVtcHR5R3JvdXBzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBpbml0U3VibWVudTogZnVuY3Rpb24gaW5pdFN1Ym1lbnUoKSB7XG4gICAgICAgICAgICBWdWUubmV4dFRpY2soKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICAgICAgLypIaWRlIGFsbCBmaWVsZHMgaW4gc3VibWVudSovXG4gICAgICAgICAgICAgICAgdmFyIHN1Ym1lbnVfdGFiX2ZpZWxkcyA9ICQoJy53cGNmdG8tdGFiLmhhcy1zdWJtZW51LWl0ZW1zIFtkYXRhLWZpZWxkXSwgLndwY2Z0by10YWIuaGFzLXN1Ym1lbnUtaXRlbXMgLndwY2Z0b19ncm91cF9zdGFydGVkJyk7XG4gICAgICAgICAgICAgICAgc3VibWVudV90YWJfZmllbGRzLmNzcyh7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgJHN1Yl9tZW51ID0gJCgnLndwY2Z0by1zdWJtZW51cyAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdmFyIHN1Yl9tZW51X3NlY3Rpb24gPSAkc3ViX21lbnUuYXR0cignZGF0YS1zdWJtZW51Jyk7XG4gICAgICAgICAgICAgICAgdmFyICRzdWJtZW51X3NlY3Rpb24gPSAkKCcuJyArIHN1Yl9tZW51X3NlY3Rpb24pO1xuICAgICAgICAgICAgICAgICRzdWJtZW51X3NlY3Rpb24ucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdWJtZW51X3RhYl9maWVsZHMucGFyZW50cygnLndwY2Z0b19ncm91cF9zdGFydGVkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRzdWJtZW51X3NlY3Rpb24ucGFyZW50cygnLndwY2Z0b19ncm91cF9zdGFydGVkJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgfSkoalF1ZXJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hhbmdlVGFiRnJvbUFuY2hvcjogZnVuY3Rpb24gY2hhbmdlVGFiRnJvbUFuY2hvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICB2YXIgaGFzaFBhcnRzID0gaGFzaC5zcGxpdCgnIycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hQYXJ0c1sxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VUYWIoaGFzaFBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFuZ2VUYWI6IGZ1bmN0aW9uIGNoYW5nZVRhYih0YWIpIHtcbiAgICAgICAgICAgIHZhciAkdGFiID0gJCgnIycgKyB0YWIpO1xuICAgICAgICAgICAgJHRhYi5jbG9zZXN0KCcuc3RtX21ldGFib3hlc19ncmlkX19pbm5lcicpLmZpbmQoJy53cGNmdG8tdGFiJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHRhYi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgJHNlY3Rpb24gPSAkKCdkaXZbZGF0YS1zZWN0aW9uPVwiJyArIHRhYiArICdcIl0nKTtcbiAgICAgICAgICAgICR0YWIuY2xvc2VzdCgnLnN0bV9tZXRhYm94ZXNfZ3JpZF9faW5uZXInKS5maW5kKCcud3BjZnRvLW5hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRzZWN0aW9uLmNsb3Nlc3QoJy53cGNmdG8tbmF2JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJyMnICsgdGFiKTtcbiAgICAgICAgICAgIC8qaWYgaGFzIHN1Ym1lbnUqL1xuXG4gICAgICAgICAgICBpZiAoJHNlY3Rpb24uY2xvc2VzdCgnLndwY2Z0by1uYXYnKS5oYXNDbGFzcygnaGFzLXN1Ym1lbnUnKSkge1xuICAgICAgICAgICAgICB2YXIgJHN1Ym1lbnUgPSAkc2VjdGlvbi5jbG9zZXN0KCcud3BjZnRvLW5hdicpLmZpbmQoJy53cGNmdG8tc3VibWVudXMgW2RhdGEtc3VibWVudV0nKS5lcSgwKTtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdWJNZW51KCRzdWJtZW51LmF0dHIoJ2RhdGEtc3VibWVudScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoYW5nZVN1Yk1lbnU6IGZ1bmN0aW9uIGNoYW5nZVN1Yk1lbnUoc3ViX21lbnUpIHtcbiAgICAgICAgICAgIHZhciAkc3VibWVudSA9ICQoJ1tkYXRhLXN1Ym1lbnU9XCInICsgc3ViX21lbnUgKyAnXCJdJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1zdWJtZW51XScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRzdWJtZW51LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN1Ym1lbnUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFNldHRpbmdzOiBmdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249c3RtX3dwY2Z0b19nZXRfc2V0dGluZ3Mmc291cmNlPScgKyBkYXRhX3NvdXJjZSArICcmbmFtZT0nICsgZGF0YV92YXIpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgX3RoaXMuJHNldChfdGhpcywgJ2RhdGEnLCByLmJvZHkpO1xuXG4gICAgICAgICAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUYWJGcm9tQW5jaG9yKCk7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdFN1Ym1lbnUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2F2ZVNldHRpbmdzOiBmdW5jdGlvbiBzYXZlU2V0dGluZ3MoaWQpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICB2bS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdChzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj1zdG1fc2F2ZV9zZXR0aW5ncyZub25jZT0nICsgc3RtX3dwY2Z0b19ub25jZXNbJ3N0bV9zYXZlX3NldHRpbmdzJ10gKyAnJm5hbWU9JyArIGlkLCBKU09OLnN0cmluZ2lmeSh2bS5kYXRhKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbml0T3BlbjogZnVuY3Rpb24gaW5pdE9wZW4oZmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQub3BlbmVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICdvcGVuZWQnLCAhIWZpZWxkLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZW5GaWVsZDogZnVuY3Rpb24gb3BlbkZpZWxkKGZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgb3BlbmVkID0gIWZpZWxkLm9wZW5lZDtcbiAgICAgICAgICAgIHRoaXMuJHNldChmaWVsZCwgJ29wZW5lZCcsIG9wZW5lZCk7XG5cbiAgICAgICAgICAgIGlmICghZmllbGQub3BlbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuJHNldChmaWVsZCwgJ3ZhbHVlJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5hYmxlQWRkb246IGZ1bmN0aW9uIGVuYWJsZUFkZG9uKCRldmVudCwgb3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSAkKCRldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXN0bV9sbXNfZW5hYmxlX2FkZG9uJmFkZG9uPScgKyBvcHRpb247XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJCgnLnN0bV9sbXNfYWRkb25fZ3JvdXBfc2V0dGluZ3NfJyArIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnaXNfcHJvIGlzX3Byb19pbl9hZGRvbicpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuZmllbGRfb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcucHJvLW5vdGljZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pKGpRdWVyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsZWFyRW1wdHlHcm91cHM6IGZ1bmN0aW9uIGNsZWFyRW1wdHlHcm91cHMoKSB7XG4gICAgICAgICAgICBWdWUubmV4dFRpY2soKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICAgICAgJCgnLndwY2Z0b19ncm91cF9zdGFydGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJGdyb3VwID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHZhciAkY2hpbGRzID0gJGdyb3VwLmZpbmQoJy53cGNmdG8tYm94LWNoaWxkJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghJGNoaWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGdyb3VwLmFkZENsYXNzKCduby1jaGlsZHMtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGdyb3VwLnJlbW92ZUNsYXNzKCduby1jaGlsZHMtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KShqUXVlcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyRW1wdHlHcm91cHMoKTtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7Il19
},{}]},{},[1])