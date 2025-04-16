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
    }
  },
  methods: {
    marcarBalota(numero) {
      this.balotasMarcadas.unshift(numero)
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
      this.balotasMarcadas = []
      this.patronMarcado = []
    },
    actualizarUltimaBalota() {
      if (this.componentesMontados && this.$refs.lastNumber) {
        const ultimaBalota = this.balotasMarcadas[0] || 0
        const elementoNum1 = this.$refs.lastNumber.querySelector(".num-1")
        if (elementoNum1) {
          elementoNum1.textContent = ultimaBalota
        }
      }
    },
    actualizarUltimas4Balotas() {
      if (this.componentesMontados && this.$refs.lastNumberList) {
        const ultimas4Balotas = this.balotasMarcadas.slice(1, 5)
        const elementosBalotas = this.$refs.lastNumberList.querySelectorAll(".ball")

        elementosBalotas.forEach((elemento, index) => {
          elemento.textContent = ultimas4Balotas[index] || 0
        })
      }
    },
  },
  mounted() {
    this.componentesMontados = true
  },
  updated() {
    this.actualizarUltimaBalota();
    this.actualizarUltimas4Balotas();
  }
})

app.component("game-board", GameBoard)
app.component("game-mode", GameMode)
app.component("last-number", LastNumber)
app.component("last-number-list", LastNumberList)
app.component("game-controls", GameControls)

app.mount("#app")