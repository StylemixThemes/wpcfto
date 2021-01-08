Vue.component('wpcfto_radio', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            value : '',
        }
    },
    template: `
        <div class="wpcfto_generic_field" v-bind:class="field_id">
            <div class="wpcfto-admin-select" v-bind:id="field_id">
                <label v-html="field_label"></label>
                <div class="wpcfto-radio">
                    <label v-for="(option, key) in fields['options']" :class="{ 'disabled' : fields.soon && fields.soon[key] }">
                        <input type="radio"
                               v-bind:name="field_name"
                               v-model="value"
                               :disabled="fields.soon && fields.soon[key]"
                               v-bind:value="key"/>
                        {{ option }}
                        <span
                            v-if="fields.previews && fields.previews[key]"
                            class="wpcfto_preview">Preview<span
                            class="wpcfto_preview__popup"><img
                            :src="fields.previews[key]" /></span></span>
                    </label>
                </div>

                <div v-if="fields.hint" class="wpcfto_field_hint radio">
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
