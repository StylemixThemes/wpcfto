Vue.component('date-picker', DatePicker.default);
Vue.component('wpcfto_date', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value: '',
            input_value : ''
        }
    },
    mounted: function () {
        this.value = this.field_value;
        if (typeof this.field_value !== 'undefined') {

            this.$set(this, 'input_value', this.field_value);

            this.value = new Date(parseInt(this.field_value));
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field_date">

            <label v-html="field_label" class="wpcfto_field_title"></label>
            
            <div v-if="fields.hint" class="wpcfto_field_hint text">
                <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
            </div>

            <date-picker v-model="value" lang="en" @change="dateChanged(value)"></date-picker>


            <input type="hidden"
                v-bind:name="field_name"
                v-bind:placeholder="field_label"
                v-bind:id="field_id"
                v-model="input_value"
            />

            <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
        </div>
    `,
    methods: {
        dateChanged(newDate) {

            var unix_time = new Date(newDate + ' UTC').getTime();

            this.$emit('wpcfto-get-value', unix_time);

            this.$set(this, 'input_value', unix_time);
        }
    },
});
