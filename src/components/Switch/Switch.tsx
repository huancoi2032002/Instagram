

import './Switch.scss'


const Switch = () => {
    return (
        <div className="w-auto h-auto">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Switch