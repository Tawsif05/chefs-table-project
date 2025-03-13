

const Banner = () => {
    return (
        <div className="bg-[url('/image.jpg')] w-auto h-[600px] bg-no-repeat bg-cover bg-center rounded-3xl py-36 space-y-4">
           <h1 className="text-5xl text-white lexend-700">Discover an exceptional cooking <br /> class tailored for you!</h1> 
           <p className="text-white text-xl lexend-400">Discover the joy of creating delectable dishes from scratch, using fresh and locally-sourced ingredients, as you unlock the secrets of flavor and technique. </p>
           <div className="space-x-7">
            <button className="btn bg-[#0BE58A] px-8 rounded-full text-black text-xl">Explore Now</button>
            <button className="btn text-xl rounded-full px-8">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;