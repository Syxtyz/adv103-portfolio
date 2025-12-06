import { ErcJournal, Jairosoft, JairosoftJournal, PLDT, PldtJournal, Predeparture, ResponseCenter, Vikings, VitroJournal } from "./journalPics";

export const MyJournal = [
    {
        pictures: Predeparture,
        title: "Davao Trip Predeparture",
        description: null,
        journalImages: null
    },
    {
        pictures: PLDT,
        reverse: true,
        title: "PLDT & Vitro Data Center",
        description: `Our first visit was to PLDT & Vitro Data Center, where we learned how their internet traffic works and got an inside look at their operations. They also gave us a tour of the Vitro Data Center, showing how they manage servers and network infrastructure to keep everything running smoothly.`,
        journalImages: [PldtJournal, VitroJournal]
    },
    {
        pictures: Vikings,
        title: "Vikings - Lunch Time",
        description: null,
        journalImages: null
    },
    {
        pictures: Jairosoft,
        reverse: true,
        title: "Jairosoft Inc.",
        description: `Our second visit was to Jairosoft Incorporation, an AI-first company that goes beyond software. They specialize in accelerating digital transformation with end-to-end AI solutions in Software Development, Business Intelligence, and Cloud Integration across various industries.`,
        journalImages: [JairosoftJournal]
    },
    {
        pictures: ResponseCenter,
        title: "Davao City Central 911 Emergency Response Center",
        description: `Our final stop was the Davao City Central 911 Emergency Response Center, where we saw how they handle emergencies in real time. The staff showed us their communication systems and explained how their teams respond to medical, fire, and rescue situations. It was a brief visit, but it really opened my eyes to how important their work is in keeping the city safe.`,
        journalImages: [ErcJournal]
    }
]