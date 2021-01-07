Vue.component('wpcfto_ace_editor', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value: '',
        }
    },
    components: {
        editor: require('vue2-ace-editor'),
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_ace_editor">
            <label v-html="field_label" class="wpcfto_field_title"></label>
            <editor
                v-model="value"
                @init="editorInit"
                :lang="field_data['lang']"
                theme="chrome"
                width="100%"
                height="400"></editor>

            <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
        </div>
    `,
    mounted: function () {
        this.value = this.field_value;
    },
    methods: {
        editorInit: function () {
            require('brace/ext/language_tools');
            require('brace/mode/html');
            require('brace/mode/javascript');
            require('brace/mode/less');
            require('brace/theme/chrome');
            require('brace/snippets/javascript');
        }
    },
    watch: {
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        }
    }
});
