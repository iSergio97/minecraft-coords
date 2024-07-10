<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
              >
                <img
                  src="../assets/images/icons8-minecraft-pickaxe-windows-11-color-32.png"
                  alt="edit-icon"
                />
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                  Editar posición
                </h3>
                <div class="mt-2">
                  <div class="text-center pb-4">
                    <h4 class="text-black">{{ data.dimension }}</h4>
                  </div>
                  <div class="text-center pb-4">
                    <input
                      type="text"
                      id="first_name"
                      class="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="data.alias"
                      required
                    />
                  </div>
                  <div class="grid grid-cols-3 p-2">
                    <h5 class="red col-span-1 p-2">X</h5>
                    <input
                      type="text"
                      id="first_name"
                      class="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="data.x"
                      required
                    />
                  </div>
                  <div class="grid grid-cols-3 p-2">
                    <h5 class="green col-span-1 p-2">Y</h5>
                    <input
                      type="text"
                      id="first_name"
                      class="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="data.y"
                    />
                  </div>
                  <div class="grid grid-cols-3 p-2">
                    <h5 class="blue col-span-1 p-2">Z</h5>
                    <input
                      type="text"
                      id="first_name"
                      class="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="data.z"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm sm:ml-3 sm:w-auto hover:bg-gray-200"
              @click="close()"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 sm:mt-0 sm:w-auto"
              @click="save()"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Coordinates } from '../interfaces/coordinates.interface';
import { toRefs } from 'vue';
import { saveCoords } from '@/api/saveCoords';

interface Props {
  coord: Coordinates;
}

type Emits = (e: 'close') => void;

let props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { coord } = toRefs(props);

let data = Object.assign({}, coord.value);

let close = () => {
  emit('close');
};

let save = () => {
  saveCoords(data, data.id);
  close();
};
</script>

<style scoped></style>
