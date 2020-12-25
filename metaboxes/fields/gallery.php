<?php

/**
 * @var $field
 * @var $field_id
 * @var $field_value
 * @var $field_label
 * @var $field_name
 * @var $field_data
 * @var $section_name
 *
 */

stm_pa(get_defined_vars());
?>

<wpcfto_gallery v-bind:fields="<?php echo esc_attr( $field ); ?>"
			   v-bind:field_label="<?php echo esc_attr( $field_label ); ?>"
			   v-bind:field_name="'<?php echo esc_attr( $field_name ); ?>'"
			   v-bind:field_id="'<?php echo esc_attr( $field_id ); ?>'"
			   v-bind:field_value="<?php echo esc_attr( $field_value ); ?>"
			   @wpcfto-get-value="$set(<?php echo esc_attr( $field ) ?>, 'value', $event)">
</wpcfto_gallery>

<input type="hidden"
	   :style="{'width' : '100%'}"
	   name="<?php echo esc_attr( $field_name ); ?>"
	   v-bind:id="'<?php echo esc_attr( $field_id ); ?>'"
	   v-model="JSON.stringify(<?php echo esc_attr( wp_unslash( $field_value ) ); ?>)"/>