<template>
  <div class="container">
    <div class="dot-reading"><span class="black-dot"></span> Bonne couleur, bien placée.</div>
    <div class="dot-reading"><span class="white-dot"></span> Bonne couleur, mal placée.</div>
    <div class="dot-reading"><span class="empty-dot"></span> N'est pas dans la combinaison.</div>
    <div class="parenthese-style">(ça n'indique pas l'emplacement des pions)</div>
  </div>
</template>

<style>
.container {
  border: 4px solid black;
  border-right: transparent;
  position: absolute;
  bottom: 16vh;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20.5vw;
  height: 36vh;
  padding: 0 10px 0 20px !important;
  color: black;
  background-color: #bbb8b2;
  border-radius: 10% 0 0 10%;
}
.black-dot {
  border: 1px solid #424b54;
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  margin: 0 2px;
}
.white-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: white;
  border: 1px solid #424b54;
  border-radius: 50%;
  margin: 0 2px;
}
.empty-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: 1px solid #424b54;
  border-radius: 50%;
  margin: 0 2px;
}
.parenthese-style {
  font-size: 0.9em;
  font-style: italic;
  font-weight: 900;
}

@media (max-width: 768px) {
  .container {
    box-sizing: border-box;
    border: 2px solid transparent;
    top: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 100%;
    height: 10%;
    padding: 0;
    font-size: 0.9em;
    text-align: center;
    border-radius: 2%;
    z-index: 40;
  }
  .dot-reading{
    width:33%
  }
  .parenthese-style {
  font-size: 0.9em;
  font-style: italic;
  font-weight: 900;
  margin: auto;
}
}
</style>
