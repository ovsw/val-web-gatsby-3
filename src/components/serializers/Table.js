import React from 'react'

export default ({node}) => {
  return (
    <table>
      <tbody>
        {node.generictable.rows.map((row, i) => {
          const CellTag = i === 0 ? 'th' : 'td'
          return (
            <tr key={row._key}>
              {row.cells.map((cellText, i) =>
                <CellTag key={i}>{cellText}</CellTag>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
