Vue.component('wpcfto_spacing', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            spacing : {},
        }
    },
    template: ` 
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input" v-bind:class="field_id">
            <label v-html="field_label"></label>
            <div class="wpcfto_spacing">
                
                <input type="text" name="top" v-model="spacing.top"/>
                <input type="text" name="right" v-model="spacing.right"/>
                <input type="text" name="bottom" v-model="spacing.bottom"/>
                <input type="text" name="left" v-model="spacing.left"/>
                
                <select name="unit" v-model="spacing.unit">
                    <option v-for="option in fields['units']" v-bind:value="option">{{ option }}</option>
                </select>
            </div>
        </div>
    `,
    mounted: function () {
        // JSON parse for Post Meta
        this.spacing = (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) ? JSON.parse(this.field_value) : this.field_value;
    },
    methods: {},
    watch: {
        spacing: {
            deep: true,
            handler: function (spacing) {
                this.$emit('wpcfto-get-value', spacing);
            }
        }
    }
});