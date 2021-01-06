Vue.component('wpcfto_textarea', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value: '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_textarea">
            <div class="wpcfto_field_column">
                <label v-html="field_label" class="wpcfto_field_title"></label>
                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
                <div v-if="fields.hint" class="wpcfto_field_hint text">
                    <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
                </div>
            </div>
            <textarea v-bind:name="field_name"
                      v-bind:placeholder="field_label"
                      v-bind:id="field_id"
                      v-model="value">
            </textarea>
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
