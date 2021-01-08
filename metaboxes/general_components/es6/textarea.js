Vue.component('wpcfto_textarea', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value: '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_textarea">
            <wpcfto_fields_aside :fields="fields" :field_label="field_label"></wpcfto_fields_aside>
            
            <textarea v-bind:name="field_name"
                      v-bind:placeholder="field_label"
                      v-bind:id="field_id"
                      v-model="value">
            </textarea>
            
            <span v-if="fields.description" v-html="fields.description" class="wpcfto-field-description wpcfto-field-description__after description"></span>
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
