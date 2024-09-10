import SearchBar from '@/components/SearchBar'

const Create = () => {
  return (
    <div className="flex flex-row h-[calc(100vh-120px)]">
      <div className="w-1/5 min-w-[200px] bg-slate-200 flex flex-col">
        <h2 className="font-bold text-slate-700 text-md text-center py-2 uppercase">
          Search for a card
        </h2>
      </div>
      <div className="w-4/5"></div>
    </div>
  )
}

export default Create
