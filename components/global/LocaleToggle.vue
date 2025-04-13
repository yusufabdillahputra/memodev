<script setup lang="ts">
import {useLocaleLanguage} from "~/stores/locale";


const {setLocale, availableLocales} = useI18n()
const store = useLocaleLanguage()
const {
  localeId
} = storeToRefs(store)
const initLocale = (localId: boolean): void => {
  if (localId) {
    if (availableLocales.includes('id')) {
      setLocale('id')
    }
  } else {
    if (availableLocales.includes('en')) {
      setLocale('en')
    }
  }
}
onMounted(() => {
  initLocale(localeId.value)
})
watch(store, (value) => {
  initLocale(value.localeId)
})
</script>

<template>
  <div class="checkbox-container">
    <div class="checkbox-wrapper">
      <input class="checkbox" id="checkbox" v-model="localeId" type="checkbox"/>
      <label class="checkbox-label" for="checkbox">
        <div class="checkbox-flip">
          <div class="checkbox-front">
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 512 512">
              <defs>
                <clipPath id="rounded">
                  <rect width="512" height="512" rx="40" ry="40"/>
                </clipPath>
              </defs>
              <g clip-path="url(#rounded)">
                <path fill="#bd3d44" d="M0 0h512v512H0"/>
                <path stroke="#fff" stroke-width="40" d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"/>
                <path fill="#192f5d" d="M0 0h390v275H0z"/>
                <marker id="us-a" markerHeight="30" markerWidth="30">
                  <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6"/>
                </marker>
                <path fill="none" marker-mid="url(#us-a)" d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"/>
              </g>
            </svg>
          </div>
          <div class="checkbox-back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <defs>
                <clipPath id="rounded">
                  <rect width="512" height="512" rx="40" ry="40"/>
                </clipPath>
              </defs>
              <g clip-path="url(#rounded)">
                <path fill="#e70011" d="M0 0h512v256H0Z"/>
                <path fill="#fff" d="M0 256h512v256H0Z"/>
              </g>
            </svg>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
}

.checkbox {
  display: none;
}

.checkbox-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-flip {
  width: 60px;
  height: 60px;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.4s ease;
}

.checkbox-front,
.checkbox-back {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  backface-visibility: hidden;
  transition: transform 0.3s ease;
}

.checkbox-front {
  background: linear-gradient(135deg, #ff6347, #f76c6c);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: rotateY(0deg);
}

.checkbox-back {
  background: linear-gradient(135deg, #36b54a, #00c1d4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: rotateY(180deg);
}

.checkbox-wrapper:hover .checkbox-flip {
  transform: scale(1.1);
  transition: transform 0.4s ease-out;
}

.checkbox:checked + .checkbox-label .checkbox-front {
  transform: rotateY(180deg);
}

.checkbox:checked + .checkbox-label .checkbox-back {
  transform: rotateY(0deg);
}

.checkbox:focus + .checkbox-label .checkbox-flip {
  box-shadow: 0 0 15px rgba(54, 181, 73, 0.7),
  0 0 20px rgba(0, 193, 212, 0.4);
  transition: box-shadow 0.3s ease;
}

.icon-path {
  stroke: white;
  stroke-width: 2;
  fill: transparent;
}
</style>
