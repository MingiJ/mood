import Link from 'next/link'

export default function Home() {
    return (
        <div className=" text-white w-screen h-screen bg-black flex items-center justify-center">
            <div className="w-full max-w-[600px] mx-auto">
                <h1 className="text-6xl mb-4">The best Journal app, period.</h1>
                <p className="text-2xl mb-2 text-white/60">
                    This is the best app for tracking your mood through your
                    life. All you have to do is be honest
                </p>
                <Link href="/journal">
                    <div>
                        <button className="bg-blue-400 px-4 py-2 rounded-lg text-xl">
                            get started
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
