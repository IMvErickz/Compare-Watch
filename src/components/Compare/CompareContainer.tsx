import { useSearchParams } from "react-router-dom"
import { WatchContainer } from "./watch-container"
import { SearchAnotherDrop } from "../Search/searchAnotherWatch"

export function CompareContainer() {

    const [params] = useSearchParams()
    const firstWatchId = params.get('first')
    const secondWatchId = params.get('second')

    return (
        <>
            {firstWatchId && (<WatchContainer watchId={firstWatchId} />)}
            {secondWatchId ? (<WatchContainer watchId={secondWatchId} />) : (<SearchAnotherDrop />)}
        </>
    )
}