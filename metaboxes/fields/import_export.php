<?php

/**
 * @var $field
 * @var $field_id
 * @var $field_value
 * @var $field_label
 * @var $field_name
 * @var $section_name
 *
 */

$field = "data['{$section_name}']['fields']['{$field_name}']";
$id = $section['fields']['wpcfto_import_export_field']['id'];

?>

<wpcfto_import_export :data="data" :id="'<?php echo esc_attr($id) ?>'"></wpcfto_import_export>