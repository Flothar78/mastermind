<template>
  <div class="container">
    <div>
      Un <span class="black-dot"></span> signale un pion bien placé, mais on sait pas
      lequel.
    </div>
    <div>
      Un <span class="white-dot"></span> signale un pion bien placé, mais on sait pas
      lequel.
    </div>
    <div>Pas de pion signale pas de pion bien placé.</div>
  </div>
</template>

<style>
.container {
  position: absolute;
  bottom: 40%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25vw;
  height: 20vh;
  padding: 12px;
  background-color: yellow;
  border-radius: 4px;

}
.black-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  margin: 0 4px;
}
.white-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 0 4px;
}
</style>
