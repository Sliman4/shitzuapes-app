<script lang="ts">
  import DexscreenerChart from "./DexscreenerChart.svelte";

  import type { Meme } from "$lib/api/client";

  export let memebid: Meme;
</script>

{#if memebid.pool_id}
  <DexscreenerChart pool_id={memebid.pool_id.toString()} />
{/if}
