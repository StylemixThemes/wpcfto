Vue.component('wpcfto_button_group', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_button_group" v-bind:class="field_id">
            <div class="wpcfto_field_column">
                <label v-html="field_label" class="wpcfto_field_title"></label>
                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
                <div v-if="fields.hint" class="wpcfto_field_hint text">
                    <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
                </div>
            </div>
            <div class="wpcfto_button_group">
                <label v-for="(option, key) in fields['options']" v-bind:class="{'active' : value == key}">
                    <input type="radio" v-bind:name="field_name" v-model="value" v-bind:value="key"/>
                    {{ option }}
                </label>
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
