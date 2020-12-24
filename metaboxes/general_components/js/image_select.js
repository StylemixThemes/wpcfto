Vue.component('wpcfto_image_select', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
            style : '',
        }
    },
    template: ` 
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input" v-bind:class="field_id">
            <label v-html="field_label"></label>
            <div class="wpcfto_image_select">
                <label v-for="(option, key) in fields['options']" v-bind:class="{'active' : value == key}">
                    <input type="radio" v-bind:name="field_name" v-model="value" v-bind:value="key"/>
                    <img v-bind:src="option.img" v-bind:alt="option.alt" v-bind:style="style">
                </label>
            </div>
        </div>
    `,
    mounted: function () {
        this.value = this.field_value;
        if ( this.fields['width'] ) {
            this.style += 'width: ' + this.fields['width'] + 'px;';
        }
        if ( this.fields['height'] ) {
            this.style += 'height: ' + this.fields['height'] + 'px;';
        }
    },
    methods: {},
    watch: {
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        }
    }
});