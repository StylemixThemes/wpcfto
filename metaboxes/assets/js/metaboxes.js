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
            /*Scroll top*/


            $("html, body").animate({
              scrollTop: $tab.closest('.stm_metaboxes_grid__inner').offset().top - 100
            }, "fast");
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
            this.$http.post(stm_wpcfto_ajaxurl + '?action=wpcfto_save_settings&nonce=' + stm_wpcfto_nonces['wpcfto_save_settings'] + '&name=' + id, JSON.stringify(vm.data)).then(function (response) {
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

                _this.initSubmenu();
              }, 100);
            }
          }
        }
      });
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjczMjFmMzEuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiJHRoaXMiLCJkYXRhX3ZhciIsImF0dHIiLCJkYXRhX3NvdXJjZSIsIlZ1ZSIsImVsIiwiZGF0YSIsImxvYWRpbmciLCJtb3VudGVkIiwiZ2V0U2V0dGluZ3MiLCJjbGVhckVtcHR5R3JvdXBzIiwibWV0aG9kcyIsImluaXRTdWJtZW51IiwibmV4dFRpY2siLCJ0aGVuIiwic3VibWVudV90YWJfZmllbGRzIiwiY3NzIiwiZGlzcGxheSIsIiRzdWJfbWVudSIsInN1Yl9tZW51X3NlY3Rpb24iLCIkc3VibWVudV9zZWN0aW9uIiwicmVtb3ZlQXR0ciIsInBhcmVudHMiLCJqUXVlcnkiLCJjaGFuZ2VUYWJGcm9tQW5jaG9yIiwiX3RoaXMiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoUGFydHMiLCJzcGxpdCIsImNoYW5nZVRhYiIsInRhYiIsIiR0YWIiLCJjbG9zZXN0IiwiZmluZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkc2VjdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJoYXNDbGFzcyIsIiRzdWJtZW51IiwiZXEiLCJjaGFuZ2VTdWJNZW51IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInN1Yl9tZW51IiwiJGh0dHAiLCJnZXQiLCJzdG1fd3BjZnRvX2FqYXh1cmwiLCJyIiwiJHNldCIsImJvZHkiLCJzYXZlU2V0dGluZ3MiLCJpZCIsInZtIiwicG9zdCIsInN0bV93cGNmdG9fbm9uY2VzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiaW5pdE9wZW4iLCJmaWVsZCIsIm9wZW5lZCIsInZhbHVlIiwib3BlbkZpZWxkIiwiZW5hYmxlQWRkb24iLCIkZXZlbnQiLCJvcHRpb24iLCJjdXJyZW50SXRlbSIsInRhcmdldCIsInVybCIsIiRjb250YWluZXIiLCJyZW1vdmUiLCIkZ3JvdXAiLCIk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QUFuQjtBQUNEO0FBQ0YsaUJBVEQ7QUFVRCxlQVhELEVBV0diLE1BWEg7QUFZRCxhQWJEO0FBY0Q7QUFoSU0sU0FaSDtBQThJTnlELFFBQUFBLEtBQUssRUFBRTtBQUNMMUUsVUFBQUEsSUFBSSxFQUFFO0FBQ0oyRSxZQUFBQSxJQUFJLEVBQUUsSUFERjtBQUVKQyxZQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixrQkFBSXpELEtBQUssR0FBRyxJQUFaOztBQUVBMEQsY0FBQUEsVUFBVSxDQUFDLFlBQVk7QUFDckIxRCxnQkFBQUEsS0FBSyxDQUFDZixnQkFBTjs7QUFFQWUsZ0JBQUFBLEtBQUssQ0FBQ2IsV0FBTjtBQUNELGVBSlMsRUFJUCxHQUpPLENBQVY7QUFLRDtBQVZHO0FBREQ7QUE5SUQsT0FBUjtBQTZKRCxLQWpLRDtBQWtLRCxHQW5LRDtBQW9LRCxDQXJLRCxFQXFLR1csTUFyS0giLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uICgkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS12dWVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgdmFyIGRhdGFfdmFyID0gJHRoaXMuYXR0cignZGF0YS12dWUnKTtcbiAgICAgIHZhciBkYXRhX3NvdXJjZSA9ICR0aGlzLmF0dHIoJ2RhdGEtc291cmNlJyk7XG4gICAgICBuZXcgVnVlKHtcbiAgICAgICAgZWw6ICQodGhpcylbMF0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogJydcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICAgIHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmNsZWFyRW1wdHlHcm91cHMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGluaXRTdWJtZW51OiBmdW5jdGlvbiBpbml0U3VibWVudSgpIHtcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICAgICAgICAvKkhpZGUgYWxsIGZpZWxkcyBpbiBzdWJtZW51Ki9cbiAgICAgICAgICAgICAgICB2YXIgc3VibWVudV90YWJfZmllbGRzID0gJCgnLndwY2Z0by10YWIuaGFzLXN1Ym1lbnUtaXRlbXMgW2RhdGEtZmllbGRdLCAud3BjZnRvLXRhYi5oYXMtc3VibWVudS1pdGVtcyAud3BjZnRvX2dyb3VwX3N0YXJ0ZWQnKTtcbiAgICAgICAgICAgICAgICBzdWJtZW51X3RhYl9maWVsZHMuY3NzKHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciAkc3ViX21lbnUgPSAkKCcud3BjZnRvLXN1Ym1lbnVzIC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ViX21lbnVfc2VjdGlvbiA9ICRzdWJfbWVudS5hdHRyKCdkYXRhLXN1Ym1lbnUnKTtcbiAgICAgICAgICAgICAgICB2YXIgJHN1Ym1lbnVfc2VjdGlvbiA9ICQoJy4nICsgc3ViX21lbnVfc2VjdGlvbik7XG4gICAgICAgICAgICAgICAgJHN1Ym1lbnVfc2VjdGlvbi5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHN1Ym1lbnVfdGFiX2ZpZWxkcy5wYXJlbnRzKCcud3BjZnRvX2dyb3VwX3N0YXJ0ZWQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHN1Ym1lbnVfc2VjdGlvbi5wYXJlbnRzKCcud3BjZnRvX2dyb3VwX3N0YXJ0ZWQnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICB9KShqUXVlcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFuZ2VUYWJGcm9tQW5jaG9yOiBmdW5jdGlvbiBjaGFuZ2VUYWJGcm9tQW5jaG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIHZhciBoYXNoUGFydHMgPSBoYXNoLnNwbGl0KCcjJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFBhcnRzWzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVRhYihoYXNoUGFydHNbMV0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoYW5nZVRhYjogZnVuY3Rpb24gY2hhbmdlVGFiKHRhYikge1xuICAgICAgICAgICAgdmFyICR0YWIgPSAkKCcjJyArIHRhYik7XG4gICAgICAgICAgICAkdGFiLmNsb3Nlc3QoJy5zdG1fbWV0YWJveGVzX2dyaWRfX2lubmVyJykuZmluZCgnLndwY2Z0by10YWInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkdGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciAkc2VjdGlvbiA9ICQoJ2RpdltkYXRhLXNlY3Rpb249XCInICsgdGFiICsgJ1wiXScpO1xuICAgICAgICAgICAgJHRhYi5jbG9zZXN0KCcuc3RtX21ldGFib3hlc19ncmlkX19pbm5lcicpLmZpbmQoJy53cGNmdG8tbmF2JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHNlY3Rpb24uY2xvc2VzdCgnLndwY2Z0by1uYXYnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnIycgKyB0YWIpO1xuICAgICAgICAgICAgLyppZiBoYXMgc3VibWVudSovXG5cbiAgICAgICAgICAgIGlmICgkc2VjdGlvbi5jbG9zZXN0KCcud3BjZnRvLW5hdicpLmhhc0NsYXNzKCdoYXMtc3VibWVudScpKSB7XG4gICAgICAgICAgICAgIHZhciAkc3VibWVudSA9ICRzZWN0aW9uLmNsb3Nlc3QoJy53cGNmdG8tbmF2JykuZmluZCgnLndwY2Z0by1zdWJtZW51cyBbZGF0YS1zdWJtZW51XScpLmVxKDApO1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN1Yk1lbnUoJHN1Ym1lbnUuYXR0cignZGF0YS1zdWJtZW51JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLypTY3JvbGwgdG9wKi9cblxuXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkdGFiLmNsb3Nlc3QoJy5zdG1fbWV0YWJveGVzX2dyaWRfX2lubmVyJykub2Zmc2V0KCkudG9wIC0gMTAwXG4gICAgICAgICAgICB9LCBcImZhc3RcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFuZ2VTdWJNZW51OiBmdW5jdGlvbiBjaGFuZ2VTdWJNZW51KHN1Yl9tZW51KSB7XG4gICAgICAgICAgICB2YXIgJHN1Ym1lbnUgPSAkKCdbZGF0YS1zdWJtZW51PVwiJyArIHN1Yl9tZW51ICsgJ1wiXScpO1xuICAgICAgICAgICAgJCgnW2RhdGEtc3VibWVudV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkc3VibWVudS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmluaXRTdWJtZW51KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZXR0aW5nczogZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KHN0bV93cGNmdG9fYWpheHVybCArICc/YWN0aW9uPXN0bV93cGNmdG9fZ2V0X3NldHRpbmdzJnNvdXJjZT0nICsgZGF0YV9zb3VyY2UgKyAnJm5hbWU9JyArIGRhdGFfdmFyKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgIF90aGlzLiRzZXQoX3RoaXMsICdkYXRhJywgci5ib2R5KTtcblxuICAgICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiRnJvbUFuY2hvcigpO1xuICAgICAgICAgICAgICB0aGlzLmluaXRTdWJtZW51KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNhdmVTZXR0aW5nczogZnVuY3Rpb24gc2F2ZVNldHRpbmdzKGlkKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdm0ubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3Qoc3RtX3dwY2Z0b19hamF4dXJsICsgJz9hY3Rpb249d3BjZnRvX3NhdmVfc2V0dGluZ3Mmbm9uY2U9JyArIHN0bV93cGNmdG9fbm9uY2VzWyd3cGNmdG9fc2F2ZV9zZXR0aW5ncyddICsgJyZuYW1lPScgKyBpZCwgSlNPTi5zdHJpbmdpZnkodm0uZGF0YSkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5pdE9wZW46IGZ1bmN0aW9uIGluaXRPcGVuKGZpZWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkLm9wZW5lZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy4kc2V0KGZpZWxkLCAnb3BlbmVkJywgISFmaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcGVuRmllbGQ6IGZ1bmN0aW9uIG9wZW5GaWVsZChmaWVsZCkge1xuICAgICAgICAgICAgdmFyIG9wZW5lZCA9ICFmaWVsZC5vcGVuZWQ7XG4gICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICdvcGVuZWQnLCBvcGVuZWQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpZWxkLm9wZW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICd2YWx1ZScsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZUFkZG9uOiBmdW5jdGlvbiBlbmFibGVBZGRvbigkZXZlbnQsIG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gJCgkZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzdG1fd3BjZnRvX2FqYXh1cmwgKyAnP2FjdGlvbj1zdG1fbG1zX2VuYWJsZV9hZGRvbiZhZGRvbj0nICsgb3B0aW9uO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJy5zdG1fbG1zX2FkZG9uX2dyb3VwX3NldHRpbmdzXycgKyBvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2lzX3BybyBpc19wcm9faW5fYWRkb24nKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmZpZWxkX292ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLnByby1ub3RpY2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KShqUXVlcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGVhckVtcHR5R3JvdXBzOiBmdW5jdGlvbiBjbGVhckVtcHR5R3JvdXBzKCkge1xuICAgICAgICAgICAgVnVlLm5leHRUaWNrKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgICAgICQoJy53cGNmdG9fZ3JvdXBfc3RhcnRlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyICRncm91cCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgJGNoaWxkcyA9ICRncm91cC5maW5kKCcud3BjZnRvLWJveC1jaGlsZCcpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoISRjaGlsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICRncm91cC5hZGRDbGFzcygnbm8tY2hpbGRzLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRncm91cC5yZW1vdmVDbGFzcygnbm8tY2hpbGRzLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkoalF1ZXJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhckVtcHR5R3JvdXBzKCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5pbml0U3VibWVudSgpO1xuICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkoalF1ZXJ5KTsiXX0=
},{}]},{},[1])