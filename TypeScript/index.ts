type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Union Type
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal";

type HeroBasicInfo = {
  name: string;
  age: number;
}

type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
}

type Hero = HeroBasicInfo & HeroProperties;

let hero: Hero = {
	name: "Thor",
	age: 1500,
};

function createHero(hero: HeroBasicInfo): Hero {
	const { name, age } = hero;
	return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 1500 });

thor.powerScale = "universal";

// Template union types

type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "#ffffff";
