import * as React from 'react'
import { GroupedVirtuoso } from '../src'

export default function App() {
  return (
    <GroupedVirtuoso
      groupCounts={Array.from({ length: 20 }).fill(3) as number[]}
      itemContent={(index) => <div style={{ height: '20px' }}>Item {index}</div>}
      groupContent={(index) => <div style={{ height: '30px' }}>Group {index}</div>}
      style={{ height: '300px' }}
    />
  )
}
