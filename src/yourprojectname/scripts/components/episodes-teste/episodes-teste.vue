<template>
  <div class="episodes-teste">
    <article class="card" v-for="it in allItems">    
      <slot v-bind:it="it">
        Default value: ITEM TITLE ='{{ it.title }}' (This is show if nothing gets specified to go here)
      </slot> 
    </article>
  </div>
</template>

<script>
export default {
  name: "episodes-teste",
  props: {
    apiUrl: { type: String, required: true }
  },
  data() {
    return {
      allItems: [
        {
          title: "how to get better at problem solving",
          author: "Derrick Pierce",
          responsibility: "Front-end Developer",
          src: "/images/autor.png",
          alt: "Autor",
          category: "Design"
        }, 
        {
          title: "Teste 2",
          author: "Derrick Pierce",
          responsibility: "Front-end Developer",
          src: "/images/autor.png",
          alt: "Autor", 
          category: "Development"
        },
        {
          title: "Teste 3",
          author: "Derrick Pierce",
          responsibility: "Front-end Developer",
          src: "/images/autor.png",
          alt: "Autor",
          category: "Project Management"
        },
        {
          title: "teste 4",
          author: "Derrick Pierce",
          responsibility: "Front-end Developer",
          src: "/images/autor.png",
          alt: "Autor",
          category: "Development"
        }
      ],
      categoria: ""
    };
  },
  computed: {},
  mounted() {
    console.log("oie", this.allItems);
  },
  methods: {}
};
</script>
