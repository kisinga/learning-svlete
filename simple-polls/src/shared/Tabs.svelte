<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let items;
    export let activeItem;
</script>

<style>
    .active {
        color: #d91b42;
        border-bottom: 2px solid;
        padding-bottom: 8px;
    }
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
</style>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={activeItem === item}>{item}</div>
            </li>
        {/each}
    </ul>
</div>
