<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let value: string | number;
  export let variants: string = "";

  $: classes = twMerge("form-control ", variants);
</script>

<input bind:value class={classes} {...$$props} />
