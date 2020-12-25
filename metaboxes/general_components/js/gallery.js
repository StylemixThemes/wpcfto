Vue.component('wpcfto_gallery', {
	props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
	data: function () {
		return {
			gallery : []
		}
	},
	template: ` 
        <div class="wpcfto_generic_field wpcfto_generic_field_flex_input" v-bind:class="field_id">
        
            <label v-html="field_label"></label>
                        
			<div class="wpcfto_gallery">
				
				
				<draggable class="wpcfto_gallery__items" 
						   :list="gallery" 
						   group="gallery">
				
					<div class="wpcfto_gallery__item"
						 v-for="(image, image_key) in gallery"
						 :key="image_key">
						 
					  <img v-bind:src="image.url" />
					  
					</div>
					
				 </draggable>
				
				<div class="actions">
                    <div class="button" @click="addImages()">
                        Add Images
                    </div>
                </div>
				
			</div>
             
        </div>
    `,
	mounted: function () {

		if(typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) this.gallery = JSON.parse(this.field_value);

	},
	methods: {
		addImages: function () {

			var _this = this;

			_this.media_modal = wp.media({
				frame: 'select',
				multiple: true,
				editing: true,
				library: {
					type: [ 'image' ]
				},
			});

			_this.media_modal.on('select', function () {
				var attachments = _this.media_modal.state().get('selection').toJSON();
				attachments.forEach(function(attachment){
					_this.gallery.push({
						id : attachment.id,
						url : attachment.sizes.thumbnail.url
					});
				})

			}, _this);

			_this.media_modal.open();
		},
	},
	watch: {
		gallery: {
		    deep: true,
		    handler: function (gallery) {
		        this.$emit('wpcfto-get-value', gallery);
		    }
		}
	}
});