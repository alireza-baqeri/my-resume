function Projects({ title, description }) {
    return (
        <div className="p-6 rounded-xl border shadow">
            <h3 className="font-bold text-xl">
                {title}
            </h3>

            <p className="mt-2 text-brand-orange">
                {description}
            </p>
        </div>
    );
}


export default Projects;