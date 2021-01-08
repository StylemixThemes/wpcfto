Vue.component('wpcfto_time', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value: '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field_time">

            <label v-html="field_label" class="wpcfto_field_title"></label>

            <div v-if="fields.hint" class="wpcfto_field_hint text">
                <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
            </div>

            <input type="time"
                v-bind:name="field_name"
                v-bind:placeholder="field_label"
                v-bind:id="field_id"
                v-model="value"
            />

            <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
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
