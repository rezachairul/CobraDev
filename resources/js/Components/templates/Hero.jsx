export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white px-4">
            <img src="/assets/logo.svg" className="mx-auto w-20" />
            <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="text-purple-400">CobraDev</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl">I Develop Attractive, User Interfaces & Web Applications</p>
        </section>
    );
}
