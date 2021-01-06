let timeout = undefined;
let icons = wpcfto_icons_set;

Vue.component('wpcfto_icon_picker', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value: {
                icon: '',
                color: '#000',
                size: 15,
            },
            focusOn: false,
            icons: icons,
            hoverPanel: false,
            search: "",
            beforeSelect: "",
            selected: "",
            inited : false
        }
    },
    components: {
        editor: require('vue2-ace-editor'),
    },
    template: `
        <div class="wpcfto_generic_field wpcfto_generic_field__iconpicker">
            <label v-html="field_label"></label>
            <div class="wpcfto_generic_field wpcfto_generic_field_flex_input wpcfto_generic_field__text">
                <input ref="picker" 
                v-model="search" 
                @blur="blur"
                @focus="focus" 
                type="email" 
                class="form-control"
                placeholder="Search an icon">
                
                <wpcfto_color @wpcfto-get-value="value['color'] = $event" 
                    :fields="{position: 'bottom'}"
                    v-if="inited"
                    :field_value="value['color']">
                
                </wpcfto_color>
                
                <input 
                v-model="value['size']" 
                type="number" 
                class="form-control"
                placeholder="Icon size">
            </div>
            
            <transition name="icon-preview-fade">
                <div v-if="focusOn" class="preview-container">
                    <div @click="select(undefined)" @mouseover="hoverPanel = true" @mouseout="hoverPanel = false" :class="['previewer', 'rounded', {'custom-shadow-sm': !hoverPanel}, {'custom-shadow': hoverPanel} ]">
                        <div v-for="(i, index) in iconsFiltered" :key="index" class="icon-preview">
                            <div @click.prevent.stop="select(i)" :class="['icon-wrapper','rounded','shadow-sm', {selected: i.title == selected}]" >
                                <i :class="i.title" />
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            
            <i class="wpcfto_generic_field__iconpicker__icon" 
            v-bind:class="value.icon" 
            v-bind:style="{ color: value.color, 'font-size' : value.size + 'px'}"
            v-if="value.icon"></i>
            
        </div>
  `,
    mounted: function () {
        if ( typeof this.field_value === 'string' && WpcftoIsJsonString(this.field_value) ) {
            this.value = JSON.parse(this.field_value);
        } else if (typeof this.field_value === 'object') {
            this.value = this.field_value;
        }

        this.selected = this.value.icon;
        this.inited = true;
    },
    methods: {
        blur() {
            timeout = setTimeout(() => {
                this.focusOn = false;
            }, 100);
        },
        focus() {
            this.focusOn = true;
        },
        select(icon) {
            clearTimeout(timeout);
            if (icon) {
                if (this.search != this.selected) this.beforeSelect = this.search;
                this.selected = icon.title;
                this.search = icon.title;
            }
            this.focusOn = false;
            this.value.icon = this.selected;

        }
    },
    computed: {
        iconsFiltered: function () {
            const search = (this.search == this.selected) ? this.beforeSelect : this.search
            return this.icons.filter(i =>
                i.title.indexOf(search) !== -1 || i.searchTerms.some(t => t.indexOf(search) !== -1)
            )
        }
    },
    watch: {
        value: {
            deep : true,
            handler : function (value) {
                this.$emit('wpcfto-get-value', value);
            }
        }
    }
});