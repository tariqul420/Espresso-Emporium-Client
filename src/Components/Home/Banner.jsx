const Banner = () => {
    return (
        <>
            <div className="bg-[url('https://i.ibb.co.com/hc77xcV/banner.png')] bg-cover py-[288px] flex items-center justify-center">
                <div className="w-[60%] mx-auto flex flex-col items-center justify-center space-y-6">
                    <h1 className="font-bold text-6xl font-Rancho text-white">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="text-white/50 text-center font-semibold">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="bg-[#e3b577] py-2 px-5">Learn More</button>
                </div>
            </div>


            <div className="bg-color-bg w-full mb-12 py-6">
                <div className="w-10/12 mx-auto flex items-center justify-between gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://i.ibb.co.com/7gVMbwx/1.png" alt="" />
                        <h2 className="text-3xl font-Rancho text-color-primary/70 font-bold">Awesome Aroma</h2>
                        <p className="font-Rancho text-lg text-center text-color-primary">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://i.ibb.co.com/ZYmnxXr/2.png" alt="" />
                        <h2 className="text-3xl font-Rancho text-color-primary/70 font-bold">High Quality</h2>
                        <p className="font-Rancho text-lg text-center text-color-primary">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://i.ibb.co.com/zbRPMbJ/3.png" alt="" />
                        <h2 className="text-3xl font-Rancho text-color-primary/70 font-bold">Pure Grades</h2>
                        <p className="font-Rancho text-lg text-center text-color-primary">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://i.ibb.co.com/5x6V2Kt/4.png" alt="" />
                        <h2 className="text-3xl font-Rancho text-color-primary/70 font-bold">Proper Roasting</h2>
                        <p className="font-Rancho text-lg text-center text-color-primary">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;