<?php
/**
 * @var $id
 */
?>

<div class="stm_metaboxes_grid stm_metaboxes_grid_btn">
	<div class="stm_metaboxes_grid__inner">

		<div class="container">

			<div class="wpcfto_settings_head">

				<div class="wpcfto_settings_head__logo">
					<!--Logo-->
				</div>

				<div class="wpcfto_settings_head__content">

					<a href="#"
					   @click.prevent="saveSettings('<?php echo esc_attr( $id ); ?>')"
					   v-bind:class="{'loading': loading}"
					   class="button load_button">
						<span><?php esc_html_e( 'Save Settings', 'wp-custom-fields-theme-options' ); ?></span>
						<i class="lnr lnr-sync"></i>
					</a>

				</div>

			</div>

		</div>
	</div>
</div>