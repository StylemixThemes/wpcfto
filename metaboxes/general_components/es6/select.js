Vue.component('wpcfto_select', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field">
            <div class="wpcfto-admin-select wpcfto_generic_field_flex_input">
                <label>
                    {{ field_label }}
                    <span
                    v-if="fields.preview"
                    class="wpcfto_preview">Preview<span
                    class="wpcfto_preview__popup"><img
                    :src="fields.preview" /></span></span>
                </label>
                <select v-bind:name="field_name"
                        v-model="value"
                        v-bind:id="field_id">
                    <option v-for="(option, key) in fields['options']" v-bind:value="key">{{ option }}</option>
                </select>

                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>

                <div v-if="fields.hint" class="wpcfto_field_hint select">
                    <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
                </div>
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
