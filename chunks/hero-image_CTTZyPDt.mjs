const heroImage = new Proxy({"src":"/websnabb/_astro/hero-image.DwIC_L_T.png","width":1600,"height":939,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jmenor/Github/astrowind-main/src/assets/images/hero-image.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/jmenor/Github/astrowind-main/src/assets/images/hero-image.png");
							return target[name];
						}
					});

export { heroImage as default };
