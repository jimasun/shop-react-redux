import { MouseEvent, ReactElement } from "react"

import ITag from "./common/ITag"

import './common/font.css'
import './TagsList.css'


export const TagsList = ({ category, items, active, tagsSelected, handleAddTag }:
    {
        category: string,
        items: string[],
        active: boolean,
        tagsSelected: ITag[],
        handleAddTag: (tag: ITag) => void
    }): ReactElement => {

    function genIconName(item: string): string {
        return item.replace(' ', '-').toLowerCase()
    }

    function handleItemClick(event: MouseEvent<HTMLElement>, tag: ITag) {
        if (!tagsSelected.includes(tag)) {
            handleAddTag(tag)
            event.currentTarget.classList.add('selected')
        }
    }

    function handleRemTag(tag: ITag) {
        if (!tagsSelected.includes(tag)) {
            // event.currentTarget.classList.remove('selected')
        }
    }

    return (
        <div className={`entries ${active && 'selected'}`}>
            {items.map((name: string) =>
                <div className={`entry font ${tagsSelected.includes({ category, name }) && 'selected'}`}
                    onClick={(event) => handleItemClick(event, { category, name })}
                    key={`${category} ${name}`}>
                    <span className={`icon ${genIconName(name)}`} />
                    {name}
                </div>
            )}
        </div>
    )
}
export default TagsList