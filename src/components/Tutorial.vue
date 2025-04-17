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
    text: `Pour chaque combinaison proposée:  
      Les pions noirs indiquent le nombre de couleurs bien placées.  
      Les pions blancs indiquent le nombre de couleurs présentes mais mal placées.  
      ATTENTION: Les pions de vérification n'indiquent pas l'emplacement des couleurs.`,
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
  position: absolute;
  top: 0;
  left: 0;
  height: 90vh;
  width: 90vw;
  padding: 5vh 5vw;
  background: white;
  opacity: 0.92;
  z-index: 10;
  font-family: sans-serif;
  font-size: 1.4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  height: 75%;
  width: 75%;
  border: 4px #424b54 solid;
  border-radius: 10%;
  box-shadow: 2px 2px 8px, -2px -2px 8px;
}
.tuto-text > div {
  border: 2px solid black;
  display:flex;
  justify-content: center;
  align-items:center;
   height:50%;
   padding: 0 8vw;
   text-align:left;
}
img {
  width: 60vw;
  height: 30vh;
  object-fit: cover;
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
