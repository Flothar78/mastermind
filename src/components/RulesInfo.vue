<template>
  <div class="container">
    <div>
      Un <span class="black-dot"></span> signale un pion de la bonne couleur et bien placé.
      <div class="parenthese-style">(ça n'indique pas le pion concerné)</div>
    </div>
    <div>
      Un <span class="white-dot"></span> signale un pion de la mauvaise couleur et mal placé.
      <div class="parenthese-style">(ça n'indique pas le pion concerné)</div>
    </div>
    <div>
      Un <span class="empty-dot"></span> signale un pion dont la couleur ne fait pas partie de la solution.
      <div class="parenthese-style">(ça n'indique pas le pion concerné)</div>
    </div>
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
  padding:0 10px 0 20px  !important;
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
.parenthese-style{
  font-size: 0.9em;
  font-style: italic;
  font-weight: 900;
}
</style>
