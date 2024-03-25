import { ScaleLoader } from "react-spinners"

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
        <ScaleLoader size='100' color='#ED56D5'></ScaleLoader>
    </div>
  )
}

export default Loader