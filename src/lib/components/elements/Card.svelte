<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let variants: string = "";
  // tw merge is used to ensure variant classes will override the default classes
  $: classes = twMerge(
    "h-full bg-gray-100 bg-opacity-75 p-5 rounded-lg overflow-hidden relative min-w-full",
    variants
  );
</script>

<div class="flex flex-wrap -m-4 w-full min-w-full">
  <div class="p-4 w-full min-w-full">
    <div class={classes}>
      <slot />
    </div>
  </div>
</div>
