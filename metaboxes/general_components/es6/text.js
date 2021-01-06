Vue.component('wpcfto_text', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value: '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text">
            <label>
                {{ field_label }}
                <span
                v-if="fields.preview"
                class="wpcfto_preview">Preview<span
                class="wpcfto_preview__popup"><img
                :src="fields.preview" /></span></span>
            </label>
            <input type="text"
                v-bind:name="field_name"
                v-bind:placeholder="fields.placeholder"
                v-bind:id="field_id"
                v-model="value"
            />
            <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>

            <div v-if="fields.hint" class="wpcfto_field_hint text">
                <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
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
