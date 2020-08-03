//Documentation: https://nodejs.org/api/events.html

var Job = require('./modular_events_job.js')
var job = new Job()

job.on('done', function(details){
  console.log('Weekly email job was completed at',
    details.completedOn)
})

job.emit('start')