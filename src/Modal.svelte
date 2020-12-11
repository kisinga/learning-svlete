<script>
    export let message =
        "Hello beautiful ninja(I dont know what a female nija is called)\n Update: kunoichi! Hello beautiful kunoichi";
    let showModal = true;
    export let isPromo = false;
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
    <div class="backdrop" class:promo={isPromo}>
        <div class="modal">{message}</div>
    </div>
{/if}
