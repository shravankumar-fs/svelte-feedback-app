<script>
  import FeedbackItem from './FeedbackItem.svelte';
  export let feedback=[]

</script>

{#each feedback as feed (feed.id)}
    <FeedbackItem listItem={feed} on:delete-feedback />
{/each}
