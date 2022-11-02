import { ReactElement, useState } from "react";

import AddFilter from './AddFilter'
import TagsNavigation from './TagsNavigation'
import TagsCloud from './TagsCloud'
import ITag from './common/ITag'


export const Challenge = (): ReactElement => {

    const [dropdownOpened, setdropdownOpened] = useState<boolean>(false)
    const [tagsSelected, setTagsSelected] = useState<Array<ITag>>([])

    function handleToggleDropdown(): void {
        setdropdownOpened(!dropdownOpened);
    }

    function handleAddTag(tag: ITag): void {
        setTagsSelected(tagsSelected.concat([tag]))
    }

    function handleRemTag(tag: ITag): void {
        setTagsSelected(tagsSelected.filter((el) => el !== tag))
    }

    return (
        <div className='challenge'>
            <AddFilter
                onClick={handleToggleDropdown} />
            <TagsNavigation
                opened={dropdownOpened}
                tagsSelected={tagsSelected}
                handleAddTag={handleAddTag} />
            <TagsCloud
                tagsSelected={tagsSelected}
                handleRemTag={handleRemTag} />
        </div>
    )
}
export default Challenge