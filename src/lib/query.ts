import { QueryClient } from "@tanstack/react-query"
import { cache } from "react"

// Uma instância por request no servidor 
export const getQueryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 24 * 60 * 60 * 1000, 
        },
    },
}))
