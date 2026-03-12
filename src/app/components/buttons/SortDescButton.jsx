import React from 'react'

export default function SortDescButton({listItem,setListItem}) {
  function sortDescending() {
    return listItem.toSorted((a, b) => {
      const itemAName = a.item_name;
      const itemBName = b.item_name;

      if (itemAName < itemBName) {
        return -1;
      }
      if (itemAName > itemBName) {
        return 1;
      }
      return 0;
    }).toReversed();
  }
  return (
    <button onClick={()=> setListItem(sortDescending())}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-za-icon lucide-arrow-down-z-a"><path d="m3 16 4 4 4-4" /><path d="M7 4v16" /><path d="M15 4h5l-5 6h5" /><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" /><path d="M20 18h-5" />
      </svg>
    </button>
  )
}
