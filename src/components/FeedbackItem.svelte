<script>
    // import {createEventDispatcher} from 'svelte'
    import Card from './Card.svelte'

    export let listItem

    import {FeedbackStore} from '../stores'
    // let dispatch=createEventDispatcher()

    function handleDelete(id){
        // dispatch('delete-feedback',id)
        FeedbackStore.update((currentFeedback)=>{
           return currentFeedback.filter(item=>item.id!=id)
        })
    }
</script>

<Card>
    <div class="num-display">
        {listItem.rating}
    </div>
    <button class="close" on:click={()=>handleDelete(listItem.id)}>X</button>
    <p class="text-display">{listItem.text}</p>
</Card>

<style>
    .num-display{
        position: absolute;
        top:-10px;
        left:-10px;
        height:50px;
        width:50px;
        background: #ff6a95;
        color:#fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding:10px;
        text-align: center;
        font-size: 19px;
    }
    .close{
        position: absolute;
        top:10px;
        right:20px;
        cursor:pointer;
        background: hsla(200,40%,90%,0.3);
        border: none;
    }
</style>