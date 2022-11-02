import { ReactElement } from "react";

import ITag from './common/ITag'

import './common/font.css'
import './TagsCloud.css'


export const TagsCloud = ({ tagsSelected, handleRemTag }:
  {
    tagsSelected: Array<ITag>,
    handleRemTag: (tag: ITag) => void
  }): ReactElement =>

  <div className="tags">
    {tagsSelected.map((tag) => (
      <div className="tag font" key={`${tag.category} ${tag.name}`}>
        {`${tag.category}: ${tag.name}`}
        <span className="close" onClick={() => handleRemTag(tag)} />
      </div>
    ))}
  </div>

export default TagsCloud
