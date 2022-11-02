import { ReactElement } from "react"

import './common/font.css'
import './AddFilter.css'


export const AddFilter = ({ onClick }:
    {
        onClick: () => void
    }): ReactElement =>

    <button className="button font" onClick={onClick}>
        + Add filter
    </button>

export default AddFilter