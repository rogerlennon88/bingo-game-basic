// js/main.js

import GameBoard from "./components/GameBoard.js"
import GameMode from "./components/GameMode.js"
import LastNumber from "./components/LastNumber.js"
import LastNumberList from "./components/LastNumberList.js"
import GameControls from "./components/GameControls.js"

const app = Vue.createApp({
  data() {
    return {
      balotasMarcadas: [],
      patronMarcado: [],
      componentesMontados: false,
      ultimaBalota: 0,
    }
  },
  methods: {
    marcarBalota(numero) {
      this.balotasMarcadas.unshift(numero)
      this.ultimaBalota = numero
      console.log("Histórico de balotas marcadas:", this.balotasMarcadas)
    },
    marcarPatron(idBoton) {
      const index = this.patronMarcado.indexOf(idBoton)

      if (index === -1) {
        this.patronMarcado.push(idBoton)
      } else {
        this.patronMarcado.splice(index, 1)
      }
    },
    reiniciarJuego() {
      console.log("Método 'reiniciarJuego' ejecutado en main.js") // Agrega esta línea
      this.balotasMarcadas = []
      this.patronMarcado = []
      // Aquí podrías añadir lógica para resetear la interfaz visual si es necesario
    },
    actualizarUltimas4Balotas() {
      if (this.componentesMontados && this.$refs.lastNumberList) {
        console.log("this.$refs.lastNumberList:", this.$refs.lastNumberList)
        const ultimas4Balotas = this.balotasMarcadas.slice(1, 5)
        const elementosBalotas = this.$refs.lastNumberList.$el.querySelectorAll(".ball") // Modifica esta línea

        if (elementosBalotas) {
          elementosBalotas.forEach((elemento, index) => {
            elemento.textContent = ultimas4Balotas[index] || 0
          })
        }
      }
    },
  },
  mounted() {
    this.componentesMontados = true
  },
  updated() {
    this.actualizarUltimas4Balotas()
  },
})

app.component("game-board", GameBoard)
app.component("game-mode", GameMode)
app.component("last-number", LastNumber)
app.component("last-number-list", LastNumberList)
app.component("game-controls", GameControls)

app.mount("#app")
