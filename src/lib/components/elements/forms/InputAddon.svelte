<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let variants: string = "";

  $: classes = twMerge("input-addon", variants);
</script>

<span class={classes} {...$$props}>
  <slot />
</span>
