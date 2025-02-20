import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'
import { getDataset } from '../utils'

import './index.css'

const getTags = (tags = [], onDelete, readOnly, disabled, labelRemove) =>
  tags.map(tag => {
    const { _id, label, tagClassName, dataset, tagLabel } = tag
    return (
      <li
        className={['tag-item', tagClassName].filter(Boolean).join(' ')}
        key={`tag-item-${_id}`}
        {...getDataset(dataset)}
      >
        <Tag
          label={tagLabel || label}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled || tag.disabled}
          labelRemove={labelRemove}
        />
      </li>
    )
  })

class Tags extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
    onTagRemove: PropTypes.func,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    texts: PropTypes.object,
    children: PropTypes.node,
    tagMode: PropTypes.string,
  }

  render() {
    const { tags, onTagRemove, texts = {}, disabled, readOnly, children, tagMode } = this.props
    const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>

    let tagsStr = null

    if (tagMode === 'multiple') {
      tagsStr = getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)
    } else {
      tagsStr = `${(tags || []).length} item(s) selected`
    }
    return (
      <ul className="tag-list">
        {/* {getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)} */}
        {tagsStr}
        <li className="tag-item">{lastItem}</li>
      </ul>
    )
  }
}

export default Tags
