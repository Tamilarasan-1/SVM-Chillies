<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    
    async function takeScreenshot() {
    const response = await fetch('/api/screenshot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items:"test" }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log(result.message); // Screenshot taken successfully!
      // You can also display the path or handle the result as needed
    } else {
      console.error(result.error); // Handle error
    }
  }
  
onMount(()=>{
    takeScreenshot()
})
  
</script>