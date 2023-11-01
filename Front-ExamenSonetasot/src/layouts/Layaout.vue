
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="header">
        <q-toolbar-title>
          <div class="row justify-between items-center">
            <div class="col-6">
              <div class="row items-center">
                <div class="offset-2" v-if="$q.screen.gt.sm"></div>
                <div class="col col-md-auto">
                  <img
                    alt="SeDefiende"
                    src="~assets/logo_jaliscosedefiende.svg"
                    style="width: 173.46px"
                  />
                </div>

                <div class="col col-md-auto">
                  <div class="separador"></div>
                </div>
                <div class="col col-md-auto">
                  <img
                    alt="LogoJalisco"
                    src="~assets/logo_jal.svg"
                    style="width: 170.9px"
                  />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="col col-md-auto q-mr-xl" style="cursor: pointer">
                  <strong class="calculadora">Calculadora</strong>
                </div>
                <div
                  class="col col-md-auto text-secondary q-mt-xs q-mr-xs"
                  style="cursor: pointer"
                >
                  <img
                    alt="LogoJalisco"
                    src="~assets/ico_avisoprivacidad.svg"
                    style="width: 19.41px"
                  />
                </div>
                <div
                  class="col col-md-auto text-secondary"
                  style="cursor: pointer"
                >
                  <strong class="calculadora">Aviso de Privacidad </strong>
                </div>
              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row justify-center q-mt-lg">
            <div class="col col-md-auto">
              <img
                alt="SeDefiende"
                src="~assets/Group4009.svg"
                style="width: 152.16px"
              />
            </div>

            <div class="col col-md-auto q-mt-md q-mx-xl">
              <img
                alt="LogoJalisco"
                src="~assets/Group4023.svg"
                style="width: 161.28px"
              />
            </div>

            <div class="col col-md-auto">
              <img
                alt="LogoJalisco"
                src="~assets/Group3997.svg"
                style="width: 191px"
              />
            </div>
            <div class="col col-md-auto q-mx-xl">
              <img
                alt="LogoJalisco"
                src="~assets/Group3999.svg"
                style="width: 191px"
              />
            </div>
            <div class="col col-md-auto">
              <img
                alt="LogoJalisco"
                src="~assets/Group4000.svg"
                style="width: 191px"
              />
            </div>
            <div class="col col-md-auto q-mx-xl">
              <img
                alt="LogoJalisco"
                src="~assets/Group4112.png"
                style="width: 219px"
              />
            </div>
            <div class="col col-md-auto q-ml-md">
              <img
                alt="LogoJalisco"
                src="~assets/Group5363.png"
                style="width: 219px"
              />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import router from "src/router/index";
defineComponent({
  name: "StartPage",
});
</script>
<style>
.fondo {
  background-color: rgb(235, 235, 240);
}
.capas {
  position: absolute;
  z-index: 1;
}
.InputSearch {
  border-radius: 100px;
  border: 0px solid #000000;
  background-color: rgb(235, 235, 240);
  height: 40px;
  width: 220px;
  outline: none !important;
  text-align: center;
}
.InputSearchOn {
  border-radius: 100px;
  border: 0px solid #000000;
  background-color: rgb(235, 235, 240);
  height: 40px;
  width: 220px;
  outline: none !important;
  text-align: left;
}
.Alinear {
  margin-left: 40px;
}
.texto-color {
  color: #000000;
}
.texto-color-blue {
  color: #0068f0;
}
.VistaBotones {
  border-bottom: 4px #0068f0 solid;
}
.separador {
  width: 0px;
  height: 46.95px;

  border: 2px solid #c9cacb;
  margin-left: 50px;
  margin-right: 50px;
}
.calculadora {
  font-size: 16px;
  color: #37aefd;
}
.header {
  box-shadow: 0px 3px 21px #00000010;
  height: 80px;
}
.footer {
  background-color: #fafafa;
  height: 264px;
}
</style>