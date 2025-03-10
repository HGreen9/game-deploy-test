const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.destroy,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{DestroyOutsideLayout: 0},
	{Miso: 0},
	{Solid: 0},
	{Ground: 0},
	{Wall: 0},
	{Keyboard: 0},
	{Ouch: 0},
	{Sine: 0},
	{Gem: 0},
	{Door: 0},
	{Void: 0}
];

self.InstanceType = {
	Miso: class extends self.ISpriteInstance {},
	Ground: class extends self.ITiledBackgroundInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Wall: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Ouch: class extends self.ISpriteInstance {},
	Gem: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {},
	Void: class extends self.ISpriteInstance {}
}