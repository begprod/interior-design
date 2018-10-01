export default class VideoSection {
	constructor(videoContainerId, videoId, triggerClass) {
		this.videoContainerId = videoContainerId;
		this.videoId = videoId;
		this.triggerClass = triggerClass;
		this.init();
	}

	init() {
		this.addScript();
		this.playVideo();
	}

	addScript() {
		const self = this;
		const tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		window.onYouTubePlayerAPIReady = function () {
			self.addVideo();
		}
	}

	addVideo() {
		this.player = new YT.Player(this.videoContainerId, {
			videoId: this.videoId
		});
	}

	playVideo() {
		const self = this;
		const playBtn = document.querySelector(this.triggerClass);
		playBtn.addEventListener('click', function () {
			self.player.playVideo();
			this.classList.add('is-hide');
		});
	}
}