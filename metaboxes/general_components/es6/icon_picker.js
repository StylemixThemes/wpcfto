const iconList = '{"icons":[ { "title":"fab fa-500px", "searchTerms":[] } ]}';
console.log(iconList);
let icons = JSON.parse(iconList).icons;
let timeout = undefined;

console.log(icons);

icons = wpcfto_icons_set;

Vue.component('wpcfto_icon_picker', {
    props: ['fields', 'field_label', 'field_name', 'field_id', 'field_value', 'field_data'],
    data: function () {
        return {
            value: '',
            focusOn: false,
            icons: icons,
            hoverPanel: false,
            search: "",
            beforeSelect: "",
            selected: "",
        }
    },
    components: {
        editor: require('vue2-ace-editor'),
    },
    template: `
        <div class="form-group">
            <label for="exampleFormControlInput1">Icon Picker:</label>
            <input ref="picker" 
            v-model="search" 
            @blur="blur" 
            @focus="focus" 
            type="email" 
            class="form-control"
            placeholder="Search an icon">
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
        </div>
  `,
    mounted: function () {
        this.selected = this.value = this.field_value;
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
            this.value = this.selected;

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
        value: function (value) {
            this.$emit('wpcfto-get-value', value);
        }
    }
});