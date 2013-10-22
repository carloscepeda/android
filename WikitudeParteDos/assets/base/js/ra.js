var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		// inicialzamos el Tracker con el Target collection
		this.tracker = new AR.Tracker("assets/targetcollection.wtc", {
			onLoaded: this.worldLoaded
		});

		// creamos un overlay
		var javaDeitel = new AR.ImageResource("assets/javaDeitel.jpg");
		var overlay = new AR.ImageDrawable(javaDeitel, 0.2, {
			offsetX: -0.15,
			offsetY: 0
		});

                // indicamos el nombre del Target en el Tracker
		var javaLibro = new AR.Trackable2DObject(this.tracker, "javaLibro", {
			drawables: {
				cam: overlay
			}
		});
	}
};

// principal
World.init();
