// js/components/GameBoard.js

export default {
  template: `
      <div id="game-board" class="module">
        <div id="grid-game-board" class="board-y">
          <div class="group">
            <div class="cell"><button id="b-ggb" class="btn-ggb letter lock">B</button></div>
            <div class="cell"><button id="1" class="btn-ggb num" @click="marcarBalota(1)" :class="{ 'marked': esBalotaMarcada(1), 'lock': esBalotaMarcada(1) }">1</button></div>
            <div class="cell"><button id="2" class="btn-ggb num" @click="marcarBalota(2)" :class="{ 'marked': esBalotaMarcada(2), 'lock': esBalotaMarcada(2) }">2</button></div>
            <div class="cell"><button id="3" class="btn-ggb num" @click="marcarBalota(3)" :class="{ 'marked': esBalotaMarcada(3), 'lock': esBalotaMarcada(3) }">3</button></div>
            <div class="cell"><button id="4" class="btn-ggb num" @click="marcarBalota(4)" :class="{ 'marked': esBalotaMarcada(4), 'lock': esBalotaMarcada(4) }">4</button></div>
            <div class="cell"><button id="5" class="btn-ggb num" @click="marcarBalota(5)" :class="{ 'marked': esBalotaMarcada(5), 'lock': esBalotaMarcada(5) }">5</button></div>
            <div class="cell"><button id="6" class="btn-ggb num" @click="marcarBalota(6)" :class="{ 'marked': esBalotaMarcada(6), 'lock': esBalotaMarcada(6) }">6</button></div>
            <div class="cell"><button id="7" class="btn-ggb num" @click="marcarBalota(7)" :class="{ 'marked': esBalotaMarcada(7), 'lock': esBalotaMarcada(7) }">7</button></div>
            <div class="cell"><button id="8" class="btn-ggb num" @click="marcarBalota(8)" :class="{ 'marked': esBalotaMarcada(8), 'lock': esBalotaMarcada(8) }">8</button></div>
            <div class="cell"><button id="9" class="btn-ggb num" @click="marcarBalota(9)" :class="{ 'marked': esBalotaMarcada(9), 'lock': esBalotaMarcada(9) }">9</button></div>
            <div class="cell"><button id="10" class="btn-ggb num" @click="marcarBalota(10)" :class="{ 'marked': esBalotaMarcada(10), 'lock': esBalotaMarcada(10) }">10</button></div>
            <div class="cell"><button id="11" class="btn-ggb num" @click="marcarBalota(11)" :class="{ 'marked': esBalotaMarcada(11), 'lock': esBalotaMarcada(11) }">11</button></div>
            <div class="cell"><button id="12" class="btn-ggb num" @click="marcarBalota(12)" :class="{ 'marked': esBalotaMarcada(12), 'lock': esBalotaMarcada(12) }">12</button></div>
            <div class="cell"><button id="13" class="btn-ggb num" @click="marcarBalota(13)" :class="{ 'marked': esBalotaMarcada(13), 'lock': esBalotaMarcada(13) }">13</button></div>
            <div class="cell"><button id="14" class="btn-ggb num" @click="marcarBalota(14)" :class="{ 'marked': esBalotaMarcada(14), 'lock': esBalotaMarcada(14) }">14</button></div>
            <div class="cell"><button id="15" class="btn-ggb num" @click="marcarBalota(15)" :class="{ 'marked': esBalotaMarcada(15), 'lock': esBalotaMarcada(15) }">15</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="i-ggb" class="btn-ggb letter lock">I</button></div>
            <div class="cell"><button id="16" class="btn-ggb num" @click="marcarBalota(16)" :class="{ 'marked': esBalotaMarcada(16), 'lock': esBalotaMarcada(16) }">16</button></div>
            <div class="cell"><button id="17" class="btn-ggb num" @click="marcarBalota(17)" :class="{ 'marked': esBalotaMarcada(17), 'lock': esBalotaMarcada(17) }">17</button></div>
            <div class="cell"><button id="18" class="btn-ggb num" @click="marcarBalota(18)" :class="{ 'marked': esBalotaMarcada(18), 'lock': esBalotaMarcada(18) }">18</button></div>
            <div class="cell"><button id="19" class="btn-ggb num" @click="marcarBalota(19)" :class="{ 'marked': esBalotaMarcada(19), 'lock': esBalotaMarcada(19) }">19</button></div>
            <div class="cell"><button id="20" class="btn-ggb num" @click="marcarBalota(20)" :class="{ 'marked': esBalotaMarcada(20), 'lock': esBalotaMarcada(20) }">20</button></div>
            <div class="cell"><button id="21" class="btn-ggb num" @click="marcarBalota(21)" :class="{ 'marked': esBalotaMarcada(21), 'lock': esBalotaMarcada(21) }">21</button></div>
            <div class="cell"><button id="22" class="btn-ggb num" @click="marcarBalota(22)" :class="{ 'marked': esBalotaMarcada(22), 'lock': esBalotaMarcada(22) }">22</button></div>
            <div class="cell"><button id="23" class="btn-ggb num" @click="marcarBalota(23)" :class="{ 'marked': esBalotaMarcada(23), 'lock': esBalotaMarcada(23) }">23</button></div>
            <div class="cell"><button id="24" class="btn-ggb num" @click="marcarBalota(24)" :class="{ 'marked': esBalotaMarcada(24), 'lock': esBalotaMarcada(24) }">24</button></div>
            <div class="cell"><button id="25" class="btn-ggb num" @click="marcarBalota(25)" :class="{ 'marked': esBalotaMarcada(25), 'lock': esBalotaMarcada(25) }">25</button></div>
            <div class="cell"><button id="26" class="btn-ggb num" @click="marcarBalota(26)" :class="{ 'marked': esBalotaMarcada(26), 'lock': esBalotaMarcada(26) }">26</button></div>
            <div class="cell"><button id="27" class="btn-ggb num" @click="marcarBalota(27)" :class="{ 'marked': esBalotaMarcada(27), 'lock': esBalotaMarcada(27) }">27</button></div>
            <div class="cell"><button id="28" class="btn-ggb num" @click="marcarBalota(28)" :class="{ 'marked': esBalotaMarcada(28), 'lock': esBalotaMarcada(28) }">28</button></div>
            <div class="cell"><button id="29" class="btn-ggb num" @click="marcarBalota(29)" :class="{ 'marked': esBalotaMarcada(29), 'lock': esBalotaMarcada(29) }">29</button></div>
            <div class="cell"><button id="30" class="btn-ggb num" @click="marcarBalota(30)" :class="{ 'marked': esBalotaMarcada(30), 'lock': esBalotaMarcada(30) }">30</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="n-ggb" class="btn-ggb letter lock">N</button></div>
            <div class="cell"><button id="31" class="btn-ggb num" @click="marcarBalota(31)" :class="{ 'marked': esBalotaMarcada(31), 'lock': esBalotaMarcada(31) }">31</button></div>
            <div class="cell"><button id="32" class="btn-ggb num" @click="marcarBalota(32)" :class="{ 'marked': esBalotaMarcada(32), 'lock': esBalotaMarcada(32) }">32</button></div>
            <div class="cell"><button id="33" class="btn-ggb num" @click="marcarBalota(33)" :class="{ 'marked': esBalotaMarcada(33), 'lock': esBalotaMarcada(33) }">33</button></div>
            <div class="cell"><button id="34" class="btn-ggb num" @click="marcarBalota(34)" :class="{ 'marked': esBalotaMarcada(34), 'lock': esBalotaMarcada(34) }">34</button></div>
            <div class="cell"><button id="35" class="btn-ggb num" @click="marcarBalota(35)" :class="{ 'marked': esBalotaMarcada(35), 'lock': esBalotaMarcada(35) }">35</button></div>
            <div class="cell"><button id="36" class="btn-ggb num" @click="marcarBalota(36)" :class="{ 'marked': esBalotaMarcada(36), 'lock': esBalotaMarcada(36) }">36</button></div>
            <div class="cell"><button id="37" class="btn-ggb num" @click="marcarBalota(37)" :class="{ 'marked': esBalotaMarcada(37), 'lock': esBalotaMarcada(37) }">37</button></div>
            <div class="cell"><button id="38" class="btn-ggb num" @click="marcarBalota(38)" :class="{ 'marked': esBalotaMarcada(38), 'lock': esBalotaMarcada(38) }">38</button></div>
            <div class="cell"><button id="39" class="btn-ggb num" @click="marcarBalota(39)" :class="{ 'marked': esBalotaMarcada(39), 'lock': esBalotaMarcada(39) }">39</button></div>
            <div class="cell"><button id="40" class="btn-ggb num" @click="marcarBalota(40)" :class="{ 'marked': esBalotaMarcada(40), 'lock': esBalotaMarcada(40) }">40</button></div>
            <div class="cell"><button id="41" class="btn-ggb num" @click="marcarBalota(41)" :class="{ 'marked': esBalotaMarcada(41), 'lock': esBalotaMarcada(41) }">41</button></div>
            <div class="cell"><button id="42" class="btn-ggb num" @click="marcarBalota(42)" :class="{ 'marked': esBalotaMarcada(42), 'lock': esBalotaMarcada(42) }">42</button></div>
            <div class="cell"><button id="43" class="btn-ggb num" @click="marcarBalota(43)" :class="{ 'marked': esBalotaMarcada(43), 'lock': esBalotaMarcada(43) }">43</button></div>
            <div class="cell"><button id="44" class="btn-ggb num" @click="marcarBalota(44)" :class="{ 'marked': esBalotaMarcada(44), 'lock': esBalotaMarcada(44) }">44</button></div>
            <div class="cell"><button id="45" class="btn-ggb num" @click="marcarBalota(45)" :class="{ 'marked': esBalotaMarcada(45), 'lock': esBalotaMarcada(45) }">45</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="g-ggb" class="btn-ggb letter lock">G</button></div>
            <div class="cell"><button id="46" class="btn-ggb num" @click="marcarBalota(46)" :class="{ 'marked': esBalotaMarcada(46), 'lock': esBalotaMarcada(46) }">46</button></div>
            <div class="cell"><button id="47" class="btn-ggb num" @click="marcarBalota(47)" :class="{ 'marked': esBalotaMarcada(47), 'lock': esBalotaMarcada(47) }">47</button></div>
            <div class="cell"><button id="48" class="btn-ggb num" @click="marcarBalota(48)" :class="{ 'marked': esBalotaMarcada(48), 'lock': esBalotaMarcada(48) }">48</button></div>
            <div class="cell"><button id="49" class="btn-ggb num" @click="marcarBalota(49)" :class="{ 'marked': esBalotaMarcada(49), 'lock': esBalotaMarcada(49) }">49</button></div>
            <div class="cell"><button id="50" class="btn-ggb num" @click="marcarBalota(50)" :class="{ 'marked': esBalotaMarcada(50), 'lock': esBalotaMarcada(50) }">50</button></div>
            <div class="cell"><button id="51" class="btn-ggb num" @click="marcarBalota(51)" :class="{ 'marked': esBalotaMarcada(51), 'lock': esBalotaMarcada(51) }">51</button></div>
            <div class="cell"><button id="52" class="btn-ggb num" @click="marcarBalota(52)" :class="{ 'marked': esBalotaMarcada(52), 'lock': esBalotaMarcada(52) }">52</button></div>
            <div class="cell"><button id="53" class="btn-ggb num" @click="marcarBalota(53)" :class="{ 'marked': esBalotaMarcada(53), 'lock': esBalotaMarcada(53) }">53</button></div>
            <div class="cell"><button id="54" class="btn-ggb num" @click="marcarBalota(54)" :class="{ 'marked': esBalotaMarcada(54), 'lock': esBalotaMarcada(54) }">54</button></div>
            <div class="cell"><button id="55" class="btn-ggb num" @click="marcarBalota(55)" :class="{ 'marked': esBalotaMarcada(55), 'lock': esBalotaMarcada(55) }">55</button></div>
            <div class="cell"><button id="56" class="btn-ggb num" @click="marcarBalota(56)" :class="{ 'marked': esBalotaMarcada(56), 'lock': esBalotaMarcada(56) }">56</button></div>
            <div class="cell"><button id="57" class="btn-ggb num" @click="marcarBalota(57)" :class="{ 'marked': esBalotaMarcada(57), 'lock': esBalotaMarcada(57) }">57</button></div>
            <div class="cell"><button id="58" class="btn-ggb num" @click="marcarBalota(58)" :class="{ 'marked': esBalotaMarcada(58), 'lock': esBalotaMarcada(58) }">58</button></div>
            <div class="cell"><button id="59" class="btn-ggb num" @click="marcarBalota(59)" :class="{ 'marked': esBalotaMarcada(59), 'lock': esBalotaMarcada(59) }">59</button></div>
            <div class="cell"><button id="60" class="btn-ggb num" @click="marcarBalota(60)" :class="{ 'marked': esBalotaMarcada(60), 'lock': esBalotaMarcada(60) }">60</button></div>
          </div>
          <div class="group">
            <div class="cell"><button id="o-ggb" class="btn-ggb letter lock">O</button></div>
            <div class="cell"><button id="61" class="btn-ggb num" @click="marcarBalota(61)" :class="{ 'marked': esBalotaMarcada(61), 'lock': esBalotaMarcada(61) }">61</button></div>
            <div class="cell"><button id="62" class="btn-ggb num" @click="marcarBalota(62)" :class="{ 'marked': esBalotaMarcada(62), 'lock': esBalotaMarcada(62) }">62</button></div>
            <div class="cell"><button id="63" class="btn-ggb num" @click="marcarBalota(63)" :class="{ 'marked': esBalotaMarcada(63), 'lock': esBalotaMarcada(63) }">63</button></div>
            <div class="cell"><button id="64" class="btn-ggb num" @click="marcarBalota(64)" :class="{ 'marked': esBalotaMarcada(64), 'lock': esBalotaMarcada(64) }">64</button></div>
            <div class="cell"><button id="65" class="btn-ggb num" @click="marcarBalota(65)" :class="{ 'marked': esBalotaMarcada(65), 'lock': esBalotaMarcada(65) }">65</button></div>
            <div class="cell"><button id="66" class="btn-ggb num" @click="marcarBalota(66)" :class="{ 'marked': esBalotaMarcada(66), 'lock': esBalotaMarcada(66) }">66</button></div>
            <div class="cell"><button id="67" class="btn-ggb num" @click="marcarBalota(67)" :class="{ 'marked': esBalotaMarcada(67), 'lock': esBalotaMarcada(67) }">67</button></div>
            <div class="cell"><button id="68" class="btn-ggb num" @click="marcarBalota(68)" :class="{ 'marked': esBalotaMarcada(68), 'lock': esBalotaMarcada(68) }">68</button></div>
            <div class="cell"><button id="69" class="btn-ggb num" @click="marcarBalota(69)" :class="{ 'marked': esBalotaMarcada(69), 'lock': esBalotaMarcada(69) }">69</button></div>
            <div class="cell"><button id="70" class="btn-ggb num" @click="marcarBalota(70)" :class="{ 'marked': esBalotaMarcada(70), 'lock': esBalotaMarcada(70) }">70</button></div>
            <div class="cell"><button id="71" class="btn-ggb num" @click="marcarBalota(71)" :class="{ 'marked': esBalotaMarcada(71), 'lock': esBalotaMarcada(71) }">71</button></div>
            <div class="cell"><button id="72" class="btn-ggb num" @click="marcarBalota(72)" :class="{ 'marked': esBalotaMarcada(72), 'lock': esBalotaMarcada(72) }">72</button></div>
            <div class="cell"><button id="73" class="btn-ggb num" @click="marcarBalota(73)" :class="{ 'marked': esBalotaMarcada(73), 'lock': esBalotaMarcada(73) }">73</button></div>
            <div class="cell"><button id="74" class="btn-ggb num" @click="marcarBalota(74)" :class="{ 'marked': esBalotaMarcada(74), 'lock': esBalotaMarcada(74) }">74</button></div>
            <div class="cell"><button id="75" class="btn-ggb num" @click="marcarBalota(75)" :class="{ 'marked': esBalotaMarcada(75), 'lock': esBalotaMarcada(75) }">75</button></div>
          </div>
        </div>
      </div>
    `,
  methods: {
    marcarBalota(numero) {
      console.log("Balota marcada:", numero)
      this.$emit("marcar-balota", numero)
    },
    esBalotaMarcada(numero) {
      return this.$parent.balotasMarcadas.includes(numero)
    },
  },
}
