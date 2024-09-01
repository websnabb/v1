const googlePlay = new Proxy({"src":"/websnabb/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jmenor/Github/astrowind-main/src/assets/images/google-play.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/jmenor/Github/astrowind-main/src/assets/images/google-play.png");
							return target[name];
						}
					});

export { googlePlay as default };
