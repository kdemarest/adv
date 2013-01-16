$.Config = {
	Tile: { xLen: 32, yLen: 32 }
}

$.Hid = {
	var handlerList = {};
	function handle(e) {
		$.each( )
	}
	function init() {
		$(document).keypress(function(e){

	}
	$(document).keypress(function(e){
    var checkWebkitandIE=(e.which==26 ? 1 : 0);
    var checkMoz=(e.which==122 && e.ctrlKey ? 1 : 0);

    if (checkWebkitandIE || checkMoz) $("body").append("<p>ctrl+z detected!</p>");
});
}


$.PaneGame = function() {
	function init() {
		// Create all the chrome
		$('#main').append('<div id="game"></div>');
	}

	init();
	return this;
}

$.PaneMenu = function() {
	function init() {
		// probably need to pull from a certain Pattern here
		$('main').append('<div id="menu"></div>');
	}
}

$.PaneWorld = function() {
	var xLen = 15;
	var yLen = 15;
	var viewer = null;
	var grid = {};
	function init() {
		$('main').append('<div id="world"></div>');
		for( var y=0 ; y<yLen ; ++y ) {
			for( var x=0 ; x<xLen ; ++x ) {
				var vx = x*$.Config.Tile.xLen;
				var vy = y*$.Config.Tile.yLen;
				$('world').append('<div class="tile" style="left:'+vx+'px; top:'+vy+'px;"></div>')
			}
		}
	}
	function setViewer(entity) {
		viewer = entity;
	}
	return this;
}

$.Model = {
	Create: function(modelId,params) {

	},
	Area: (function() {
		return {

		};
	}),
	Terrain: (function() {
		return {
			typeList: { icon: null, pass: null, seethru: null }
			dataList: { x: null, y: null, type: null }
		};
	}),
	Thing: (function() {
		return {
			fieldList: { icon: null, pass: null, seethru: null, slot: null }
		};
	})
}

$.Type = {
	Create: function(typeId,data) {
		// Create the type here.
	},
	Area: {},
	Terrain: {},
	Stuff: {}
};

$.Type.Area.Dungeon = {
};

$.Type.Terrain.Floor = {
	icon: '.',
	pass: { swim: 0 },
	seethru: true
};

$.Type.Stuff.Sword = {
	icon: '!',
	pass: true,
	seethru: true,
	slot: { hand: 1 }
};

$.Terrain = function(area,xLen,yLen) {
	var terrain = [];
	function get(id) {
		return terrain[['a',id.area || area,'x',id.x,'y',id.y].join('')];
	}
	function set(id,value) {
		terrain[['a',id.area || area,'x',id.x,'y',id.y].join('')] = value;
	}
	function init() {
		for( var x=0 ; x<xLen ; ++x ) {
			for( var y=0 ; y<yLen ; ++y ) {
				set({x:x,y:y},$.Model.Create($.Type.Terrain.Floor));
			}
		}
	}
	this.get = get;
	this.set = set;
	init();
	return this;
}

$.Area = function(xLen,yLen,name) {

}

$.Stuff = function(area) {
	function init() {

	}
	init();
	return this;
}

$.World = function() {
	var area = new $.Area({xLen})
	var xLen = 30;
	var yLen = 30;
	var area = 'level1';
	var terrain = new $.Terrain(area,xLen,yLen);
	var stuff = new $.Stuff(area);

	// Support only one level at a time.
	function init() {
		stuff.set(0,$.Model.Create('Stuff',{x: 10, y:10, }))
		stuff = $.Model.Create('stuff', {x: 10, y:10, ${
			x: 10,
			y: 
		}
	}
}

$.Game = (function() {
	var state = 'nogame';

	function start() {
		new $.PaneWorld();
		new $.PaneMap();
		new $.PaneInventory();
		new $.PaneProfile();
	}

	function init() {
		this.paneGame = new $.PaneGame();
		this.paneMenu = new $.PaneMenu();
	}

}());



