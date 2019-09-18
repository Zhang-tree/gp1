




var vimgs = document.querySelectorAll(".pic_scroll_left a");
var vtext = document.querySelectorAll(".pic_scroll_right span");


(function () {
	function Banner(vimgs, vtext) {
		this.vimgs = vimgs;
		this.vtext = vtext;
		this.index = 0;
		this.timer = 1;
		this.timer2 = null;
		this.opa = 10; //控制效果的属性
		return this;
	}

	Banner.prototype.move = function (target) {
		var self = this;

		var speed = 5;
		self.opa = 10;

		this.timer = setInterval(function () {
			if (self.opa <= 100) {
				self.opa += speed;
				self.vimgs[self.index]["style"]["opacity"] = self.opa / 100;
			}
		}, 30)
	}

	Banner.prototype.autoMove = function () {
		var self = this;
		this.timer2 = setInterval(function () {
			clearInterval(self.timer);
			self.imgChange(false);
			self.index++;
			if (self.index >= self.vimgs.length) self.index = 0;
			self.imgChange(true);
			self.move(100);

		}, 3000 /* self.changeTime */ );
	}

	Banner.prototype.imgChange = function (flag) {
		if (flag) { //真为index++
			this.vtext[this.index].className = 'ChooseAnimation';
			this.vimgs[this.index].style.zIndex = 10;
		} else {
			this.vtext[this.index]["className"] = '';
			this.vimgs[this.index]["style"]["zIndex"] = 1;
			this.vimgs[this.index]["style"]["opacity"] = 0.1;
		}
	}

	Banner.prototype.textChange = function () {
		var self = this;
		for (var i = 0; i < this.vtext.length; ++i) { //可使用let
			this.vtext[i].n = i;
			this.vtext[i].onmouseenter = function () {
				if(this.n == self.index){
					return;
				}
				clearInterval(self.timer);
				clearInterval(self.timer2);
				self.imgChange(false);
				self.index = this.n;
				self.imgChange(true);
				self.move(100);
				self.autoMove();
			}
		}
	}

	Banner.prototype.init = function () {
		this.autoMove();
		this.move();
		this.textChange();
	}

	function create(vimgs, vtext) {
		return new Banner(vimgs, vtext);
	}

	window.BannerAni = create;
})();

BannerAni(vimgs,vtext).init();
