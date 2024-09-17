


const DropDownSex = () => {
    return (
        <div className="w-[366px] h-auto py-[10px] bg-ig-elevated-background rounded-[20px]">
            <div className="cursor-pointer w-full py-4 px-6 flex items-center justify-between">
                <span>Nữ</span>
                <input
                    type="box-checkbox"
                    className="w-6 h-6 rounded-full bg-transparent border border-white"
                />
            </div>
            <div className="cursor-pointer w-full py-4 px-6 flex items-center justify-between">
                <span>Nam</span>
                <input
                    type="box-checkbox"
                    className="w-6 h-6 rounded-full bg-transparent border border-white"
                />
            </div>
            <div className="cursor-pointer w-full py-4 px-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span>Tùy chỉnh</span>
                    <input
                        type="box-checkbox"
                        className="w-6 h-6 rounded-full bg-transparent border border-white"
                    />
                </div>
                <textarea
                    className="outline-none text-sm resize-none bg-black/50 rounded-[10px] py-[10px] pl-4 pr-[80px] w-full"
                    name=""
                    id=""
                ></textarea>
            </div>
            <div className="cursor-pointer w-full py-4 px-6 flex items-center justify-between">
                <span>Không muốn tiết lộ</span>
                <input
                    type="box-checkbox"
                    className="w-6 h-6 rounded-full bg-transparent border border-white"
                />
            </div>
        </div>
    );
};

export default DropDownSex;