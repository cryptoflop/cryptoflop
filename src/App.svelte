<script lang="ts">
	import x from "./assets/images/x.webp";
	import github from "./assets/images/gh.webp";
	import discord from "./assets/images/dc.webp";
	import telegram from "./assets/images/tg.webp";

	import web from "./assets/images/web.webp";

	import mp1 from "./assets/images/projects/magic-pixels/mp1.webp";
	import mp2 from "./assets/images/projects/magic-pixels/mp2.webp";
	import mp3 from "./assets/images/projects/magic-pixels/mp3.webp";

	import fv1 from "./assets/images/projects/frenverse/1.webp";
	import fv2 from "./assets/images/projects/frenverse/2.webp";
	import fv3 from "./assets/images/projects/frenverse/3.webp";

	import ng1 from "./assets/images/projects/nguf/ng1.webp";
	import ng2 from "./assets/images/projects/nguf/ng2.webp";
	import ng3 from "./assets/images/projects/nguf/ng3.webp";

	import et1 from "./assets/images/projects/ethereon/1.webp";
	import et2 from "./assets/images/projects/ethereon/2.webp";
	import et3 from "./assets/images/projects/ethereon/3.webp";

	let LINKS = [
		{
			alt: "Github",
			url: "https://github.com/cryptoflop",
			icon: github,
		},
		{
			alt: "X",
			url: "https://twitter.com/cryptoflooop",
			icon: x,
		},
		{
			alt: "Discord",
			url: "https://discord.com/users/cryptoflop",
			icon: discord,
		},
		{
			alt: "Telegram",
			url: "https://t.me/cryptoflooop",
			icon: telegram,
		},
	];

	const PROJECTS = [
		{
			title: "MagicPixels",
			links: {
				web: "https://mgcpxls.eth.link/",
				git: "https://github.com/cryptoflop/magic-pixels",
			},
			desc: "A nether full of magic pixels - NFT and gamble platform. Gamble for pixels and create pixel art.",
			images: [
				{
					image: mp3,
					size: 312,
					offx: -102,
					offy: -62,
				},
				{
					image: mp1,
					size: 246,
					offx: -70,
					offy: -42,
				},
				{
					image: mp2,
					size: 244,
					offx: -68,
					offy: -56,
				},
			],
		},
		{
			title: "Frenverse",
			links: {
				git: "https://github.com/NeverGibUpFren/frenverse/",
			},
			desc: "A world for all frens - Metaverse and safespace for all frens.",
			images: [
				{
					image: fv1,
					size: 120,
					offx: 0,
					offy: 0,
				},
				{
					image: fv2,
					size: 108,
					offx: 0,
					offy: -18,
				},
				{
					image: fv3,
					size: 124,
					offx: -20,
					offy: 80,
				},
			],
		},
		{
			title: "NeverGibUpFren",
			links: {
				web: "https://nevergibupfren.eth.link/",
			},
			desc: "A token for all frens - Memecoin focused on spreading positivity and fostering solidarity.",
			images: [
				{
					image: ng1,
					size: 297,
					offx: -95,
					offy: -60,
				},
				{
					image: ng2,
					size: 170,
					offx: -32,
					offy: -108,
				},
				{
					image: ng3,
					size: 144,
					offx: -20,
					offy: 80,
				},
			],
		},
		{
			title: "Ethereon",
			links: {},
			desc: "Gather gas from the nether - NFT dApp, gambling to get rare gases.",
			images: [
				{
					image: et1,
					size: 110,
					offx: -2,
					offy: -10,
				},
				{
					image: et2,
					size: 100,
					offx: -6,
					offy: -100,
				},
				{
					image: et3,
					size: 110,
					offx: -2,
					offy: -20,
				},
			],
		},
	];

	let fullscreenImage: string | undefined;
</script>

<main class="h-screen w-screen relative flex flex-col overflow-y-scroll pb-8">
	<div class="mx-auto mt-12 text-8xl sticky">
		{#each Array(5) as _, i}
			<h1
				class="absolute select-none {i == 0
					? 'text-blue-50'
					: 'text-blue-300'} "
				style="transform: translateY({i * 12 - 2}px); opacity: 0.{5 - i - 1}"
			>
				Cryptoflop
			</h1>
		{/each}
		<h1>Cryptoflop</h1>
	</div>

	<h2 class="text-3xl mx-auto mt-20 underline">About</h2>

	<div
		class="mx-auto mt-2 max-w-[360px] bg-black/0 px-3 py-1 text-xl/6 text-center"
	>
		A spacefaring developer with a curiosity spanning various domains.
	</div>

	<h2 class="mx-auto text-3xl mt-12 underline">Links</h2>

	<div class="mx-auto mt-2 flex space-x-2">
		{#each LINKS as link}
			<a
				href={link.url}
				target="_blank"
				class="relative group button p-2 w-16 flex bg-blue-200/5 rounded-xl"
				aria-label="Link to {link.alt}"
			>
				<img
					src={link.icon}
					class="h-8 w-8 mx-auto group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] pointer-events-none"
					alt="{link.alt} logo"
				/>
				<div
					class="absolute inset-0 bg-blue-200/10 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
				/>
			</a>
		{/each}
	</div>

	<h2 class="mx-auto text-3xl mt-12 underline">Projects</h2>

	<div class="mx-auto flex flex-col space-y-8 mt-4">
		{#each PROJECTS as project}
			<div class=" min-w-[338px] max-w-[338px]">
				<div class="flex items-center">
					<h3 class="text-2xl mr-auto">{project.title}</h3>
					{#if project.links.web}
						<a
							class="block button ml-2"
							href={project.links.web}
							target="_blank"
						>
							<img src={web} class="h-4 w-4" alt="website logo" />
						</a>
					{/if}
					{#if project.links.git}
						<a
							class="block button ml-2"
							href={project.links.git}
							target="_blank"
						>
							<img src={github} class="h-4 w-4" alt="github logo" />
						</a>
					{/if}
				</div>
				<div class="text-base/5">
					{project.desc}
				</div>
				<div class="flex justify-between mt-2">
					{#each project.images as image}
						<button
							on:click={() => (fullscreenImage = image.image)}
							class="h-16 w-[6.75rem] rounded-xl overflow-hidden group relative cursor-pointer border-2 border-blue-200/20"
							style="background-image: url({image.image}); background-size: {image.size}px; background-position-x: {image.offx}px; background-position-y: {image.offy}px;"
						>
							<div
								class="group-hover:bg-blue-200/20 absolute inset-0 pointer-events-none"
							/>
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	{#if fullscreenImage}
		<button
			class="fixed inset-0 flex bg-black/40 p-2"
			on:click={() => (fullscreenImage = undefined)}
		>
			<img
				class="m-auto border-2 border-blue-200/20"
				src={fullscreenImage}
				alt="fullsceen"
			/>
		</button>
	{/if}
</main>
