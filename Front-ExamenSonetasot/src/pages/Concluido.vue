<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-7">
        <div class="row justify-between q-mt-xl">
          <div class="col col-md-auto q-mb-xs">
            <q-icon
              class="q-ml-sm q-mb-md q-mr-lg"
              name="fa-solid fa-circle-check"
              color="positive"
              size="40px"
            >
            </q-icon>
            <strong style="font-size: 30px; color: #005eb1"
              >Registro concluido</strong
            >
          </div>
          <div class="col col-md-auto">
            <q-btn
            to="/"
              color="negative"
              icon="fa-regular fa-circle-xmark"
              label="Quiero cancelar mi cita"
              class="cancelarBtn"
            >
            </q-btn>
          </div>
        </div>
        <div class="row justify-between container-dosis">
          <div class="col col-md-auto q-mt-lg">
            <div class="row">
              <div class="col col-md-auto curp">
                <span>CURP: </span>
              </div>
              <div class="col col-md-auto Nombre q-ml-xs">
                <strong> XEXX010101MNEXXXA8</strong>
                <br />
                <strong>MARTHA ALICIA CARMONA SOLIS</strong>
              </div>
            </div>
          </div>
          <div class="col col-md-auto">
            <div class="row">
              <div class="col col-md-auto">
                <img
                  alt="Family"
                  src="~assets/family.svg"
                  style="width: 84px; height: 48px"
                />
              </div>
              <div class="col col-md-auto q-ml-sm q-mr-xl">
                <div>
                  <strong style="font-size: 18px; color: #00326c"
                    >Personas de 18 y mas</strong
                  >
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
                  <strong style="font-size: 18px; color: #676d72"
                    >Zapopan</strong
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row justify-between container-dosis q-mt-lg"
          style="padding-top: 95px"
        >
          <div class="col-2 col-md-auto">
            <div class="q-mb-md">
              <strong style="font-size: 18px; color: #676d72">Módulo</strong>
            </div>
            <div>
              <strong style="font-size: 18px">Auditorio Benito Juarez.</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="q-mb-md">
              <strong style="font-size: 18px; color: #676d72">Dirección</strong>
            </div>
            <div class="direccion">
              <strong style="font-size: 18px"
                >Av. Mariano Barcenas s/n Col. Auditorio 45910 Zapopan,
                Jalisco</strong
              >
            </div>
          </div>
          <div class="col col-md-auto">
            <strong style="font-size: 18px; color: #676d72"
              >Fecha y Hora:</strong
            >
            <div class="fecha q-mt-md">
              <strong style="font-size: 18px; color: #ffffff"
                >Lunes 11 de Octubre 7:30 am</strong
              >
            </div>
          </div>
        </div>
        <div class="q-mt-md">
          <strong style="font-size: 17px; color: #646464">
            Ya tienes asegurado el lugar y hora para tu vacunación, ahora, para
            asegurar tu dosis es muy importante que tu también te registres en
            la plataforma federal. Ingresa a </strong
          ><a
            style="font-size: 17px; color: #551a8b; font-weight: bold"
            href="https://mivacuna.salud.gob.mx/"
            >https://mivacuna.salud.gob.mx/</a
          ><strong style="font-size: 17px; color: #646464">
            para obtener tu expediente de vacunación. Recomendaciones para el
            dia de tu vacunacion:
          </strong>
        </div>
      </div>
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
.container-dosis {
  background-color: #ffffff;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #d0d1d6;
  border-radius: 20px;
  box-shadow: 0 3px 15px #00000027;
  opacity: 1;
}

.container-dosis::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.curp {
  color: #c9cacb;
  font-size: 18px;
  font-weight: normal;
}
.Nombre {
  color: #646464;
  font-size: 18px;
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

.cancelarBtn:hover {
  background-color: #b10108 !important;
  border-radius: 18px !important;
}
.cancelarBtn {
  text-transform: none;
  background-color: #cc0008 !important;
  color: white;
  border-radius: 18px !important;
  width: 297px !important;
  height: 48px !important;
  transition: all 1s;
  font-size: 18px;
  font-weight: bold;
}
.direccion {
  overflow: auto;
}
.fecha {
  background-color: #37aefc;
  border-radius: 15px;
  padding: 5px;
  padding-left: 30px;
  padding-right: 30px;
}
.info {
  text-align: justify;
}
</style>