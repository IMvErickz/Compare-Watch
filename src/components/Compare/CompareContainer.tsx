import { useSearchParams } from "react-router-dom"
import { WatchContainer } from "./watch-container"
import { SearchAnotherDrop } from "../Search/searchAnotherWatch"

export function CompareContainer() {

    const [params] = useSearchParams()
    const firstWatchId = params.get('firstWatch')
    const secondWatchId = params.get('secondWatch')

    return (
        <>
            {firstWatchId && (<WatchContainer watchId={firstWatchId} watchSequel="firstWatch" />)}
            {secondWatchId ? (<WatchContainer watchId={secondWatchId} watchSequel="secondWatch" />) : (<SearchAnotherDrop />)}
        </>
    )
}