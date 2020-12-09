<script lang="ts">
	let name = "Kisinga";
	let belt = "black";
	const handleClick = () => {
		if (belt == "black") {
			belt = "blue";
			return;
		}
		belt = "black";
	};
	const handleInput = function (e) {
		belt = e.target.value;
	};
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<p style="color:{belt}">{belt} Belt</p>
	<button on:click={handleClick}>Update belt</button>
	<!-- <input type="text" on:input={handleInput} value={belt} /> -->
	<input type="text" bind:value={belt} />
</main>
