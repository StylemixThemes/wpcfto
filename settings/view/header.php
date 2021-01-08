<?php
/**
 * @var $id
 */
?>


<div v-cloak v-if="data !== ''" class="wpcfto_settings_head">

	<div class="wpcfto_settings_head__side">

		<div class="wpcfto_settings_head__logo">
			<img src="<?php echo apply_filters('wpcfto_header_logo', STM_WPCFTO_URL. '/metaboxes/assets/images/stm-logo.svg'); ?>" alt="Logo">
		</div>

		<div class="wpcfto_settings_head__label">
			<div class="wpcfto_settings_head__title"><?php echo apply_filters('wpcfto_header_title', esc_html__('Stylemix Themes', 'wp-custom-fields-theme-options')); ?></div>
			<div class="wpcfto_settings_head__subtitle"><?php echo apply_filters('wpcfto_header_subtitle', esc_html__('Theme Options', 'wp-custom-fields-theme-options')); ?></div>
		</div>

	</div>

	<div class="wpcfto_settings_head__content">

		<div class="wpcfto_search_group">
			<input type="text" name="" value="" class="wpcfto-search-field" placeholder="<?php esc_html_e( 'Search', 'wp-custom-fields-theme-options' ); ?>" />
		</div>

		<a href="#"
		   @click.prevent="saveSettings('<?php echo esc_attr( $id ); ?>')"
		   v-bind:class="{'loading': loading}"
		   class="button load_button">
			<span><?php esc_html_e( 'Save Settings', 'wp-custom-fields-theme-options' ); ?></span>
			<i class="lnr lnr-sync"></i>
		</a>

	</div>

</div>
