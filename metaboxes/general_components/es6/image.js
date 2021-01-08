Vue.component('wpcfto_image', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    mixins: [wpcfto_get_image_mixin],
    data: function () {
        return {
            value: '',
            media_modal: '',
            image_url: ''
        }
    },
    mounted: function () {
        var vm = this;
        vm.value = vm.field_value;
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field_image">

            <div class="wpcfto_field_title">
                <label v-html="field_label"></label>

                <span v-if="fields.description" v-html="fields.description" class="field-description description"></span>
            </div>

            <div v-if="fields.hint" class="wpcfto_field_hint text">
                <i class="fa fa-info-circle"></i><div v-html="fields.hint" class="hint"></div>
            </div>

            <div class="wpcfto-image" :class="{ 'has-image' : image_url && wpcfto_checkURL(image_url) }">
                <input type="text" v-model="image_url" class="wpcfto-input-url" placeholder="Enter image URL or click upload..." />

                <div class="image-field" v-if="image_url && wpcfto_checkURL(image_url)">

                    <img v-bind:src="image_url" v-if="wpcfto_checkURL(image_url)"/>
                    <!-- <div class="image-field-file" v-else>
                        <i class="fa fa-file-alt"></i>
                        {{image_url}}
                    </div> -->
                </div>
                <div class="actions">
                    <div class="button" v-if="!image_url || !wpcfto_checkURL(image_url)" @click="addImage()">
                        <i class="fa fa-upload"></i>Upload
                    </div>
                    <div class="button" v-if="image_url && wpcfto_checkURL(image_url)" @click="addImage()">
                    <i class="fa fa-upload"></i>Replace
                    </div>
                    <div class="button button-remove" v-if="image_url && wpcfto_checkURL(image_url)" @click="removeImage()">
                        <i class="fa fa-times"></i>Remove
                    </div>
                </div>
            </div>


            <input type="hidden"
                   v-bind:name="field_name"
                   v-model="value" />


        </div>
    `,
    methods: {
        addImage: function () {
            this.media_modal = wp.media({
                frame: 'select',
                multiple: false,
                editing: true,
            });

            this.media_modal.on('select', function (value) {
                var attachment = this.media_modal.state().get('selection').first().toJSON();

                this.value = attachment.id;
                this.image_url = attachment.url;

            }, this);

            this.media_modal.open();
        },
        removeImage: function () {
            this.value = this.image_url = '';
        }
    },
    watch: {
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        },
    }
});
