<script>
	import FeedbackList  from "./components/FeedbackList.svelte";
import FeedbackStats from './components/FeedbackStats.svelte';
import FeedbackForm from './components/FeedbackForm.svelte'
	let feedback=[
		{
			id:1,
			rating:10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.'
		},
		{
			
			id:2,
			rating:9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.'
		},
		{
			id:3,
			rating:8,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.'
		}
	]

	$:count =feedback.length
	$:average =feedback.reduce((prev,{rating})=>prev+rating,0)/count;
	function handleDelete(event){
		let id=event.detail;
		feedback=feedback.filter(item=> item.id!=id)
	}
</script>
<main class="container">
	<FeedbackForm />
	<FeedbackStats {count} {average}></FeedbackStats>
	<FeedbackList {feedback} on:delete-feedback={handleDelete} />
</main>

<style>	</style> 
