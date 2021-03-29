<template>
    <div>
        <ul class="tab-molecule-ul">
            <tab-item 
            v-for='subject in subjects' 
            :key='subject.Id' :subject="subject.Subject" 
            :id="subject.Id" :selectedTab="selectedTab"
            @tab-clicked="selectedTab=$event; $emit('subjectSelected',$event)">
            </tab-item>
        </ul>
    </div>
</template>

<script>
import TabItem from "../atoms/tab-atoms/tab-item.vue"

export default {
    data () {
        return {
            subjects: [
                {
                    Id: 1,
                    Subject: 'Subject-1'
                },
                {
                    Id: 2,
                    Subject: 'Subject-2'
                },
                {
                    Id: 3,
                    Subject: 'Subject-3'
                }
            ],
            selectedTab: 'Subject-1'
        }
    },
    components: {
        TabItem
    }
}

</script>

<style>

/* CA:
User	should	be	able	to	click	on	a	link	and	see	the	cards	
filtered	by	that	tab	category

Apply CSS from example
 */
.tab-molecule-ul { 
    display: none;
}

@media (min-width: 1024px) {
    .tab-molecule-ul { 
        margin: 40px auto 0; 
        padding: 0; 
        list-style: none; 
        display: table;
        width: fit-content;
        text-align: center;
    }
}
</style>