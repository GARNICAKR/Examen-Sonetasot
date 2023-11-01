<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-1" v-if="$q.screen.gt.sm"></div>
      <div class="col-8 container-body">
        <div class="flex flex-center">
          <strong class="title"> Campañas activas de vacunacion</strong>
        </div>
        <div class="flex flex-center">
          <strong class="title"> contra covid-19 (ZMG)</strong>
        </div>
        <div class="row justify-center">
          <div class="col-1 col-md-auto self-center" style="cursor: pointer">
            <q-icon name="fa-solid fa-chevron-left" color="grey-5" size="40px">
            </q-icon>
          </div>
          <div class="col-5 container-Dosis">
            <div>
              <img
                alt="Family"
                src="~assets/family.svg"
                style="width: 84px; height: 48px"
              />
            </div>
            <div>
              <strong style="font-size: 18px">Personas de 18 y mas</strong>
            </div>
            <div class="row">
              <div class="col col-md-auto">
                <div class="circle flex flex-center">
                  <strong style="font-size: 13px"> 1</strong>
                </div>
              </div>
              <div class="col col-md-auto q-ml-xs">
                <strong class="color-Dosis">Primera Dosis</strong>
              </div>
            </div>
          </div>
          <div class="col-5 container-Dosis q-ml-md">
            <div>
              <img
                alt="Family"
                src="~assets/family.svg"
                style="width: 84px; height: 48px"
              />
            </div>
            <div>
              <strong style="font-size: 18px">Personas de 18 y mas</strong>
            </div>
            <div class="row">
              <div class="col col-md-auto">
                <div class="circle flex flex-center">
                  <strong style="font-size: 13px"> 2</strong>
                </div>
              </div>
              <div class="col col-md-auto q-ml-xs">
                <strong class="color-Dosis">Segunda Dosis</strong>
              </div>
            </div>
            <div>
              <strong class="astra">ASTRA ZENECA</strong>
            </div>
            <div>
              <strong style="font-size: 18px; color: #ff6c00"
                >Primera dosis aplicada antes del 15 de Agosto</strong
              >
            </div>
          </div>

          <div class="col-1 col-md-auto self-center" style="cursor: pointer">
            <q-icon name="fa-solid fa-chevron-right" color="grey-5" size="40px">
            </q-icon>
          </div>
        </div>

        <q-separator size="2px" class="q-mt-xl" color="grey-3" />
        <div>
          <div>
            <strong class="comenzar">Comenzar ahora</strong>
          </div>
          <div>
            <strong class="ingresa">Ingresa tu CURP para agendar cita</strong>
          </div>
          <div>
            <strong class="ingresa">o para </strong>
            <a href="#" class="cancela">cancelar una cita</a>
            <strong class="ingresa"> ya registrada.</strong>
          </div>
        </div>
        <div class="row q-mt-lg">
          <div class="col-6">
            <q-input
              borderless
              class="input"
              label-color="grey"
              placeholder="Introduce tu CURP"
              v-model="CURP"
              hide-selected
              standout="text-white"
              @update:model-value="CURP = CURP.toUpperCase()"
            >
              <template v-slot:prepend>
                <q-icon
                  class="text-grey q-ml-md"
                  name="fa-regular fa-user"
                  size="15px"
                />
              </template>
            </q-input>
          </div>
          <div class="col col-md-auto q-ml-xl">
            <q-btn class="btn" to="/concluido"> Continuar </q-btn>
          </div>
        </div>
        <div class="q-mt-md q-mb-xl">
          <a class="noConoces">Si no conoces tu CURP </a>
          <a class="consulta" href="https://www.gob.mx/curp/" target="_blank">
            consulta aquí
          </a>
        </div>
      </div>
      <div class="col col-md-auto q-mt-md q-ml-md">
        <div class="telefono">
          <div class="row items-center">
            <div class="col col-md-auto q-mt-xs q-mr-sm">
              <img
                alt="Family"
                src="~assets/ico_tel.svg"
                style="width: 28px; height: 28px"
                class=""
              />
            </div>
            <div class="col col-md-auto">33 3823 3220</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fondo"></div>
    <div id="rectangle">
      <div class="row">
        <div class="offset-1"></div>
        <div class="col col-md-auto q-mt-xl">
          <img
            alt="Family"
            src="~assets/img_back_puntos.svg"
            style="width: 81px; height: 84px"
          />
        </div>
      </div>
    </div>
    <div id="contenedor-left">
      <img id="img_left" alt="Family" src="~assets/img_left.svg" />
    </div>
    <div id="contenedor-right">
      <img id="img_right" alt="Family" src="~assets/img_right.svg" />
    </div>
  </q-page>
