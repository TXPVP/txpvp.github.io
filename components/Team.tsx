export default function Team() {
    return(
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check out our awesome team members
        </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-primary bg-opacity-60 rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img width="144" height="144" className="object-center object-cover rounded-full h-36 w-36" src="https://i.file.glass/XdLscZKk5v.webp" alt="wow jesus profile picture"/>
            </div>
            <div className="text-center">
                <a href="https://github.com/wowjeeez" className="text-xl hover:underline text-gray-100 font-bold mb-2">WowJeeez</a>
                <p className="text-base text-white font-normal">Head Developer</p>
            </div>
        </div>
        <div className="w-full bg-primary bg-opacity-60 rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img width="144" height="144" className="object-center object-cover rounded-full h-36 w-36" src="https://i.file.glass/NiII1q8l0a.webp" alt="hamy-os profile picture"/>
            </div>
            <div className="text-center">
                <a href="https://github.com/Hamy-os" className="text-xl text-gray-100 font-bold mb-2">Hamy-os</a>
                <p className="text-base text-white font-normal">Management</p>
            </div>
        </div>
        <div className="w-full bg-primary bg-opacity-60 rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img width="144" height="144" className="object-center object-cover rounded-full h-36 w-36" src="https://i.file.glass/7VS9cW7Kha.webp" alt="future developer"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-100 font-bold mb-2">We are looking for new developers!</p>
                <a href="https://discord.com/users/656091979456839700" className="text-base btn text-white font-normal">Apply</a>
            </div>
        </div>
    </div>
</section>
    )
}