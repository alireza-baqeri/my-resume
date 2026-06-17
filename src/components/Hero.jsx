function Hero() {
    return (<>
        <div className="container">
            <div className="grid grid-cols-12 gap-4 mt-8 bg-white rounded-md p-2  border-6 border-amber-900 ">
                <div className={"text-brand-purple  col-start-3 col-span-4 "}>

                    <h2 className={" mt-4 "}>
                        Welcome Dear Visiter! 🌻
                    </h2>
                    <h1 className={" mt-4 "}>
                        My name is Alireza</h1>
                    <p className={" mt-4 "}>
                        let's get a tour here!
                    </p>
                    <p>
                        Shall we?
                    </p>
                </div>
                <div className={"text-brand-purple"}>
                    ستون ۲
                </div>
            </div>
        </div>
    </>);
}

export default Hero;