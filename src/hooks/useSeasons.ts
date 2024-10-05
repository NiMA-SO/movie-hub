import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";


interface Props{
    postId: number;
    seasonNumber: number | null;
}

export interface Season {
    id: number;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }
  
  export interface Episode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
    crew: CrewMember[];
    guest_stars: GuestStar[];
  }
  
  export interface CrewMember {
    job: string;
    department: string;
    credit_id: string;
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
  }
  
  export interface GuestStar {
    id: number;
    name: string;
    gender: number | null;
    profile_path: string | null;
    character: string;
  }
  

const useSeasons = ({postId , seasonNumber} : Props) => {
    const apiClient = new APIClient<Season>(`/tv/${postId}/season/${seasonNumber}`);
    
    return useQuery({
        queryKey: ['season',postId,seasonNumber],
        queryFn: apiClient.getSeasons
    })
}

export default useSeasons;