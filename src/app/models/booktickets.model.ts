import { Flights } from "./flight.model";

export interface BookTickets{
    flights?:Flights;
    firstName?:string,
    lastName?:string,
    noOfSeats?:number,
    classs?:string,
    gender?:string,
    flightId:number
}