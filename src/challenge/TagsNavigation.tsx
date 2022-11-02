import { ChangeEvent, ReactElement, useState } from 'react'

import TagsCategory from './TagsCategory'
import TagsList from './TagsList'
import Search from './Search'
import ITag from './common/ITag'

import './TagsNavigation.css'

import data from '../data'

export const Dropdown = ({ opened = false, tagsSelected, handleAddTag }:
  {
    opened: boolean,
    tagsSelected: ITag[],
    handleAddTag: (tag: ITag) => void
  }): ReactElement => {

  const [category, setCategory] = useState("Users");
  const [query, setQuery] = useState('');

  const handleSwitchCategory = (category: string): void =>
    setCategory(category);

  const handleQuery = (event: ChangeEvent<HTMLInputElement>): void =>
    setQuery(event.target.value);

  const handleItemClick = (tag: ITag) => {
    handleAddTag(tag)
  }

  const filteredList = (query: string) => {
    data.users.filter(item => !query || item.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <div className={`tagsNavigation ${opened || "closed"}`}>

      <TagsCategory
        categories={Object.keys(data.Categories)}
        selected={category}
        onClick={handleSwitchCategory} />

      <Search
        query={query}
        handleQuery={handleQuery} />

      <TagsList
        category={data.Categories.Users}
        items={data.users}
        active={category === data.Categories.Users}
        tagsSelected={tagsSelected}
        handleAddTag={handleItemClick} />

      <TagsList
        category={data.Categories.Integrations}
        items={data.integrations}
        active={category === data.Categories.Integrations}
        tagsSelected={tagsSelected}
        handleAddTag={handleItemClick} />

    </div>
  )
}

export default Dropdown
