/**
 * @var wpcfto_global_settings
 */

Vue.component('wpcfto_typography', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value'],
    data: function () {
        return {
            inited: false,
            google_fonts: wpcfto_global_settings['fonts_list']['google'],
            web_safe_fonts: wpcfto_global_settings['fonts_list']['websafe'],
            variants: wpcfto_global_settings['variants'],
            subsets: wpcfto_global_settings['subsets'],
            align: wpcfto_global_settings['align'],
            translations: wpcfto_global_settings['translations'],
            typography: {
                'font-family': '',
                'google-weight': 'regular',
                'font-weight': '400',
                'font-style': 'normal',
                'subset': 'latin',
                'color': '#000',
                'font-size': '14',
                'line-height': '20',
                'text-align': 'left',
                'word-spacing': '0',
                'letter-spacing': '0',
                'backup-font': '',
                'font-data': {
                    'family' : '',
                    'variants' : []
                }
            },
        }
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field__typography" v-bind:class="field_id">

            <wpcfto_fields_aside_before :fields="fields" :field_label="field_label"></wpcfto_fields_aside_before>

            <div class="wpcfto-typography-fields-wrap">
                <div class="row">
                    <div class="column">
                        <div class="column-1" v-if="typography['font-family'].length">
                            <div v-if="typography['font-family'].length">
                                <link rel="preconnect" href="https://fonts.gstatic.com">
                                <link :href="buildGLink()" rel="stylesheet">
                            </div>
                        </div>
            
                        <div class="column-50">
                            <label class="field-label" v-html="translations['font_family']"></label>                        
                            <select v-model="typography['font-data']" @change="fontChanged()">
                                <option value="">Select font</option>
                                <option v-bind:value="font" v-for="font in google_fonts" v-html="font.family"></option>
                            </select>
                        </div>        
            
                        <div class="column-50">
                            <label class="field-label" v-html="translations['backup_font_family']"></label>       
                            <select v-model="typography['backup-font']">
                                <option value="">Select backup font</option>
                                <option v-bind:value="font" v-for="font in web_safe_fonts" v-html="font"></option>
                            </select>
                        </div>        
    
                        <div class="column-50">
                            <label class="field-label" v-html="translations['font_weight']"></label>       
                            <select v-model="typography['google-weight']" @change="weightChanged()">
                                <option value="">Select font weight</option>
                                <option
                                    v-bind:value="variant_key"
                                    :disabled="isFontWeightDisabled(variant_key)"
                                    v-for="(variant, variant_key) in variants" v-html="variant"></option>
                            </select>
                        </div>        
    
                        <div class="column-50">
                            <label class="field-label" v-html="translations['font_subset']"></label>       
                            <select v-model="typography['subset']">
                                <option value="">Select subset</option>
                                <option
                                    v-bind:value="subset_key"
                                    :disabled="isSubsetDisabled(subset_key)"
                                    v-for="(subset, subset_key) in subsets" v-html="subset"></option>
                            </select>
                        </div>        
    
                        <div class="column-50">
                            <label class="field-label" v-html="translations['text_align']"></label> 
                            <select v-model="typography['text-align']">
                                <option
                                    v-bind:value="align_key"
                                    v-for="(align_label, align_key) in align" v-html="align_label"></option>
                            </select>
                        </div>        
    
                        <div class="column-50">
                            <div class="row">
                                <div class="column">
                                    <div class="column-50">
                                        <label>
                                            <span class="field-label" v-html="translations['font_size']"></span>
                                            <div class="input-group">
                                                <input type="number" class="form-control" v-model="typography['font-size']" min="1">
                                                <span class="input-group-addon">px</span>
                                            </div>                                                
                                        </label>                                
                                    </div>
                                    <div class="column-50">
                                        <label>
                                            <span class="field-label" v-html="translations['line_height']"></span>
                                            <div class="input-group">
                                                <input type="number" class="form-control" v-model="typography['line-height']" min="0">
                                                <span class="input-group-addon">px</span>
                                            </div>                                             
                                        </label>                                   
                                    </div>
                                </div>  
                            </div>                         
                        </div>
    
                        <div class="column-50">
                            <div class="row">
                                <div class="column">
                                    <div class="column-50">
                                        <label>
                                            <span class="field-label" v-html="translations['word_spacing']"></span>
                                            <div class="input-group">
                                                <input type="number" class="form-control" v-model="typography['word-spacing']" min="0">
                                                <span class="input-group-addon">px</span>
                                            </div>
                                        </label>                                
                                    </div>
                                    <div class="column-50">
                                        <label>
                                            <span class="field-label" v-html="translations['letter_spacing']"></span>
                                            <div class="input-group">
                                                <input type="number" class="form-control" v-model="typography['letter-spacing']" min="0">
                                                <span class="input-group-addon">px</span>
                                            </div>                                            
                                        </label>                            
                                    </div>
                                </div>
                            </div>                          
                        </div>     
    
                        <div class="column-50">
                            <label class="field-label" v-html="translations['font_color']"></label> 
                            <wpcfto_color @wpcfto-get-value="typography['color'] = $event"
                                    :fields="{position: 'bottom'}"
                                    v-if="inited"
                                    :field_value="typography['color']">
                            </wpcfto_color>
                        </div>            
            
                        <div class="column-1">
                            <div class="wpcfto_generic_field__typography__preview" :style="previewStyles()">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*
                            </div>            
                        </div>            
                    </div>
                </div>
            </div>

            <wpcfto_fields_aside_after :fields="fields"></wpcfto_fields_aside_after>

        </div>
    `,
    mounted: function () {

        if (typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value)) {
            this.typography = JSON.parse(this.field_value)
        } else if (typeof this.field_value === 'object') {
            this.typography = this.field_value;
        }

        this.inited = true;

        this.editVariant();
        this.editSubset();
    },
    methods: {
        isFontWeightDisabled: function (variant) {
            let current_variants = this.typography['font-data']['variants'];
            if (typeof current_variants === 'undefined') return false;
            return (!current_variants.includes(variant));
        },
        isSubsetDisabled: function (subset) {
            let current_subsets = this.typography['font-data']['subsets'];
            if (typeof current_subsets === 'undefined') return false;
            return (!current_subsets.includes(subset));
        },
        fontChanged: function () {
            this.$set(this.typography, 'font-family', this.typography['font-data'].family);
            this.editVariant();
            this.editSubset();
        },
        editVariant() {
            let current_variant = this.typography['google-weight'];
            let current_variants = this.typography['font-data']['variants'];
            if (typeof current_variants !== 'undefined' && !current_variants.includes(current_variant)) {
                this.$set(this.typography, 'google-weight', current_variants[0]);
                this.weightChanged();
            }
        },
        editSubset() {
            let current_subset = this.typography['subset'];
            let current_subsets = this.typography['font-data']['subsets'];
            if (typeof current_subsets !== 'undefined' && !current_subsets.includes(current_subset)) {
                this.$set(this.typography, 'subset', current_subsets[0]);
            }
        },
        buildGLink() {
            let base = 'https://fonts.googleapis.com/css2?family=';
            base += `${this.typography['font-family']}`;
            let isItalic = this.typography['font-style'] === 'italic';

            base += (isItalic) ? ':ital,' : ':';
            base += 'wght@';
            if(isItalic) base += '1,';
            base += this.typography['font-weight'];
            base += '&display=swap';

            return base;
        },
        previewStyles() {
            let typo = this.typography;
            return {
                'font-family': `'${typo['font-family']}', ${typo['font-data']['category']}`,
                'color': typo['color'],
                'font-size': typo['font-size'] + 'px',
                'line-height': typo['line-height'] + 'px',
                'letter-spacing': typo['letter-spacing'] + 'px',
                'word-spacing': typo['word-spacing'] + 'px',
                'text-align': typo['text-align'],
                'font-weight': typo['font-weight'],
                'font-style': typo['font-style'],
            }
        },
        weightChanged() {
            let typo = this.typography;
            let weight = typo['google-weight'];
            let multiWeight = weight.match(/[a-zA-Z]+|[0-9]+/g);
            if (weight === 'regular') {
                this.$set(typo, 'font-weight', 400);
                this.$set(typo, 'font-style', 'normal');
            } else if (weight === 'regular') {
                this.$set(typo, 'font-weight', 400);
                this.$set(typo, 'font-style', 'italic');
            } else if(multiWeight.length === 2) {
                this.$set(typo, 'font-weight', multiWeight[0]);
                this.$set(typo, 'font-style', multiWeight[1]);
            } else {
                this.$set(typo, 'font-weight', weight);
                this.$set(typo, 'font-style', 'normal');
            }
        }
    },
    watch: {
        typography: {
            deep: true,
            handler: function (typography) {
                this.$emit('wpcfto-get-value', typography);
            }
        }
    }
});
