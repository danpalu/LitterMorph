<script lang="ts">
  import { registerUser } from "../scripts/tracker";
  let popup: HTMLElement;
  let showPop: boolean = false;

  if (window.localStorage.getItem("consent") == null) {
    showPop = true;
  }
  if (window.localStorage.getItem("consent") == "true") {
    registerUser();
  }

  function accept() {
    window.localStorage.setItem("consent", "true");
    registerUser();
    hide();
  }
  function decline() {
    window.localStorage.setItem("consent", "false");
    hide();
  }

  function hide() {
    popup.className = "hidden";
  }
</script>

<div
  class="{showPop
    ? 'flex'
    : 'hidden'} w-screen h-screen flex-col justify-center items-center fixed backdrop-blur-md z-50 backdrop-brightness-75"
  bind:this={popup}
>
  <div
    class="z-50 w-72 rounded-3xl bg-roman-coffee-900 text-white flex flex-col justify-center items-center p-8 gap-5 text-center shadow-lg"
  >
    <p>Må vi gemme alle dine personlige oplysninger? 🍪</p>
    <div class="flex flex-row gap-6">
      <button
        class="bg-green-100 text-green-800 rounded-2xl p-3 hover:bg-green-200"
        on:click={() => accept()}>Ja tjak</button
      >
      <button
        class="bg-red-100 text-red-800 rounded-2xl p-3 hover:bg-red-200"
        on:click={() => decline()}>Nej tjak</button
      >
    </div>
  </div>
</div>
