import RangeSlider from 'vue-range-slider'

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
        RangeSlider
    },
    template: ` 
        <div class="wpcfto_generic_field wpcfto_generic_field_range_slider" v-bind:class="field_id">
            <div class="wpcfto_field_title">
                <label v-html="field_label"></label>
                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
            </div>
            
            <div class="wpcfto_range_slider">
                <span class="wpcfto_range_slider__pin" v-html="value" v-bind:style="rangeStyles()"></span>
                <range-slider
                    class="slider"
                    :min="min"
                    :max="max"
                    :step="step"
                    v-model="value">
                </range-slider>
            </div>
        </div>
    `,
    mounted: function () {
        this.value = (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) ? JSON.parse(this.field_value) : this.field_value;
         this.min = this.field_data.min;
         this.max = this.field_data.max;
         this.step = this.field_data.step;
    },
    methods: {
        rangeStyles : function() {
            let procent = (this.max - this.min) / 100;
            return {
                left: ((this.value - this.min) * 100 / (this.max - this.min)) + '%'
            }
        }
    },
    watch: {
        value: {
            deep: true,
            handler: function (value) {
                this.$emit('wpcfto-get-value', value);
            }
        }
    }
});