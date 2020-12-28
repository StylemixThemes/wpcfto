<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} //Exit if accessed directly


class STM_Metaboxes {

	function __construct() {

		require_once STM_WPCFTO_PATH . '/helpers/helpers.php';

		require_once STM_WPCFTO_PATH . '/helpers/file_upload.php';

		add_action( 'add_meta_boxes', array( $this, 'wpcfto_register_meta_boxes' ) );

		add_action( 'admin_enqueue_scripts', array( $this, 'wpcfto_scripts' ) );

		add_action( 'save_post', array( $this, 'wpcfto_save' ), 10, 3 );

		add_action( 'wp_ajax_wpcfto_search_posts', 'STM_Metaboxes::search_posts' );
	}

	function boxes() {
		return apply_filters( 'stm_wpcfto_boxes', array() );
	}

	static function get_users() {
		$users = array(
			'' => apply_filters( 'wpcfto_all_users_label', esc_html__( 'Choose User', 'wpcfto' ) )
		);

		if ( ! is_admin() ) {
			return $users;
		}

		$users_data = get_users();
		foreach ( $users_data as $user ) {
			$users[ $user->ID ] = $user->data->user_nicename;
		}

		return $users;
	}

	function fields() {
		return apply_filters( 'stm_wpcfto_fields', array() );
	}

	function get_fields( $metaboxes ) {

		$fields = array();

		foreach ( $metaboxes as $metabox_name => $metabox ) {
			foreach ( $metabox as $section ) {
				foreach ( $section['fields'] as $field_name => $field ) {

					$sanitize = ( ! empty( $field['sanitize'] ) ) ? $field['sanitize'] : 'wpcfto_save_field';

					$field_modified = '';

					if ( isset( $_POST[ $field_name ] ) ) {

						$field_modified = $_POST[ $field_name ];

						if ( method_exists( 'STM_Metaboxes', "wpcfto_field_sanitize_{$field['type']}" ) ) {
							$field_modified = call_user_func( array( $this, "wpcfto_field_sanitize_{$field['type']}" ), $field_modified );
						}

						$field_modified = call_user_func( array( $this, $sanitize ), $field_modified, $field_name );

					}

					$fields[ $field_name ] = $field_modified;

				}
			}
		}

		return $fields;
	}

	function wpcfto_field_sanitize_repeater( $value ) {
		$decoded = json_decode( $value );
		$value   = ( $decoded === null ) ? $value : $decoded;

		if ( is_array( $value ) and empty( $value ) ) {
			$value = '';
		}

		return $value;
	}

	function wpcfto_save_field( $value ) {
		return $value;
	}

	function wpcfto_save_number( $value ) {
		$value = floatval( $value );
		if ( $value == 0 ) {
			return '';
		}

		return $value;
	}

	function wpcfto_sanitize_curriculum( $value ) {
		$value = str_replace( 'stm_lms_amp', '&', $value );

		return sanitize_text_field( $value );
	}

	function wpcfto_save_dates( $value, $field_name ) {
		global $post_id;

		$dates = array();

		if ( isset( $_POST["{$field_name}_start"] ) ) {
			$dates[] = sanitize_text_field( $_POST["{$field_name}_start"] );
		}
		if ( isset( $_POST["{$field_name}_end"] ) ) {
			$dates[] = sanitize_text_field( $_POST["{$field_name}_end"] );
		}

		if ( ! empty( $dates ) and count( $dates ) > 1 ) {
			update_post_meta( $post_id, $field_name . '_start', $dates[0] );
			update_post_meta( $post_id, $field_name . '_end', $dates[1] );
		}

		return $value;
	}

	function wpcfto_register_meta_boxes() {
		$boxes = $this->boxes();
		foreach ( $boxes as $box_id => $box ) {
			$box_name = $box['label'];
			add_meta_box( $box_id, $box_name, array( $this, 'wpcfto_display_callback' ), $box['post_type'], 'normal', 'high', $this->fields() );
		}
	}

	function wpcfto_display_callback( $post, $metabox ) {
		$meta = $this->convert_meta( $post->ID );
		foreach ( $metabox['args'] as $metabox_name => $metabox_data ) {
			foreach ( $metabox_data as $section_name => $section ) {
				foreach ( $section['fields'] as $field_name => $field ) {
					$default_value = ( ! empty( $field['value'] ) ) ? $field['value'] : '';
					$value         = ( isset( $meta[ $field_name ] ) ) ? $meta[ $field_name ] : $default_value;
					if ( ! empty( $value ) ) {
						switch ( $field['type'] ) {
							case 'dates' :
								$value = explode( ',', $value );
								break;
							case 'answers' :
								$value = unserialize( $value );
								break;
						}
					}
					$metabox['args'][ $metabox_name ][ $section_name ]['fields'][ $field_name ]['value'] = $value;
				}
			}
		}
		include STM_WPCFTO_PATH . '/metaboxes/metabox-display.php';
	}

