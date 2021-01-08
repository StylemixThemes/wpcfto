Vue.component('wpcfto_checkbox', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_checkbox">
            <div class="wpcfto-admin-checkbox" v-bind:class="field_id">

               <label>

                    <div class="wpcfto-admin-checkbox-wrapper" v-bind:class="{'active' : value, 'is_toggle' : (typeof fields.toggle == 'undefined' || fields.toggle) }">
                        <div class="wpcfto-checkbox-switcher"></div>
                        <input type="checkbox"
                               :name="field_name"
                               v-bind:id="field_id"
                               v-model="value"/>
                    </div>

                    <span v-html="field_label"></span>

                </label>

                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>

                <div v-if="fields.hint" class="wpcfto_field_hint checkbox">
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
