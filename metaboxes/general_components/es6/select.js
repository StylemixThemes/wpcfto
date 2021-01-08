Vue.component('wpcfto_select', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field__select">
            <div class="wpcfto-admin-select wpcfto_generic_field_flex_input">
                <wpcfto_fields_aside :fields="fields" :field_label="field_label"></wpcfto_fields_aside>
                
                <select v-bind:name="field_name"
                        v-model="value"
                        v-bind:id="field_id">
                    <option v-for="(option, key) in fields['options']" v-bind:value="key">{{ option }}</option>
                </select>

                <span v-if="fields.description" v-html="fields.description" class="wpcfto-field-description wpcfto-field-description__after description"></span>
            </div>
        </div>
    `,
    mounted: function () {
        this.value = this.field_value;
    },
    methods: {},
    watch: {
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        }
    }
});