	static function convert_meta( $post_id ) {
		$meta  = get_post_meta( $post_id );
		$metas = array();
		foreach ( $meta as $meta_name => $meta_value ) {
			$metas[ $meta_name ] = $meta_value[0];
		}

		return $metas;
	}

	function wpcfto_scripts( $hook ) {
		$v      = time();
		$base   = STM_WPCFTO_URL . 'metaboxes/assets/';
		$assets = STM_WPCFTO_URL . 'metaboxes/assets';

		wp_enqueue_media();
		wp_enqueue_script( 'vue.js', $base . 'js/vue.min.js', array( 'jquery' ), $v );
		wp_enqueue_script( 'vue-resource.js', $base . 'js/vue-resource.min.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'vue2-datepicker.js', $base . 'js/vue2-datepicker.min.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'vue-select.js', $base . 'js/vue-select.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'vue2-editor.js', $base . 'js/vue2-editor.min.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'vue2-color.js', $base . 'js/vue-color.min.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'sortable.js', $base . 'js/sortable.min.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'vue-draggable.js', $base . 'js/vue-draggable.min.js', array( 'sortable.js' ), $v );
		wp_enqueue_script( 'wpcfto_mixins.js', $base . 'js/mixins.js', array( 'vue.js' ), $v );
		wp_enqueue_script( 'wpcfto_metaboxes.js', $base . 'js/metaboxes.js', array( 'vue.js' ), $v );

		wp_add_inline_script( 'wpcfto_metaboxes.js', 'const WPCFTO_EventBus = new Vue();' );

		wp_enqueue_style( 'wpcfto-metaboxes.css', $base . 'css/main.css', array(), $v );
		wp_enqueue_style( 'linear-icons', $base . 'css/linear-icons.css', array( 'wpcfto-metaboxes.css' ), $v );
		wp_enqueue_style( 'font-awesome-min', $assets . '/vendors/font-awesome.min.css', null, $v, 'all' );

		/*GENERAL COMPONENTS*/
		$components = array(
			'text',
			'time',
			'number',
			'image',
			'checkbox',
			'date',
			'dates',
			'select',
			'radio',
			'textarea',
			'hint_textarea',
			'color',
			'autocomplete',
			'editor',
			'repeater',
			'file',
			'notice',
			'notice_banner',
			'button_group',
			'image_select',
			'spacing',
			'link_color',
			'multi_checkbox',
			'color_gradient',
		);

		foreach ( $components as $component ) {
			wp_enqueue_script(
				"wpcfto_{$component}_component",
				STM_WPCFTO_URL . "/metaboxes/general_components/js/{$component}.js",
				array( 'wpcfto_metaboxes.js' ),
				$v,
				true
			);
		}

	}

	function wpcfto_post_types() {
		$post_types = array();
		$boxes      = $this->boxes();
		if ( ! empty( $boxes ) ) {
			foreach ( $boxes as $box ) {
				if ( empty( $box['post_type'] ) ) {
					continue;
				}
				if ( ! empty( $box['skip_post_type'] ) ) {
					continue;
				}
				$post_types = array_merge( $post_types, $box['post_type'] );
			}
		}

		$post_types = array_unique( $post_types );

		return apply_filters( 'wpcfto_post_types', $post_types );

	}

	function wpcfto_save( $post_id, $post ) {


		$post_type = get_post_type( $post_id );

		if ( ! in_array( $post_type, $this->wpcfto_post_types() ) ) {
			return;
		}

		if ( ! empty( $_POST ) and ! empty( $_POST['action'] ) and $_POST['action'] === 'editpost' ) {

			$fields = $this->get_fields( $this->fields() );


			foreach ( $fields as $field_name => $field_value ) {

				update_post_meta( $post_id, $field_name, $field_value );
			}
		}


	}

