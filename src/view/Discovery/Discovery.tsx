import React, { useEffect, useState } from "react"
import ItemPost from "~/components/Item/ItemPost/ItemPost"
import LayoutMain from "~/layouts/LayoutMain"
import './Discovery.scss'
import Ngoc1 from "~/assets/1.jpg";
import Ngoc2 from "~/assets/2.jpg";
import Ngoc3 from "~/assets/3.jpg";
import Ngoc4 from "~/assets/4.jpg";
import Ngoc5 from "~/assets/5.jpg";
import Ngoc6 from "~/assets/6.jpg";
import Ngoc7 from "~/assets/7.jpg";

const dataImage = [
    {
        img: Ngoc1
    },
    {
        img: Ngoc2
    },
    {
        img: Ngoc3
    },
    {
        img: Ngoc4
    },
    {
        img: Ngoc5
    },
    {
        img: Ngoc6
    },
    {
        img: Ngoc7
    },
    {
        img: Ngoc1
    },
    {
        img: Ngoc2
    },
    {
        img: Ngoc3
    },
    {
        img: Ngoc4
    },
    {
        img: Ngoc5
    },
    {
        img: Ngoc6
    },
    {
        img: Ngoc7
    },
    {
        img: Ngoc1
    },
]

function generateSpecialIndices(start: number, limit: number): number[] {
    const indices: number[] = [];
    let current = start;
    const basePattern = [3, 6]; // Starting pattern

    // Generate indices within the current range
    while (current <= limit) {
        for (const offset of basePattern) {
            if (current + offset <= limit) {
                indices.push(current + offset);
            }
        }
        current += 10; // Move to next range
    }

    return indices;
}

function getIndicesForLargeArray(size: number): number[] {
    const result: number[] = [];
    const step = 10; // Define the step size for ranges

    let start = 0;
    while (start <= size) {
        const end = Math.min(start + step - 1, size);
        const indices = generateSpecialIndices(start, end);
        result.push(...indices);
        start += step; // Move to the next range
    }

    return result;
}

// Test the function with an array size of 1000
console.log(getIndicesForLargeArray(1000));


const Discovery = () => {

    const specialIndices = getIndicesForLargeArray(dataImage.length);


    const getItemClassName = (index: number) => {
        return specialIndices.includes(index + 1) ? 'col-span-1 row-span-2' : 'col-span-1';
    }

    return (
        <LayoutMain>
            <div className="w-full h-full flex justify-center">
                <div className="max-w-[975px] w-full mt-6">
                    <div className="grid grid-cols-3 gap-1">
                        {dataImage.map((img, index) => (
                            <ItemPost
                                key={index}
                                img={img.img}
                                className={getItemClassName(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}


export default Discovery