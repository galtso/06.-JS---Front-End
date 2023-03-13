function meetingsAppointment(input) {
    let meetings = {};
    for (const line of input) {
        let [day, name] = line.split(' ');
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meetingsAppointment(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)