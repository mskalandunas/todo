import React from 'react'

import { DraggableItem } from './DraggableItem'
import { IColumn } from './interfaces'

export class Column extends React.Component {
    renderItem(props) {
        return (
            <li>
                <DraggableItem {...props} />
            </li>
        )
    }

    render() {
        const { heading, items } = this.props

        return [<h1>{heading}</h1>, <ul>{items.map(this.renderItem)}</ul>]
    }
}

Column.propTypes = IColumn
