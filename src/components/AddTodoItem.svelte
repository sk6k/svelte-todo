<script>
  import { onMount, } from "svelte";
  import {getTodos} from '../utils/getToddos'
  import {format} from '../utils/format'
  import {v4 as uuid} from "uuid"
  import TodoItem from "./TodoItem.svelte";
  export let title = "Enter what do you want to do:"
  export let buttonTitle = "Add todo"
  let items = getTodos()
  let counter = 0


  onMount(()=>{
    // const get =async () => {
    //     items = await getTodos()
    // }
    // get()
  })



  function handleAddClick() {
    items = [...items, {
        id: uuid(),
        text: "item text"
    }]
}

$: if (items.length > 5) {
    console.log(items);
}

let text = ""
async function handleTextChange(event) {
    const {selectionStart, selectionEnd, value} = this

    text = format(event.tarhet.value)

    await tick()
    this.selectionStart = selectionStart
    this.selectionEnd = selectionEnd 
}
</script>


{counter}
<div class="main-container">
    <label for="todo-text">{title}</label>
    <input class="todo-input" id="todo-text"
    value={text}
    on:input={handleTextChange}/>
    <button on:click={handleAddClick}>{buttonTitle}</button>
</div>

{#await items}
    <p>Loading...</p>
{:then _items}   
    {#each _items as {id, text}, index (id)}
        <TodoItem title={`${index + 1}: ${text}`}/>  
    {:else}
        No items yet
    {/each}
{:catch error}
    Error: {error.message}
{/await}





<style>
    :global(label) {
        color: green;
        }
    .main-container {
        background-color: lightseagreen;
        border-radius: 5px;
        padding: 10xp;
    }
    .todo-input {
        width: 100%;
    }
</style>