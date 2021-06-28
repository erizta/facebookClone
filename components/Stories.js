import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Erizta Alifad",
        src: "https://i.pinimg.com/564x/52/88/ad/5288adc1641609900081ad90ab520340.jpg",
        profile: "https://i.pinimg.com/564x/0a/f5/11/0af511a2d18fe2a1560fac5bfd4f5cd4.jpg"
    },
    {
        name: "Sebastian Stan",
        src: "https://i.pinimg.com/564x/de/c0/ba/dec0ba489ae934735b603db95db79b5d.jpg",
        profile: "https://i.pinimg.com/564x/46/e5/33/46e533dd0e1bddd6e9e3e0c5193f5db6.jpg"
    },
    {
        name: "Ben Barnes",
        src: "https://i.pinimg.com/564x/b1/48/db/b148db57e04afe8d206674fd4e802192.jpg",
        profile: "https://i.pinimg.com/564x/ee/fe/cd/eefecd33f8b99c36b514a52b00b13877.jpg"
    },
    {
        name: "Hero Fiennes-Triffin",
        src: "https://i.pinimg.com/564x/1f/58/0b/1f580be5429ba79ba6bed99be7ccb85a.jpg",
        profile: "https://i.pinimg.com/564x/40/16/5b/40165b7bbc2ff7162f5509c0023c2568.jpg"
    },
    {
        name: "Alvaro Rico",
        src: "https://i.pinimg.com/236x/e3/05/b3/e305b3e723a2dbd73b1c4bb6b56908df.jpg",
        profile: "https://i.pinimg.com/564x/5b/fa/85/5bfa8591a2ddd21b8c8c4f1eddb55c0e.jpg"
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
