// js/components/GameMode.js

export default {
  props: ["patronMarcado"],
  template: `
    <div id="game-mode" class="module">
      <h2 class="title-2">Modo de Juego</h2>
      <div class="layout-mode">
        <div id="grid-game-mode" class="grid-game-mode">
          <div class="group">
            <div class="cell"><button id="b-ggm" class="btn-ggm letter lock">B</button></div>
            <div class="cell"><button id="b1" class="btn-ggm num" @click="marcarPatron('b1')" :class="{ 'marked': esPatronMarcado('b1') }">b1</button></div>
            <div class="cell"><button id="b2" class="btn-ggm num" @click="marcarPatron('b2')" :class="{ 'marked': esPatronMarcado('b2') }">b2</button></div>
            <div class="cell"><button id="b3" class="btn-ggm num" @click="marcarPatron('b3')" :class="{ 'marked': esPatronMarcado('b3') }">b3</button></div>
            <div class="cell"><button id="b4" class="btn-ggm num" @click="marcarPatron('b4')" :class="{ 'marked': esPatronMarcado('b4') }">b4</button></div>
            <div class="cell"><button id="b5" class="btn-ggm num" @click="marcarPatron('b5')" :class="{ 'marked': esPatronMarcado('b5') }">b5</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="i-ggm" class="btn-ggm letter lock">I</button></div>
            <div class="cell"><button id="i1" class="btn-ggm num" @click="marcarPatron('i1')" :class="{ 'marked': esPatronMarcado('i1') }">i1</button></div>
            <div class="cell"><button id="i2" class="btn-ggm num" @click="marcarPatron('i2')" :class="{ 'marked': esPatronMarcado('i2') }">i2</button></div>
            <div class="cell"><button id="i3" class="btn-ggm num" @click="marcarPatron('i3')" :class="{ 'marked': esPatronMarcado('i3') }">i3</button></div>
            <div class="cell"><button id="i4" class="btn-ggm num" @click="marcarPatron('i4')" :class="{ 'marked': esPatronMarcado('i4') }">i4</button></div>
            <div class="cell"><button id="i5" class="btn-ggm num" @click="marcarPatron('i5')" :class="{ 'marked': esPatronMarcado('i5') }">i5</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="n-ggm" class="btn-ggm letter lock">N</button></div>
            <div class="cell"><button id="n1" class="btn-ggm num" @click="marcarPatron('n1')" :class="{ 'marked': esPatronMarcado('n1') }">n1</button></div>
            <div class="cell"><button id="n2" class="btn-ggm num" @click="marcarPatron('n2')" :class="{ 'marked': esPatronMarcado('n2') }">n2</button></div>
            <div class="cell"><button id="n3" class="btn-ggm middle lock">n3</button></div>
            <div class="cell"><button id="n4" class="btn-ggm num" @click="marcarPatron('n4')" :class="{ 'marked': esPatronMarcado('n4') }">n4</button></div>
            <div class="cell"><button id="n5" class="btn-ggm num" @click="marcarPatron('n5')" :class="{ 'marked': esPatronMarcado('n5') }">n5</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="g-ggm" class="btn-ggm letter lock">G</button></div>
            <div class="cell"><button id="g1" class="btn-ggm num" @click="marcarPatron('g1')" :class="{ 'marked': esPatronMarcado('g1') }">g1</button></div>
            <div class="cell"><button id="g2" class="btn-ggm num" @click="marcarPatron('g2')" :class="{ 'marked': esPatronMarcado('g2') }">g2</button></div>
            <div class="cell"><button id="g3" class="btn-ggm num" @click="marcarPatron('g3')" :class="{ 'marked': esPatronMarcado('g3') }">g3</button></div>
            <div class="cell"><button id="g4" class="btn-ggm num" @click="marcarPatron('g4')" :class="{ 'marked': esPatronMarcado('g4') }">g4</button></div>
            <div class="cell"><button id="g5" class="btn-ggm num" @click="marcarPatron('g5')" :class="{ 'marked': esPatronMarcado('g5') }">g5</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="o-ggm" class="btn-ggm letter lock">O</button></div>
            <div class="cell"><button id="o1" class="btn-ggm num" @click="marcarPatron('o1')" :class="{ 'marked': esPatronMarcado('o1') }">o1</button></div>
            <div class="cell"><button id="o2" class="btn-ggm num" @click="marcarPatron('o2')" :class="{ 'marked': esPatronMarcado('o2') }">o2</button></div>
            <div class="cell"><button id="o3" class="btn-ggm num" @click="marcarPatron('o3')" :class="{ 'marked': esPatronMarcado('o3') }">o3</button></div>
            <div class="cell"><button id="o4" class="btn-ggm num" @click="marcarPatron('o4')" :class="{ 'marked': esPatronMarcado('o4') }">o4</button></div>
            <div class="cell"><button id="o5" class="btn-ggm num" @click="marcarPatron('o5')" :class="{ 'marked': esPatronMarcado('o5') }">o5</button></div>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    marcarPatron(idBoton) {
      console.log("Botón marcado:", idBoton)
      this.$emit("marcar-patron", idBoton)
    },
    esPatronMarcado(idBoton) {
      const marcado = this.patronMarcado.includes(idBoton)
      if (marcado || this.patronMarcado.includes(idBoton)) {
        console.log("Botón:", idBoton, "Marcado:", marcado)
      }
      return marcado
    },
  },
}
