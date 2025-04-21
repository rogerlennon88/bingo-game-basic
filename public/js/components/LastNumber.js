// js/components/LastNumber.js

export default {
  props: ["ultimaBalota"],
  template: `
    <div id="last-number" class="module">
      <h2 class="title-2">Última Balota</h2>
      <div class="last-number">
        <div class="ball num-1">{{ ultimaBalota }}</div>
      </div>
    </div>
  `,
}