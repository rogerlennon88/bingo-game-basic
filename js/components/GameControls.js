// js/components/GameControls.js

export default {
  template: `
    <div id="game-controls" class="module">
      <ul class="game-controls-list">
        <li class="game-controls-item">
          <button id="btn-restart-game" class="btn btn-primary" type="button" title="Reiniciar Juego" @click="reiniciarJuego">
            <span class="material-icons-round"> history </span>
            <span class="btn-text">Reiniciar</span>
          </button>
        </li>
      </ul>
    </div>
  `,
  methods: {
    reiniciarJuego() {
      this.$emit("reiniciar-juego")
    },
  },
}
