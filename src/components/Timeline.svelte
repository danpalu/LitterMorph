<script>
  import { linkedInClicked } from "../scripts/tracker";
</script>

<div class="flex flex-row justify-center overflow-x-hidden">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    class="fill-secondary-500 h-10 absolute w-full"
  >
    <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill" />
  </svg>
</div>
<div
  class="bg-roman-coffee-0 text-tertiary-0 flex flex-row items-center justify-center pb-10"
  id="content"
>
  <div class="px-5 max-w-[40ch] pt-10 sm:max-w-[70ch]">
    <div class="flex flex-col gap-20 pt-5 text-center md:flex-row">
      <div class="flex flex-col items-center gap-2">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 24 24"
          class="h-12 w-12 stroke-[1.5] stroke-tertiary-0 fill-none"
        >
          <path
            d="m2.12,12.68c-1.17-2.03-1.29-2.93-1.36-4.22s.45-3.84,1.24-4.09,2.6.58,3.69,1.64,2.86,3.94,3.29,4.85,1.47,2.6,2.12,3.41,2.83,2.43,3.84,2.88,1.47.76,1.52,1.16-.76,1.31-1.59,1.59-4.07.61-7.1-1.24-4.61-4.21-5.64-5.99Z"
          />
          <path
            d="m8.31.75c2.41,0,5.43,1.39,7.99,4.25,2.55,2.86,3.66,5.89,3.64,8.04-.03,2.15-.28,2.53-1.01,2.78s-3.36-.78-5.31-2.7-2.45-4.73-4.2-7.03-3.26-2.91-4.02-3.24-1.01-.51-.83-1.04,2.07-1.07,3.74-1.06Z"
          />
        </svg>
        <p>
          After brewing, the spent coffee grounds is collected from our
          partners.
        </p>
      </div>

      <div class="flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
        <p>Chemical Upcycling allows us to obtain components of interest</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <p>
          The natural antioxidants are ready to be part of your supply chain
        </p>
      </div>
    </div>
  </div>
</div>
<div class="h-px bg-tertiary-0" />
<div
  class="flex flex-col items-center py-10 bg-roman-coffee-900 text-tertiary-0"
>
  <p class="inline text-lg text-center">Stay in the loop</p>

  <a
    href="https://www.linkedin.com/company/littermorph"
    class="inline hover:underline text-lg text-center"
    on:click={async (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      linkedInClicked().then(() => {
        location.href = target.href;
      });
    }}
  >
    Follow us on LinkedIn
  </a>
  <a
    href="https://www.linkedin.com/company/littermorph"
    on:click={async (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      linkedInClicked().then(() => {
        location.href = target.href;
      });
    }}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
      class="fill-tertiary-0 h-14 w-14 hover:fill-[#00a6ff] transition-all duration-100 pt-4"
      ><path
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      /></svg
    ></a
  >
</div>
