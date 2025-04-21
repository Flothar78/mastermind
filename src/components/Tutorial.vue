<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const slides = [
  {
    text: "En haut du plateau de jeu, il y a la solution qui est cachée.",
    img: "/solution.png",
    alt: "Solution de la combinaison de couleurs à deviner",
  },
  {
    text: "En bas du plateau de jeu, il y a une réserve de couleurs disponibles.",
    img: "/reserve_de_couleurs.png",
    alt: "Réserve de couleurs disponibles pour le jeu",
  },
  {
    text: "Il faut deviner la bonne combinaison en faisant des propositions.",
    img: "/combinaison_couleurs.png",
    alt: "Rangée pour proposer des combinaisons de couleurs",
  },
  {
    text: `
      Dans les rangées de gauche, on vous aide à chaque tentative. `,

    img: "/check_peons.png",
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: ` 
      Les pions noirs indiquent le nombre de couleurs bien placées.  
        `,

    img: "/check_peons.png",
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: `
      Les pions blancs indiquent le nombre de couleurs présentes mais mal placées.  `,

    img: "/check_peons.png",
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: `  
      ATTENTION: Les pions de vérification n'indiquent pas l'emplacement des couleurs. Seulement leur nombre.`,
    img: "/check_peons.png",
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
];

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};
</script>

<template>
  <div class="tuto-container">
    <div class="tuto-title">
      COMMENT JOUER AU MASTERMIND ?
      <div>{{ currentSlide + 1 }} / {{ slides.length }}</div>
    </div>
    <div class="tuto-text">
      <div v-html="slides[currentSlide].text.replace(/\n/g, '<br>')"></div>
      <div>
        <img :src="slides[currentSlide].img" :alt="slides[currentSlide].alt" />
      </div>
    </div>
    <button class="next-button" @click="nextSlide">Suivant</button>
  </div>
</template>
<style scoped>
.tuto-container {
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  width: 90vw;
  max-width: 1487px;
  margin: auto;
  padding: 5vh 5vw;
  background: white;
  opacity: 0.92;
  z-index: 10;
  font-family: sans-serif;
  font-size: 1.4rem;
  text-align: center;
  overflow: hidden;
}
.tuto-title {
  /* border: black 1px solid; */
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  color: #424b54;
  font-size: 1.5rem;
  font-weight: bold;
}
.tuto-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 55%;
  width: 75%;
  max-width: 1117px;
  border: 4px #424b54 solid;
  border-radius: 10%;
  box-shadow: 2px 2px 8px, -2px -2px 8px;
}
.tuto-text > div {
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  padding: 0 8vw;
  text-align: center;
}
img {
  width: 50vw;
  height: 20vh;
  max-width: 800px;
  object-fit: contain;
}
.next-button {
  position: absolute;
  bottom: 2vh;
  padding: 0.8rem 1.2rem;
  border: none;
  background-color: #424b54;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
