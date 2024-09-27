/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as createAstro, d as addAttribute } from '../chunks/astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_BlZGYfvv.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse item md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-7xl font-medium leading-none md:text-7xl text-center md:text-left">
Laravel Company
</h1> <p class="mt-6 mb-8  text-2xl font-normal leading-7 sm:mb-12 text-center md:text-left">
Crafting Digital Magic, One Line of Code at a Time!
</p> <p>
London based laravel retainer with a passion for building open source software.
</p> </div> </div> </div>  ` })}`;
}, "/home/saturn/Projects/Public/laravelcompany.com/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-lime rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "/home/saturn/Projects/Public/laravelcompany.com/src/components/Topic.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Laravel",
		name2: "Mail",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "https://laravelmail.com",
		image: "./services/01.svg"
	},
	{
		id: 2,
		name1: "Laravel",
		name2: "Firewall",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/02.svg"
	},
	{
		id: 3,
		name1: "Laravel ",
		name2: "Wordpress",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/03.svg"
	},
	{
		id: 4,
		name1: "Laravel ",
		name2: "Crawler",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/04.svg"
	}
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Our Packages", "description": "Our laravel agency helps businesses grow and succeed online through a range of free open source packages" })} </div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, name2, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">Learn more</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> ` })}`;
}, "/home/saturn/Projects/Public/laravelcompany.com/src/components/Services.astro", void 0);

const team = [
	{
		title: "Founder",
		name: "Stefan I.",
		description: "helping businesses solve complex software challenges since 2007.",
		profile: "https://avatars.githubusercontent.com/u/2276408?s=75&v=4",
		link: "https://linkedin.com/in/izdrail"
	},
	{
		title: "Founder",
		name: "Andrei M.",
		description: "Looking to work with B2B companies in eCommerce",
		profile: "https://avatars.githubusercontent.com/u/13685130?s=75&v=4",
		link: "https://www.linkedin.com/in/andrei-marmureanu-b5334a49/"
	}
];
const process = [
	{
		index: 1,
		label: "Research",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 3,
		label: "Implementation",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row pt-6"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Team", "description": "Meet the skilled and experienced team behind our successful open source projects." })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> ${teamData.team.map(({ title, description, name, link, profile }) => renderTemplate`<div class="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal">${title}</div> <div class="text-xl font-medium">${name}</div> </div> </div> <a class="top-0 right-0"${addAttribute(link, "href")}> <img src="/team/lng.svg" alt="vector"> </a> </div> <hr class="w-full border border-black"> <p class="text-sm md:text-lg">${description}</p> </div> </div>`)} </div> </div>       ` })}`;
}, "/home/saturn/Projects/Public/laravelcompany.com/src/components/Team.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Laravel Company" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Team", $$Team, {})} </main> ` })}`;
}, "/home/saturn/Projects/Public/laravelcompany.com/src/pages/index.astro", void 0);

const $$file = "/home/saturn/Projects/Public/laravelcompany.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
