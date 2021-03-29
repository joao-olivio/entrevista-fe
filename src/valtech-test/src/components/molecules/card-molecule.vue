<template>
    <transition-group 
    class="card-collection" 
    name="slide-fade" 
    tag="div">
            <div @tab-clicked="subjectSelected=$event" 
            v-for='card in getCards()' 
            :key='card.Id' 
            class="card-container">
                <div class="inner-card-conteiner">
                    <card-title-subject :cardTitle="card.CardTitle" ></card-title-subject>
                    <card-subtitle-authorname :authorName="card.Author"></card-subtitle-authorname>
                    <card-subtitle-authorposition :authorPosition="card.Position"></card-subtitle-authorposition>
                    <div class="card-footer">
                        <card-footer-playbutton></card-footer-playbutton>
                        <card-footer-time :duration="card.Duration"></card-footer-time>
                    </div>
                </div>
            </div>
    </transition-group>
</template>

<script>
import CardFooterPlaybutton from '../atoms/card-atoms/card-footer-playbutton.vue'
import CardFooterTime from '../atoms/card-atoms/card-footer-time.vue'
import CardSubtitleAuthorname from '../atoms/card-atoms/card-subtitle-authorname.vue'
import CardSubtitleAuthorposition from '../atoms/card-atoms/card-subtitle-authorposition.vue'
import CardTitleSubject from '../atoms/card-atoms/card-title-subject.vue'

export default {
    data () {
        return {
            cards: [
                {
                    Id: 1,
                    Subject: 'Subject-1',
                    Author: 'Card-Author-1',
                    Position: 'Card-Position-1',
                    Duration: '01h 45min',
                    CardTitle: 'Card-Title-1'
                },
                {
                    Id: 2,
                    Subject: 'Subject-1',
                    Author: 'Card-Author-2',
                    Position: 'Card-Position-2',
                    Duration: '01h 15min',
                    CardTitle: 'Card-Title-2'
                },
                {
                    Id: 3,
                    Subject: 'Subject-2',
                    Author: 'Card-Author-3',
                    Position: 'Card-Position-3',
                    Duration: '45min',
                    CardTitle: 'Card-Title-3'
                }
            ]
        }
    },
    props: {
        subjectSelected: String
    },
    components: {
        CardSubtitleAuthorname,
        CardTitleSubject,
        CardSubtitleAuthorposition,
        CardFooterPlaybutton,
        CardFooterTime
    },
    computed: {
        isPC: function () {
            return window.matchMedia("(min-width: 1024px)").matches;
        }
    },
    methods: {
        getCards: function () {
            return this.isPC ? this.cards.filter(card => card.Subject === this.subjectSelected) : this.cards;
        }
        
    }
}
</script>

<style>
.card-collection {
    margin: 20px 5%; 
    padding: 0; 
    display: flex;
    flex-flow: row;
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    min-height: 342px;
}
.card-container {
    width: 262px;
    min-width: 262px;
    height: 342px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    margin: 16px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 20px #0000001A;
}
.card-container:hover {
    box-shadow: 0px 0px 30px #0000002a;
}
.inner-card-conteiner {
    margin: 32px;
    height: 278px;
    position: relative;
}
.card-footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
}

@media (min-width: 1024px) {
    .card-collection {
        overflow-x: hidden;
    }
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

</style>