</template>
<script setup>
import { defineComponent, ref } from "vue";
import router from "src/router/index";
defineComponent({
  name: "JoinCurp",
});
const CURP = ref(null);
</script>
<style lang="scss">
.container-body {
  background-color: #ffffff;
  padding: 10px;
  padding-left: 120px;
  padding-right: 120px;
  border: 1px solid #d0d1d6;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0 3px 15px #00000027;
  opacity: 1;
}

.container-body::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.container-Dosis {
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #d0d1d6;
  border-radius: 25px;
  box-shadow: 0px 3px 8px #0000001a;
  opacity: 1;
}

.container-Dosis::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.title {
  color: #015db1;
  opacity: 1;
  font-size: 36px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0px;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 1000px;
  background-color: #37aefe;
  color: white;
  font: bold;
  margin-top: 3px;
}
.color-Dosis {
  color: #37aefe;
  font-size: 18px;
  font-style: italic;
}
.astra {
  font-size: 20px;
  color: #ff6c00;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.comenzar {
  font-size: 34px;
  color: #37aefe;
}
.ingresa {
  font-size: 22px;
  color: #676d72;
  letter-spacing: 0px;
}
.cancela {
  font-size: 22px;
  color: #57bbff;
  font-weight: bold;
  letter-spacing: 0px;
}
.input {
  border-radius: 4px;
  border: 0.5px solid #eaedef;
  box-shadow: 0px 3px 15px #00000027;
  text-anchor: 10px;
  letter-spacing: 1em;
}

.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  letter-spacing: 2px;
  margin-left: 20px;
  color: #a6a6af;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

// .q-btn:hover {
//   background-color: #00326c !important;
//   border-radius: 14px !important;
// }
// .q-btn {
//   text-transform: none;
//   background-color: #015db1 !important;
//   color: white;
//   border-radius: 16px !important;
//   width: 231px !important;
//   height: 60px !important;
//   transition: all 1s;
//   font-size: 18px;
//   font-weight: bold;
// }
.btn:hover {
  background-color: #00326c !important;
  border-radius: 14px !important;
}
.btn {
  text-transform: none;
  background-color: #015db1 !important;
  color: white;
  border-radius: 16px !important;
  width: 231px !important;
  height: 60px !important;
  transition: all 1s;
  font-size: 18px;
  font-weight: bold;
}
.noConoces {
  color: #676d72;
  font-size: 18px;
}
.consulta {
  color: #37aefd;
  font-size: 18px;
  font-weight: bold;
}
.fondo {
  position: absolute;
  bottom: 0;
  background-color: #676d72;
  z-index: -6;
  width: 100%;
  height: 100%;
}
#rectangle {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 240px;
  background: #00326c;
  z-index: -5;
}
#img_left {
  width: 100%; /* Duplica el tamaño para compensar el contenedor de 50% de ancho */
  height: 263.62px;
  margin-left: -36%; /* Desplaza la imagen a la izquierda */
}
#contenedor-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 184.27px; /* Ajusta esto al tamaño de tu imagen */
  height: 263.62px; /* Ajusta esto al tamaño de tu imagen */
  overflow: hidden;
  margin-top: 50px;
  z-index: -4;
}
#img_right {
  width: 100%; /* Duplica el tamaño para compensar el contenedor de 50% de ancho */
  height: 263.62px;
  margin-left: 40%; /* Desplaza la imagen a la izquierda */
}
#contenedor-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 184.27px; /* Ajusta esto al tamaño de tu imagen */
  height: 263.62px; /* Ajusta esto al tamaño de tu imagen */
  overflow: hidden;
  margin-bottom: 106px;
  z-index: -4;
}
.telefono {
  border-radius: 24px;
  background-color: #57bbff;
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  padding: 2px;
  padding-left: 6px;
  padding-right: 16px;
}
</style>