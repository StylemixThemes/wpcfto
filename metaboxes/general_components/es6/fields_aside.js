Vue.component('wpcfto_fields_aside', {
    props: ['fields', 'field_label'],
    data: function () {
        return {
            fields: {},
        }
    },
    template: `
        <div class="wpcfto-field-aside">
            <label v-html="field_label" class="wpcfto-field-aside__label"></label>
            
            <div
            v-if="fields.preview"
            class="wpcfto_preview"><span class="wpcfto_preview__text">Preview</span><span
            class="wpcfto_preview__popup"><img
            :src="fields.preview" /></span></div>
            
            <span v-if="fields.description" v-html="fields.description" class="wpcfto-field-description wpcfto-field-description__before description"></span>
            
            <div v-if="fields.hint" class="wpcfto_field_hint text">
                <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
            </div>                
        </div>
    `,
    methods: {},
    watch: {
        value: function (value) {

        }
    }
});
