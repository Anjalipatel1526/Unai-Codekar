import { Calendar, Clock, User, MapPin } from "lucide-react";

const events = [
  {
    date: "Day 1 - March 15",
    events: [
      {
        time: "9:00 AM",
        title: "Registration & Check-in",
        speaker: "",
        type: "event",
      },
      {
        time: "10:00 AM",
        title: "Opening Ceremony",
        speaker: "Organizing Team",
        type: "event",
      },
      {
        time: "11:00 AM",
        title: "Hacking Begins!",
        speaker: "",
        type: "milestone",
      },
      {
        time: "2:00 PM",
        title: "Workshop: Intro to AI/ML",
        speaker: "Dr. Sarah Johnson",
        type: "workshop",
      },
      {
        time: "5:00 PM",
        title: "Workshop: Building with Cloud",
        speaker: "Michael Brown",
        type: "workshop",
      },
    ],
  },
  {
    date: "Day 2 - March 16",
    events: [
      {
        time: "10:00 AM",
        title: "Mentor Sessions Begin",
        speaker: "All Mentors",
        type: "event",
      },
      {
        time: "2:00 PM",
        title: "Workshop: UI/UX Best Practices",
        speaker: "Neha Verma",
        type: "workshop",
      },
      {
        time: "6:00 PM",
        title: "Fun Activities & Games",
        speaker: "",
        type: "event",
      },
      {
        time: "11:00 PM",
        title: "Midnight Snacks",
        speaker: "",
        type: "event",
      },
    ],
  },
  {
    date: "Day 3 - March 17",
    events: [
      {
        time: "9:00 AM",
        title: "Hacking Ends",
        speaker: "",
        type: "milestone",
      },
      {
        time: "10:00 AM",
        title: "Project Submissions",
        speaker: "",
        type: "event",
      },
      {
        time: "12:00 PM",
        title: "Judging Begins",
        speaker: "Panel of Judges",
        type: "event",
      },
      {
        time: "4:00 PM",
        title: "Closing Ceremony & Prize Distribution",
        speaker: "Organizing Team",
        type: "milestone",
      },
    ],
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Event</span> Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            48 hours of hacking, learning, and building amazing projects
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {events.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12 last:mb-0">
              {/* Day header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {day.date}
                </h3>
              </div>

              {/* Events */}
              <div className="relative ml-6 pl-8 border-l-2 border-primary/30">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="relative mb-6 last:mb-0 group"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[41px] w-4 h-4 rounded-full ${
                        event.type === "milestone"
                          ? "bg-primary"
                          : event.type === "workshop"
                          ? "bg-accent"
                          : "bg-muted-foreground"
                      } ring-4 ring-background group-hover:scale-125 transition-transform`}
                    />

                    {/* Event card */}
                    <div
                      className={`glass rounded-xl p-4 hover:card-glow transition-all duration-300 border ${
                        event.type === "milestone"
                          ? "border-primary/50"
                          : "border-border"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">
                              {event.time}
                            </span>
                            {event.type === "workshop" && (
                              <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                                Workshop
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {event.title}
                          </h4>
                          {event.speaker && (
                            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                              <User className="w-3 h-3" />
                              {event.speaker}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