	static function search_posts() {

		check_ajax_referer( 'wpcfto_search_posts', 'nonce' );

		$r = array();

		$args = array(
			'posts_per_page' => 10,
		);

		if ( isset( $_GET['ids'] ) and empty( $_GET['ids'] ) ) {
			wp_send_json( $r );
		}

		if ( ! empty( $_GET['post_types'] ) ) {
			$args['post_type'] = explode( ',', sanitize_text_field( $_GET['post_types'] ) );
		}

		if ( ! empty( $_GET['s'] ) ) {
			$args['s'] = sanitize_text_field( $_GET['s'] );
		}

		if ( isset( $_GET['ids'] ) ) {
			$args['post__in'] = explode( ',', sanitize_text_field( $_GET['ids'] ) );
		}

		if ( ! empty( $_GET['exclude_ids'] ) ) {
			$args['post__not_in'] = explode( ',', sanitize_text_field( $_GET['exclude_ids'] ) );
		}

		if ( ! empty( $_GET['orderby'] ) ) {
			$args['orderby'] = sanitize_text_field( $_GET['orderby'] );
		}

		if ( ! empty( $_GET['posts_per_page'] ) ) {
			$args['posts_per_page'] = sanitize_text_field( $_GET['posts_per_page'] );
		}

		$user  = wp_get_current_user();
		$roles = ( array ) $user->roles;

		if ( ! in_array( 'administrator', $roles ) ) {
			$args['author'] = get_current_user_id();
		}

		if ( ! empty( $_GET['course_id'] ) ) {
			$course_id = intval( $_GET['course_id'] );
			$authors   = array();
			$authors[] = intval( get_post_field( 'post_author', $course_id ) );
			$authors[] = get_post_meta( $course_id, 'co_instructor', true );

			$args['author__in'] = $authors;
		}

		$args = apply_filters( 'wpcfto_search_posts_args', $args );

		/*If somebody applied custom filter just return custom array*/
		if ( ! empty( $_GET['name'] ) ) {
			$name = sanitize_text_field( $_GET['name'] );
			$r    = apply_filters( "stm_wpcfto_autocomplete_{$name}", array(), $args );

			if ( ! empty( $args['post__in'] ) ) {

				$data = array();

				foreach ( $r as $item ) {
					if ( ! in_array( $item['id'], $args['post__in'] ) ) {
						continue;
					}

					$data[] = $item;
				}

				$r = $data;
			}

			if ( ! empty( $r ) ) {
				wp_send_json( $r );
			}
		}

		$q = new WP_Query( $args );
		if ( $q->have_posts() ) {
			while ( $q->have_posts() ) {
				$q->the_post();

				$id = get_the_ID();

				if ( empty( $id ) ) {
					continue;
				}

				$response = array(
					'id' => get_the_ID(),
					'title' => get_the_title(),
					'post_type' => get_post_type( get_the_ID() )
				);

				$r[] = apply_filters( 'wpcfto_search_posts_response', $response, $args['post_type'] );
			}

			wp_reset_postdata();
		}

		if ( ! empty( $_GET['ids'] ) ) {
			$insert_sections = array();

			foreach ( $args['post__in'] as $key => $post ) {
				if ( ! empty( $post ) && ! is_numeric( $post ) ) {
					$insert_sections[ $key ] = array( 'id' => $post, 'title' => $post );
				}
			}

			foreach ( $insert_sections as $position => $inserted ) {
				array_splice( $r, $position, 0, array( $inserted ) );
			}
		}

		if ( ! empty( $name ) ) {
			wp_send_json( apply_filters( "stm_wpcfto_autocomplete_{$name}_output", $r ) );
		}

		wp_send_json( $r );
	}

}

new STM_Metaboxes();

function wpcfto_metaboxes_deps( $field, $section_name ) {
	$dependency   = '';
	$dependencies = array();
	if ( empty( $field['dependency'] ) ) {
		return $dependency;
	}

	if ( ! empty( $field['dependencies'] ) ) {
		$mode = $field['dependencies'];

		foreach ( $field['dependency'] as $dep ) {
			$dependencies[] = wpcfto_metaboxes_generate_deps( $section_name, $dep );
		}

		$dependencies = implode( " {$mode} ", $dependencies );

	} else {
		$dependencies = wpcfto_metaboxes_generate_deps( $section_name, $field['dependency'] );
	}

	$dependency = "v-if=\"{$dependencies}\"";

	return $dependency;
}

function wpcfto_metaboxes_generate_deps( $section_name, $dep ) {
	$key     = $dep['key'];
	$compare = $dep['value'];
	if ( $compare === 'not_empty' ) {
		$dependency = "data['{$section_name}']['fields']['{$key}']['value']";
	} else if ( $compare === 'empty' ) {
		$dependency = "!data['{$section_name}']['fields']['{$key}']['value']";
	} else if ( ! empty( $compare ) && strpos( $compare, '||' ) ) {
		$compare    = preg_replace( '/\s+/', '', $compare );
		$compares   = explode( '||', $compare );
		$length     = count( $compares );
		$i          = 0;
		$dependency = '';
		foreach ( $compares as $compare ) {
			$i ++;
			$dependency .= "data['{$section_name}']['fields']['{$key}']['value'] === '{$compare}'";
			if ( $i !== $length ) {
				$dependency .= ' || ';
			}
		}
	} else {
		$dependency = "data['{$section_name}']['fields']['{$key}']['value'] === '{$compare}'";
	}

	return $dependency;
}

