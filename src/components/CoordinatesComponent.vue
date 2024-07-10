<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a>
      <h3 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {{ coord.alias }}
      </h3>
    </a>
    <a>
      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {{ coord.dimension }}
      </h5>
    </a>
    <div class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      <p>
        X: <span class="red"> {{ coord.x }}</span>
      </p>
      <p>
        Y: <span class="green">{{ coord.y }}</span>
      </p>
      <p>
        Z: <span class="blue">{{ coord.z }}</span>
      </p>
      <p class="hidden">
        (<span class="red"> {{ coord.x }}</span
        >, <span class="green">{{ coord.y }}</span
        >, <span class="blue">{{ coord.z }}</span
        >)
      </p>
    </div>
    <a
      class="inline-flex font-medium items-center text-blue-600 hover:underline"
      @click="openEditModal()"
    >
      Editar
      <svg
        class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
        />
      </svg>
    </a>

    <ModalComponent :coord="coord" @close="closeEditModal()" v-if="dialogOpenModal" />
  </div>
</template>

<script setup lang="ts">
import type { Coordinates } from '@/interfaces/coordinates.interface';
import { ref, toRefs } from 'vue';
import ModalComponent from './ModalComponent.vue';

interface Props {
  coord: Coordinates;
}

type Emits = (e: 'refreshData', world: string) => void;

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { coord } = toRefs(props);

let dialogOpenModal = ref(false);

let openEditModal = (): void => {
  dialogOpenModal.value = true;
};

let closeEditModal = (): void => {
  dialogOpenModal.value = false;
  emit('refreshData', coord.value.dimension);
};
</script>
