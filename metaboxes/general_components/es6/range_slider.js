Vue.component('wpcfto_range_slider', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value: 0,
            min : 0,
            max : 100,
            step : 1
        }
    },
    components: {
        VueRangeSlider
    },
    template: ` 
        <div class="wpcfto_generic_field" v-bind:class="field_id">
            <label v-html="field_label"></label>
            <vue-range-slider v-model="value" :min="min" :max="max" :step="step"></vue-range-slider>
        </div>
    `,
    mounted: function () {
        this.value = (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) ? JSON.parse(this.field_value) : this.field_value;
         this.min = this.field_data.min;
         this.max = this.field_data.max;
         this.step = this.field_data.step;
    },
    methods: {},
    watch: {
        value: {
            deep: true,
            handler: function (value) {
                this.$emit('wpcfto-get-value', value);
            }
        }
    }
});