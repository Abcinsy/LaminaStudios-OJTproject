export default function TeamMember({ name, role, children, image }) {
    return (
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500  rounded-lg ">
            {image ? (
                <img
                    className="w-32 mx-auto mt-[-3rem] bg-white  rounded-full"
                    src={image}
                    alt={name}
                />
            ) : (
                <i className="bi bi-person-fill text-9xl text-slate-800 mx-auto mt-[-3rem] border border-lamina-yellow rounded-full"></i>
            )}
            <h2 className="text-2xl text-white font-bold text-center py-8">
                {name}
            </h2>
            <p className="text-xl text-white font-bold text-center ">{role}</p>
            <div className="flex flex-col text-center">
                <p className="py-2  mx-8 text-white  italic ">{children}</p>
            </div>
        </div>
    );
}
