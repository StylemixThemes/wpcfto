Vue.component('wpcfto_color', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    components: {
        'slider-picker': VueColor.Photoshop
    },
    data: function () {
        return {
            input_value: '',
            position : 'bottom',
            value: {
                r: 255,
                g: 255,
                b: 255,
                a: 1,
            },
        }
    },
    created: function () {
        if (typeof this.field_value === 'string') {

            this.input_value = this.field_value;

            var colors = this.field_value.replace('rgba(', '').slice(0, -1).split(',');

            this.$set(this.value, 'r', colors[0]);
            this.$set(this.value, 'g', colors[1]);
            this.$set(this.value, 'b', colors[2]);
            this.$set(this.value, 'a', colors[3]);

        }

        if(this.fields.position) this.position = this.fields.position;
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_color">
            <div class="stm_colorpicker_wrapper" v-bind:class="['picker-position-' + position]">

                <label v-html="field_label"></label>

                <span v-bind:style="{'background-color': input_value}" @click="$refs.field_name.focus()"></span>

                <input type="text"
                       v-bind:name="field_name"
                       v-bind:placeholder="field_label"
                       v-bind:id="field_id"
                       v-model="input_value"
                       ref="field_name"
                />

                <div>
                    <slider-picker v-model="value"></slider-picker>
                </div>

                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>

                <div v-if="fields.hint" class="wpcfto_field_hint color">
                    <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
                </div>
            </div>
        </div>
    `,
    methods: {},
    watch: {
        input_value : function(value) {
            this.$emit('wpcfto-get-value', value);
        },
        value: function (value) {
            if (typeof value.rgba !== 'undefined') {
                var rgba_color = 'rgba(' + value.rgba.r + ',' + value.rgba.g + ',' + value.rgba.b + ',' + value.rgba.a + ')';
                this.$set(this, 'input_value', rgba_color);
                this.$emit('wpcfto-get-value', rgba_color);
            }
        }
    }
});
