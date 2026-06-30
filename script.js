const reels = [
    {
    username: "john_doe",
    likeCount: 12450,
    isLiked: true,
    commentCount: 432,
    caption: "Hahaha ,What a joke 🤣!",
    video: "./videos/video1.mp4",
    userprofile: "https://i.pravatar.cc/150?img=1",
    shareCount: 187,
    isFollowed: false,
    },

    {
    username: "emma_writes",
    likeCount: 8950,
    isLiked: true,
    commentCount: 210,
    caption: "What a nice view Love it!😍❤️",
    video: "./videos/video2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=5",
    shareCount: 95,
    isFollowed: true,
    },

    {
    username: "travelwithalex",
    likeCount: 28740,
    isLiked: false,
    commentCount: 921,
    caption: "Lost in the mountains 🏔️",
    video: "./videos/video3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=12",
    shareCount: 563,
    isFollowed: true,
    },

    {
    username: "fitlife_sam",
    likeCount: 15430,
    isLiked: false,
    commentCount: 367,
    caption: "No excuses. Just results 💪",
    video: "./videos/video4.mp4",
    userprofile: "https://i.pravatar.cc/150?img=18",
    shareCount: 241,
    isFollowed: false,
    },

    {
    username: "musician_riya",
    likeCount: 20390,
    isLiked: true,
    commentCount: 512,
    caption: "Music heals everything 🎵",
    video: "./videos/video5.mp4",
    userprofile: "https://i.pravatar.cc/150?img=25",
    shareCount: 324,
    isFollowed: true,
    },

    {
    username: "maxy",
    likeCount: 17800,
    isLiked: false,
    commentCount: 289,
    caption: "skating is fun✨",
    video: "./videos/video6.mp4",
    userprofile: "https://i.pravatar.cc/150?img=52",
    shareCount: 176,
    isFollowed: false,
    },

    {
    username: "nature_snap",
    likeCount: 32450,
    isLiked: true,
    commentCount: 1104,
    caption: "The beauty of waterfalls 🌊",
    video: "./videos/video7.mp4",
    userprofile: "https://i.pravatar.cc/150?img=36",
    shareCount: 740,
    isFollowed: true,
    },

    {
    username: "daily_vibes",
    likeCount: 11220,
    isLiked: false,
    commentCount: 198,
    caption: "Small moments, big memories ❤️",
    video: "./videos/video8.mp4",
    userprofile: "https://i.pravatar.cc/150?img=42",
    shareCount: 121,
    isFollowed: false,
    },

    {
    username: "naturelover",
    likeCount: 26780,
    isLiked: true,
    commentCount: 854,
    caption: "Nature heals everything 😌",
    video: "./videos/video9.mp4",
    userprofile: "https://i.pravatar.cc/150?img=48",
    shareCount: 458,
    isFollowed: true,
    },
    
    {
    username: "creative_anu",
    likeCount: 9480,
    isLiked: false,
    commentCount: 145,
    caption: "Airballoon out of my imagination 😊",
    video: "./videos/video10.mp4",
    userprofile: "https://i.pravatar.cc/150?img=30",
    shareCount: 82,
    isFollowed: false,
    },
];


let sum = '';

reels.forEach(function(elem){
    sum += `<div class="reel">
                    <video autoplay muted loop src="${elem.video}"></video>
                    <div class="bottom">

                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>

                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`;
});

let allReels = document.querySelector(".all-reels");

allReels.innerHTML = sum;


