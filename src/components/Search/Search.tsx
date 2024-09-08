import { VectorX } from "~/assets"



const Search = () => {
    return(
        <div className="h-screen w-[397px] border-r border-white/20 rounded-xl">
            <div className="flex flex-col pt-6 pb-4 px-4">
                <h1 className="text-[24px]  mb-5">Tìm kiếm</h1>
                <div className="">
                    <input className="" />
                    <div className="w-5 h-5 bg-[#A8A8A8] rounded-full flex items-center justify-center">
                        <VectorX className="size-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search