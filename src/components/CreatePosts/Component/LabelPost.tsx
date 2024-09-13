import React from "react";
import { ArrowBackIcon } from "~/assets";

type LabelPostProps = {
    title: string;
    showBackNext: boolean;
    onNext?: () => void;
    onPrev?: () => void;
    step: number;
};

export const LabelPost: React.FC<LabelPostProps> = ({ title, showBackNext, onNext, onPrev, step}) => {
    return (
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <div className="">
                {showBackNext && onPrev && (
                    <button onClick={onPrev}>
                        <ArrowBackIcon className="" />
                    </button>
                )}
            </div>
            <div className="w-full text-sm font-semibold text-center">{title}</div>
            {showBackNext && onNext && (
                <button
                    onClick={onNext}
                    className="text-ig-primary-button text-sm cursor-pointer text-nowrap hover:text-white"
                >
                    {step === 3 ? "Chia sẻ" : "Tiếp tục"} {/* Change label based on step */}
                </button>
            )}
        </div>
    );
};
