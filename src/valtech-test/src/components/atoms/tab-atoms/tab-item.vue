<template>
    <li class="tab-item-li">
        <a 
        class="tab-item-a" 
        @click="$emit('tab-clicked', subject)"
        :class="{'tab-item-a-selected' : isSelected}"
        :aria-label="isSelected ? 'Tab is selected': ''"
        >{{subject}}</a>
        </li>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: {
        id: Number,
        selectedTab: String,
        subject: String
    },
    computed: {
        isSelected: function () {
            return this.selectedTab === this.subject;
        }
    }
}
</script>

<style>
/* CA:
User	should	be	able	to	read	that	the	link	is	selected	
using	assistive	technologies. OPTIONAL: animate the underline

Apply CSS from example
 */
.tab-item-li {
    display: none;
}

@media (min-width: 1024px) {

    .tab-item-li { 
        display: table-cell;
        position: relative; 
    }
    .tab-item-a {
        font-family: 'Open Sans';
        font-weight: bold;
        font-size: 15px;
        color: #111111;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2.31px;
        display: inline-block;
        padding: 0 16px;
        position: relative;
        cursor: pointer;
    }
    .tab-item-a:after {
        background: none repeat scroll 0 0 transparent;
        content: "";
        display: block;
        height: 2px;
        background: #111111;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        position: relative;
        left: 50%;
    }
    .tab-item-a-selected:after { 
        width: 100%; 
        left: 0; 
    }
}
</style>