function wpcfto_metaboxes_display_single_field( $section, $section_name, $field, $field_name ) {

	$dependency  = wpcfto_metaboxes_deps( $field, $section_name );
	$width       = ( empty( $field['columns'] ) ) ? 'column-1' : "column-{$field['columns']}";
	$is_pro      = ( ! empty( $field['pro'] ) ) ? 'is_pro' : 'not_pro';
	$description = ( ! empty( $field['description'] ) ) ? $field['description'] : '';
	if ( stm_wpcfto_is_pro() ) {
		$is_pro = '';
	}

	$classes = array( $width, $is_pro );

	$classes[] = $field_name;

	if ( $field['type'] !== 'notice' ) {
		$classes[] = $field['type'];
	}

	if ( ! empty( $field['classes'] ) ) {
		$classes = array_merge( $classes, $field['classes'] );
	}

	if(!empty($field['submenu'])) {
		$classes[] = $section_name . '_' . sanitize_title($field['submenu']);
	}

	$classes = apply_filters( 'stm_wpcfto_single_field_classes', $classes, $field_name, $field );

	?>


	<transition name="slide-fade">
		<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" <?php echo( $dependency ); ?> data-field="<?php echo esc_attr( "wpcfto_addon_option_{$field_name}" ); ?>">

			<?php do_action( 'stm_wpcfto_single_field_before_start', $classes, $field_name, $field, $is_pro ); ?>

			<?php

			$field_data = $field;
			$label      = ( ! empty( $field_data['label'] ) ) ? $field_data['label'] : '';
			if ( empty( $field_data['placeholder'] ) ) {
				$field_data['placeholder'] = $label;
			}
			$field_type = $field['type'];

			$field = "data['{$section_name}']['fields']['{$field_name}']";

			/*Needed for include*/
			$field_value = "{$field}['value']";
			$field_label = "{$field}['label']";
			$field_id    = $section_name . '-' . $field_name;

			$file = apply_filters( "wpcfto_field_{$field_type}", STM_WPCFTO_PATH . '/metaboxes/fields/' . $field_type . '.php' );

			if ( ! empty( $field_data['hint'] ) ) : ?>
				<div class="field_overlay"></div>
				<div class="wpcfto_field_hint <?php echo esc_attr( $field_data['type'] ); ?>">
					<i class="fa fa-info-circle"></i>
					<div class="hint"><?php echo html_entity_decode( $field_data['hint'] ); ?></div>
					<?php endif; ?>

					<?php include $file; ?>

					<?php if ( ! empty( $field_data['hint'] ) ) : ?>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $description ) ): ?>
				<p class="description"><?php echo html_entity_decode( $description ); ?></p>
			<?php endif; ?>
		</div>
	</transition>

<?php }

function wpcfto_metaboxes_display_group_field( $section, $section_name, $field, $field_name ) { ?>
	<?php if ( $field['group'] === 'started' ) : ?><div class="wpcfto_group_started column-1"><div class="container"><div class="row"><?php endif;

	wpcfto_metaboxes_display_single_field( $section, $section_name, $field, $field_name );

	if ( $field['group'] === 'ended' ) : ?></div></div></div><?php endif;
}

function wpcfto_metaboxes_preopen_field( $section, $section_name, $field, $field_name ) {
	$vue_field = "data['{$section_name}']['fields']['{$field_name}']";

	?>
	<div class="preopen_field_wrapper wpcfto_generic_field" v-init="initOpen(<?php echo $vue_field; ?>)">

		<div class="wpcfto-admin-checkbox" @click="openField(<?php echo $vue_field; ?>)">

			<label>

				<div class="wpcfto-admin-checkbox-wrapper"
					 v-bind:class="{'active' : <?php echo esc_attr( $vue_field ); ?>['opened']}">
					<div class="wpcfto-checkbox-switcher"></div>
				</div>

				<span v-html="<?php echo esc_attr( $vue_field ); ?>['label']"></span>

			</label>

		</div>

		<div class="preopen_field"
			 v-if="<?php echo esc_attr( $vue_field ); ?>['opened']">
			<?php wpcfto_metaboxes_display_single_field( $section, $section_name, $field, $field_name ); ?>
		</div>

	</div>

<?php }