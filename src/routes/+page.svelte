<script lang="ts">
	export let data;
	import Fullscreen from 'svelte-fullscreen';

	let currentPlayer: number = 0;

	const handlePrevious = () => {
		if (currentPlayer > 0) {
			currentPlayer -= 1;
		}
	};

	let currentSetNumber = '1';

	const handleNext = () => {
		if (currentSetNumber !== '0' && currentPlayer < currentSet.length - 1) {
			currentPlayer += 1;
		} else if (currentSetNumber === '0' && currentPlayer < data.ipl.length - 1) {
		}
	};

	$: currentSet = data.ipl.filter((obj) => obj.set === currentSetNumber) || [];
</script>

<Fullscreen let:onRequest let:onExit>
	<div
		class="p-20 h-screen flex justify-center items-center bg-gradient-to-tr from-indigo-600 to-yellow-600 font-serif relative"
	>
		<div class="absolute top-2 left-2 space-x-2 flex z-50">
			{#if currentSet.length !== 0}
				<div class="px-4 py-2 font-bold bg-white rounded-full text-xl">
					Player - {currentPlayer + 1} / {currentSet.length}
				</div>
			{:else}
				<div class="px-4 py-2 font-bold bg-white rounded-full text-xl">
					Player - {currentPlayer + 1} / {data.ipl.length}
				</div>
			{/if}

			<select
				bind:value={currentSetNumber}
				on:change={() => (currentPlayer = 0)}
				class="px-4 py-2 font-bold bg-white rounded-full text-xl"
			>
				<option value="0">All Players</option>
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as item}
					<option value={`${item}`}>Set {item}</option>
				{/each}
			</select>
		</div>
		{#if currentSet.length !== 0}
			<div class="membr-details flex justify-center items-center">
				<div class="membr-details-img relative">
					<img src={currentSet[currentPlayer].image} alt="" />
					<div
						class="plyr-name-nationality absolute bottom-0 left-0 right-0 w-full h-fit z-30 text-center backdrop-blur-2xl p-6"
					>
						<h1 class="text-6xl font-bold text-white pb-8">{currentSet[currentPlayer].name}</h1>
						<span class="text-2xl">{currentSet[currentPlayer].country}</span>
					</div>
				</div>
				<div class="player-overview-detail space-y-4 text-white">
					<h1 class="text-4xl font-bold">Player Overview</h1>
					<div class="grid grid-cols-2 text-center font-bold">
						<div
							class="p-6 border-l border-t border-r border-white flex flex-col justify-center items-center backdrop-blur-2xl"
						>
							<p class="text-4xl font-bold">{currentSet[currentPlayer].type}</p>
							<span class="text-2xl">Specialization</span>
						</div>
						<div
							class="p-6 border-t border-r bg-white text-black border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">
								{currentSet[currentPlayer].basevalue} Cr.
							</p>
							<span class="text-2xl">Base Price</span>
						</div>
						<div
							class="p-6 border-t border-l border-r border-b border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">{currentSet[currentPlayer].rating}</p>
							<span class="text-2xl">Rating</span>
						</div>
						<div
							class="p-6 border-r border-b border-t border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">{currentSet[currentPlayer].fanstars}</p>
							<span class="text-2xl">Fan Rating</span>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="membr-details flex justify-center items-center">
				<div class="membr-details-img relative">
					<img src={data.ipl[currentPlayer].image} alt="" />
					<div
						class="plyr-name-nationality absolute bottom-0 left-0 right-0 w-full h-fit z-30 text-center backdrop-blur-2xl p-6"
					>
						<h1 class="text-4xl font-bold text-white pb-8">{data.ipl[currentPlayer].name}</h1>
						<span class="text-2xl">{data.ipl[currentPlayer].country}</span>
					</div>
				</div>
				<div class="player-overview-detail space-y-4 text-white">
					<h1 class="text-6xl font-bold">Player Overview</h1>
					<div class="grid grid-cols-2 text-center font-bold">
						<div
							class="p-6 border-l border-t border-r border-white flex flex-col justify-center items-center backdrop-blur-2xl"
						>
							<p class="text-4xl font-bold">{data.ipl[currentPlayer].type}</p>
							<span class="text-2xl">Specialization</span>
						</div>
						<div
							class="p-6 border-t border-r bg-white text-black border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">
								{data.ipl[currentPlayer].basevalue} Cr.
							</p>
							<span class="text-2xl">Base Price</span>
						</div>
						<div
							class="p-6 border-t border-l border-r border-b border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">{data.ipl[currentPlayer].ratingHidden}</p>
							<span class="text-2xl">Rating</span>
						</div>
						<div
							class="p-6 border-r border-b border-t border-white flex flex-col justify-center items-center"
						>
							<p class="text-4xl font-bold">{data.ipl[currentPlayer].fanstarsHidden}</p>
							<span class="text-2xl">Fan Rating</span>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<div class="absolute bottom-2 right-2">
			<button class="p-2 rounded-full bg-white text-black" on:click={() => onRequest()}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 4l4 0l0 4" /><path
						d="M14 10l6 -6"
					/><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path
						d="M14 14l6 6"
					/><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg
				></button
			>
			<button class="p-2 rounded-full bg-white text-black" on:click={() => onExit()}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-minimize"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 9l4 0l0 -4" /><path
						d="M3 3l6 6"
					/><path d="M5 15l4 0l0 4" /><path d="M3 21l6 -6" /><path d="M19 9l-4 0l0 -4" /><path
						d="M15 9l6 -6"
					/><path d="M19 15l-4 0l0 4" /><path d="M15 15l6 6" /></svg
				></button
			>
			<button class="p-2 rounded-full bg-white text-black" on:click={handlePrevious}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg
				></button
			>
			<button class="p-2 rounded-full bg-white text-black" on:click={handleNext}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg
				></button
			>
		</div>
	</div>
</Fullscreen>

<style>
	:global(.svelte-image-loader) {
		background-color: blue;
	}
	.plyr-name-nationality span {
		background: rgba(0, 0, 0, 0.2);
		border: 1px solid #fff;
		border-radius: 4px;
		padding: 10px;
		padding-left: 20px;
		padding-right: 20px;
		font-style: italic;
		color: #fff;
	}
	.membr-details-img::before {
		content: '';
		position: absolute;
		background-image: url('https://www.iplt20.com/assets/images/player-bomb-bg.svg');
		background-repeat: no-repeat;
		background-position: top left;
		left: -70px;
		top: -107px;
		width: 321px;
		height: 493px;
	}
	.membr-details .membr-details-img {
		width: 700px;
		height: auto;
	}
	.membr-details-img::after {
		content: '';
		position: absolute;
		left: 0;
		width: 62%;
		height: 332px;
		right: 0;
		border: 10px solid #fff;
		margin: 0 auto;
		top: 140px;
	}
	.membr-details .membr-details-img img {
		width: 100%;
		height: auto;
		position: relative;
		z-index: 2;
	}
</style>
