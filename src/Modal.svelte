<script>
    export let message =
        "Hello beautiful ninja(I dont know what a female nija is called)\n Update: kunoichi! Hello beautiful kunoichi";
    export let showModal = false;
    export let isPromo = false;
    const toggleModal = () => {
        showModal = !showModal;
    };
</script>

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
    .promo .modal {
        background: crimson;
        color: white;
    }
</style>

{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click>
        <div class="modal">{message}</div>
    </div>
{/if}
