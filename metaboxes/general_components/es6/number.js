Vue.component('wpcfto_number', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value: '',
            step : 1
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__number">
            <wpcfto_fields_aside :fields="fields" :field_label="field_label"></wpcfto_fields_aside>
            
            <input type="number"
                v-bind:name="field_name"
                v-bind:placeholder="field_data.placeholder"
                v-bind:id="field_id"
                :step="step"
                v-model="value"
            />

            <span v-if="fields.description" v-html="fields.description" class="wpcfto-field-description wpcfto-field-description__after description"></span>
        </div>
    `,
    mounted: function () {
        this.value = this.field_value;
        if(typeof this.field_data.step !== 'undefined') this.step = this.field_data.step;
    },
    methods: {},
    watch: {
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        }
    }
});
