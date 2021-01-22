Vue.component('wpcfto_select', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field__select">

            <wpcfto_fields_aside_before :fields="fields" :field_label="field_label"></wpcfto_fields_aside_before>
            
            <div class="wpcfto-field-content">
                <div class="wpcfto-admin-select">
                    <select v-bind:name="field_name"
                            v-model="value"
                            v-bind:id="field_id">
                        <option v-for="(option, key) in fields['options']" v-bind:value="key">{{ option }}</option>
                    </select>
                </div>
            </div>

            <wpcfto_fields_aside_after :fields="fields" :field_data="field_data"></wpcfto_fields_aside_after>

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
