<script lang="ts">
  import { onMount } from "svelte";

  let playing = false;
  let btn: HTMLElement;

  function stopPlay() {
    playing = false;
    console.log("stopPlay");
  }

  onMount(play);

  function play() {
    btn.offsetHeight; //reset animation counter
    playing = true;
    console.log("play");
  }
</script>

<button id="btn" class="relative group" bind:this={btn} on:click={play}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -2 100 100"
    class="fill-white stroke-white h-64"
  >
    <defs>
      <style>
        .cls-1 {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3px;
        }
      </style>
    </defs>
    <path
      class="cls-1"
      d="m65.78,36.41l22.4,36.96c2.94,4.85-.55,11.04-6.22,11.04H23.67c-5.72,0-9.2-6.3-6.16-11.14l24.99-39.76V8.77s0-1.45-2.91-1.45-2.91-2.91-2.91-2.91c0,0,0-2.91,2.91-2.91h27.64s2.91,0,2.91,2.91-2.91,2.91-2.91,2.91"
    />
    <path
      d="m74.4,27.86c-1.69-1.54-5.5-.12-8.5,3.18-.6.65-1.09,1.33-1.53,2.02-.86-.12-1.77-.16-2.73-.12-4.45.21-7.97,2.24-7.87,4.52.11,2.29,3.8,3.75,8.26,3.76,3.73,0,8.35-2.79,10-4.6,3-3.3,4.06-7.22,2.36-8.76Z"
    />
    <path
      d="m56.2,95.3c2.09-.94,2.3-5,.47-9.06-.36-.81-.79-1.53-1.24-2.2.45-.74.86-1.56,1.2-2.46,1.58-4.17,1.13-8.2-1.01-9.02-2.14-.81-4.96,1.99-6.74,6.08-1.49,3.42-.77,8.77.24,11,1.83,4.06,5.01,6.6,7.09,5.66Z"
    />
    <path
      d="m20.28,46.89c-.36,2.26,2.92,4.66,7.32,5.36.87.14,1.71.18,2.52.17.37.78.84,1.57,1.4,2.35,2.62,3.61,6.24,5.44,8.1,4.09,1.85-1.35,1.05-5.24-1.39-8.97-2.04-3.12-6.91-5.45-9.33-5.83-4.4-.7-8.26.57-8.62,2.83Z"
    />
  </svg>
  <div
    class={`w-10 h-10 rounded-full border-indigo-500 border-2 bg-indigo-950 absolute -top-2 left-28 -z-10 opacity-0 ${
      playing ? "animate-bubble" : ""
    }`}
    style="animation-duration: 1.9s; animation-delay: 0s;"
  >
    <div class="w-2 h-2 rounded-full bg-indigo-500 absolute top-2 left-2" />
  </div>
  <div
    class={`w-8 h-8 rounded-full border-indigo-500 border-2 bg-indigo-950 absolute -top-2 left-36 -z-10 opacity-0 ${
      playing ? "animate-bubble" : ""
    }`}
    style="animation-duration: 1.9s; animation-delay: 600ms;"
  >
    <div
      class="w-1.5 h-1.5 rounded-full bg-indigo-500 absolute top-1.5 left-1.5"
    />
  </div>
  <div
    class={`w-6 h-6 rounded-full border-indigo-500 border-2 bg-indigo-950 absolute -top-2 left-32 -z-10 opacity-0 ${
      playing ? "animate-bubble" : ""
    }`}
    on:animationend={stopPlay}
    style="animation-duration: 1.9s; animation-delay: 1000ms;"
  >
    <div class="w-1 h-1 rounded-full bg-indigo-500 absolute top-1 left-1" />
  </div>
</button>
