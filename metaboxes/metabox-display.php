<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} //Exit if accessed directly


/***
 * @var $post
 * @var $metabox
 * @var $args_id
 *
 */

$vue_id = '';


if ( empty( $id ) ) {
	/*We are on a post*/
	$post_id   = $post->ID;
	$id        = $metabox['id'];
	$sections  = $metabox['args'][ $id ];
	$active    = '';
	$vue_id    = "data-vue='" . $id . "'";
	$source_id = "data-source='" . $post_id . "'";
}

?>

<div v-cloak class="stm_metaboxes_grid <?php echo esc_attr( 'sections_count_' . count( $sections ) ); ?>" <?php echo stm_wpcfto_filtered_output( $vue_id . ' ' . $source_id ); ?>>

	<div class="stm_metaboxes_grid__inner" v-if="data !== ''">

		<div class="container">

			<div class="wpcfto-tab-nav">
				<?php
				foreach ( $sections as $section_name => $section ):

					$section_order = array_search( $section_name, array_keys( $sections ) );

					if ( $section_order == 0 ) {
						$active = $section_name;
					}

					$submenus = array_column( $section['fields'], 'submenu' );

					$section_classes = array();
					if ( $active == $section_name ) {
						$section_classes[] = 'active';
					}
					if ( empty( $section['icon'] ) ) {
						$section_classes[] = 'no-icon';
					}
					if ( ! empty( $submenus ) ) {
						$section_classes[] = 'has-submenu';
					}

					?>
					<div class="wpcfto-nav <?php echo esc_attr( implode( ' ', $section_classes ) ); ?>">

						<div class="wpcfto-nav-title"
							 data-section="<?php echo esc_attr( $section_name ); ?>"
							 @click="changeTab('<?php echo esc_attr( $section_name ); ?>')">
							<?php if ( ! empty( $section['icon'] ) ) : ?>
								<i class="<?php echo esc_attr( $section['icon'] ); ?>"></i>
							<?php endif; ?>

							<?php echo sanitize_text_field( $section['name'] ); ?>
						</div>

						<?php if ( ! empty( $submenus ) ): ?>
							<div class="wpcfto-submenus">
								<?php foreach ( $submenus as $key => $submenu ):
									$submenu_classes = array();
									if(in_array('active', $section_classes) && empty($key)) {
										$submenu_classes[] = 'active';
									}
									?>
									<div data-submenu="<?php echo esc_attr( $section_name . '_' . sanitize_title( $submenu ) ); ?>"
										 class="<?php echo esc_attr(implode(' ', $submenu_classes)); ?>"
										 @click="changeSubMenu('<?php echo esc_attr( $section_name . '_' . sanitize_title( $submenu ) ); ?>')">
										<?php echo esc_attr( $submenu ); ?>
									</div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>


					</div>
				<?php endforeach; ?>
			</div>

			<?php foreach ( $sections as $section_name => $section ):

				$submenus = array_column( $section['fields'], 'submenu' );
				$section_classes = array();
				if ( $section_name == $active ) {
					$section_classes[] = 'active';
				}
				if ( ! empty( $submenus ) ) {
					$section_classes[] = 'has-submenu-items';
				}

				?>
				<div id="<?php echo esc_attr( $section_name ); ?>"
					 class="wpcfto-tab <?php echo esc_attr( implode( ' ', $section_classes ) ); ?>">
					<div class="container container-constructed">
						<div class="row">

							<div class="column">

								<?php if ( ! empty( $section['label'] ) ) : ?>
									<div data-notice="enable_courses_filter_notice"
										 class="wpcfto_generic_field wpcfto_generic_field__notice first opened">
										<label><?php echo sanitize_text_field( $section['label'] ); ?></label>
									</div>
								<?php endif; ?>


								<?php foreach ( $section['fields'] as $field_name => $field ) {

									if ( ! empty( $field['pre_open'] ) and $field['pre_open'] ) {
										wpcfto_metaboxes_preopen_field( $section, $section_name, $field, $field_name );
										continue;
									}

									if ( ! empty( $field['group'] ) ) {
										wpcfto_metaboxes_display_group_field( $section, $section_name, $field, $field_name );
										continue;
									}

									wpcfto_metaboxes_display_single_field( $section, $section_name, $field, $field_name );

								} ?>


							</div>

						</div>
					</div>
				</div>
			<?php endforeach; ?>

		</div>


	</div>
</div>